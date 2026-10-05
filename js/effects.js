// Efeitos visuais. Tudo é desativado quando o sistema pede movimento reduzido
// (a classe "motion" só é adicionada no <head> quando o movimento é permitido).
(function () {
    const root = document.documentElement;
    const motion = root.classList.contains('motion');
    const header = document.querySelector('.header');

    // Cabeçalho translúcido e barra de progresso de leitura
    let ticking = false;

    function onScroll() {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            const max = root.scrollHeight - window.innerHeight;
            const progress = max > 0 ? window.scrollY / max : 0;
            header.style.setProperty('--progress', progress.toFixed(4));
            header.classList.toggle('is-scrolled', window.scrollY > 8);
            ticking = false;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Atalho "/" para ir à busca
    const search = document.getElementById('searchInput');
    document.addEventListener('keydown', event => {
        const tag = document.activeElement && document.activeElement.tagName;
        if (event.key === '/' && tag !== 'INPUT' && tag !== 'SELECT' && tag !== 'TEXTAREA') {
            event.preventDefault();
            search.focus({ preventScroll: true });
            search.scrollIntoView({ behavior: motion ? 'smooth' : 'auto', block: 'center' });
        }
    });

    // Brilho que acompanha o cursor na borda dos cards
    const grid = document.getElementById('pointsGrid');
    grid.addEventListener('pointermove', event => {
        const card = event.target.closest('.point-card');
        if (!card) return;
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${event.clientX - rect.left}px`);
        card.style.setProperty('--y', `${event.clientY - rect.top}px`);
    });

    if (!motion) return;

    // Título principal surge palavra por palavra
    const title = document.querySelector('.hero-title');
    const words = title.textContent.trim().split(/\s+/);
    title.setAttribute('aria-label', words.join(' '));
    title.innerHTML = words
        .map((word, i) => `<span class="word" aria-hidden="true"><span style="--i:${i}">${word}</span></span>`)
        .join(' ');

    // Contador do número de locais
    const stat = document.getElementById('statPoints');
    const target = parseInt(stat.textContent, 10);
    if (target > 0) {
        const duration = 900;
        const start = performance.now();
        stat.textContent = '0';
        (function tick(now) {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            stat.textContent = Math.round(eased * target);
            if (t < 1) requestAnimationFrame(tick);
        })(start);
    }

    // Elementos aparecem ao entrar na tela, em sequência quando estão lado a lado
    const revealables = document.querySelectorAll('[data-reveal]');

    if (!('IntersectionObserver' in window)) {
        revealables.forEach(el => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting);
        visible.forEach((entry, i) => {
            entry.target.style.setProperty('--delay', `${i * 70}ms`);
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach(el => observer.observe(el));
})();
