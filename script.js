// ====== MENSAGENS PRINCIPAIS ======
const mensagens = [
    'Você é o melhor presente que a vida me deu! 🎁',
    'Seu sorriso ilumina até os meus dias mais nublados. ☀️',
    'Te amo mais do que chocolate! 🍫',
    'Com você, cada momento é mágico. ✨',
    'Você é a razão do meu sorriso todos os dias! 💖',
    'Meu lugar favorito é ao seu lado. 🥰',
    'Se eu pudesse te dar uma coisa na vida, te daria a capacidade de se ver pelos meus olhos. Só assim você entenderia o quanto é especial.',
    'Você faz meu coração bater mais forte! 💓',
    'Obrigada por ser minha melhor amiga, confidente e amor. 💌',
    'Eu te amo do jeitinho que você é, perfeita pra mim!',
    'Você é minha inspiração diária. 🌷',
    'Quero te fazer feliz todos os dias!',
    'Você é meu sonho realizado. ✨',
    'Seu abraço é meu lugar seguro. 🤗',
    'Você é a poesia mais linda que a vida escreveu pra mim. 📝',
    'Meu mundo ficou mais colorido depois que você chegou. 🎨',
    'Você é minha paz, minha alegria, meu amor. 💞',
    'Nunca se esqueça: você é incrível, linda e muito amada! 💝',
    'Eu te amo mais do que ontem e menos do que amanhã. 💘',
    'Você é a dona do meu coração! 🔐'
];
let lastMsgIdx = -1;
function getRandomMsg() {
    let idx;
    do {
        idx = Math.floor(Math.random() * mensagens.length);
    } while (idx === lastMsgIdx && mensagens.length > 1);
    lastMsgIdx = idx;
    return mensagens[idx];
}

// ====== CORAÇÕES CAINDO ======
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 500);

// ====== SURPRESA FOFA ======
function showSurprise() {
    showModal(getRandomMsg(), 'surprise');
}

// ====== EU TE AMO (VÁRIOS IDIOMAS) ======
const loveMsgs = [
    'Eu te amo! 💖',
    'I love you! 💕',
    'Te quiero! 💘',
    'Je t\'aime! 💝',
    'Ich liebe dich! 💗',
    'Ti amo! 💓',
    'Eu te amo mais do que tudo! 😍',
    'Meu coração é seu! 💞',
    'Você é meu mundo! 🌎',
    'Te amo infinito! ♾️',
    'Você é meu paraíso! 🏝️',
    'Você é meu sol! ☀️',
    'Você é meu universo! 🌌',
    'Você é meu tudo! 🥰',
    'Te amo em todas as línguas! 🌍',
    'Я тебя люблю! (Russo)',
    '사랑해! (Saranghae - Coreano)',
    '愛してる! (Aishiteru - Japonês)',
    'Σ\'αγαπώ! (S\'agapó - Grego)',
    'Te iubesc! (Romeno)',
    'Seni seviyorum! (Turco)',
    'Ik hou van jou! (Holandês)',
    'Jeg elsker dig! (Dinamarquês)',
    'Jeg elsker deg! (Norueguês)',
    'Amo-te! (Português Europeu)',
    'Ani ohev otach! (Hebraico)',
    'Mahal kita! (Filipino)',
    'Wo ai ni! (Chinês)',
    'Main tumhe pyaar kartii huun! (Hindi)',
    'Ngiyakuthanda! (Zulu)'
];
let lastLoveIdx = -1;
function getRandomLove() {
    let idx;
    do {
        idx = Math.floor(Math.random() * loveMsgs.length);
    } while (idx === lastLoveIdx && loveMsgs.length > 1);
    lastLoveIdx = idx;
    return loveMsgs[idx];
}
function showLoveModal() {
    showModal(getRandomLove(), 'love');
}

// ====== CARTINHA DIGITAL ======
const carta = 'Querida,\n\nDesde que você entrou na minha vida, tudo ficou mais bonito, mais leve e mais feliz.\n\nAgradeço todos os dias por ter você ao meu lado, por cada sorriso, cada abraço e cada momento juntos.\n\nPrometo cuidar de você, te apoiar e te amar cada vez mais.\n\nCom todo meu amor,\nSeu Mozão 💌';
function showLetter() {
    showModal(`<div class='letter-content'>${carta.replace(/\n/g, '<br>')}</div>`, 'letter');
}

// ====== MODAL GENÉRICO ======
function showModal(msg, type) {
    // Fecha qualquer modal existente antes de abrir uma nova
    closeModal();
    
    let modal = document.createElement('div');
    modal.className = 'modal-bg';
    modal.id = 'modal-bg';
    document.body.appendChild(modal);
    
    let content = `<div class='modal-box'>
        <button class='close-modal' title='Fechar' onclick='closeModal()'>&times;</button>
        <div class='modal-msg'>${msg}</div>
        <div class='modal-btns'>`;
    
    if (type === 'surprise') {
        content += `<button class='btn' onclick='showSurprise()'>Outra surpresa</button>`;
    }
    if (type === 'love') {
        content += `<button class='btn2' onclick='showLoveModal()'>Mais "Eu te amo"</button>`;
    }
    if (type === 'secret' || type === 'easter-egg' || type === 'treasure' || type === 'special') {
        content += `<button class='btn' onclick='closeModal()'>Fechar</button>`;
    }
    
    content += `</div></div>`;
    modal.innerHTML = content;
    modal.style.display = 'flex';
    
    // Adiciona evento para fechar ao clicar fora da modal
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Adiciona evento para fechar com a tecla ESC
    document.addEventListener('keydown', handleEscape);
}

function handleEscape(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}

function closeModal() {
    const modal = document.getElementById('modal-bg');
    if (modal) {
        modal.style.display = 'none';
        // Remove os event listeners
        modal.removeEventListener('click', closeModal);
        document.removeEventListener('keydown', handleEscape);
        // Remove o modal do DOM
        modal.remove();
    }
}

// ====== CONFETES/BALÕES ======
function showConfetti() {
    for (let i = 0; i < 40; i++) {
        setTimeout(() => createConfetti(), i * 30);
    }
}
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '-30px';
    confetti.style.width = confetti.style.height = (12 + Math.random() * 12) + 'px';
    confetti.style.background = `hsl(${Math.random()*360},80%,70%)`;
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
    confetti.style.opacity = 0.85;
    confetti.style.zIndex = 9999;
    confetti.style.transition = 'transform 2.2s linear, opacity 2.2s linear';
    document.body.appendChild(confetti);
    setTimeout(() => {
        confetti.style.transform = `translateY(${window.innerHeight+60}px) rotate(${Math.random()*360}deg)`;
        confetti.style.opacity = 0;
    }, 10);
    setTimeout(() => confetti.remove(), 2300);
}

// ====== MODO NOTURNO ARRASTÁVEL ======
const nightModeToggle = document.getElementById('nightModeToggle');
let isDragging = false;
let startX;
let currentX;

function toggleNightMode() {
    document.body.classList.toggle('night');
    nightModeToggle.classList.toggle('active');
    const stars = document.getElementById('stars-canvas');
    if (document.body.classList.contains('night')) {
        stars.style.display = 'block';
        drawStars();
    } else {
        stars.style.display = 'none';
    }
}

// Eventos de mouse
nightModeToggle.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX;
    currentX = startX;
    nightModeToggle.style.transition = 'none';
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    
    currentX = e.clientX;
    const deltaX = currentX - startX;
    const toggleWidth = nightModeToggle.offsetWidth;
    const handleWidth = nightModeToggle.querySelector('.toggle-handle').offsetWidth;
    const maxDelta = toggleWidth - handleWidth - 4; // 4px de margem
    
    let newPosition = Math.max(0, Math.min(deltaX, maxDelta));
    nightModeToggle.querySelector('.toggle-handle').style.transform = `translateX(${newPosition}px)`;
    
    // Ativa o modo noturno se arrastado mais da metade
    const shouldActivate = newPosition > maxDelta / 2;
    if (shouldActivate !== document.body.classList.contains('night')) {
        toggleNightMode();
    }
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    
    isDragging = false;
    nightModeToggle.style.transition = 'all 0.3s ease';
    const handle = nightModeToggle.querySelector('.toggle-handle');
    
    if (document.body.classList.contains('night')) {
        handle.style.transform = 'translateX(40px)';
    } else {
        handle.style.transform = 'translateX(2px)';
    }
});

// Eventos de toque para dispositivos móveis
nightModeToggle.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].clientX;
    currentX = startX;
    nightModeToggle.style.transition = 'none';
});

document.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const toggleWidth = nightModeToggle.offsetWidth;
    const handleWidth = nightModeToggle.querySelector('.toggle-handle').offsetWidth;
    const maxDelta = toggleWidth - handleWidth - 4;
    
    let newPosition = Math.max(0, Math.min(deltaX, maxDelta));
    nightModeToggle.querySelector('.toggle-handle').style.transform = `translateX(${newPosition}px)`;
    
    const shouldActivate = newPosition > maxDelta / 2;
    if (shouldActivate !== document.body.classList.contains('night')) {
        toggleNightMode();
    }
});

document.addEventListener('touchend', () => {
    if (!isDragging) return;
    
    isDragging = false;
    nightModeToggle.style.transition = 'all 0.3s ease';
    const handle = nightModeToggle.querySelector('.toggle-handle');
    
    if (document.body.classList.contains('night')) {
        handle.style.transform = 'translateX(40px)';
    } else {
        handle.style.transform = 'translateX(2px)';
    }
});

// Estrelas animadas
function drawStars() {
    const canvas = document.getElementById('stars-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < 80; i++) {
        const x = Math.random()*canvas.width;
        const y = Math.random()*canvas.height;
        const r = Math.random()*1.5+0.5;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2*Math.PI);
        ctx.fillStyle = '#fff';
        ctx.globalAlpha = Math.random()*0.7+0.3;
        ctx.fill();
    }
    ctx.globalAlpha = 1;
}
window.addEventListener('resize', function() {
    if (document.body.classList.contains('night')) drawStars();
});

// ====== MÚSICA DE FUNDO ======
const music = document.getElementById('bg-music');
const musicBtn = document.getElementById('music-btn');
let isPlaying = false;
musicBtn.onclick = function() {
    if (!isPlaying) {
        music.play();
        musicBtn.innerHTML = '⏸️';
    } else {
        music.pause();
        musicBtn.innerHTML = '&#127925;';
    }
    isPlaying = !isPlaying;
};
music.addEventListener('ended', function() {
    isPlaying = false;
    musicBtn.innerHTML = '&#127925;';
});

// ====== POEMA ======
const poem = `Nosso amor é como um poema,
Que se escreve a cada dia,
Com versos de carinho e ternura,
E rimas de alegria.

Cada momento ao teu lado,
É uma estrofe de emoção,
E nosso amor é a poesia,
Que dá sentido ao coração.`;

function showPoem() {
    showModal(`<div class='poem-content'>${poem.replace(/\n/g, '<br>')}</div>`, 'poem');
}

// ====== SURPRESA ALEATÓRIA ======
const surpriseFunctions = [
    showSurprise,
    showLoveModal,
    showLetter,
    showConfetti,
    showPoem,
    showLoveList,
    createKisses
];

function showRandomSurprise() {
    const randomIndex = Math.floor(Math.random() * surpriseFunctions.length);
    surpriseFunctions[randomIndex]();
}

// ====== LISTA DE AMOR ======
const loveList = [
    'Seu sorriso ilumina meu dia 🌟',
    'Seu abraço é meu lugar favorito 🤗',
    'Sua voz é a mais linda que já ouvi 🎵',
    'Seu coração é puro e cheio de amor 💖',
    'Você me faz a pessoa mais feliz do mundo 😊',
    'Seu jeito único de ser me encanta ✨',
    'Sua força me inspira todos os dias 💪',
    'Seu amor me faz melhor a cada dia 🌱',
    'Sua companhia é meu maior presente 🎁',
    'Você é a razão do meu sorriso 😍'
];

function showLoveList() {
    const listHTML = loveList.map(item => 
        `<div class='love-item'>${item}</div>`
    ).join('');
    showModal(`<div class='love-list'>${listHTML}</div>`, 'love-list');
}

// ====== BEIJOS ======
function createKisses() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'kiss';
            kiss.innerHTML = '💋';
            kiss.style.left = Math.random() * 100 + 'vw';
            kiss.style.top = Math.random() * 100 + 'vh';
            document.body.appendChild(kiss);
            setTimeout(() => kiss.remove(), 2000);
        }, i * 200);
    }
}

// ====== INICIALIZAÇÃO ======
let clickCount = 0;
let foundSecrets = new Set();

// ====== TELA DE BOAS-VINDAS ======
function startJourney() {
    document.querySelector('.welcome-screen').classList.add('hidden');
    document.querySelector('.container').classList.remove('hidden');
    showChoiceModal();
}

// ====== MODAL DE ESCOLHA ======
function showChoiceModal() {
    document.querySelector('.choice-modal').classList.remove('hidden');
}

function choosePath(path) {
    document.querySelector('.choice-modal').classList.add('hidden');
    const mainContent = document.querySelector('.main-content');
    
    switch(path) {
        case 'romantic':
            mainContent.style.background = 'linear-gradient(135deg, #ffe0ec 0%, #f7d9ff 100%)';
            break;
        case 'fun':
            mainContent.style.background = 'linear-gradient(135deg, #ffd6e0 0%, #ffb6c1 100%)';
            break;
        case 'surprise':
            mainContent.style.background = 'linear-gradient(135deg, #e0f7ff 0%, #d6e0ff 100%)';
            break;
    }
    
    // Revela elementos escondidos baseado no caminho escolhido
    setTimeout(() => {
        if (path === 'romantic') {
            document.querySelector('.secret-message').classList.remove('hidden');
        } else if (path === 'fun') {
            document.querySelector('.easter-egg').classList.remove('hidden');
        }
    }, 1000);
}

// ====== ELEMENTOS ESCONDIDOS ======
function showSecretSurprise() {
    const secretMessages = [
        'Você é a estrela mais brilhante do meu céu! ✨',
        'Cada momento com você é um presente! 🎁',
        'Seu sorriso ilumina meus dias mais escuros! ☀️',
        'Você é a razão do meu coração bater mais forte! 💓'
    ];
    
    const randomMessage = secretMessages[Math.floor(Math.random() * secretMessages.length)];
    showModal(randomMessage, 'secret');
    
    // Esconde a mensagem secreta após mostrar o modal
    const secretMessage = document.querySelector('.secret-message');
    if (secretMessage) {
        secretMessage.classList.add('hidden');
    }
}

function showEasterEgg() {
    const easterEggs = [
        '🎉 Parabéns! Você encontrou um ovo de Páscoa especial!',
        '🌟 Você é uma exploradora incrível!',
        '🎁 Surpresa! Você merece um abraço especial!',
        '💫 Você tem olhos de águia para encontrar segredos!'
    ];
    
    const randomEgg = easterEggs[Math.floor(Math.random() * easterEggs.length)];
    showModal(randomEgg, 'easter-egg');
    
    // Esconde o easter egg após mostrar o modal
    const easterEgg = document.querySelector('.easter-egg');
    if (easterEgg) {
        easterEgg.classList.add('hidden');
    }
}

function revealTreasure() {
    if (!foundSecrets.has('treasure')) {
        foundSecrets.add('treasure');
        showModal('🎉 Tesouro encontrado! Você é uma exploradora incrível!', 'treasure');
    }
}

// ====== INTERAÇÕES ESPECIAIS ======
document.addEventListener('click', (e) => {
    if (e.target.closest('.main-content')) {
        clickCount++;
        
        // Revela elementos especiais baseado no número de cliques
        if (clickCount === 5) {
            showModal('🌟 Você é muito curiosa! Continue explorando...', 'special');
        } else if (clickCount === 10) {
            showModal('🎁 Surpresa! Você encontrou um presente especial!', 'special');
        }
    }
});

// ====== ANIMAÇÕES E EFEITOS ======
function createFloatingHearts() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
}

// Cria corações flutuantes periodicamente
setInterval(createFloatingHearts, 1000);

// ====== QUIZ DE AMOR ======
// Array de perguntas do quiz com suas opções e respostas corretas
const quizQuestions = [
    // Perguntas sobre preferências pessoais
    {
        question: "Qual é a cor favorita do seu amor?",
        options: ["Azul", "Rosa", "Vermelho", "Roxo"],
        correct: 2,
        category: "Preferências"
    },
    {
        question: "Qual é o filme romântico favorito do casal?",
        options: ["Titanic", "Diário de uma Paixão", "A Culpa é das Estrelas", "Como Eu Era Antes de Você"],
        correct: 0,
        category: "Entretenimento"
    },
    {
        question: "Onde foi o primeiro encontro do casal?",
        options: ["Cinema", "Restaurante", "Parque", "Shopping"],
        correct: 1,
        category: "Memórias"
    },
    {
        question: "Qual é a comida favorita do seu amor?",
        options: ["Pizza", "Sushi", "Hambúrguer", "Lasanha"],
        correct: 0,
        category: "Preferências"
    },
    {
        question: "Qual é a música especial do casal?",
        options: ["Perfect - Ed Sheeran", "All of Me - John Legend", "Thinking Out Loud - Ed Sheeran", "A Thousand Years - Christina Perri"],
        correct: 1,
        category: "Música"
    },
    // Novas perguntas adicionadas
    {
        question: "Qual é o lugar favorito para passeios juntos?",
        options: ["Praia", "Montanha", "Parque", "Shopping"],
        correct: 0,
        category: "Lugares"
    },
    {
        question: "Qual é a estação do ano favorita do casal?",
        options: ["Primavera", "Verão", "Outono", "Inverno"],
        correct: 1,
        category: "Preferências"
    },
    {
        question: "Qual é o animal de estimação favorito do seu amor?",
        options: ["Cachorro", "Gato", "Coelho", "Hamster"],
        correct: 0,
        category: "Animais"
    },
    {
        question: "Qual é a sobremesa favorita do casal?",
        options: ["Chocolate", "Sorvete", "Bolo", "Pudim"],
        correct: 1,
        category: "Comida"
    },
    {
        question: "Qual é o hobby favorito do seu amor?",
        options: ["Ler", "Assistir filmes", "Cozinhar", "Dançar"],
        correct: 2,
        category: "Hobbies"
    },
    // Mais perguntas adicionadas
    {
        question: "Qual é a série favorita do casal para maratonar?",
        options: ["Friends", "The Office", "How I Met Your Mother", "Grey's Anatomy"],
        correct: 0,
        category: "Entretenimento"
    },
    {
        question: "Qual é o tipo de restaurante preferido para encontros?",
        options: ["Italiano", "Japonês", "Mexicano", "Brasileiro"],
        correct: 1,
        category: "Comida"
    },
    {
        question: "Qual é a viagem dos sonhos do casal?",
        options: ["Paris", "Roma", "Nova York", "Tóquio"],
        correct: 2,
        category: "Viagens"
    },
    {
        question: "Qual é a qualidade mais admirável no seu amor?",
        options: ["Bondade", "Inteligência", "Humor", "Criatividade"],
        correct: 0,
        category: "Personalidade"
    },
    {
        question: "Qual é o momento mais especial que vocês já viveram juntos?",
        options: ["Primeiro encontro", "Primeiro beijo", "Primeira viagem", "Primeiro aniversário juntos"],
        correct: 1,
        category: "Memórias"
    }
];

// Variáveis para controlar o estado do quiz
let currentQuestion = 0;
let score = 0;
let categoryScores = {};

// Função para iniciar o quiz
function showQuickGame() {
    currentQuestion = 0;
    score = 0;
    categoryScores = {};
    showNextQuestion();
}

// Função para mostrar a próxima pergunta
function showNextQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showQuizResults();
        return;
    }

    const question = quizQuestions[currentQuestion];
    let content = `
        <div class="quiz-container">
            <h2>Quiz do Amor 💝</h2>
            <p class="question-category">${question.category}</p>
            <p class="question">${question.question}</p>
            <div class="options">
    `;

    // Cria os botões de opção para cada pergunta
    question.options.forEach((option, index) => {
        content += `
            <button class="quiz-option" onclick="checkAnswer(${index})">
                ${option}
            </button>
        `;
    });

    content += `
            </div>
            <p class="quiz-progress">Pergunta ${currentQuestion + 1} de ${quizQuestions.length}</p>
        </div>
    `;

    showModal(content, 'quiz');
}

// Função para verificar a resposta
function checkAnswer(selectedIndex) {
    const question = quizQuestions[currentQuestion];
    if (selectedIndex === question.correct) {
        score++;
        // Atualiza a pontuação da categoria
        if (!categoryScores[question.category]) {
            categoryScores[question.category] = 0;
        }
        categoryScores[question.category]++;
        showFeedback(true);
    } else {
        showFeedback(false);
    }
}

// Função para mostrar feedback após cada resposta
function showFeedback(isCorrect) {
    const feedback = isCorrect ? 
        "Correto! Você conhece bem seu amor! 💖" : 
        "Ops! Tente novamente! 💭";
    
    let content = `
        <div class="quiz-feedback">
            <p>${feedback}</p>
            <button class="btn" onclick="nextQuestion()">Próxima Pergunta</button>
        </div>
    `;

    showModal(content, 'quiz-feedback');
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
    currentQuestion++;
    showNextQuestion();
}

// Função para mostrar os resultados finais
function showQuizResults() {
    const percentage = (score / quizQuestions.length) * 100;
    let message = "";
    
    // Mensagens personalizadas baseadas na pontuação
    if (percentage >= 90) {
        message = "Perfeito! Você conhece seu amor como ninguém! 💑";
    } else if (percentage >= 70) {
        message = "Muito bom! Você conhece bem seu amor! 💖";
    } else if (percentage >= 50) {
        message = "Bom! Mas ainda pode conhecer melhor seu amor! 💭";
    } else {
        message = "Hmm... Que tal passar mais tempo juntos? 💕";
    }

    // Cria o HTML para mostrar os resultados por categoria
    let categoryResults = "";
    for (let category in categoryScores) {
        const categoryPercentage = (categoryScores[category] / 
            quizQuestions.filter(q => q.category === category).length) * 100;
        categoryResults += `
            <div class="category-result">
                <p>${category}: ${categoryPercentage.toFixed(0)}%</p>
            </div>
        `;
    }

    let content = `
        <div class="quiz-results">
            <h2>Resultado do Quiz 💝</h2>
            <p>Você acertou ${score} de ${quizQuestions.length} perguntas!</p>
            <p>${message}</p>
            <div class="category-results">
                <h3>Resultados por Categoria:</h3>
                ${categoryResults}
            </div>
            <button class="btn" onclick="closeModal()">Fechar</button>
            <button class="btn2" onclick="showQuickGame()">Jogar Novamente</button>
        </div>
    `;

    showModal(content, 'quiz-results');
}

// ====== DICA DE FILME/SÉRIE ======
const movieTips = [
    'Para Todos os Garotos que Já Amei (Netflix)',
    'A Barraca do Beijo (Netflix)',
    'Simplesmente Acontece',
    'Como Eu Era Antes de Você',
    'La La Land: Cantando Estações',
    'O Lado Bom da Vida',
    'A Cinco Passos de Você',
    'Orgulho e Preconceito',
    'O Melhor de Mim',
    'Um Amor para Recordar',
    'A Culpa é das Estrelas',
    'Com Amor, Simon',
    'Questão de Tempo',
    'Amor & Outras Drogas',
    'O Date Perfeito',
    'Modern Love (Amazon Prime)',
    'This Is Us (Star+)',
    'Brooklyn',
    'O Fabuloso Destino de Amélie Poulain',
    'A Proposta',
    '10 Coisas que Eu Odeio em Você',
    'Cartas para Julieta',
    'Querido John',
    'Diário de uma Paixão',
    'Me Chame Pelo Seu Nome'
];
function showMovieTip() {
    const tip = movieTips[Math.floor(Math.random() * movieTips.length)];
    showModal(`<b>Dica de Filme/Série para assistir juntinhos:</b><br><br>🎬 <span style='font-size:1.1rem;'>${tip}</span>`, 'movie-tip');
} 