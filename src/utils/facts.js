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
    { id: 10, type: "beauty", text: "Proper hydration can help maintain skin elasticity." },
    { id: 11, type: "science", text: "Water protects your spinal cord and other sensitive tissues." },
    { id: 12, type: "fitness", text: "Water lubricates your joints. Creaky knees? Have a sip." },
    { id: 13, type: "brain", text: "A 2% drop in body water can trigger fuzzy short-term memory." },
    { id: 14, type: "beauty", text: "Dehydration makes fine lines and wrinkles more prominent." },
    { id: 15, type: "funny", text: "Drink water. You are basically a houseplant with complicated emotions." },
    { id: 16, type: "science", text: "Saliva is mostly water. You need it to digest food." },
    { id: 17, type: "fitness", text: "Water boosts performance during strenuous exercise." },
    { id: 18, type: "brain", text: "Brain fog is often just a sign you need a glass of water." },
    { id: 19, type: "beauty", text: "Drinking water helps flush out toxins that can cause breakouts." },
    { id: 20, type: "funny", text: "Hydrate or diedrate. (Just kidding, but seriously drink water)." },
    { id: 21, type: "science", text: "Oxygen is delivered throughout the body by blood, which is >90% water." },
    { id: 22, type: "fitness", text: "Hydration helps prevent the post-workout crash." },
    { id: 23, type: "brain", text: "Water aids in the production of hormones and neurotransmitters." },
    { id: 24, type: "beauty", text: "Puffy eyes? Water helps reduce water retention (ironic, right?)." },
    { id: 25, type: "funny", text: "Your kidneys called. They want a bonus. In water." },
    { id: 26, type: "science", text: "Your body loses water just by breathing." },
    { id: 27, type: "fitness", text: "Water helps cushion the brain, spinal cord, and other sensitive tissues." },
    { id: 28, type: "brain", text: "Reaction time can slow down when you are dehydrated." },
    { id: 29, type: "beauty", text: "Healthy hair needs hydration from the roots (and the inside)." },
    { id: 30, type: "funny", text: "Water: 0 calories, 100% survival rate." },
    { id: 31, type: "science", text: "Water is essential for kidney function and filtering waste." },
    { id: 32, type: "fitness", text: "Staying hydrated keeps your heart rate lower during exercise." },
    { id: 33, type: "brain", text: "Water improves cognitive performance and alertness." },
    { id: 34, type: "beauty", text: "Chapped lips are the first sign of dehydration." },
    { id: 35, type: "funny", text: "Don't be a raisin. Be a grape." },
    { id: 36, type: "science", text: "Digestion relies heavily on water to break down food." },
    { id: 37, type: "fitness", text: "Cartilage in joints contains about 80% water." },
    { id: 38, type: "brain", text: "Headaches are one of the most common symptoms of dehydration." },
    { id: 39, type: "beauty", text: "Drinking water gives your skin a natural glow." },
    { id: 40, type: "funny", text: "H2O: The original energy drink." },
    { id: 41, type: "science", text: "Water is the main component of cells and tissues." },
    { id: 42, type: "fitness", text: "Sweating removes water; you must replace it to keep going." },
    { id: 43, type: "brain", text: "Mental fatigue is reduced by regular water intake." },
    { id: 44, type: "beauty", text: "Water helps maintain the pH balance of your skin." },
    { id: 45, type: "funny", text: "Soda is just angry sugar water. Drink the calm stuff." },
    { id: 46, type: "science", text: "Water helps regulate blood pressure." },
    { id: 47, type: "fitness", text: "Hydration improves recovery time after workouts." },
    { id: 48, type: "brain", text: "Thinking hard burns energy and water. Refuel." },
    { id: 49, type: "beauty", text: "Nails become brittle when you are dehydrated." },
    { id: 50, type: "funny", text: "Stay thirsty... for knowledge, but hydrated with water." },
    { id: 51, type: "science", text: "Shock absorption in the brain and spinal cord depends on water." },
    { id: 52, type: "fitness", text: "Water prevents exercise-induced asthma in some people." },
    { id: 53, type: "brain", text: "Math is hard. Math on dehydration is impossible." },
    { id: 54, type: "beauty", text: "Cold water can tighten pores and reduce redness." },
    { id: 55, type: "funny", text: "Clear pee is the ultimate flex." },
    { id: 56, type: "science", text: "Water dissolves vitamins B and C, which are water-soluble." },
    { id: 57, type: "fitness", text: "Physical strength decreases with dehydration." },
    { id: 58, type: "brain", text: "Anxiety can sometimes be linked to dehydration." },
    { id: 59, type: "beauty", text: "Water helps combat premature aging." },
    { id: 60, type: "funny", text: "Whiskey is functional water. Wait, no. Just water." },
    { id: 61, type: "science", text: "Mucus membranes in your nose need water to trap viruses." },
    { id: 62, type: "fitness", text: "Cramps happen when muscles lack water and electrolytes." },
    { id: 63, type: "brain", text: "A hydrated brain heals faster from stress." },
    { id: 64, type: "beauty", text: "Dark circles under eyes? Drink more water." },
    { id: 65, type: "funny", text: "Water is the only drink that doesn't judge you." },
    { id: 66, type: "science", text: "Water allows body cells to grow, reproduce and survive." },
    { id: 67, type: "fitness", text: "Endurance drops fundamentally when you are thirsty." },
    { id: 68, type: "brain", text: "Decision making is sharper when hydrated." },
    { id: 69, type: "beauty", text: "Hydration improves skin tone and texture." },
    { id: 70, type: "funny", text: "Drink water. Your skin, muscles, and kidneys will send thank you notes." },
    { id: 71, type: "science", text: "Water converts food to components needed for survival - digestion." },
    { id: 72, type: "fitness", text: "Water reduces risk of heat stress." },
    { id: 73, type: "brain", text: "Staying hydrated can help prevent migraines." },
    { id: 74, type: "beauty", text: "Eczema flare-ups can be soothed by internal hydration." },
    { id: 75, type: "funny", text: "Be a hydration homie." },
    { id: 76, type: "science", text: "Water forms saliva (digestion) and mucus (transport)." },
    { id: 77, type: "fitness", text: "It helps deliver oxygen all over the body." },
    { id: 78, type: "brain", text: "Your brain shrinks (literally) when dehydrated." },
    { id: 79, type: "beauty", text: "Glowing skin is 90% water and 10% skincare." },
    { id: 80, type: "funny", text: "Imagine drinking water. Now do it." },
    { id: 81, type: "science", text: "Water flushes body waste, mainly in urine." },
    { id: 82, type: "fitness", text: "Hydrated muscles recover faster." },
    { id: 83, type: "brain", text: "Focus requires fluid." },
    { id: 84, type: "beauty", text: "Collagen needs water to work." },
    { id: 85, type: "funny", text: "Sip happens." },
    { id: 86, type: "science", text: "Water makes up 83% of your blood." },
    { id: 87, type: "fitness", text: "Joint lubrication prevents injury." },
    { id: 88, type: "brain", text: "Short term memory relies on hydration." },
    { id: 89, type: "beauty", text: "Dull skin is often dehydrated skin." },
    { id: 90, type: "funny", text: "Water you waiting for?" },
    { id: 91, type: "science", text: "Bones are 31% water." },
    { id: 92, type: "fitness", text: "Water carries glucose to your muscles." },
    { id: 93, type: "brain", text: "Brain energy production requires water." },
    { id: 94, type: "beauty", text: "Hydration reduces itchiness of dry skin." },
    { id: 95, type: "funny", text: "Adulting is just drinking water and paying bills." },
    { id: 96, type: "science", text: "Lungs are 83% water." },
    { id: 97, type: "fitness", text: "Water aids in weight loss by increasing metabolism." },
    { id: 98, type: "brain", text: "Mood swings? Check your water intake." },
    { id: 99, type: "beauty", text: "Healthy cuticles start with water." },
    { id: 100, type: "funny", text: "You can't buy happiness, but you can buy a water bottle." }
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
        if (saved && saved.date === today && saved.factId) {
            return FACTS.find(f => f.id === saved.factId) || FACTS[0];
        }

        // New fact for today
        const randomFact = FACTS[Math.floor(Math.random() * FACTS.length)];
        await chrome.storage.local.set({ [key]: { date: today, factId: randomFact.id } });
        return randomFact;
    }
};
