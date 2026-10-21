const facts = [
    "Silence debugs better than shouting.",
    "The best code is no code at all.",
    "In a world of noise, a focused coder wins.",
    "Real power moves in silence - so does clean code.",
    "Talk is cheap. Show me the code - in silence.",
    "Deep work happens when notifications are off.",
    "A silent mind writes the loudest programs.",
    "Less meetings, more commits.",
    "CodeInSilence: Let your GitHub speak.",
    "Tech wisdom: Master focus, master the future."
];

document.getElementById('revealBtn').addEventListener('click', () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById('fact').textContent = randomFact;
});
