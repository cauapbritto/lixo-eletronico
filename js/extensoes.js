// ==================== GUIA DE EXTENSÃO - FUNCIONALIDADES ADICIONAIS ====================

/**
 * Este arquivo contém exemplos de como você pode estender o EcoPontos
 * com funcionalidades adicionais. Copie e adapte o código conforme necessário.
 */

// ==================== 1. FORMULÁRIO DE CONTATO COM VALIDAÇÃO ====================
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Coletar dados
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Validação básica
        if (!validateEmail(email)) {
            alert('Por favor, insira um email válido');
            return;
        }

        if (message.length < 10) {
            alert('A mensagem deve ter pelo menos 10 caracteres');
            return;
        }

        // Simular envio (em produção, você enviaria para um servidor)
        console.log('Formulário enviado:', { name, email, message });
        alert('Obrigado! Entraremos em contato em breve.');
        form.reset();
    });
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// ==================== 2. SISTEMA DE FAVORITOS COM LOCALSTORAGE ====================
function initFavoritesSystem() {
    const pointCards = document.querySelectorAll('.point-card');
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    pointCards.forEach((card, index) => {
        const pointId = index + 1;
        const isFavorite = favorites.includes(pointId);

        // Criar botão de favorito
        const favBtn = document.createElement('button');
        favBtn.className = 'favorite-btn';
        favBtn.textContent = isFavorite ? '❤️ Favorito' : '🤍 Adicionar';
        favBtn.style.cssText = `
            background: none;
            border: 2px solid #2ecc71;
            color: #2ecc71;
            padding: 8px 16px;
            margin-top: 10px;
            border-radius: 20px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
        `;

        if (isFavorite) {
            favBtn.style.backgroundColor = '#2ecc71';
            favBtn.style.color = 'white';
        }

        favBtn.addEventListener('click', () => {
            const idx = favorites.indexOf(pointId);
            if (idx === -1) {
                favorites.push(pointId);
                favBtn.textContent = '❤️ Favorito';
                favBtn.style.backgroundColor = '#2ecc71';
                favBtn.style.color = 'white';
            } else {
                favorites.splice(idx, 1);
                favBtn.textContent = '🤍 Adicionar';
                favBtn.style.backgroundColor = 'transparent';
                favBtn.style.color = '#2ecc71';
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });

        card.appendChild(favBtn);
    });
}

// ==================== 3. SISTEMA DE AVALIAÇÃO DE PONTOS ====================
function initRatingSystem() {
    const pointCards = document.querySelectorAll('.point-card');
    const ratings = JSON.parse(localStorage.getItem('ratings')) || {};

    pointCards.forEach((card, index) => {
        const pointId = index + 1;
        const rating = ratings[pointId] || 0;

        // Criar elemento de classificação
        const ratingDiv = document.createElement('div');
        ratingDiv.className = 'rating-container';
        ratingDiv.style.cssText = `
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #ecf0f1;
        `;

        let starsHTML = '<div style="font-size: 20px; margin-bottom: 8px;">';
        for (let i = 1; i <= 5; i++) {
            const star = i <= rating ? '⭐' : '☆';
            starsHTML += `<span style="cursor: pointer; margin-right: 4px;" data-star="${i}">${star}</span>`;
        }
        starsHTML += '</div>';
        starsHTML += `<small style="color: #999;">${rating > 0 ? `${rating} estrela${rating !== 1 ? 's' : ''}` : 'Clique para avaliar'}</small>`;

        ratingDiv.innerHTML = starsHTML;

        // Adicionar interatividade
        const stars = ratingDiv.querySelectorAll('span[data-star]');
        stars.forEach(star => {
            star.addEventListener('click', () => {
                const newRating = parseInt(star.dataset.star);
                ratings[pointId] = newRating;
                localStorage.setItem('ratings', JSON.stringify(ratings));
                initRatingSystem(); // Reinicializar para atualizar
            });
        });

        card.appendChild(ratingDiv);
    });
}

// ==================== 4. SISTEMA DE AGENDAMENTO SIMPLES ====================
function initBookingSystem() {
    const pointCards = document.querySelectorAll('.point-card');

    pointCards.forEach((card, index) => {
        const pointId = index + 1;
        const pointName = card.querySelector('h3').textContent;

        const bookBtn = document.createElement('button');
        bookBtn.className = 'book-btn';
        bookBtn.textContent = '📅 Agendar Coleta';
        bookBtn.style.cssText = `
            background: #3498db;
            color: white;
            border: none;
            padding: 10px 16px;
            margin-top: 10px;
            margin-left: 10px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
        `;

        bookBtn.addEventListener('click', () => {
            const date = prompt(`Agendar coleta em ${pointName}.\nQual a data desejada? (DD/MM/YYYY):`);
            if (date && date.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
                const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
                bookings.push({
                    pointId,
                    pointName,
                    date,
                    timestamp: new Date().toISOString()
                });
                localStorage.setItem('bookings', JSON.stringify(bookings));
                alert(`✅ Agendamento confirmado para ${date} em ${pointName}`);
                console.log('Agendamentos:', bookings);
            } else {
                alert('❌ Data inválida. Use o formato: DD/MM/YYYY');
            }
        });

        const favoriteBtn = card.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.parentNode.insertBefore(bookBtn, favoriteBtn.nextSibling);
        } else {
            card.appendChild(bookBtn);
        }
    });
}

// ==================== 5. NOTIFICAÇÕES COM SOM ====================
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideInRight 0.3s ease;
        font-weight: 500;
    `;

    const colors = {
        success: { bg: '#2ecc71', text: '#fff' },
        error: { bg: '#e74c3c', text: '#fff' },
        warning: { bg: '#f39c12', text: '#fff' },
        info: { bg: '#3498db', text: '#fff' }
    };

    const color = colors[type] || colors.info;
    notification.style.backgroundColor = color.bg;
    notification.style.color = color.text;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, duration);

    // Tocar som (opcional)
    playNotificationSound();
}

function playNotificationSound() {
    // Criar um som simples usando Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } catch (e) {
        console.log('Audio não suportado');
    }
}

// ==================== 6. ANIMAÇÃO DE ENTRADA DOS ELEMENTOS ====================
function addEntranceAnimations() {
    const elements = document.querySelectorAll('.item-card, .reason-card, .point-card');
    
    elements.forEach((element, index) => {
        element.style.animation = 'none';
        element.offsetHeight; // Trigger reflow
        element.style.animation = `fadeInScale 0.6s ease ${index * 0.05}s forwards`;
    });
}

// Adicionar keyframe ao CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.95);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);

// ==================== 7. MODO ESCURO ====================
function initDarkMode() {
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = '🌓 Modo Escuro';
    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #2c3e50;
        color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        font-size: 14px;
        z-index: 999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    `;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️ Modo Claro';
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isNowDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isNowDark);
        darkModeToggle.textContent = isNowDark ? '☀️ Modo Claro' : '🌓 Modo Escuro';
    });

    document.body.appendChild(darkModeToggle);

    // Adicionar estilos do modo escuro
    const darkStyle = document.createElement('style');
    darkStyle.textContent = `
        body.dark-mode {
            background-color: #1a1a1a;
            color: #e0e0e0;
        }
        
        body.dark-mode .header {
            background-color: #2c3e50;
            box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        
        body.dark-mode .nav-link {
            color: #e0e0e0;
        }
        
        body.dark-mode .point-card,
        body.dark-mode .item-card {
            background-color: #2c3e50;
        }
        
        body.dark-mode .search-input,
        body.dark-mode .filter-select {
            background-color: #1a1a1a;
            color: #e0e0e0;
            border-color: #444;
        }
    `;
    document.head.appendChild(darkStyle);
}

// ==================== 8. CONTADOR DE PONTOS VISITADOS ====================
function initVisitCounter() {
    const pointCards = document.querySelectorAll('.point-card');
    const visits = JSON.parse(localStorage.getItem('pointVisits')) || {};

    pointCards.forEach((card, index) => {
        const pointId = index + 1;
        visits[pointId] = (visits[pointId] || 0) + 1;

        const visitCounter = document.createElement('small');
        visitCounter.style.cssText = 'display: block; margin-top: 10px; color: #999;';
        visitCounter.textContent = `👁️ ${visits[pointId]} ${visits[pointId] === 1 ? 'visualização' : 'visualizações'}`;
        card.appendChild(visitCounter);
    });

    localStorage.setItem('pointVisits', JSON.stringify(visits));
}

// ==================== INICIALIZAR TUDO ====================
document.addEventListener('DOMContentLoaded', () => {
    // Descomente as funcionalidades que deseja usar:
    
    // initContactForm();
    // initFavoritesSystem();
    // initRatingSystem();
    // initBookingSystem();
    // initDarkMode();
    // addEntranceAnimations();
    // initVisitCounter();
    
    console.log('✅ Extensões carregadas (descomente as que deseja usar no HTML)');
});

// ==================== EXEMPLO DE USO ====================
// Para usar estas funcionalidades, adicione uma tag <script> no final do body do index.html:
// <script src="js/extensoes.js"></script>

// Ou para usar funções específicas:
// showNotification('Bem-vindo ao EcoPontos!', 'success');
