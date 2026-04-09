// ==================== DADOS DOS PONTOS DE COLETA ====================
const collectionPoints = [
    {
        id: 1,
        name: "Loja EcoTech Center",
        address: "Av. Getúlio Vargas, 1234 - Centro, Cuiabá - MT",
        phone: "(65) 3232-1234",
        hours: "Seg-Sex: 8h-18h | Sab: 8h-13h",
        type: "loja",
        image: "📱"
    },
    {
        id: 2,
        name: "Cooperativa Verde Vale",
        address: "Rua das Flores, 567 - Bandeirantes, Cuiabá - MT",
        phone: "(65) 3245-5678",
        hours: "Seg-Sab: 7h-17h",
        type: "cooperativa",
        image: "♻️"
    },
    {
        id: 3,
        name: "Recicla Brasil Recicladora",
        address: "Av. Piraputangas, 2890 - Santa Rosa, Cuiabá - MT",
        phone: "(65) 3256-9012",
        hours: "Seg-Sex: 8h-17h",
        type: "empresa",
        image: "🏭"
    },
    {
        id: 4,
        name: "Prefeitura - Núcleo de Sustentabilidade",
        address: "Rua Barão de Melgaço, 456 - Centro, Cuiabá - MT",
        phone: "(65) 3321-3456",
        hours: "Seg-Sex: 9h-17h",
        type: "publica",
        image: "🏛️"
    },
    {
        id: 5,
        name: "Eletrônicos Promoção",
        address: "Av. Brasil, 3000 - Dom Aquino, Cuiabá - MT",
        phone: "(65) 3333-8901",
        hours: "Seg-Sab: 9h-19h | Dom: 9h-13h",
        type: "loja",
        image: "🖥️"
    },
    {
        id: 6,
        name: "UNEMAT - Campus Central",
        address: "Avenida Getúlio Vargas, 2780 - Cavalhada, Cuiabá - MT",
        phone: "(65) 3615-8070",
        hours: "Seg-Sex: 8h-18h",
        type: "publica",
        image: "🎓"
    },
    {
        id: 7,
        name: "Centro de Logística Reversa CuiabáLix",
        address: "Av. Fernando Corrêa, 5000 - Distrito Industrial, Cuiabá - MT",
        phone: "(65) 3297-5555",
        hours: "Seg-Sex: 7h-17h",
        type: "empresa",
        image: "🚚"
    },
    {
        id: 8,
        name: "Amigos da Natureza Eco-Shop",
        address: "Quadra 02, Lote 05 - Planalto, Cuiabá - MT",
        phone: "(65) 3244-7777",
        hours: "Seg-Dom: 10h-18h",
        type: "cooperativa",
        image: "🌱"
    }
];

// ==================== ELEMENTOS DO DOM ====================
const pointsGrid = document.getElementById('pointsGrid');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const noResults = document.getElementById('noResults');
const ctaButton = document.getElementById('ctaButton');
const navLinks = document.querySelectorAll('.nav-link');

// ==================== RENDERIZAR PONTOS DE COLETA ====================
function renderPoints(points) {
    pointsGrid.innerHTML = '';
    
    if (points.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    points.forEach((point, index) => {
        const card = document.createElement('div');
        card.className = 'point-card';
        
        // Mapear tipo para label legível
        const typeLabel = {
            loja: 'Loja de Eletrônicos',
            cooperativa: 'Cooperativa Ambiental',
            empresa: 'Empresa Recicladora',
            publica: 'Instituição Pública'
        };
        
        card.innerHTML = `
            <div class="point-emoji">${point.image}</div>
            <h3>${point.name}</h3>
            <p><strong>📍 Endereço:</strong><br>${point.address}</p>
            <p><strong>📞 Telefone:</strong><br><a href="tel:${point.phone.replace(/\D/g, '')}" class="phone-link">${point.phone}</a></p>
            <p><strong>⏰ Funcionamento:</strong><br>${point.hours}</p>
            <span class="point-badge">${typeLabel[point.type] || point.type}</span>
        `;
        
        pointsGrid.appendChild(card);
    });
}

// ==================== FILTRAR E BUSCAR ====================
function filterAndSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterType = filterSelect.value;
    
    let filtered = collectionPoints.filter(point => {
        const matchSearch = point.name.toLowerCase().includes(searchTerm) || 
                           point.address.toLowerCase().includes(searchTerm);
        const matchFilter = filterType === '' || point.type === filterType;
        
        return matchSearch && matchFilter;
    });
    
    renderPoints(filtered);
}

// Event listeners para busca e filtro
searchInput.addEventListener('input', filterAndSearch);
filterSelect.addEventListener('change', filterAndSearch);

// ==================== MENU RESPONSIVO ====================
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Atualizar aria-expanded
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
});

// Fechar menu ao clicar em um link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// ==================== BOTÃO CTA ====================
ctaButton.addEventListener('click', () => {
    const pontosSection = document.getElementById('pontos');
    pontosSection.scrollIntoView({ behavior: 'smooth' });
});

// ==================== ANIMAÇÃO DE SCROLL REVEAL ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar todas as seções
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    // Renderizar todos os pontos na primeira carga
    renderPoints(collectionPoints);
    
    // Adicionar classe ativa ao link de navegação baseado na URL
    updateActiveNavLink();
    
    // Restaurar filtros salvos se localStorage disponível
    if (checkLocalStorageSupport()) {
        const lastSearch = localStorage.getItem('lastSearch');
        const lastFilter = localStorage.getItem('lastFilter');
        
        if (lastSearch) {
            searchInput.value = lastSearch;
        }
        if (lastFilter) {
            filterSelect.value = lastFilter;
        }
        
        // Re-aplicar filtros se houve valores salvos
        if (lastSearch || lastFilter) {
            filterAndSearch();
        }
    }
});

// ==================== ATUALIZAR LINK ATIVO ====================
function updateActiveNavLink() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Obter o ID da seção
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        
        if (section) {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                link.classList.add('active');
            }
        }
    });
}

// Atualizar link ativo ao fazer scroll
window.addEventListener('scroll', updateActiveNavLink);

// ==================== VERIFICAR SUPORTE A LOCALSTORAGE ====================
function checkLocalStorageSupport() {
    try {
        const test = '__test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

// Salvar filtros automaticamente ao sair da página
if (checkLocalStorageSupport()) {
    window.addEventListener('beforeunload', () => {
        localStorage.setItem('lastSearch', searchInput.value);
        localStorage.setItem('lastFilter', filterSelect.value);
    });
}

// ==================== FUNÇÕES PARA EXTENSÕES FUTURAS ====================
/**
 * Compartilha informações do ponto de coleta via Web Share API
 * @param {string} pointName - Nome do ponto de coleta
 */
function shareLocation(pointName) {
    const text = `Encontrei um ponto de coleta de lixo eletrônico: ${pointName}. Venha descartar seus eletrônicos corretamente com a EcoPontos!`;
    
    if (navigator.share) {
        navigator.share({
            title: 'EcoPontos - Coleta de Lixo Eletrônico',
            text: text,
        });
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Texto copiado para compartilhar!');
        });
    }
}

/**
 * Abre informações do ponto em nova janela para impressão
 * @param {number} pointId - ID do ponto de coleta
 */
function printPointInfo(pointId) {
    const point = collectionPoints.find(p => p.id === pointId);
    if (point) {
        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.write(`
            <h1>${point.name}</h1>
            <p><strong>Endereço:</strong> ${point.address}</p>
            <p><strong>Telefone:</strong> ${point.phone}</p>
            <p><strong>Funcionamento:</strong> ${point.hours}</p>
        `);
        printWindow.document.close();
        printWindow.print();
    }
}

console.log('🌍 EcoPontos - Sistema de Coleta de Lixo Eletrônico v1.0.1 (Revisado com Sucesso!)');
