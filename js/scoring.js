/**
 * Edit Quest: Scoring System
 * Handles points calculation, streaks, bonuses, badges, and rank progression
 */

const ScoringSystem = (function() {
  'use strict';

  // Scoring constants
  const STREAK_MULTIPLIER = 1.5;
  const STREAK_THRESHOLD = 3;
  const TIME_BONUS_THRESHOLD = 10; // seconds - answer within this for bonus
  const TIME_BONUS_POINTS = 5;
  const MAX_TIME_BONUS = 20;

  // Rank thresholds
  const RANKS = {
    'novice-editor': { threshold: 0, name: 'Novice Editor', color: '#718096' },
    'grammar-guardian': { threshold: 500, name: 'Grammar Guardian', color: '#4299E1' },
    'citation-sage': { threshold: 1500, name: 'Citation Sage', color: '#9F7AEA' },
    'master-stylist': { threshold: 3000, name: 'Master Stylist', color: '#D69E2E' }
  };

  // Badge definitions
  const BADGES = {
    // Completion badges
    'mla-beginner': { name: 'MLA Novice', description: 'Complete MLA beginner level', icon: '🎓' },
    'mla-intermediate': { name: 'MLA Scholar', description: 'Complete MLA intermediate level', icon: '📚' },
    'mla-expert': { name: 'MLA Expert', description: 'Complete MLA expert level', icon: '🏆' },
    'apa-beginner': { name: 'APA Novice', description: 'Complete APA beginner level', icon: '🎓' },
    'apa-intermediate': { name: 'APA Scholar', description: 'Complete APA intermediate level', icon: '📚' },
    'apa-expert': { name: 'APA Expert', description: 'Complete APA expert level', icon: '🏆' },
    'cms-beginner': { name: 'CMS Novice', description: 'Complete CMS beginner level', icon: '🎓' },
    'cms-intermediate': { name: 'CMS Scholar', description: 'Complete CMS intermediate level', icon: '📚' },
    'cms-expert': { name: 'CMS Expert', description: 'Complete CMS expert level', icon: '🏆' },

    // Achievement badges
    'perfect-run': { name: 'Perfect Run', description: 'Complete a level without errors', icon: '⭐' },
    'speed-demon': { name: 'Speed Demon', description: 'Complete 5 questions in under 5 seconds each', icon: '⚡' },
    'streak-master': { name: 'Streak Master', description: 'Achieve a 10-question streak', icon: '🔥' },
    'triple-threat': { name: 'Triple Threat', description: 'Master all three style guides', icon: '👑' },
    'final-boss': { name: 'Ultimate Editor', description: 'Complete the Final Boss Level', icon: '💎' }
  };

  /**
   * Calculate score for a question
   * @param {Object} question - Question object
   * @param {boolean} correct - Was answer correct?
   * @param {number} timeTaken - Time in seconds
   * @param {number} currentStreak - Current streak count
   * @returns {Object} - Score breakdown
   */
  function calculateScore(question, correct, timeTaken, currentStreak = 0) {
    if (!correct) {
      return {
        basePoints: 0,
        streakBonus: 0,
        timeBonus: 0,
        totalPoints: 0,
        streakMultiplier: 1,
        newStreak: 0
      };
    }

    const basePoints = question.points || 10;

    // Calculate streak bonus
    let streakMultiplier = 1;
    let streakBonus = 0;
    const newStreak = currentStreak + 1;

    if (newStreak >= STREAK_THRESHOLD) {
      streakMultiplier = STREAK_MULTIPLIER;
      streakBonus = Math.floor(basePoints * (STREAK_MULTIPLIER - 1));
    }

    // Calculate time bonus
    let timeBonus = 0;
    if (timeTaken <= TIME_BONUS_THRESHOLD) {
      const bonusPerSecond = TIME_BONUS_POINTS;
      const secondsSaved = TIME_BONUS_THRESHOLD - timeTaken;
      timeBonus = Math.min(secondsSaved * bonusPerSecond, MAX_TIME_BONUS);
    }

    const totalPoints = Math.floor(basePoints + streakBonus + timeBonus);

    return {
      basePoints,
      streakBonus,
      timeBonus,
      totalPoints,
      streakMultiplier,
      newStreak
    };
  }

  /**
   * Get rank information based on total points
   * @param {number} totalPoints - Total points earned
   * @returns {Object} - Rank information
   */
  function getRank(totalPoints) {
    let currentRank = 'novice-editor';

    for (const rankId in RANKS) {
      if (totalPoints >= RANKS[rankId].threshold) {
        currentRank = rankId;
      }
    }

    const rankInfo = RANKS[currentRank];

    // Find next rank
    const rankKeys = Object.keys(RANKS);
    const currentIndex = rankKeys.indexOf(currentRank);
    const nextRankId = rankKeys[currentIndex + 1];
    const nextRank = nextRankId ? RANKS[nextRankId] : null;

    // Calculate progress to next rank
    let progress = 100;
    let pointsToNext = 0;

    if (nextRank) {
      const currentThreshold = rankInfo.threshold;
      const nextThreshold = nextRank.threshold;
      const rangeSize = nextThreshold - currentThreshold;
      const pointsInRange = totalPoints - currentThreshold;
      progress = Math.floor((pointsInRange / rangeSize) * 100);
      pointsToNext = nextThreshold - totalPoints;
    }

    return {
      id: currentRank,
      name: rankInfo.name,
      color: rankInfo.color,
      threshold: rankInfo.threshold,
      nextRank: nextRank ? {
        id: nextRankId,
        name: nextRank.name,
        threshold: nextRank.threshold
      } : null,
      progress,
      pointsToNext
    };
  }

  /**
   * Check if any badges should be awarded
   * @param {Object} data - User data from storage
   * @param {Object} levelData - Current level completion data
   * @returns {Array} - Array of newly earned badge IDs
   */
  function checkBadges(data, levelData) {
    const newBadges = [];
    const { guide, difficulty, questionsCorrect, questionsTotal, avgTime } = levelData;

    // Completion badges
    const completionBadgeId = `${guide}-${difficulty}`;
    if (BADGES[completionBadgeId] && !data.achievements.allBadges.includes(completionBadgeId)) {
      newBadges.push(completionBadgeId);
    }

    // Perfect run badge
    if (questionsCorrect === questionsTotal && !data.achievements.allBadges.includes('perfect-run')) {
      newBadges.push('perfect-run');
    }

    // Speed demon badge
    if (avgTime < 5 && questionsTotal >= 5 && !data.achievements.allBadges.includes('speed-demon')) {
      newBadges.push('speed-demon');
    }

    // Streak master badge
    if (data.stats.longestStreak >= 10 && !data.achievements.allBadges.includes('streak-master')) {
      newBadges.push('streak-master');
    }

    // Triple threat badge (all three guides mastered)
    const mlaComplete = data.progress.mla.completed.length >= 9;
    const apaComplete = data.progress.apa.completed.length >= 9;
    const cmsComplete = data.progress.cms.completed.length >= 9;

    if (mlaComplete && apaComplete && cmsComplete && !data.achievements.allBadges.includes('triple-threat')) {
      newBadges.push('triple-threat');
    }

    return newBadges;
  }

  /**
   * Get badge information
   * @param {string} badgeId - Badge ID
   * @returns {Object} - Badge information
   */
  function getBadgeInfo(badgeId) {
    return BADGES[badgeId] || null;
  }

  /**
   * Get all badges
   * @returns {Object} - All badge definitions
   */
  function getAllBadges() {
    return BADGES;
  }

  /**
   * Calculate level completion statistics
   * @param {Array} results - Array of question results
   * @returns {Object} - Level statistics
   */
  function calculateLevelStats(results) {
    const total = results.length;
    const correct = results.filter(r => r.correct).length;
    const incorrect = total - correct;
    const accuracy = total > 0 ? (correct / total) * 100 : 0;

    const totalTime = results.reduce((sum, r) => sum + r.timeTaken, 0);
    const avgTime = total > 0 ? totalTime / total : 0;

    const totalScore = results.reduce((sum, r) => sum + r.score, 0);

    const maxStreak = results.reduce((max, r, idx) => {
      if (!r.correct) return max;
      let streak = 1;
      for (let i = idx - 1; i >= 0; i--) {
        if (results[i].correct) streak++;
        else break;
      }
      return Math.max(max, streak);
    }, 0);

    return {
      questionsTotal: total,
      questionsCorrect: correct,
      questionsIncorrect: incorrect,
      accuracy: Math.round(accuracy),
      totalTime: Math.round(totalTime),
      avgTime: Math.round(avgTime),
      totalScore,
      maxStreak
    };
  }

  /**
   * Get difficulty multiplier
   * @param {string} difficulty - 'beginner', 'intermediate', or 'expert'
   * @returns {number} - Multiplier value
   */
  function getDifficultyMultiplier(difficulty) {
    const multipliers = {
      'beginner': 1,
      'intermediate': 1.5,
      'expert': 2
    };
    return multipliers[difficulty] || 1;
  }

  /**
   * Calculate completion percentage for a style guide
   * @param {Object} progress - Progress object for a style guide
   * @param {number} totalLevels - Total number of levels (default 9: 3 regions × 3 difficulties)
   * @returns {number} - Completion percentage
   */
  function calculateCompletion(progress, totalLevels = 9) {
    const completed = progress.completed.length;
    return Math.round((completed / totalLevels) * 100);
  }

  /**
   * Format score for display
   * @param {number} score - Score value
   * @returns {string} - Formatted score string
   */
  function formatScore(score) {
    return score.toLocaleString();
  }

  /**
   * Format time for display
   * @param {number} seconds - Time in seconds
   * @returns {string} - Formatted time string (MM:SS)
   */
  function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  /**
   * Get leaderboard data (local only)
   * @param {string} guide - Style guide filter (optional)
   * @returns {Array} - Sorted leaderboard entries
   */
  function getLeaderboard(guide = null) {
    // This would integrate with storage to get top scores
    // For now, returns current user data
    const data = EditQuestStorage.load();
    const entries = [];

    if (guide) {
      entries.push({
        name: data.player.name,
        guide,
        score: data.progress[guide].totalScore,
        rank: getRank(data.achievements.totalPoints).name
      });
    } else {
      entries.push({
        name: data.player.name,
        score: data.achievements.totalPoints,
        rank: getRank(data.achievements.totalPoints).name
      });
    }

    return entries.sort((a, b) => b.score - a.score);
  }

  // Public API
  return {
    calculateScore,
    getRank,
    checkBadges,
    getBadgeInfo,
    getAllBadges,
    calculateLevelStats,
    getDifficultyMultiplier,
    calculateCompletion,
    formatScore,
    formatTime,
    getLeaderboard,
    RANKS,
    BADGES
  };
})();

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ScoringSystem;
}
