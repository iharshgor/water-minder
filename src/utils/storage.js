/**
 * Storage Service
 * Handles all interactions with chrome.storage.local
 */

const KEYS = {
    DAILY_LOG: 'daily_log', // { date: 'YYYY-MM-DD', amount: 0, goal: 2500 }
    SETTINGS: 'settings', // { interval: 30, unit: 'ml', notifications: true }
    STREAK: 'streak', // { count: 0, lastLogDate: 'YYYY-MM-DD' }
    FACT_SEEN: 'fact_seen' // { date: 'YYYY-MM-DD', factId: 1 }
};

export const StorageService = {
    // Get today's hydration log
    async getTodayLog() {
        const today = new Date().toISOString().split('T')[0];
        const data = await chrome.storage.local.get([KEYS.DAILY_LOG]);
        const log = data[KEYS.DAILY_LOG];

        if (!log || log.date !== today) {
            // Reset for new day
            const newLog = { date: today, amount: 0, goal: 2500 };
            await chrome.storage.local.set({ [KEYS.DAILY_LOG]: newLog });
            return newLog;
        }

        return log;
    },

    // Add water to today's log
    async addWater(amount) {
        const log = await this.getTodayLog();
        const newAmount = log.amount + amount;
        const updatedLog = { ...log, amount: newAmount };

        await chrome.storage.local.set({ [KEYS.DAILY_LOG]: updatedLog });

        // Check for streak update
        if (newAmount >= log.goal) {
            await this.updateStreak(log.date);
        }

        return updatedLog;
    },

    // Get user settings
    async getSettings() {
        const data = await chrome.storage.local.get([KEYS.SETTINGS]);
        return data[KEYS.SETTINGS] || { interval: 30, unit: 'ml', notifications: true };
    },

    // Update user settings
    async saveSettings(settings) {
        await chrome.storage.local.set({ [KEYS.SETTINGS]: settings });
    },

    // Streak Logic
    async updateStreak(todayDate) {
        const data = await chrome.storage.local.get([KEYS.STREAK]);
        let streak = data[KEYS.STREAK] || { count: 0, lastLogDate: '' };

        if (streak.lastLogDate === todayDate) return; // Already counted today

        // Check if yesterday was logged to maintain streak
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (streak.lastLogDate === yesterdayStr) {
            streak.count += 1;
        } else {
            streak.count = 1; // Reset or start new
        }

        streak.lastLogDate = todayDate;
        await chrome.storage.local.set({ [KEYS.STREAK]: streak });
    },

    async getStreak() {
        const data = await chrome.storage.local.get([KEYS.STREAK]);
        return data[KEYS.STREAK] || { count: 0, lastLogDate: '' };
    }
};
