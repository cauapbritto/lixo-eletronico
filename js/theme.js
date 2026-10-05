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

    // Troca o tema com um círculo que se expande a partir do botão,
    // quando o navegador suporta View Transitions e o movimento é permitido.
    function switchTheme(button) {
        const next = currentTheme() === 'dark' ? 'light' : 'dark';

        if (!document.startViewTransition || !root.classList.contains('motion')) {
            applyTheme(next);
            return;
        }

        const rect = button.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        document.startViewTransition(() => applyTheme(next)).ready.then(() => {
            root.animate(
                { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
                { duration: 550, easing: 'cubic-bezier(0.4, 0, 0.2, 1)', pseudoElement: '::view-transition-new(root)' }
            );
        });
    }

    function init() {
        applyTheme(currentTheme());

        const button = document.getElementById('themeToggle');
        if (button) {
            button.addEventListener('click', () => switchTheme(button));
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
