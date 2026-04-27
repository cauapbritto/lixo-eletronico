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
        lng: -55.5850,
    mapsLink: "https://www.google.com/maps/place/Ecoponto+Regi%C3%A3o+Central+-+ReciclaMT/@-15.6012702,-56.1363851,14z/data=!4m10!1m2!2m1!1sEcoponto+ReciclaMT!3m6!1s0x939db100019601f3:0x1419e75dc1b27d60!8m2!3d-15.6012702!4d-56.1003362!15sChNFY29wb250byBSZWNpY2xhR0VNWhUiE2Vjb3BvbnRvIHJlY2ljbGFnZW2SARByZWN5Y2xpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDI1c2NHRldRbkJrUmxaSFdUSmFSMUpIU20xUmF6UXdWVVZuTkZOc1JSQULgAQD6AQQIABAr!16s%2Fg%2F11ywdb49ny?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.6250,
        mapsLink: "https://www.google.com/maps?sca_esv=0c88d25d31adaebc&rlz=1C1CHZN_pt-BRBR1194BR1194&output=search&q=Pantanal+Shopping&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRdynpPJ66TDyFgZmq_XFwppazcD3UADNx6r4GDDz3huEPmSTRGm-9dyANZiv74SedoDsM8tNy_BwDMtzE8mPny03AtaD661oSSUbjyWvzYlluKAc9VvYXErkG6cuYr4IlZn7zHvKYAexppDM3RpZjUX0WNDA-4-CoKEakvUjTanFrWhOxjZ18Fy_aUa7KDGdNSyOd2A&entry=mc&ved=1t:200715&ictx=111"
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
        lng: -55.5950,
        mapsLink: "https://www.google.com/maps/place/Shopping+Popular/@-15.6132736,-56.1366697,13z/data=!4m10!1m2!2m1!1sShopping+Popular!3m6!1s0x939db194dd3ec90b:0xe9e5e7b99a9406f8!8m2!3d-15.6132736!4d-56.1016508!15sChBTaG9wcGluZyBQb3B1bGFyWhIiEHNob3BwaW5nIHBvcHVsYXKSAQ9zaG9wcGluZ19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFNR0ZITmxKUkVBReABAPoBBAgpEBk!16s%2Fg%2F11b6hlpl0q?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.6050,
        mapsLink: "https://www.google.com/maps/place/Shopping+Estação+Cuiabá/@-15.5831851,-56.0966451,14z/data=!4m10!1m2!2m1!1zU2hvcHBpbmcgRXN0YcOnw6Nv!3m6!1s0x939db22967041d05:0xd7e7451568dc588b!8m2!3d-15.5901722!4d-56.1206927!15sChJTaG9wcGluZyBFc3Rhw6fDo29aFCISc2hvcHBpbmcgZXN0YcOnw6NvkgEPc2hvcHBpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIwMWNtRkdRVEpQUlhSclZrZE9TMVJUTVdwV2JVWmFVa2RvVkdKR1JSQULgAQD6AQQIGxA9!16s%2Fg%2F11gg_gf8kn?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.5800,
        mapsLink: "https://www.google.com/maps/search/atacad%C3%A3o/@-15.5901722,-56.1382022,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.5750,
        mapsLink: "https://www.google.com/maps/search/Assa%C3%AD+Atacadista/@-15.5901722,-56.1382022,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.5700,
        mapsLink: "https://www.google.com/maps/place/ACAMARC+RECICLAGEM+-+CUIAB%C3%81/@-15.5362719,-56.1614796,17z/data=!3m1!4b1!4m6!3m5!1s0x939db56989e0bfcb:0xdca0ed4cf0568f5d!8m2!3d-15.5362719!4d-56.1614796!16s%2Fg%2F11rk5t9fvc?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.6300,
        mapsLink: "https://www.google.com/maps/place/COOREPAM+-+COOPERATIVA+ALTERNATIVA+DE+CATADORES,+RECICLAGEM+E+PRESERVA%C3%87%C3%83O+DO+MEIO+AMBIENTE+DO+ESTADO+DE+MATO+GROSSO/@-15.6315846,-55.9434939,17z/data=!3m1!4b1!4m6!3m5!1s0x939da538701c7c55:0x3f677d356f24c781!8m2!3d-15.6315846!4d-55.9434939!16s%2Fg%2F11j5hmfw4f?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.5600,
        mapsLink: "https://www.google.com/maps/place/Ecodescarte+Reciclagem+de+Eletr%C3%B4nicos/@-15.6084599,-56.0881408,17z/data=!3m1!4b1!4m6!3m5!1s0x939db1c343d4e737:0x9b410f3cb97940b9!8m2!3d-15.6084599!4d-56.0881408!16s%2Fg%2F11b8v9jgkb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        lng: -55.6100,
        mapsLink: "https://www.google.com/maps/place/ACAMARC+RECICLAGEM+-+CUIAB%C3%81/@-15.5362719,-56.1614796,17z/data=!3m1!4b1!4m6!3m5!1s0x939db56989e0bfcb:0xdca0ed4cf0568f5d!8m2!3d-15.5362719!4d-56.1614796!16s%2Fg%2F11rk5t9fvc?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
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
        
        // Construir URL do Google Maps com coordenadas
        const mapsUrl = point.mapsLink 
    ? point.mapsLink 
    : `https://www.google.com/maps/search/?api=1&query=${point.lat},${point.lng}`;
        
        card.innerHTML = `
            <div class="point-emoji">${point.image}</div>
            <h3>${point.name}</h3>
            <p><strong>📍 Endereço:</strong><br>${point.address}</p>
            <p><strong>📞 Telefone:</strong><br><a href="tel:${point.phone.replace(/\D/g, '')}" class="phone-link">${point.phone}</a></p>
            <p><strong>⏰ Funcionamento:</strong><br>${point.hours}</p>
            <span class="point-badge">${typeLabel[point.type] || point.type}</span>
            <a href="${mapsUrl}" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="btn-location"
               aria-label="Abrir localização de ${point.name} no Google Maps">
                📍 Ir à localização
            </a>
        `;
        
        pointsGrid.appendChild(card);
    });
}

// ==================== FUNÇÃO DE MAPA REMOVIDA ====================
// A função updateMapLocation(point) foi removida.
// Os pontos de coleta agora abrem o Google Maps em nova aba através do botão "Ir à localização"

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

// ==================== VERIFICAR SE ELEMENTOS DOM EXISTEM ====================
function checkDOMElements() {
    const missing = [];
    if (!pointsGrid) missing.push('pointsGrid');
    if (!searchInput) missing.push('searchInput');
    if (!filterSelect) missing.push('filterSelect');
    if (!menuToggle) missing.push('menuToggle');
    if (!navMenu) missing.push('navMenu');
    if (!ctaButton) missing.push('ctaButton');
    
    if (missing.length > 0) {
        console.error('❌ Elementos DO DOM não encontrados:', missing);
        return false;
    }
    return true;
}

// Event listeners para busca e filtro (apenas se elementos existem)
if (searchInput) searchInput.addEventListener('input', filterAndSearch);
if (filterSelect) filterSelect.addEventListener('change', filterAndSearch);

// ==================== MENU RESPONSIVO ====================
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Atualizar aria-expanded
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
    });
}

// Fechar menu ao clicar em um link
if (navLinks && navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (menuToggle) menuToggle.classList.remove('active');
            if (navMenu) navMenu.classList.remove('active');
            if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

// ==================== BOTÃO CTA ====================
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const pontosSection = document.getElementById('pontos');
        if (pontosSection) {
            pontosSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Iniciando EcoPontos - DOMContentLoaded disparado');
    
    // Verificar se elementos DOM críticos existem
    if (!checkDOMElements()) {
        console.error('❌ ERRO: Elementos DOM críticos não encontrados. Abortando inicialização.');
        return;
    }
    
    // 1. Renderizar todos os pontos na primeira carga
    try {
        renderPoints(collectionPoints);
        console.log('✓ Pontos de coleta renderizados com sucesso');
    } catch (e) {
        console.error('❌ Erro ao renderizar pontos:', e);
    }
    
    // 2. Adicionar classe ativa ao link de navegação baseado na URL
    updateActiveNavLink();
    
    // 3. Restaurar filtros salvos se localStorage disponível
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
    
    // 4. ==================== MOSTRAR SEÇÕES - SUPORTE PARA SCROLL REVEAL ====================
    // As seções são VISÍVEIS por padrão. Não as tornamos invisíveis (opacity: 0).
    // Isso garante que sempre apareçam, até em mobile com problemas de IntersectionObserver.
    // IntersectionObserver será usado apenas para animação adicional (fade-in suave) se necessário.
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '50px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // APENAS animar, não tornar visível (já está visível por padrão)
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar seções para animações suaves, mas NÃO as torna invisíveis
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // IMPORTANTE: Seções já começam VISÍVEIS (opacity: 1 por padrão em CSS)
        // Apenas adicionar transição para animação suave
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
    
    console.log('✓ Seções visíveis e animações de scroll reveal configuradas para', sections.length, 'seções');
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
        if (searchInput) localStorage.setItem('lastSearch', searchInput.value);
        if (filterSelect) localStorage.setItem('lastFilter', filterSelect.value);
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
