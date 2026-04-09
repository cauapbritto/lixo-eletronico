# 🧪 GUIA DE TESTES DAS CORREÇÕES

**Objetivo:** Validar que todas as correções de qualidade foram implementadas corretamente e sem regressões de funcionalidade.

---

## 1️⃣ TESTES DE ACESSIBILIDADE

### ✅ Teste 1.1: Labels nos Inputs
**O que testar:**
- [ ] Abrir DevTools (F12)
- [ ] Ir para "Elements" > "Accessibility" pane
- [ ] Clicar no input de busca
- [ ] Verificar se há um `<label>` associado com `for="searchInput"`

**Comando alternativo (Console):**
```javascript
// Implementar no console para verificar
console.log(
    document.getElementById('searchInput') // deve existir
        ? 'Input encontrado ✅' 
        : 'Input não encontrado ❌'
);
```

**Resultado esperado:** ✅ Input tem label associado

---

### ✅ Teste 1.2: ARIA Attributes no Menu
**O que testar:**
- [ ] DevTools > Elements
- [ ] Procurar o botão com `id="menuToggle"`
- [ ] Verificar se tem atributos: `aria-label`, `aria-expanded`, `aria-controls`

**Verificar visualmente:**
```html
<!-- Deve estar assim -->
<button id="menuToggle" 
    aria-label="Menu de navegação" 
    aria-expanded="false"
    aria-controls="nav-menu">
```

**Resultado esperado:** ✅ Todos os atributos ARIA presentes

---

### ✅ Teste 1.3: Screen Reader (NVDA / VoiceOver)
**Em Windows (NVDA):**
```bash
1. Baixar NVDA (free, em português)
2. Abrir a página
3. Pressionar Tab múltiplas vezes
4. NVDA deve anunciar:
   - "Menu de navegação, botão, não expandido"
   - "Buscar ponto de coleta, campo de edição"
   - "Filtrar por tipo, combobox"
```

**Em Mac (VoiceOver - built-in):**
```bash
1. Pressionar Cmd+F5 para ativar
2. Navegar com VO+: (seta direita)
3. Verificar se texto escondido (sr-only) não é lido
```

**Resultado esperado:** ✅ Screen reader funciona corretamente

---

### ✅ Teste 1.4: Navegação por Teclado
**Procedimento:**
1. [ ] Abrir página em navegador
2. [ ] Pressionar `Tab` repetidamente
3. [ ] Verificar se foco é visível em cada elemento
4. [ ] Testar em sequência: Menu → Search → Filter → Points → Footer

**Verificar:**
- [ ] Focus é visível (outline/border)
- [ ] Ordem de tabulação faz sentido (esquerda → direita, topo → base)
- [ ] Botões escondem o outline quando hamburger está fechado

**Resultado esperado:** ✅ Todos os elementos acessíveis via teclado

---

### ✅ Teste 1.5: Teste WAVE (Wave.webaim.org)
**Procedimento:**
1. [ ] Ir para https://wave.webaim.org
2. [ ] Colar URL do site
3. [ ] Clicar em "Evaluate"
4. [ ] Procurar por "Errors" e "Contrast Errors"

**Resultado esperado:** 
- ✅ 0 Errors
- ✅ Máximo 2-3 Warnings (aceitáveis)
- ✅ Sem "Contrast Errors"

---

## 2️⃣ TESTES DE RESPONSIVIDADE

### ✅ Teste 2.1: Breakpoints Mobile
**Procedimento:**
1. [ ] Abrir DevTools (F12)
2. [ ] Toggle device toolbar (Ctrl+Shift+M)
3. [ ] Testar em: `480px`, `768px`, `1024px`, `1920px`

**Em cada tamanho, verificar:**

**480px (Mobile):**
- [ ] Menu hamburger visível
- [ ] Texto legível (não cortado)
- [ ] Botões tocáveis (min 44px)
- [ ] Sem scroll horizontal

**768px (Tablet):**
- [ ] Menu pode mostrar horizontal ou hamburger
- [ ] Grid de pontos: 2 colunas
- [ ] Sem sobreposição de elementos

**1024px (Desktop pequeno):**
- [ ] Menu horizontal
- [ ] Grid de pontos: 2-3 colunas
- [ ] Sidebar se existir: visível

**1920px (Desktop grande):**
- [ ] Layout maximizado
- [ ] Grid de pontos: 3-4 colunas
- [ ] Sem linhas muito longas (máx 80 caracteres)

**Resultado esperado:** ✅ Sem scroll horizontal em nenhumdispositivo

---

### ✅ Teste 2.2: Toque em Mobile
**Procedimento:**
1. [ ] Usar Chrome DevTools como mobile
2. [ ] Pressionar "Ctrl+Shift+P" → "Device Mode"
3. [ ] Selecionar "iPhone 12" ou similar
4. [ ] Testar:
   - [ ] Clicar hamburger menu
   - [ ] Clicar em links do menu
   - [ ] Digitar no search input
   - [ ] Mudar filtro no select

**Verificar:**
- [ ] Elementos não são muito pequenos
- [ ] Feedback visual ao tocar
- [ ] Menu fecha após clicar em link

**Resultado esperado:** ✅ Interface totalmente utilizável por toque

---

### ✅ Teste 2.3: Orientação (Landscape/Portrait)
**Procedimento:**
1. [ ] DevTools > Device Mode
2. [ ] Pressionar Ctrl para rotacionar device
3. [ ] Verificar em Portrait (480px) e Landscape (800px)

**Verificar:**
- [ ] Layout se adapta
- [ ] Não há scroll horizontal

**Resultado esperado:** ✅ Funciona em ambas as orientações

---

## 3️⃣ TESTES DE FUNCIONALIDADE

### ✅ Teste 3.1: Menu Toggle
**Procedimento:**
1. [ ] Em desktop: Redimensionar para 480px
2. [ ] Clicar em "☰" (hamburger icon)
3. [ ] Verificar se menu abre com **animação suave**

**Verificar no DevTools > Elements:**
```javascript
// Menu deve ter classes:
<nav class="nav-menu active">  // quando aberto
// E CSS deve aplicar:
opacity: 1;
visibility: visible;
transform: translateY(0);
```

**Teste de transição:**
```javascript
// No console:
const menu = document.querySelector('.nav-menu');
console.log(window.getComputedStyle(menu).transition);
// Deve mostrar: "all 0.3s ease" ou similar
```

**Resultado esperado:** ✅ Menu abre e fecha com transição suave (não instantâneo)

---

### ✅ Teste 3.2: Busca e Filtro
**Procedimento:**
1. [ ] Digitar "Av" no input de busca
2. [ ] Verificar se lista filtra em tempo real
3. [ ] Mudar dropdown de tipo para "Cooperativa"
4. [ ] Verificar se lista filtra corretamente

**Testar combinações:**
- [ ] Só busca: Vazio + Filtro "Loja"
- [ ] Só filtro: Busca "Centro" + Vazio
- [ ] Ambos: Busca "Av" + Filtro "Empresa"
- [ ] Listar todos: Vazio + Filtro vazio

**Resultado esperado:** ✅ Busca e filtro funcionam independentemente

---

### ✅ Teste 3.3: Links de Telefone
**Procedimento:**
1. [ ] Inspecionar um link de telefone: "☎️ (65) 98765-4321"
2. [ ] Em DevTools > Elements:
   - [ ] Check se tem classe `phone-link`
   - [ ] Check se href começa com `tel:`

**Verificar styling no console:**
```javascript
const phoneLink = document.querySelector('.phone-link');
const style = window.getComputedStyle(phoneLink);
console.log('Color:', style.color);        // deve ser verde (#2ecc71)
console.log('Text-decoration:', style.textDecoration); // none
```

**Teste visual:**
- [ ] Cor é verde principal
- [ ] Sem underline (até passar mouse)
- [ ] Ao passar mouse → underline aparece

**Resultado esperado:** ✅ Links estilizados corretamente, clicável em mobile

---

### ✅ Teste 3.4: Cards de Pontos
**Procedimento:**
1. [ ] Verificar se emojis aparecem corretamente
2. [ ] Em DevTools > Elements:
   - [ ] Procurar por `<div class="point-emoji">`
   - [ ] Verificar se tem `font-size: 2rem`

**Teste de animação:**
```javascript
// No console, verificar:
const cards = document.querySelectorAll('.point-card');
cards.forEach((card, i) => {
    const delay = window.getComputedStyle(card).animationDelay;
    console.log(`Card ${i}: delay = ${delay}`);
});
// NÃO deve ter delay (foi removido)
```

**Resultado esperado:** ✅ Cards aparecem com espaçamento correto, sem animate delay

---

### ✅ Teste 3.5: LocalStorage
**Procedimento:**
1. [ ] Digitar "Avenida" no search
2. [ ] Mudar filtro para "Cooperativa"
3. [ ] F5 para recarregar página
4. [ ] Verificar se busca e filtro foram preservados

**Verificar no console:**
```javascript
// Abrir DevTools > Console
console.log(localStorage.getItem('lastSearch'));    // deve mostrar "Avenida"
console.log(localStorage.getItem('lastFilter'));    // deve mostrar "cooperativa"
```

**Limpar e testar novamente:**
```javascript
localStorage.clear();
location.reload();
// Agora search e filter devem estar vazios
```

**Resultado esperado:** ✅ Dados preservados entre recarga de página

---

## 4️⃣ TESTES DE PERFORMANCE

### ✅ Teste 4.1: Lighthouse
**Procedimento:**
1. [ ] DevTools (F12) > Lighthouse
2. [ ] Clicar em "Analyze page load"
3. [ ] Esperar análise completar

**Verificar scores:**
- [ ] Performance: > 80
- [ ] Accessibility: > 85 (melhorado)
- [ ] Best Practices: > 80
- [ ] SEO: > 85

**Especialmente Accessibility:**
- Esperado: Aumentou em relação a antes (era 70%, agora deve ser 85%+)

**Resultado esperado:** ✅ Todos os scores > 80, Accessibility melhorado

---

### ✅ Teste 4.2: Sem Estilos Inline
**Procedimento:**
1. [ ] Abrir DevTools > Elements
2. [ ] Clicar em um card de ponto
3. [ ] Procurar por `style="..."` atributo

**Verificar:**
```html
<!-- NÃO deve ter isso -->
<div style="font-size: 2rem; margin-bottom: 10px;">🔋</div>

<!-- DEVE ter isso -->
<div class="point-emoji">🔋</div>
```

**Procurar toda a página:**
```javascript
// No console:
const elementsWithStyle = document.querySelectorAll('[style]');
console.log('Elementos com style inline:', elementsWithStyle.length);
// Deve ser 0 ou muito poucos (aceitável: apenas alguns animados)
```

**Resultado esperado:** ✅ Nenhum estilo inline desnecessário encontrado

---

### ✅ Teste 4.3: Animações Suaves
**Procedimento:**
1. [ ] Abrir página
2. [ ] Observar animações (bounce mencion)
3. [ ] Verificar se não ficam "travadas"

**Verificar framerate:**
```javascript
// Abrir DevTools > Performance > Record
// Fazer scroll na página durante 5 segundos
// Deve manter 60 FPS (ou pelo menos 30 FPS)
```

**Resultado esperado:** ✅ Animações são suaves, sem stuttering

---

## 5️⃣ TESTES VISUAIS/IMAGEM

### ✅ Teste 5.1: CSS Visual
**Verificar visualmente:**
- [ ] Menu hamburger animação é suave (não instantânea)
- [ ] Bounce do botão é sutil (5px, não 10px)
- [ ] Cards têm sombra e espaçamento
- [ ] Cores estão corretas (verde #2ecc71, etc)
- [ ] Fonte é legível em todos os tamanhos

**Comparar antes/depois:**
```
ANTES:
- Menu aparecia instantaneamente (display: none/flex)
- Bounce era muito grande (10px)
- Alguns estilos em JavaScript

DEPOIS:
- Menu aparece com transição suave (opacity/visibility)
- Bounce é sutil (5px)
- Estilos 100% em CSS
```

**Resultado esperado:** ✅ Interface visual idêntica ou melhorada

---

### ✅ Teste 5.2: Dark Mode (se suportado)
**Procedimento:**
1. [ ] Sistema > Aparência > Modo Escuro (Windows)
2. [ ] Ou: Preferências > General > Light/Dark (Mac)
3. [ ] Recarregar página
4. [ ] Verificar se cores são legíveis

**Resultado esperado:** ✅ Página é legível em ambos os modos

---

## 6️⃣ TESTES DE REGRESSÃO

### ✅ Teste 6.1: Funcionalidades Básicas
**Verificar que NADA quebrou:**
- [ ] Header aparece no topo
- [ ] Menu pode ser aberto/fechado
- [ ] Seção "Pontos de Coleta" carrega com 8 pontos
- [ ] Clique em cada ponto funciona
- [ ] Search e Filter funcionam
- [ ] Links de telefone funcionam (com `tel:` protocol)
- [ ] Footer aparece no rodapé
- [ ] Redes sociais são clicáveis
- [ ] Mapa do Google aparece

**Resultado esperado:** ✅ Todas as funcionalidades originais funcionam

---

### ✅ Teste 6.2: Compatibilidade Cross-Browser
**Testar em:**
- [ ] Chrome/Chromium (Versão 90+)
- [ ] Firefox (Versão 88+)
- [ ] Safari (Versão 14+)
- [ ] Edge (Versão 90+)

**Em cada navegador:**
- [ ] Layout é correto
- [ ] Animações funcionam
- [ ] Teclado funciona
- [ ] LocalStorage funciona

**Resultado esperado:** ✅ Funciona em todos os navegadores modernos

---

## 7️⃣ RELATÓRIO FINAL

### Template para Documentar
```markdown
## Resultado dos Testes

**Data:** [data]
**Testador:** [seu nome]
**Navegador:** [Chrome/Firefox/Safari/Edge versão X]
**Dispositivo:** [Desktop/Tablet/Mobile]

### Testes de Acessibilidade
- [x] Labels nos inputs
- [x] ARIA attributes
- [x] Teclado funciona
- [x] Screen reader OK
- [x] WAVE: 0 erros

### Testes de Responsividade
- [x] 480px: mobile OK
- [x] 768px: tablet OK
- [x] 1024px: desktop OK
- [x] Sem scroll horizontal
- [x] Toque funciona

### Testes de Funcionalidade
- [x] Menu toggle OK
- [x] Search/Filter OK
- [x] Links telefonem OK
- [x] LocalStorage OK
- [x] Todas as features OK

### Testes de Performance
- [x] Lighthouse: > 80 em todas as categorias
- [x] Accessibility melhorado
- [x] Sem estilos inline desnecessários
- [x] Animações suaves

### Resultado Final
✅ **APROVADO** - Todas as correções funcionando, sem regressões

### Bugs Encontrados (se houver)
- [ ] Bug 1: ...
- [ ] Bug 2: ...
```

---

## 🎯 CHECKLIST FINAL

```
✅ ACESSIBILIDADE (25 pontos)
  ✅ Labels nos inputs
  ✅ ARIA attributes
  ✅ Screen reader funciona
  ✅ Teclado funciona
  ✅ WAVE aprovado

✅ RESPONSIVIDADE (20 pontos)
  ✅ Mobile 480px
  ✅ Tablet 768px
  ✅ Desktop 1024px
  ✅ Desktop 1920px
  ✅ Sem scroll horizontal

✅ FUNCIONALIDADE (30 pontos)
  ✅ Menu toggle
  ✅ Search e filter
  ✅ Links funcionam
  ✅ LocalStorage funciona
  ✅ Todas as features funcionam
  ✅ Nada quebrou

✅ PERFORMANCE (15 pontos)
  ✅ Lighthouse aprovado
  ✅ Sem estilos inline
  ✅ Animações suaves
  ✅ Cross-browser OK

✅ VISUAL (10 pontos)
  ✅ Menu transição suave
  ✅ Bounce sutil
  ✅ Cores corretas
  ✅ Tipografia legível

TOTAL: 100 pontos = ✅ APROVADO
```

---

**Se todos os testes passarem, o código está pronto para produção!** 🚀
