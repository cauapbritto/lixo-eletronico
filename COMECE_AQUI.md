# 🚀 Como Executar - EcoPontos

Existem várias formas de abrir e testar a landing page do EcoPontos. Escolha a que funcionar melhor para você.

---

## ⚡ Forma Mais Rápida (Sem Servidor)

### Opção 1: Abrir Arquivo Direto
1. Navegue até a pasta `lixoeletrônico`
2. Clique duplo no arquivo `index.html`
3. A página carregará no seu navegador padrão

**Vantagem:** Instantâneo
**Desvantagem:** Alguns recursos podem não funcionar bem (CORS)

---

## 🌐 Forma Recomendada (Com Servidor Local)

### Opção 2: Python (Mais Comum)

#### Windows:
```powershell
# Abra PowerShell na pasta do projeto
cd C:\lixoeletrônico

# Python 3 (versão moderna)
python -m http.server 8000

# Depois acesse: http://localhost:8000
```

#### macOS/Linux:
```bash
# Terminal
cd ~/caminho/para/lixoeletrônico

# Python 3
python3 -m http.server 8000

# Python 2 (se tiver)
python -m SimpleHTTPServer 8000
```

---

### Opção 3: Node.js

**Instale um servidor HTTP simples:**
```bash
npm install -g http-server
```

**Execute:**
```bash
cd C:\lixoeletrônico
http-server
```

**Acesse:** `http://localhost:8080`

---

### Opção 4: PHP

```bash
cd C:\lixoeletrônico
php -S localhost:8000
```

**Acesse:** `http://localhost:8000`

---

### Opção 5: VS Code

**Se você usa VS Code:**

1. Instale a extensão "Live Server" (Ritwick Dey)
2. Botão direito em `index.html`
3. Selecione "Open with Live Server"
4. Página abrirá automaticamente

---

## 🐢 Forma Alternativa (Editor Online)

### Opção 6: Replit
1. Vá para [replit.com](https://replit.com)
2. Clique "Create"
3. Selecione "HTML, CSS, JS"
4. Cole o código dos arquivos correspondentes
5. Clique Run

---

### Opção 7: CodePen/JSFiddle
1. Vá para [codepen.io](https://codepen.io)
2. Crie um novo pen
3. Cole o HTML, CSS e JavaScript
4. Salve e compartilhe

---

## 🔍 Teste em Diferentes Dispositivos

### Desktop
1. Abra em qualquer navegador moderno
2. Pressione F12 para Dev Tools
3. Pressione Ctrl+Shift+M para testar responsividade

### Mobile
**Opção 1 - Emulador (Chrome/Firefox):**
- Abra DevTools (F12)
- Ctrl+Shift+M (ou clique ícone dispositivo)
- Selecione iPhone, Android, etc

**Opção 2 - Dispositivo Real:**
```
Se servidor local em seu computador:
- Descubra seu IP local: ipconfig (Windows) / ifconfig (Mac/Linux)
- No telefone: acesse http://seu-ip:8000
```

**Opção 3 - Ngrok (Compartilhe URL):**
```bash
# Instale ngrok
# Execute seu servidor local (porta 8000)
# Em outro terminal:
ngrok http 8000

# Ngrok gera uma URL pública que você pode compartilhar
```

---

## 🧪 Teste Rápido da Funcionalidade

Após abrir a página, teste:

### ✅ Busca
1. Digite "Centro" na busca
2. Deve filtrar 2 pontos

### ✅ Filtro
1. Selecione "Loja de Eletrônicos"
2. Deve mostrar 2 pontos (EcoTech, Eletrônicos Promoção)

### ✅ Responsividade
1. Aperte F12 (DevTools)
2. Teste em mobile (Ctrl+Shift+M)
3. Menu deve virar hamburger

### ✅ Scroll
1. Clique em "Encontrar Pontos de Coleta"
2. Deve rolar suavemente para seção de pontos

---

## 🛠️ Troubleshooting

### "Página em branco"
- Verifique se está usando um servidor (não apenas arquivo)
- Limpe cache do navegador (Ctrl+Shift+Del)
- Abra Console (F12) para ver erros

### "Mapa não aparece"
- Verifique conexão com internet
- Google Maps precisa de internet para funcionar
- Se estiver offline, mapa não carrega

### "CSS/JS não carrega"
- Verify os caminhos nos arquivos:
  - `<link rel="stylesheet" href="css/styles.css">`
  - `<script src="js/script.js"></script>`
- Se usar servidor diferente, caminhos podem precisar de `./` no início

### "LocalStorage não funciona"
- Alguns navegadores bloqueiam localStorage para arquivos locais
- Use um servidor HTTP para resolver

---

## 📱 Compartilhar Projeto

### Opção A: GitHub Pages (Grátis)
1. Faça upload para GitHub
2. Ative GitHub Pages
3. Acesse seu-usuario.github.io/lixoeletronico

### Opção B: Netlify (Grátis)
1. Vá para [netlify.com](https://netlify.com)
2. Faça drag-and-drop da pasta
3. Projeto deployado em segundos

### Opção C: Vercel (Grátis)
1. Vá para [vercel.com](https://vercel.com)
2. Importar repositório Git
3. Deploy automático

### Opção D: Servidor Próprio
- Hospedagem compartilhada
- VPS
- Servidor dedicado

---

## 💻 Comandos Rápidos

### Windows PowerShell
```powershell
# Ir para pasta do projeto
cd C:\lixoeletrônico

# Iniciar servidor Python
python -m http.server 8000

# Ou com Node.js
npx http-server
```

### macOS/Linux Terminal
```bash
# Ir para pasta
cd ~/lixoeletrônico

# Python 3
python3 -m http.server 8000

# Ou Node.js
npx http-server
```

---

## 🎯 Fluxo Recomendado para Iniciantes

1. **Descompacte** a pasta `lixoeletrônico`
2. **Abra terminal/PowerShell** na pasta
3. **Execute:** `python -m http.server 8000` (ou equivalente)
4. **Acesse:** `http://localhost:8000` no navegador
5. **Teste:** Use F12 para DevTools
6. **Customize:** Edite arquivos conforme necessário
7. **Recarregue:** Ctrl+R (ou Cmd+R no Mac)

---

## 📚 Documentação Adicional

- [README.md](README.md) - Documentação completa
- [GUIA_RAPIDO.md](GUIA_RAPIDO.md) - Guia rápido
- [TESTES.md](TESTES.md) - Checklist de testes
- [PRATICAS.md](PRATICAS.md) - Boas práticas

---

## 🆘 Precisa de Ajuda?

### Errors Comuns e Soluções

| Erro | Solução |
|------|---------|
| "Cannot get /" | Certifique-se de estar na pasta correta |
| "Port 8000 in use" | Use uma porta diferente: `python -m http.server 8001` |
| "Module not found" | Reinstale (ex: `npm install -g http-server`) |
| "CORS error" | Use um servidor HTTP, não arquivo direto |

---

**Pronto para começar! 🌱**

Qualquer dúvida, consulte os arquivos de documentação ou abra o console (F12) para erros detalhados.
