# 📖 Guia de Instalação Rápida - EcoPontos

## ⚡ Instalação em 3 Passos

### Passo 1: Baixe os arquivos
Descompacte a pasta `lixoeletrônico` em seu computador.

### Passo 2: Abra em um navegador
Clique duas vezes no arquivo `index.html`

### Passo 3: Explore!
A página carregará automaticamente. Pronto! 🎉

---

## 🌐 Servir Localmente (Melhor Performance)

Se você tem Python instalado:

**Terminal/PowerShell:**
```bash
cd C:\caminho\para\lixoeletrônico
python -m http.server 8000
```

Depois, abra seu navegador em: `http://localhost:8000`

---

## 🎯 Customizações Rápidas

### 1. Alterar o Nome da Cidade
Procure por `Cuiabá` em `index.html` e `js/script.js` e substitua.

### 2. Mudar Cores
Em `css/styles.css`, altere:
```css
--color-primary: #2ecc71;    /* Verde */
--color-secondary: #27ae60;  /* Verde escuro */
--color-accent: #3498db;     /* Azul */
```

### 3. Adicionar Seu Email
Em `index.html`, encontre:
```html
<a href="mailto:contato@ecopontos.com">contato@ecopontos.com</a>
```

### 4. Alterar o Mapa
Procure por `map-container` em `index.html` e atualize a URL do Google Maps.

---

## 📱 Testar Responsividade

**No Chrome/Firefox:**
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo (ou Ctrl+Shift+M)
3. Selecione Samsung Galaxy, iPhone, iPad, etc.

---

## 🐛 Resolução de Problemas

### Página não carrega corretamente
- Tente servir em localhost (veja acima)
- Limpe o cache do navegador (Ctrl+Shift+Del)

### Mapa não aparece
- Verifique a conexão com internet
- O Google Maps precisa de conexão online

### Menu não funciona em mobile
- Verifique se JavaScript está habilitado
- Tente Ctrl+F5 para recarregar

---

## 📞 Suporte

Dúvidas? Verifique o `README.md` para mais informações detalhadas.

---

**Boa sorte! 🌱**
