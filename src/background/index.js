import { StorageService } from '../utils/storage';
import { FactRepository } from '../utils/facts';

console.log("WaterMinder Background Service Started");

// Alarm Names
const ALARM_REMINDER = 'hydration_reminder';

// Initialize Alarms on Install
chrome.runtime.onInstalled.addListener(async () => {
    await setupAlarms();
});

// Listen for settings changes to update alarms
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'local' && changes.settings) {
        setupAlarms();
    }
});

async function setupAlarms() {
    const settings = await StorageService.getSettings();

    if (settings.notifications) {
        chrome.alarms.create(ALARM_REMINDER, {
            periodInMinutes: settings.interval || 30
        });
        console.log(`Alarm set for every ${settings.interval || 30} minutes`);
    } else {
        chrome.alarms.clear(ALARM_REMINDER);
        console.log("Alarms cleared");
    }
}

// Handle Alarms
chrome.alarms.onAlarm.addListener(async (alarm) => {
    if (alarm.name === ALARM_REMINDER) {
        const fact = await FactRepository.getDailyFact();

        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icon-128.png',
            title: 'Time to Hydrate! 💧',
            message: fact.text, // Use the daily fact or a random gentle nudge? Maybe mix it up.
            buttons: [
                { title: 'Drank 🥤' },
                { title: 'Snooze 5m 💤' }
            ],
            requireInteraction: true,
            priority: 2,
            silent: false
        });
    }
});

// Handle Notification Clicks
chrome.notifications.onButtonClicked.addListener(async (notificationId, buttonIndex) => {
    if (buttonIndex === 0) {
        // Drank
        // Default to a small amount or just open popup?
        // Let's log a default 250ml for now to be "One-Click"
        await StorageService.addWater(250);
        chrome.notifications.clear(notificationId);
    } else if (buttonIndex === 1) {
        // Snooze
        chrome.alarms.create(ALARM_REMINDER, { delayInMinutes: 5 });
        chrome.notifications.clear(notificationId);
    }
});
