// Sistema de Tema Claro/Escuro - EcoPontos
console.log('🎨 Theme Script Carregado');

// Função para aplicar o tema
function applyTheme(themeName) {
    console.log('✓ Aplicando tema:', themeName);
    
    if (themeName === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        const icon = document.querySelector('.theme-icon');
        if (icon) icon.textContent = '🌙';
    } else {
        document.documentElement.removeAttribute('data-theme');
        const icon = document.querySelector('.theme-icon');
        if (icon) icon.textContent = '☀️';
    }
    
    localStorage.setItem('theme', themeName);
}

// Função para alternar tema
function toggleTheme() {
    console.log('🔄 Botão clicado!');
    const current = document.documentElement.getAttribute('data-theme');
    console.log('Tema atual:', current || 'light');
    
    const newTheme = current === 'dark' ? 'light' : 'dark';
    console.log('Novo tema:', newTheme);
    
    applyTheme(newTheme);
}

// Exponha globalmente
window.toggleTheme = toggleTheme;
window.applyTheme = applyTheme;

// Função de inicialização
function initTheme() {
    console.log('📍 Inicializando sistema de temas...');
    
    // Obter tema salvo
    const savedTheme = localStorage.getItem('theme') || 'light';
    console.log('Tema salvo:', savedTheme);
    
    // Aplicar tema
    applyTheme(savedTheme);
    
    // Registrar evento no botão
    const btn = document.getElementById('themeToggle');
    if (btn) {
        console.log('✓ Botão encontrado, registrando evento');
        btn.addEventListener('click', function(e) {
            console.log('Click event disparado');
            e.preventDefault();
            toggleTheme();
        });
    } else {
        console.error('❌ Botão #themeToggle não encontrado');
    }
}

// Inicializar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
} else {
    initTheme();
}
