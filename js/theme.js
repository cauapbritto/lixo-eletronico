// Tema claro/escuro. O tema salvo já é aplicado no <head> para evitar o "piscar" de cores.
(function () {
    const root = document.documentElement;

    function currentTheme() {
        return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }

    function applyTheme(theme) {
        if (theme === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }

        const button = document.getElementById('themeToggle');
        if (button) {
            button.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
        }

        try {
            localStorage.setItem('theme', theme);
        } catch (e) {}
    }

    function init() {
        applyTheme(currentTheme());

        const button = document.getElementById('themeToggle');
        if (button) {
            button.addEventListener('click', () => {
                applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
