/**
 * Edit Quest: LocalStorage Management
 * Handles all data persistence for user progress, badges, and scores
 */

const EditQuestStorage = (function() {
  'use strict';

  // Storage keys
  const STORAGE_KEY = 'editquest_data';
  const VERSION = '1.0.0';

  /**
   * Default data structure
   */
  const DEFAULT_DATA = {
    version: VERSION,
    player: {
      name: 'Guest',
      createdAt: new Date().toISOString(),
      lastPlayed: new Date().toISOString()
    },
    progress: {
      mla: {
        completed: [],
        currentLevel: 0,
        totalScore: 0,
        bestStreak: 0,
        badges: []
      },
      apa: {
        completed: [],
        currentLevel: 0,
        totalScore: 0,
        bestStreak: 0,
        badges: []
      },
      cms: {
        completed: [],
        currentLevel: 0,
        totalScore: 0,
        bestStreak: 0,
        badges: []
      }
    },
    achievements: {
      rank: 'novice-editor',
      totalPoints: 0,
      allBadges: [],
      finalBossUnlocked: false,
      finalBossCompleted: false
    },
    stats: {
      totalGamesPlayed: 0,
      totalQuestionsAnswered: 0,
      totalCorrectAnswers: 0,
      averageAccuracy: 0,
      fastestTime: null,
      longestStreak: 0
    },
    settings: {
      soundEnabled: true,
      animationsEnabled: true
    }
  };

  /**
   * Initialize storage with default data if needed
   */
  function init() {
    if (!localStorage.getItem(STORAGE_KEY)) {
      save(DEFAULT_DATA);
    }
    return load();
  }

  /**
   * Load all data from localStorage
   * @returns {Object} - User data
   */
  function load() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) {
        return DEFAULT_DATA;
      }

      const parsed = JSON.parse(data);

      // Merge with defaults to handle version updates
      return mergeWithDefaults(parsed, DEFAULT_DATA);
    } catch (error) {
      console.error('Error loading data from localStorage:', error);
      return DEFAULT_DATA;
    }
  }

  /**
   * Save data to localStorage
   * @param {Object} data - Data to save
   * @returns {boolean} - Success status
   */
  function save(data) {
    try {
      data.player.lastPlayed = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
      return false;
    }
  }

  /**
   * Merge loaded data with defaults (for version updates)
   * @param {Object} loaded - Loaded data
   * @param {Object} defaults - Default structure
   * @returns {Object} - Merged data
   */
  function mergeWithDefaults(loaded, defaults) {
    const merged = { ...defaults };

    for (const key in loaded) {
      if (typeof loaded[key] === 'object' && !Array.isArray(loaded[key])) {
        merged[key] = mergeWithDefaults(loaded[key], defaults[key] || {});
      } else {
        merged[key] = loaded[key];
      }
    }

    return merged;
  }

  /**
   * Get progress for a specific style guide
   * @param {string} guide - 'mla', 'apa', or 'cms'
   * @returns {Object} - Progress object
   */
  function getProgress(guide) {
    const data = load();
    return data.progress[guide] || DEFAULT_DATA.progress[guide];
  }

  /**
   * Update progress for a specific style guide
   * @param {string} guide - 'mla', 'apa', or 'cms'
   * @param {Object} progressUpdate - Progress data to update
   * @returns {boolean} - Success status
   */
  function updateProgress(guide, progressUpdate) {
    const data = load();
    data.progress[guide] = { ...data.progress[guide], ...progressUpdate };

    // Update global stats
    recalculateStats(data);

    return save(data);
  }

  /**
   * Mark a level as completed
   * @param {string} guide - 'mla', 'apa', or 'cms'
   * @param {string} levelId - Level identifier
   * @param {number} score - Score achieved
   * @returns {boolean} - Success status
   */
  function completeLevel(guide, levelId, score) {
    const data = load();
    const progress = data.progress[guide];

    // Add to completed if not already there
    if (!progress.completed.includes(levelId)) {
      progress.completed.push(levelId);
    }

    // Update score
    progress.totalScore += score;

    // Update current level
    progress.currentLevel = Math.max(progress.currentLevel, progress.completed.length);

    // Update stats
    data.stats.totalGamesPlayed++;
    data.achievements.totalPoints =
      data.progress.mla.totalScore +
      data.progress.apa.totalScore +
      data.progress.cms.totalScore;

    // Check for rank up
    updateRank(data);

    // Check if Final Boss should be unlocked
    checkFinalBossUnlock(data);

    return save(data);
  }

  /**
   * Add a badge to the collection
   * @param {string} guide - 'mla', 'apa', or 'cms'
   * @param {string} badgeId - Badge identifier
   * @returns {boolean} - Success status
   */
  function addBadge(guide, badgeId) {
    const data = load();

    // Add to guide-specific badges
    if (!data.progress[guide].badges.includes(badgeId)) {
      data.progress[guide].badges.push(badgeId);
    }

    // Add to global badges
    if (!data.achievements.allBadges.includes(badgeId)) {
      data.achievements.allBadges.push(badgeId);
    }

    return save(data);
  }

  /**
   * Update streak information
   * @param {string} guide - 'mla', 'apa', or 'cms'
   * @param {number} streak - Current streak
   * @returns {boolean} - Success status
   */
  function updateStreak(guide, streak) {
    const data = load();

    // Update guide-specific best streak
    if (streak > data.progress[guide].bestStreak) {
      data.progress[guide].bestStreak = streak;
    }

    // Update global longest streak
    if (streak > data.stats.longestStreak) {
      data.stats.longestStreak = streak;
    }

    return save(data);
  }

  /**
   * Update statistics after a question is answered
   * @param {boolean} correct - Was the answer correct?
   * @param {number} timeTaken - Time taken to answer (ms)
   * @returns {boolean} - Success status
   */
  function updateStats(correct, timeTaken) {
    const data = load();

    data.stats.totalQuestionsAnswered++;

    if (correct) {
      data.stats.totalCorrectAnswers++;
    }

    // Calculate accuracy
    data.stats.averageAccuracy =
      (data.stats.totalCorrectAnswers / data.stats.totalQuestionsAnswered) * 100;

    // Update fastest time
    if (!data.stats.fastestTime || timeTaken < data.stats.fastestTime) {
      data.stats.fastestTime = timeTaken;
    }

    return save(data);
  }

  /**
   * Recalculate global statistics
   * @param {Object} data - Current data
   */
  function recalculateStats(data) {
    data.achievements.totalPoints =
      data.progress.mla.totalScore +
      data.progress.apa.totalScore +
      data.progress.cms.totalScore;

    if (data.stats.totalQuestionsAnswered > 0) {
      data.stats.averageAccuracy =
        (data.stats.totalCorrectAnswers / data.stats.totalQuestionsAnswered) * 100;
    }
  }

  /**
   * Update player rank based on total points
   * @param {Object} data - Current data
   */
  function updateRank(data) {
    const points = data.achievements.totalPoints;

    const ranks = [
      { threshold: 0, rank: 'novice-editor' },
      { threshold: 500, rank: 'grammar-guardian' },
      { threshold: 1500, rank: 'citation-sage' },
      { threshold: 3000, rank: 'master-stylist' }
    ];

    for (let i = ranks.length - 1; i >= 0; i--) {
      if (points >= ranks[i].threshold) {
        data.achievements.rank = ranks[i].rank;
        break;
      }
    }
  }

  /**
   * Check if Final Boss Level should be unlocked
   * @param {Object} data - Current data
   */
  function checkFinalBossUnlock(data) {
    const mlaComplete = data.progress.mla.completed.length >= 9; // 3 regions × 3 difficulties
    const apaComplete = data.progress.apa.completed.length >= 9;
    const cmsComplete = data.progress.cms.completed.length >= 9;

    if (mlaComplete && apaComplete && cmsComplete) {
      data.achievements.finalBossUnlocked = true;
    }
  }

  /**
   * Get all data
   * @returns {Object} - All user data
   */
  function getAll() {
    return load();
  }

  /**
   * Reset all progress (with confirmation)
   * @returns {boolean} - Success status
   */
  function reset() {
    try {
      localStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error resetting data:', error);
      return false;
    }
  }

  /**
   * Export data as JSON string
   * @returns {string} - JSON string of all data
   */
  function exportData() {
    const data = load();
    return JSON.stringify(data, null, 2);
  }

  /**
   * Import data from JSON string
   * @param {string} jsonString - JSON data to import
   * @returns {boolean} - Success status
   */
  function importData(jsonString) {
    try {
      const data = JSON.parse(jsonString);
      return save(data);
    } catch (error) {
      console.error('Error importing data:', error);
      return false;
    }
  }

  /**
   * Update settings
   * @param {Object} newSettings - Settings to update
   * @returns {boolean} - Success status
   */
  function updateSettings(newSettings) {
    const data = load();
    data.settings = { ...data.settings, ...newSettings };
    return save(data);
  }

  /**
   * Get current settings
   * @returns {Object} - Current settings
   */
  function getSettings() {
    const data = load();
    return data.settings;
  }

  // Public API
  return {
    init,
    load,
    save,
    getAll,
    getProgress,
    updateProgress,
    completeLevel,
    addBadge,
    updateStreak,
    updateStats,
    reset,
    exportData,
    importData,
    updateSettings,
    getSettings
  };
})();

// Initialize on load
if (typeof window !== 'undefined') {
  EditQuestStorage.init();
}

// Export for ES6 modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EditQuestStorage;
}
