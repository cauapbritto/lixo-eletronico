// ==================== DADOS DOS PONTOS DE COLETA ====================
const collectionPoints = [
    // ECOPONTOS PÚBLICOS
    {
        id: 1,
        name: "Ecoponto ReciclaMT (Piloto)",
        address: "Lateral da Câmara Municipal de Cuiabá, Praça Barão de Melgaço, s/n – Centro",
        phone: "Durante horário de funcionamento da Câmara",
        hours: "Seg-Sex: 8h-18h",
        type: "publica",
        image: "♻️",
        lat: -15.5939,
        lng: -55.5850
    },
    {
        id: 2,
        name: "Ecoponto CPA 3",
        address: "Antiga Associação de Carroceiros (próximo à Lagoa Encantada), bairro CPA 3",
        phone: "-",
        hours: "Durante horário de funcionamento",
        type: "publica",
        image: "♻️",
        lat: -15.5500,
        lng: -55.6200
    },
    // SHOPPINGS
    {
        id: 3,
        name: "Pantanal Shopping",
        address: "Av. Historiador Rubens de Mendonça, 3300 – Jardim Aclimação (CPA)",
        phone: "-",
        hours: "Durante o funcionamento do shopping",
        type: "loja",
        image: "🛍️",
        lat: -15.5650,
        lng: -55.6250
    },
    {
        id: 4,
        name: "Shopping Popular",
        address: "Av. Beira Rio – Dom Aquino",
        phone: "-",
        hours: "Seg-Sáb: 07h-19h",
        type: "loja",
        image: "🛍️",
        lat: -15.5750,
        lng: -55.5950
    },
    {
        id: 5,
        name: "Shopping Estação",
        address: "Av. Miguel Sutil, 9300 – Santa Rosa",
        phone: "-",
        hours: "Durante o funcionamento do shopping",
        type: "loja",
        image: "🛍️",
        lat: -15.6100,
        lng: -55.6050
    },
    {
        id: 6,
        name: "Supermercado Modelo",
        address: "Unidades em Fernando Corrêa, Miguel Sutil, CPA III",
        phone: "-",
        hours: "Durante horário do supermercado",
        type: "loja",
        image: "🛒",
        lat: -15.5800,
        lng: -55.6100
    },
    {
        id: 7,
        name: "Atacadão",
        address: "Unidades em Coxipó e Jardim Florianópolis",
        phone: "-",
        hours: "Durante horário de funcionamento",
        type: "loja",
        image: "🛒",
        lat: -15.6000,
        lng: -55.5800
    },
    {
        id: 8,
        name: "Assaí Atacadista",
        address: "Rua Fernando Corrêa da Costa, 4875 – Coxipó",
        phone: "-",
        hours: "Durante horário de funcionamento",
        type: "loja",
        image: "🛒",
        lat: -15.6050,
        lng: -55.5750
    },
    // COOPERATIVAS
    {
        id: 9,
        name: "ACAMARCA",
        address: "Av. das Palmeiras, s/n (perto da AMBEV) – Novo Tempo",
        phone: "(65) 9613-1082 / 99613-1082",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.6150,
        lng: -55.5700
    },
    {
        id: 10,
        name: "COOREPAM",
        address: "Rua 59, Quadra 236, s/n (2ª etapa) – Pedra 90",
        phone: "(65) 3665-1399 / 99275-5954",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.5600,
        lng: -55.6300
    },
    {
        id: 11,
        name: "AMAS-MT",
        address: "Rua Fenelon Müller, 704 – Dom Aquino",
        phone: "(65) 3321-9820",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.5850,
        lng: -55.5900
    },
    {
        id: 12,
        name: "COOPER MAR",
        address: "Rua Balneário Letícia, km 6 – Várzea do Quilombo",
        phone: "(65) 9635-1490",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.6300,
        lng: -55.6000
    },
    {
        id: 13,
        name: "COOPERCBA",
        address: "Avenida Antártica, s/n – Núcleo Habitacional Sucuri",
        phone: "-",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.5750,
        lng: -55.5650
    },
    // ELETRÔNICOS, PILHAS E ÓLEO
    {
        id: 14,
        name: "Ecodescarte",
        address: "R. Miranda Reis, 151 – Poção",
        phone: "(65) 99322-6174",
        hours: "Seg-Sex: 8h-18h",
        type: "empresa",
        image: "🖥️",
        lat: -15.6200,
        lng: -55.5600
    },
    {
        id: 15,
        name: "Associação Paz e Bem",
        address: "Av. Joaquim Louzada – Novo Colorado",
        phone: "(65) 99923-9920",
        hours: "Seg-Sáb: 8h-17h",
        type: "cooperativa",
        image: "♻️",
        lat: -15.6100,
        lng: -55.5500
    },
    {
        id: 16,
        name: "Associação Espírita Wantuil de Freitas",
        address: "Av. Auta de Souza, 53 – Primeiro de Março",
        phone: "(65) 3649-5851",
        hours: "Seg-Sáb: 8h-17h",
        type: "empresa",
        image: "🛢️",
        lat: -15.5680,
        lng: -55.5750
    },
    {
        id: 17,
        name: "Atacus Reciclagem",
        address: "Av. V 60 – Distrito Industrial",
        phone: "(65) 9219-0257",
        hours: "Seg-Sex: 7h-17h",
        type: "empresa",
        image: "🖥️",
        lat: -15.6350,
        lng: -55.6100
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
        card.style.cursor = 'pointer';
        
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
        
        // Event listener para atualizar o mapa ao clicar
        card.addEventListener('click', () => {
            updateMapLocation(point);
            
            // Remover classe "selected" de todos os cards
            document.querySelectorAll('.point-card').forEach(c => {
                c.classList.remove('selected');
            });
            
            // Adicionar classe "selected" ao card clicado
            card.classList.add('selected');
            
            // Scroll para o mapa
            document.querySelector('.map-section').scrollIntoView({ behavior: 'smooth' });
        });
        
        pointsGrid.appendChild(card);
    });
}

// ==================== ATUALIZAR LOCALIZAÇÃO DO MAPA ====================
function updateMapLocation(point) {
    const mapIframe = document.getElementById('mapIframe');
    // Gerar nova URL do Google Maps com as coordenadas do ponto
    const newMapUrl = `https://maps.google.com/maps?q=${point.lat},${point.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    
    mapIframe.src = newMapUrl;
    
    // Atualizar informações do mapa
    const mapInfo = document.querySelector('.map-info');
    if (mapInfo) {
        mapInfo.textContent = `📍 ${point.name} - ${point.address}`;
    }
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
