# 🧪 Guia de Testes - EcoPontos

Este documento fornece um checklist completo para testar todas as funcionalidades da landing page.

## ✅ Testes Básicos

### 1. Carregamento da Página
- [ ] Página carrega sem erros no console
- [ ] Todos os elementos HTML aparecem
- [ ] Imagens/emojis mostram corretamente
- [ ] Fontes carregam corretamente

### 2. Header e Navegação
- [ ] Logo aparece corretamente
- [ ] Menu de navegação está visível (desktop)
- [ ] Links de navegação funcionam
- [ ] Navegação é "sticky" (fica no topo ao scroll)
- [ ] Cores estão corretas

### 3. Hero Section
- [ ] Título está visível e legível
- [ ] Subtítulo aparece
- [ ] Botão "Encontrar Pontos de Coleta" é clicável
- [ ] Gradiente de fundo está correto
- [ ] Responsivo em mobile

## 🔍 Testes de Funcionalidade

### 4. Seção de Pontos de Coleta
- [ ] Todos os 8 pontos carregam
- [ ] Cards aparecem em grid responsivo
- [ ] Informações (nome, endereço, telefone, horário) estão corretas
- [ ] Badges de tipo mostram corretamente
- [ ] Hover effect funciona nos cards
- [ ] Animações suaves ao carregar

### 5. Busca e Filtro
**Busca:**
- [ ] Digitar no campo de busca filtra pontos em tempo real
- [ ] Busca por nome funciona (ex: "EcoTech")
- [ ] Busca por endereço funciona (ex: "Centro")
- [ ] Busca case-insensitive (maiúsculas/minúsculas)
- [ ] Limpar busca mostra todos os pontos novamente

**Filtro:**
- [ ] Dropdown abre e fecha
- [ ] Filtrar por "Loja de Eletrônicos" mostra 2 itens (EcoTech, Eletrônicos Promoção)
- [ ] Filtrar por "Cooperativa Ambiental" mostra 2 itens (Verde Vale, Eco-Shop)
- [ ] Filtrar por "Empresa Recicladora" mostra 2 itens
- [ ] Filtrar por "Instituição Pública" mostra 2 itens (Prefeitura, UNEMAT)
- [ ] "Sem resultados" apareça se nenhum item corresponder

**Combinada (Busca + Filtro):**
- [ ] Buscar "Centro" + Filtro "Loja" mostra EcoTech Center
- [ ] Buscar "Recicladora" sem filtro mostra 1 ponto
- [ ] Filtro + busca incompatível mostra "sem resultados"

### 6. Seção de Mapa
- [ ] Mapa do Google Maps carrega
- [ ] Mapa mostra Cuiabá, MT
- [ ] Mapa é interativo (zoom, pan)
- [ ] Responsivo em mobile (altura reduzida)

### 7. Seção "O Que Pode Ser Descartado"
- [ ] 8 cards aparecem
- [ ] Ícones (emojis) aparecem corretamente
- [ ] Textos sã claros
- [ ] Animação "bounce" nos ícones
- [ ] Hover effect funciona
- [ ] Responsivo em mobile (2-1 coluna)

### 8. Seção "Por Que Descartar Corretamente"
- [ ] 4 cards aparecem
- [ ] Números (1-4) em círculos estão visíveis
- [ ] Títulos são legíveis
- [ ] Descrições completas
- [ ] Animação slide ao entrar na viewport
- [ ] Cores corretas

### 9. Footer
- [ ] Logo/nome do projeto aparece
- [ ] Informações de contato visíveis
- [ ] Email é clicável (mailto:)
- [ ] Telefone é clicável (tel:)
- [ ] Links rápidos funcionam
- [ ] Redes sociais aparecem (placeholder)
- [ ] Copyright visível

## 📱 Testes de Responsividade

### 10. Desktop (> 1200px)
- [ ] Layout em grid com múltiplas colunas
- [ ] Menu navegação horizontal
- [ ] Todos os elementos bem espaçados
- [ ] Sem barras de scroll horizontal

### 11. Tablet (768px - 1200px)
- [ ] Layout adapta para 2 colunas
- [ ] Menu ainda visível
- [ ] Botões acessíveis
- [ ] Sem scroll horizontal
- [ ] Texto legível

### 12. Mobile (< 768px)
- [ ] Menu hamburger aparece
- [ ] Navegação escondida
- [ ] Clique no hamburger abre/fecha menu
- [ ] Layout em 1 coluna
- [ ] Cards em tamanho adequado
- [ ] Texto ajustado
- [ ] Sem scroll horizontal

### 13. Mobile Pequeno (< 480px)
- [ ] Espaçamento reduzido
- [ ] Botões adequados para tocar (min 44px)
- [ ] Texto principal ainda legível
- [ ] Mapa com altura reduzida
- [ ] SEM zoom necessário

## 🎨 Testes Visuais

### 14. Cores
- [ ] Verde primário (#2ecc71) correto
- [ ] Verde secundário (#27ae60) correto
- [ ] Azul acentuado (#3498db) correto
- [ ] Branco e cinzas apropriados
- [ ] Contraste suficiente para leitura

### 15. Animações
- [ ] Hero title entra com fade
- [ ] Cards entram com fade-in
- [ ] Ícones fazem bounce suavemente
- [ ] Hover effects suaves
- [ ] Nenhuma animação travada
- [ ] Performance boa (60fps)

### 16. Tipografia
- [ ] Fonte primária carrega
- [ ] Títulos legíveis
- [ ] Textos body legíveis
- [ ] Tamanhos proporcionais
- [ ] Line-height apropriado

## 🔗 Testes de Links

### 17. Navegação Interna
- [ ] "Início" scroll para topo
- [ ] "Pontos de Coleta" scroll para seção correta
- [ ] "Sobre" scroll para seção correta
- [ ] CTA button scroll para pontos de coleta
- [ ] Scroll é suave (não instantâneo)

### 18. Links Externos
- [ ] Email icon abre cliente de email
- [ ] Telefone abre discagem (em mobile)
- [ ] Redes sociais (se configuradas)

## ⚡ Testes de Performance

### 19. Velocidade
- [ ] Página carrega em < 3 segundos
- [ ] Busca funciona sem lag
- [ ] Filtro aplicado instantaneamente
- [ ] Scroll suave (sem stuttering)

### 20. Otimização
- [ ] DevTools: Nenhum erro no console
- [ ] DevTools: CSS/JS minimizados (entrega)
- [ ] Sem requisições HTTP desnecessárias
- [ ] Google Maps é único recurso externo (além de CDN)

## ♿ Testes de Acessibilidade

### 21. Navegação por Teclado
- [ ] Tab navega entre elementos
- [ ] Enter ativa botões
- [ ] Links focáveis

### 22. Leitores de Tela
- [ ] Elementos semânticos (header, nav, section, footer)
- [ ] Atributos alt em imagens
- [ ] Labels em inputs (busca, filtro)
- [ ] ARIA labels se necessário

### 23. Contraste
- [ ] Texto has suficiente contraste
- [ ] Legível em modo alto contraste
- [ ] Sem dependência só de cor

## 🐛 Testes de Bugs Comuns

### 24. Mobile
- [ ] Menu não fica aberto ao fazer scroll
- [ ] Menu fecha ao clicar em um link
- [ ] Botões não são muito pequenos
- [ ] Sem "zoom 300%" necessário

### 25. Busca
- [ ] Caracteres especiais funcionam
- [ ] Acentos funcionam
- [ ] Números funcionam
- [ ] Espaços funcionam
- [ ] Busca vazia mostra todos

### 26. LocalStorage
- [ ] Página não quebra se localStorage for desabilitado
- [ ] Filtros salvos ao recarregar (se habilitado)
- [ ] Nenhum erro no console

## 📊 Testes de Dados

### 27. Pontos de Coleta
- [ ] ID de cada ponto é único
- [ ] Nenhuma informação duplicada
- [ ] Telefones formatados corretamente
- [ ] Endereços completos
- [ ] Horários claros

### 28. Tipos
- [ ] Todos os 4 tipos representados
- [ ] Distribuição equilibrada (2 de cada)
- [ ] Badges corretos

## 🌐 Testes de Compatibilidade

### 29. Navegadores
- [ ] Chrome (versão recente)
- [ ] Firefox (versão recente)
- [ ] Safari (versão recente)
- [ ] Edge (versão recente)

### 30. Sistemas Operacionais
- [ ] Windows
- [ ] macOS
- [ ] Linux (se suportado)
- [ ] iOS
- [ ] Android

---

## 📋 Checklist de Deploy

Antes de colocar em produção:

- [ ] Todos os 30 testes acima passaram
- [ ] Console sem erros
- [ ] Performance adequada
- [ ] Backup dos arquivos
- [ ] Testes em diferentes navegadores
- [ ] Teste em dispositivos reais
- [ ] Testers externa verificam
- [ ] SEO OK
- [ ] Analytics configurado (opcional)
- [ ] Domínio configurado (se aplicável)

---

## 🚀 Testes de Extensões (Opcional)

Se usar o arquivo `extensoes.js`:

### 31. Favoritos
- [ ] Botão favorito aparece
- [ ] Clique adiciona/remove favoritos
- [ ] Favoritos salvos em localStorage
- [ ] Ícone muda ao favoriterar

### 32. Avaliação
- [ ] Estrelas aparecem
- [ ] Clique em estrela salva avaliação
- [ ] Avaliação persiste
- [ ] Texto atualiza corretamente

### 33. Agendamento
- [ ] Botão "Agendar" funciona
- [ ] Prompt com data aparece
- [ ] Validação de data (DD/MM/YYYY)
- [ ] Confirmação aparece

### 34. Modo Escuro
- [ ] Botão toggle aparece
- [ ] Clique alterna modo
- [ ] Cores apropriadas no modo escuro
- [ ] Setting persiste

---

## 📝 Relatório de Testes

```
Data: ___/___/_____
Testador: _____________
Navegador: ____________
Dispositivo: __________

Testes Passados: __/30
Testes Falhados: __/30
Bugs Encontrados: ___

Observações:
[...]
```

---

## ✅ Final de Verificação

Antes de considerar a página "pronta":

```
Total de Testes: 30
Testes Críticos Passados: [ ] Sim [ ] Não
Testes Responsivos Passados: [ ] Sim [ ] Não
Testes Funcionais Passados: [ ] Sim [ ] Não
Performance Aceitável: [ ] Sim [ ] Não
Sem Bugs Críticos: [ ] Sim [ ] Não

✅ PRONTO PARA DEPLOY: [ ] Sim [ ] Não
```

---

**Boa sorte nos testes! 🧪**
