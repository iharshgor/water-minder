import { useState, useEffect } from 'react';
import { StorageService } from '../utils/storage';
import { FactRepository } from '../utils/facts';

export function useHydration() {
    const [log, setLog] = useState(null);
    const [streak, setStreak] = useState({ count: 0 });
    const [fact, setFact] = useState(null);
    const [settings, setSettings] = useState({ interval: 30, notifications: true });
    const [nextAlert, setNextAlert] = useState(null);
    const [loading, setLoading] = useState(true);

    const refresh = async () => {
        try {
            const [todayLog, currentStreak, dailyFact, userSettings] = await Promise.all([
                StorageService.getTodayLog(),
                StorageService.getStreak(),
                FactRepository.getDailyFact(),
                StorageService.getSettings()
            ]);
            setLog(todayLog);
            setStreak(currentStreak);
            setFact(dailyFact);
            setSettings(userSettings);

            const alarm = await chrome.alarms.get('hydration_reminder');
            setNextAlert(alarm ? alarm.scheduledTime : null);
        } catch (error) {
            console.error("Failed to load hydration data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        refresh();

        const storageListener = (changes, area) => {
            if (area === 'local') {
                if (changes.daily_log) setLog(changes.daily_log.newValue);
                if (changes.settings) setSettings(changes.settings.newValue);
            }
        };

        const alarmListener = (alarm) => {
            if (alarm.name === 'hydration_reminder') {
                chrome.alarms.get('hydration_reminder').then(a => setNextAlert(a ? a.scheduledTime : null));
            }
        };

        chrome.storage.onChanged.addListener(storageListener);
        chrome.alarms.onAlarm.addListener(alarmListener);

        return () => {
            chrome.storage.onChanged.removeListener(storageListener);
            chrome.alarms.onAlarm.removeListener(alarmListener);
        };
    }, []);

    const addWater = async (amount) => {
        const newLog = await StorageService.addWater(amount);
        setLog(newLog);
    };

    const updateSettings = async (newSettings) => {
        await StorageService.saveSettings(newSettings);
        setSettings(newSettings);
        setTimeout(async () => {
            const alarm = await chrome.alarms.get('hydration_reminder');
            setNextAlert(alarm ? alarm.scheduledTime : null);
        }, 100);
    };

    return { log, streak, fact, loading, addWater, settings, updateSettings, nextAlert };
}
