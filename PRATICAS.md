# 🎓 Guia de Boas Práticas - EcoPontos

Um documento contendo as convenções, padrões e boas práticas usadas no projeto EcoPontos.

## 📋 Índice
1. [HTML](#html)
2. [CSS](#css)
3. [JavaScript](#javascript)
4. [Nomenclatura](#nomenclatura)
5. [Organização](#organização)
6. [Performance](#performance)
7. [Acessibilidade](#acessibilidade)

---

## 🏗️ HTML

### Estrutura Semântica
✅ **Use elementos semânticos:**
```html
<!-- ✅ BOM -->
<header>
    <nav><!-- menu --></nav>
</header>
<main>
    <section id="sobre"></section>
</main>
<footer><!-- contato --></footer>

<!-- ❌ EVITAR -->
<div class="header">
    <div class="nav"><!-- menu --></div>
</div>
```

### Atributos
✅ **Sempre use:**
- `lang` no `<html>`
- `charset` no `<meta>`
- `viewport` para responsividade
- `title` significativo

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EcoPontos - Coleta de Lixo Eletrônico</title>
</head>
```

### Comentários
✅ **Use para seções principais:**
```html
<!-- ==================== HEADER ==================== -->
<header class="header">
    <!-- conteúdo -->
</header>

<!-- ==================== SEÇÃO PRINCIPAL ==================== -->
<section id="pontos">
    <!-- conteúdo -->
</section>
```

### IDs vs Classes
✅ **Use IDs para:**
- Seções principais (`id="pontos"`, `id="sobre"`)
- Elementos únicos (`id="ctaButton"`, `id="menuToggle"`)

✅ **Use Classes para:**
- Estilos reutilizáveis (`.point-card`, `.item-icon`)
- Componentes múltiplos (`.nav-link`, `.button`)

---

## 🎨 CSS

### Organização
✅ **Estrutura do arquivo:**
```css
/* 1. Variáveis e Reset */
:root { --color-primary: #2ecc71; }
* { box-sizing: border-box; }

/* 2. Base e Tipografia */
body { font-family: var(--font-primary); }

/* 3. Componentes (em ordem lógica) */
.header { ... }
.nav { ... }
.hero { ... }

/* 4. Responsividade */
@media (max-width: 768px) { ... }

/* 5. Acessibilidade */
@media (prefers-reduced-motion: reduce) { ... }
```

### Variáveis CSS
✅ **Sempre use variáveis para:**
```css
:root {
    /* Cores */
    --color-primary: #2ecc71;
    
    /* Espaçamento */
    --spacing-md: 1.5rem;
    
    /* Tipografia */
    --font-size-lg: 1.125rem;
    
    /* Efeitos */
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
}
```

### Nomenclatura de Classes
✅ **Use BEM (Block Element Modifier):**
```css
/* ✅ BOM */
.point-card { }
.point-card__title { }
.point-card--active { }

/* ❌ EVITAR */
.card { } /* Muito genérico */
.card-title { } /* Sem estrutura */
.card_active { } /* Usar -- não _ */
```

### Flexbox vs Grid
✅ **Use Flexbox para:**
- Layouts 1D (linha ou coluna)
- Alinhamento de itens
- Distribuição de espaço

```css
.nav-menu {
    display: flex;
    gap: var(--spacing-md);
    align-items: center;
}
```

✅ **Use Grid para:**
- Layouts 2D (linhas e colunas)
- Estruturas complexas

```css
.points-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}
```

### Responsive Design
✅ **Mobile-first approach:**
```css
/* Mobile por padrão */
.container {
    max-width: 100%;
    padding: 1rem;
}

/* Tablet e acima */
@media (min-width: 768px) {
    .container {
        max-width: 750px;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .container {
        max-width: 1200px;
    }
}
```

### Animações
✅ **Prefira CSS over JavaScript:**
```css
/* ✅ Bom (performático) */
.card {
    transition: transform 0.3s ease;
}
.card:hover {
    transform: translateY(-8px);
}

/* ❌ Evitar (menos eficiente) */
document.querySelector('.card').animate({...});
```

### Comentários
✅ **Use para seções principais:**
```css
/* ==================== HEADER ==================== */
.header {
    background-color: var(--color-white);
    box-shadow: var(--shadow);
}

/* ==================== NAVEGAÇÃO ==================== */
.nav-menu {
    display: flex;
}
```

---

## 🚀 JavaScript

### Estrutura de Arquivo
✅ **Organize em seções:**
```javascript
// ==================== CONSTANTES E DADOS ====================
const collectionPoints = [...]

// ==================== ELEMENTOS DO DOM ====================
const pointsGrid = document.getElementById('pointsGrid')

// ==================== FUNÇÕES ====================
function renderPoints(points) { ... }
function filterAndSearch() { ... }

// ==================== EVENT LISTENERS ====================
searchInput.addEventListener('input', filterAndSearch);

// ==================== INICIALIZAÇÃO ====================
document.addEventListener('DOMContentLoaded', () => { ... })
```

### Seleção do DOM
✅ **Prefira ID ou classe específica:**
```javascript
/* ✅ BOM */
const button = document.getElementById('searchButton');
const cards = document.querySelectorAll('.point-card');

/* ❌ EVITAR */
const button = document.querySelector('button'); // Muito genérico
const firstDiv = document.querySelector('div'); // Indefinido
```

### Nomes de Variáveis
✅ **Use nomes descritivos:**
```javascript
/* ✅ BOM */
const searchInput = document.getElementById('searchInput');
const collectionPoints = [];
const isMenuOpen = false;

/* ❌ EVITAR */
const x = document.getElementById('input');
const data = [];
const open = false;
```

### Funções
✅ **Use função com um propósito:**
```javascript
// ✅ BOM - Uma função, uma responsabilidade
function filterandSearch() {
    const searchTerm = searchInput.value;
    const filtered = collectionPoints.filter(point => 
        point.name.toLowerCase().includes(searchTerm)
    );
    renderPoints(filtered);
}

// ❌ EVITAR - Múltiplas responsabilidades
function doEverything() {
    // buscar, filtrar, renderizar, salvar...
}
```

### Comments
✅ **Use comentários significativos:**
```javascript
// ==================== BUSCA E FILTRO ====================
function filterAndSearch() {
    // Obter valor do input
    const searchTerm = searchInput.value.toLowerCase();
    
    // Filtrar pontos por nome e tipo
    let filtered = collectionPoints.filter(point => {
        const matchSearch = point.name.toLowerCase()
            .includes(searchTerm);
        const matchFilter = filterType === '' || 
            point.type === filterType;
        return matchSearch && matchFilter;
    });
    
    // Renderizar resultados
    renderPoints(filtered);
}
```

### Loops
✅ **Use método apropriado:**
```javascript
/* ✅ BOM */
collectionPoints.forEach((point, index) => {
    createCard(point, index);
});

const names = collectionPoints.map(p => p.name);

const loja =llectionPoints.find(p => p.type === 'loja');

/* ❌ EVITAR */
for (let i = 0; i < collectionPoints.length; i++) {
    createCard(collectionPoints[i], i);
}
```

### Event Listeners
✅ **Sempre remova listeners se necessário:**
```javascript
// ✅ BOM
function initMenu() {
    // Event listener
    menuToggle.addEventListener('click', toggleMenu);
    
    // Se necessário remover depois:
    // menuToggle.removeEventListener('click', toggleMenu);
}

// ❌ EVITAR - Memory leak
menuToggle.onclick = toggleMenu; // Substitui listeners
```

### Validação
✅ **Valide sempre entradas:**
```javascript
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Usar antes de processar
if (validateEmail(userInput)) {
    processInput(userInput);
} else {
    showError('Email inválido');
}
```

---

## 📛 Nomenclatura

### Convenção de Naming
✅ **Padrões em EcoPontos:**

| Tipo | Exemplo | Padrão |
|------|---------|--------|
| HTML IDs | `pointsGrid` | camelCase |
| HTML Classes | `.point-card` | kebab-case |
| JavaScript Vars | `searchInput` | camelCase |
| JavaScript Funcs | `renderPoints()` | camelCase |
| JavaScript Const | `COLORS`, `MAX_SIZE` | UPPER_SNAKE |
| CSS Variables | `--color-primary` | kebab-case |

### Prefixos Úteis
✅ **Use prefixos padrão:**
```javascript
const is* = false;              // booleanos
const has* = true;             // booleanos
const *Count = 0;              // números
const *List = [];              // arrays
const *Map = {};               // objetos
const $element = document...;  // jQuery style (opcional)
```

---

## 📁 Organização

### Estrutura de Pasta
```
projeto/
├── index.html           # Arquivo principal
├── config.json         # Configurações
├── README.md           # Documentação
├── css/
│   └── styles.css      # Todos os estilos
├── js/
│   ├── script.js       # Funções principais
│   └── extensoes.js    # Funcionalidades opcionais
└── img/                # Imagens e assets
```

### Arquivo CSS Único vs Múltiplos
❓ **Em EcoPontos:** Um arquivo `styles.css` é ideal para:
- Projeto pequeno/médio (< 100 KB)
- Poucos componentes
- Fácil manutenção

✅ **Considere múltiplos para:**
- Projeto grande (> 500 KB)
- Muitos componentes
- Equipe grande

### Arquivo JS Único vs Múltiplos
✅ **Em EcoPontos:** Dois arquivos:
- `script.js` - Funcionalidades essenciais
- `extensoes.js` - Opcionais

---

## ⚡ Performance

### CSS
✅ **Boas práticas:**
```css
/* ✅ BOM - Específico */
.point-card { }

/* ❌ EVITAR - Seletor universal */
* { }
div.card { }  /* Muito específico */

/* ❌ EVITAR - !important demais */
.color { color: red !important; }
```

### JavaScript
✅ **Cache seletores:**
```javascript
/* ✅ BOM */
const button = document.getElementById('btn');
button.addEventListener('click', handler);
button.addEventListener('focus', handler);

/* ❌ EVITAR - Busca DOM múltiplas vezes */
document.getElementById('btn').addEventListener('click', handler);
document.getElementById('btn').addEventListener('focus', handler);
```

### Lazy Loading
✅ **Para imagens grandes:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
});
```

---

## ♿ Acessibilidade

### HTML
✅ **Sempre use:**
```html
<!-- Labels para inputs -->
<label for="search">Buscar:</label>
<input id="search" type="text">

<!-- Alt em imagens -->
<img src="logo.png" alt="EcoPontos - Coleta de Lixo Eletrônico">

<!-- Semantic HTML -->
<nav>, <article>, <section>, <button> (não <div>)

<!-- ARIA quando necessário -->
<div role="button" aria-pressed="false"></div>
```

### CSS
✅ **Contraste:**
```css
/* Mínimo WCAG AA: 4.5:1 para texto */
color: #333;              /* ✅ Bom */
background: #fff;

color: #999;              /* ❌ Baixo contraste */
background: #fff;
```

### JavaScript
✅ **Considere:**
```javascript
// Teste com teclado (Tab, Enter, Space)
// use semantic elements (button, a, input)
// Adicione feedback visual
// Teste com leitores de tela
```

---

## 🔒 Segurança

### Input Validation
✅ **Sempre valide:**
```javascript
// ✅ BOM
function searchPoints(input) {
    if (!input || input.length < 2) return [];
    const sanitized = input.trim().toLowerCase();
    return points.filter(p => p.name.includes(sanitized));
}

// ❌ EVITAR - Sem validação
function search(input) {
    return points.filter(p => p.name.includes(input));
}
```

### XSS Prevention
✅ **Escape output:**
```javascript
// ✅ BOM - Texto é escapado automaticamente
element.textContent = userInput;

// ❌ EVITAR - Pode causar XSS
element.innerHTML = userInput;
```

---

## 🧪 Testes

### Checklist para Nova Feature
- [ ] HTML semântico
- [ ] Funciona em mobile
- [ ] Sem erros no console
- [ ] Acessível via teclado
- [ ] Tem testes básicos

---

## 📚 Referências Úteis

- [MDN Web Docs](https://developer.mozilla.org/)
- [Can I Use](https://caniuse.com/)
- [CSS Tricks](https://css-tricks.com/)
- [WCAG Guidelines](https://www.w3.org/WAI/)

---

## ✅ Checklist Antes de Commit

- [ ] Código segue convenções do projeto
- [ ] Sem erros no console
- [ ] Responsivo (testado em 3 breakpoints)
- [ ] Acessível (navegação por teclado)
- [ ] Comentado apropriadamente
- [ ] Performance aceitável
- [ ] Testes passam

---

**Última atualização:** 9 de Abril de 2026
**Versão:** 1.0.0
