const quizData = [
    {
        question: "O que causa 40% dos alagamentos?",
        options: ["Chuva forte", "Bueiros entupidos", "Falta de saneamento"],
        answer: 1
    },
    {
        question: "Qual tecnologia é usada na solução?",
        options: ["IA + IoT", "Blockchain", "GPS"],
        answer: 0
    },
    {
        question: "Qual o objetivo em 2 anos?",
        options: ["Reduzir 20%", "Reduzir 70%", "Eliminar todos"],
        answer: 1
    },
    {
        question: "Qual rede é usada para comunicação?",
        options: ["Wi-Fi", "4G", "LoRaWAN"],
        answer: 2
    },
    {
        question: "Quem é beneficiado?",
        options: ["Empresas privadas", "Gestores públicos", "Turistas"],
        answer: 1
    },
    {
        question: "O sistema envia alertas via?",
        options: ["E-mail", "SMS", "Rádio"],
        answer: 1
    },
    {
        question: "Há integração com qual sistema?",
        options: ["Bombeiros", "Defesa Civil", "Polícia Militar"],
        answer: 1
    },
    {
        question: "O app mostra bueiros em tempo?",
        options: ["Real", "Simulado", "Estimado"],
        answer: 0
    },
    {
        question: "Quanto pode economizar?",
        options: ["R$ 500 mil", "R$ 1,2 bi", "R$ 10 bi"],
        answer: 1
    },
    { 
        question: "Qual vantagem exclusiva?", 
        options: ["Robôs de limpeza", "Mais impostos", "Câmeras ao vivo"], 
        answer: 0 
    }
];

const quizContainer = document.getElementById("quiz-container");
const submitQuizBtn = document.getElementById("submit-quiz");
const resultDiv = document.getElementById("quiz-result");


quizData.forEach((q, i) => {
    const div = document.createElement("div");
    div.classList.add("question-block");
    div.innerHTML = `
        <p><strong>${i + 1}. ${q.question}</strong></p>
        ${q.options.map((opt, j) => `
            <label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>
        `).join('')}
    `;
    quizContainer.appendChild(div);
});

submitQuizBtn.addEventListener("click", () => {
    let score = 0;
    quizData.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.answer) score++;
    });
    resultDiv.textContent = `🎉 Você acertou ${score} de ${quizData.length} perguntas.`;
});

document.getElementById("blue").addEventListener("click", () => {
    document.body.style.backgroundColor = "#e0f0ff";
});

document.getElementById("green").addEventListener("click", () => {
    document.body.style.backgroundColor = "#e6ffe6";
});

document.getElementById("white").addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
});
