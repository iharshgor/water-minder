/**
 * Facts Repository
 * Fun and smart facts about hydration.
 */

const FACTS = [
    { id: 1, type: "science", text: "Your brain is ~75% water. That headache might just be thirst wearing a disguise." },
    { id: 2, type: "brain", text: "Even mild dehydration can reduce focus. That bug might not be the code… just saying." },
    { id: 3, type: "fitness", text: "Drinking water helps regulate body temperature — it's your built-in cooling system." },
    { id: 4, type: "beauty", text: "Your skin cells are thirsty too. Moisturizer starts from the inside." },
    { id: 5, type: "funny", text: "Coffee is great. But water is the system update your body actually asked for." },
    { id: 6, type: "science", text: "Water helps dissolve minerals and nutrients, making them accessible to your body." },
    { id: 7, type: "fitness", text: "Muscles are about 80% water. Prevent cramps by staying hydrated." },
    { id: 8, type: "brain", text: "Dehydration can negatively affect your mood. Drink water, be happy." },
    { id: 9, type: "funny", text: "Be like water. Formless, shapeless... and mostly effectively hydrating." },
    { id: 10, type: "beauty", text: "Proper hydration can help maintain skin elasticity." }
];

export const FactRepository = {
    getRawFacts() {
        return FACTS;
    },

    async getDailyFact() {
        const today = new Date().toISOString().split('T')[0];
        const key = 'daily_fact_seed';
        const storage = await chrome.storage.local.get([key]);

        let saved = storage[key];
        if (saved && saved.date === today) {
            return FACTS.find(f => f.id === saved.factId) || FACTS[0];
        }

        // New fact for today
        const randomFact = FACTS[Math.floor(Math.random() * FACTS.length)];
        await chrome.storage.local.set({ [key]: { date: today, factId: randomFact.id } });
        return randomFact;
    }
};
