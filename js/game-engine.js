/**
 * Edit Quest: Game Engine
 * Core game logic for managing questions, answers, state, and progression
 */

const GameEngine = (function() {
  'use strict';

  // Game state
  let currentGame = null;

  /**
   * Game state structure
   */
  class Game {
    constructor(config) {
      this.guide = config.guide; // 'mla', 'apa', or 'cms'
      this.region = config.region; // 'comma-castle', 'mla-mountain', etc.
      this.difficulty = config.difficulty; // 'beginner', 'intermediate', 'expert'
      this.questions = config.questions || [];
      this.currentQuestionIndex = 0;
      this.results = [];
      this.streak = 0;
      this.score = 0;
      this.startTime = Date.now();
      this.questionStartTime = Date.now();
      this.isComplete = false;
      this.callbacks = config.callbacks || {};
    }

    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex] || null;
    }

    hasNextQuestion() {
      return this.currentQuestionIndex < this.questions.length - 1;
    }

    nextQuestion() {
      if (this.hasNextQuestion()) {
        this.currentQuestionIndex++;
        this.questionStartTime = Date.now();
        return this.getCurrentQuestion();
      }
      return null;
    }

    submitAnswer(answer) {
      const question = this.getCurrentQuestion();
      if (!question) return null;

      const timeTaken = (Date.now() - this.questionStartTime) / 1000;
      const correct = this.validateAnswer(question, answer);

      // Calculate score
      const scoreResult = ScoringSystem.calculateScore(
        question,
        correct,
        timeTaken,
        this.streak
      );

      // Update streak
      this.streak = correct ? scoreResult.newStreak : 0;

      // Update total score
      this.score += scoreResult.totalPoints;

      // Record result
      const result = {
        questionId: question.id,
        question: question.question,
        userAnswer: answer,
        correctAnswer: question.correctAnswer,
        correct,
        timeTaken,
        score: scoreResult.totalPoints,
        breakdown: scoreResult
      };

      this.results.push(result);

      // Update storage statistics
      EditQuestStorage.updateStats(correct, timeTaken * 1000);
      EditQuestStorage.updateStreak(this.guide, this.streak);

      // Fire callback
      if (this.callbacks.onAnswer) {
        this.callbacks.onAnswer(result, this.streak);
      }

      return result;
    }

    validateAnswer(question, userAnswer) {
      switch (question.type) {
        case 'multiple-choice':
          return userAnswer === question.correctAnswer;

        case 'true-false':
          return userAnswer === question.correctAnswer;

        case 'fill-in-blank':
          const normalized = this.normalizeText(userAnswer);
          const correctNormalized = this.normalizeText(question.correctAnswer);

          // Check exact match first
          if (normalized === correctNormalized) return true;

          // Check acceptable answers if provided
          if (question.acceptableAnswers) {
            return question.acceptableAnswers.some(
              ans => this.normalizeText(ans) === normalized
            );
          }

          // Check for partial match (80% similarity)
          return this.calculateSimilarity(normalized, correctNormalized) >= 0.8;

        case 'drag-drop':
          // For drag-drop, answer should be an array
          if (!Array.isArray(userAnswer) || !Array.isArray(question.correctAnswer)) {
            return false;
          }
          return JSON.stringify(userAnswer) === JSON.stringify(question.correctAnswer);

        case 'p5-interactive':
          // Custom validation based on P5 challenge type
          if (question.customValidator) {
            return question.customValidator(userAnswer);
          }
          return userAnswer === question.correctAnswer;

        default:
          return false;
      }
    }

    normalizeText(text) {
      return String(text)
        .toLowerCase()
        .trim()
        .replace(/[^\w\s]/g, ''); // Remove punctuation
    }

    calculateSimilarity(str1, str2) {
      const longer = str1.length > str2.length ? str1 : str2;
      const shorter = str1.length > str2.length ? str2 : str1;

      if (longer.length === 0) return 1.0;

      const editDistance = this.levenshteinDistance(longer, shorter);
      return (longer.length - editDistance) / longer.length;
    }

    levenshteinDistance(str1, str2) {
      const matrix = [];

      for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
      }

      for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
      }

      for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
          if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] = Math.min(
              matrix[i - 1][j - 1] + 1,
              matrix[i][j - 1] + 1,
              matrix[i - 1][j] + 1
            );
          }
        }
      }

      return matrix[str2.length][str1.length];
    }

    completeLevel() {
      if (this.isComplete) return this.getCompletionData();

      this.isComplete = true;
      const levelStats = ScoringSystem.calculateLevelStats(this.results);

      // Generate level ID
      const levelId = `${this.guide}-${this.region}-${this.difficulty}`;

      // Save completion to storage
      EditQuestStorage.completeLevel(this.guide, levelId, this.score);

      // Check for badges
      const userData = EditQuestStorage.load();
      const badgeData = {
        guide: this.guide,
        difficulty: this.difficulty,
        questionsCorrect: levelStats.questionsCorrect,
        questionsTotal: levelStats.questionsTotal,
        avgTime: levelStats.avgTime
      };

      const newBadges = ScoringSystem.checkBadges(userData, badgeData);

      // Save badges
      newBadges.forEach(badgeId => {
        EditQuestStorage.addBadge(this.guide, badgeId);
      });

      const completionData = {
        levelId,
        ...levelStats,
        newBadges: newBadges.map(id => ScoringSystem.getBadgeInfo(id)),
        finalScore: this.score,
        rank: ScoringSystem.getRank(userData.achievements.totalPoints)
      };

      // Fire callback
      if (this.callbacks.onComplete) {
        this.callbacks.onComplete(completionData);
      }

      return completionData;
    }

    getCompletionData() {
      const levelStats = ScoringSystem.calculateLevelStats(this.results);
      const userData = EditQuestStorage.load();

      return {
        ...levelStats,
        finalScore: this.score,
        rank: ScoringSystem.getRank(userData.achievements.totalPoints)
      };
    }

    getProgress() {
      return {
        current: this.currentQuestionIndex + 1,
        total: this.questions.length,
        percentage: Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100)
      };
    }

    getCurrentStats() {
      return {
        score: this.score,
        streak: this.streak,
        questionsAnswered: this.results.length,
        questionsCorrect: this.results.filter(r => r.correct).length,
        accuracy: this.results.length > 0
          ? Math.round((this.results.filter(r => r.correct).length / this.results.length) * 100)
          : 0
      };
    }
  }

  /**
   * Initialize a new game
   * @param {Object} config - Game configuration
   * @returns {Game} - Game instance
   */
  function initGame(config) {
    // Load questions based on config
    let questions;

    if (config.questions) {
      questions = config.questions;
    } else {
      questions = QuestionBank.getByDifficulty(
        config.guide,
        config.region,
        config.difficulty
      );
    }

    // Shuffle questions if requested
    if (config.shuffle) {
      questions = shuffleArray([...questions]);
    }

    // Limit number of questions if specified
    if (config.limit && config.limit < questions.length) {
      questions = questions.slice(0, config.limit);
    }

    currentGame = new Game({
      ...config,
      questions
    });

    return currentGame;
  }

  /**
   * Get current active game
   * @returns {Game|null} - Current game instance
   */
  function getCurrentGame() {
    return currentGame;
  }

  /**
   * End current game
   */
  function endGame() {
    if (currentGame && !currentGame.isComplete) {
      currentGame.completeLevel();
    }
    currentGame = null;
  }

  /**
   * Shuffle array (Fisher-Yates algorithm)
   * @param {Array} array - Array to shuffle
   * @returns {Array} - Shuffled array
   */
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  /**
   * Get available regions for a style guide
   * @param {string} guide - Style guide
   * @returns {Array} - Array of region objects
   */
  function getRegions(guide) {
    const regionMap = {
      mla: [
        { id: 'comma-castle', name: 'Comma Castle', description: 'Master grammar and punctuation rules' },
        { id: 'mla-mountain', name: 'MLA Mountain', description: 'Conquer citation challenges' }
      ],
      apa: [
        { id: 'comma-castle', name: 'Comma Castle', description: 'Master grammar and punctuation rules' },
        { id: 'apa-abyss', name: 'APA Abyss', description: 'Navigate formatting and references' }
      ],
      cms: [
        { id: 'comma-castle', name: 'Comma Castle', description: 'Master grammar and punctuation rules' },
        { id: 'cms-city', name: 'CMS City', description: 'Perfect stylistic choices' }
      ]
    };

    return regionMap[guide] || [];
  }

  /**
   * Check if a level is unlocked
   * @param {string} guide - Style guide
   * @param {string} levelId - Level identifier
   * @returns {boolean} - Whether level is unlocked
   */
  function isLevelUnlocked(guide, levelId) {
    const userData = EditQuestStorage.load();
    const progress = userData.progress[guide];

    // First level is always unlocked
    if (progress.currentLevel === 0 && levelId.includes('beginner')) {
      return true;
    }

    // Check if previous level is completed
    // This is simplified - you might want more complex logic
    return progress.currentLevel >= getLevelOrder(levelId);
  }

  /**
   * Get level order number
   * @param {string} levelId - Level identifier
   * @returns {number} - Order number
   */
  function getLevelOrder(levelId) {
    // Extract difficulty and assign order
    if (levelId.includes('beginner')) return 0;
    if (levelId.includes('intermediate')) return 1;
    if (levelId.includes('expert')) return 2;
    return 0;
  }

  /**
   * Get hint for a question
   * @param {Object} question - Question object
   * @returns {string|null} - Hint text
   */
  function getHint(question) {
    return question.hint || null;
  }

  /**
   * Format time remaining for display
   * @param {number} seconds - Seconds remaining
   * @returns {string} - Formatted time
   */
  function formatTimeRemaining(seconds) {
    if (seconds < 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  // Public API
  return {
    initGame,
    getCurrentGame,
    endGame,
    getRegions,
    isLevelUnlocked,
    getHint,
    formatTimeRemaining,
    Game
  };
})();

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameEngine;
}
