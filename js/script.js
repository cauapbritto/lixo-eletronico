// Pontos de coleta
const collectionPoints = [
    // Ecopontos públicos
    {
        id: 1,
        name: "Ecoponto ReciclaMT (Piloto)",
        address: "Lateral da Câmara Municipal de Cuiabá, Praça Barão de Melgaço, s/n – Centro",
        phone: "",
        hours: "Seg a sex, 8h às 18h",
        type: "publica",
        lat: -15.5939,
        lng: -55.5850,
        mapsLink: "https://www.google.com/maps/place/Ecoponto+Regi%C3%A3o+Central+-+ReciclaMT/@-15.6012702,-56.1363851,14z/data=!4m10!1m2!2m1!1sEcoponto+ReciclaMT!3m6!1s0x939db100019601f3:0x1419e75dc1b27d60!8m2!3d-15.6012702!4d-56.1003362!15sChNFY29wb250byBSZWNpY2xhR0VNWhUiE2Vjb3BvbnRvIHJlY2ljbGFnZW2SARByZWN5Y2xpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDI1c2NHRldRbkJrUmxaSFdUSmFSMUpIU20xUmF6UXdWVVZuTkZOc1JSQULgAQD6AQQIABAr!16s%2Fg%2F11ywdb49ny?entry=ttu&g_ep=EgoyMDI2MDQwOC4wIKXMDSoASAFQAw%3D%3D"
    },

    // Shoppings e mercados
    {
        id: 3,
        name: "Pantanal Shopping",
        address: "Av. Historiador Rubens de Mendonça, 3300 – Jardim Aclimação (CPA)",
        phone: "",
        hours: "Horário de funcionamento do shopping",
        type: "loja",
        lat: -15.5650,
        lng: -55.6250,
        mapsLink: "https://www.google.com/maps?sca_esv=0c88d25d31adaebc&rlz=1C1CHZN_pt-BRBR1194BR1194&output=search&q=Pantanal+Shopping&source=lnms&fbs=ADc_l-acAb_3MMOAUx0zmbUpgBqRdynpPJ66TDyFgZmq_XFwppazcD3UADNx6r4GDDz3huEPmSTRGm-9dyANZiv74SedoDsM8tNy_BwDMtzE8mPny03AtaD661oSSUbjyWvzYlluKAc9VvYXErkG6cuYr4IlZn7zHvKYAexppDM3RpZjUX0WNDA-4-CoKEakvUjTanFrWhOxjZ18Fy_aUa7KDGdNSyOd2A&entry=mc&ved=1t:200715&ictx=111"
    },
    {
        id: 4,
        name: "Shopping Popular",
        address: "Av. Beira Rio – Dom Aquino",
        phone: "",
        hours: "Seg a sáb, 7h às 19h",
        type: "loja",
        lat: -15.5750,
        lng: -55.5950,
        mapsLink: "https://www.google.com/maps/place/Shopping+Popular/@-15.6132736,-56.1366697,13z/data=!4m10!1m2!2m1!1sShopping+Popular!3m6!1s0x939db194dd3ec90b:0xe9e5e7b99a9406f8!8m2!3d-15.6132736!4d-56.1016508!15sChBTaG9wcGluZyBQb3B1bGFyWhIiEHNob3BwaW5nIHBvcHVsYXKSAQ9zaG9wcGluZ19jZW50ZXKaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTjFNR0ZITmxKUkVBReABAPoBBAgpEBk!16s%2Fg%2F11b6hlpl0q?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 5,
        name: "Shopping Estação",
        address: "Av. Miguel Sutil, 9300 – Santa Rosa",
        phone: "",
        hours: "Horário de funcionamento do shopping",
        type: "loja",
        lat: -15.6100,
        lng: -55.6050,
        mapsLink: "https://www.google.com/maps/place/Shopping+Estação+Cuiabá/@-15.5831851,-56.0966451,14z/data=!4m10!1m2!2m1!1zU2hvcHBpbmcgRXN0YcOnw6Nv!3m6!1s0x939db22967041d05:0xd7e7451568dc588b!8m2!3d-15.5901722!4d-56.1206927!15sChJTaG9wcGluZyBFc3Rhw6fDo29aFCISc2hvcHBpbmcgZXN0YcOnw6NvkgEPc2hvcHBpbmdfY2VudGVymgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDIwMWNtRkdRVEpQUlhSclZrZE9TMVJUTVdwV2JVWmFVa2RvVkdKR1JSQULgAQD6AQQIGxA9!16s%2Fg%2F11gg_gf8kn?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 7,
        name: "Atacadão",
        address: "Unidades em Coxipó e Jardim Florianópolis",
        phone: "",
        hours: "Horário de funcionamento da loja",
        type: "loja",
        lat: -15.6000,
        lng: -55.5800,
        mapsLink: "https://www.google.com/maps/search/atacad%C3%A3o/@-15.5901722,-56.1382022,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 8,
        name: "Assaí Atacadista",
        address: "Rua Fernando Corrêa da Costa, 4875 – Coxipó",
        phone: "",
        hours: "Horário de funcionamento da loja",
        type: "loja",
        lat: -15.6050,
        lng: -55.5750,
        mapsLink: "https://www.google.com/maps/search/Assa%C3%AD+Atacadista/@-15.5901722,-56.1382022,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },

    // Cooperativas
    {
        id: 9,
        name: "ACAMARCA",
        address: "Av. das Palmeiras, s/n (perto da AMBEV) – Novo Tempo",
        phone: "(65) 9613-1082 / 99613-1082",
        hours: "Seg a sáb, 8h às 17h",
        type: "cooperativa",
        lat: -15.6150,
        lng: -55.5700,
        mapsLink: "https://www.google.com/maps/place/ACAMARC+RECICLAGEM+-+CUIAB%C3%81/@-15.5362719,-56.1614796,17z/data=!3m1!4b1!4m6!3m5!1s0x939db56989e0bfcb:0xdca0ed4cf0568f5d!8m2!3d-15.5362719!4d-56.1614796!16s%2Fg%2F11rk5t9fvc?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 10,
        name: "COOREPAM",
        address: "Rua 59, Quadra 236, s/n (2ª etapa) – Pedra 90",
        phone: "(65) 3665-1399 / 99275-5954",
        hours: "Seg a sáb, 8h às 17h",
        type: "cooperativa",
        lat: -15.5600,
        lng: -55.6300,
        mapsLink: "https://www.google.com/maps/place/COOREPAM+-+COOPERATIVA+ALTERNATIVA+DE+CATADORES,+RECICLAGEM+E+PRESERVA%C3%87%C3%83O+DO+MEIO+AMBIENTE+DO+ESTADO+DE+MATO+GROSSO/@-15.6315846,-55.9434939,17z/data=!3m1!4b1!4m6!3m5!1s0x939da538701c7c55:0x3f677d356f24c781!8m2!3d-15.6315846!4d-55.9434939!16s%2Fg%2F11j5hmfw4f?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },

    // Empresas recicladoras
    {
        id: 14,
        name: "Ecodescarte",
        address: "R. Miranda Reis, 151 – Poção",
        phone: "(65) 99322-6174",
        hours: "Seg a sex, 8h às 18h",
        type: "empresa",
        lat: -15.6200,
        lng: -55.5600,
        mapsLink: "https://www.google.com/maps/place/Ecodescarte+Reciclagem+de+Eletr%C3%B4nicos/@-15.6084599,-56.0881408,17z/data=!3m1!4b1!4m6!3m5!1s0x939db1c343d4e737:0x9b410f3cb97940b9!8m2!3d-15.6084599!4d-56.0881408!16s%2Fg%2F11b8v9jgkb?entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D"
    },
    {
        id: 17,
        name: "Atacus Reciclagem",
        address: "Av. V 60 – Distrito Industrial",
        phone: "(65) 9219-0257",
        hours: "Seg a sex, 7h às 17h",
        type: "empresa",
        lat: -15.6350,
        lng: -55.6100,
        mapsLink: "https://www.google.com/maps/search/?api=1&query=Atacus+Reciclagem+Cuiab%C3%A1"
    }
];


const typeLabels = {
    publica: 'Ecoponto público',
    loja: 'Comércio',
    cooperativa: 'Cooperativa',
    empresa: 'Empresa recicladora'
};

const pointsGrid = document.getElementById('pointsGrid');
const searchInput = document.getElementById('searchInput');
const filterSelect = document.getElementById('filterSelect');
const resultsCount = document.getElementById('resultsCount');
const noResults = document.getElementById('noResults');
const clearFilters = document.getElementById('clearFilters');
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

function icon(name) {
    return `<svg class="icon" aria-hidden="true"><use href="#i-${name}"/></svg>`;
}

// Transforma "(65) 3665-1399 / 99275-5954" em links clicáveis, um por número.
function phoneLinks(phone) {
    return phone
        .split('/')
        .map(part => part.trim())
        .filter(part => /\d/.test(part))
        .map(part => {
            let digits = part.replace(/\D/g, '');
            if (digits.length <= 9) digits = '65' + digits;
            return `<a href="tel:+55${digits}">${part}</a>`;
        })
        .join(' · ');
}

function normalize(text) {
    return text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
}

function renderPoints(points) {
    pointsGrid.innerHTML = '';
    noResults.hidden = points.length > 0;
    resultsCount.textContent = points.length === 1
        ? '1 local encontrado'
        : `${points.length} locais encontrados`;

    points.forEach(point => {
        const card = document.createElement('article');
        card.className = 'point-card';

        const mapsUrl = point.mapsLink
            || `https://www.google.com/maps/search/?api=1&query=${point.lat},${point.lng}`;
        const phone = phoneLinks(point.phone);

        card.innerHTML = `
            <span class="point-type">${typeLabels[point.type] || point.type}</span>
            <h3>${point.name}</h3>
            <ul class="point-details">
                <li>${icon('pin')}<span>${point.address}</span></li>
                <li>${icon('clock')}<span>${point.hours}</span></li>
                ${phone ? `<li>${icon('call')}<span>${phone}</span></li>` : ''}
            </ul>
            <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer" class="point-map">
                Abrir no mapa ${icon('arrow')}
                <span class="sr-only">(${point.name}, abre em nova aba)</span>
            </a>
        `;

        pointsGrid.appendChild(card);
    });
}

function filterAndSearch() {
    const term = normalize(searchInput.value.trim());
    const type = filterSelect.value;

    const filtered = collectionPoints.filter(point => {
        const matchesTerm = !term
            || normalize(point.name).includes(term)
            || normalize(point.address).includes(term);
        const matchesType = !type || point.type === type;
        return matchesTerm && matchesType;
    });

    renderPoints(filtered);
    saveFilters();
}

function saveFilters() {
    try {
        localStorage.setItem('lastSearch', searchInput.value);
        localStorage.setItem('lastFilter', filterSelect.value);
    } catch (e) {}
}

function restoreFilters() {
    try {
        searchInput.value = localStorage.getItem('lastSearch') || '';
        const lastFilter = localStorage.getItem('lastFilter') || '';
        if (typeLabels[lastFilter]) filterSelect.value = lastFilter;
    } catch (e) {}
}

searchInput.addEventListener('input', filterAndSearch);
filterSelect.addEventListener('change', filterAndSearch);

clearFilters.addEventListener('click', () => {
    searchInput.value = '';
    filterSelect.value = '';
    filterAndSearch();
    searchInput.focus();
});

// Menu mobile
function closeMenu() {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
}

menuToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
        menuToggle.focus();
    }
});

// Destaca no menu a seção visível
function updateActiveNavLink() {
    const offset = window.scrollY + 120;
    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        const isActive = section
            && offset >= section.offsetTop
            && offset < section.offsetTop + section.offsetHeight;
        link.classList.toggle('active', Boolean(isActive));
    });
}

window.addEventListener('scroll', updateActiveNavLink, { passive: true });

// Inicialização
document.getElementById('statPoints').textContent = collectionPoints.length;
document.getElementById('year').textContent = new Date().getFullYear();
restoreFilters();
filterAndSearch();
updateActiveNavLink();
