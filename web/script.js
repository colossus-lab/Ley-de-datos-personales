/* =========================================================
   HCDN · Proyecto 1751-D-2026 — Interacciones
   ========================================================= */

const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER = window.matchMedia('(pointer: fine) and (hover: hover)').matches;

/* ---------- BODY SCROLL LOCK (composable, scrollbar-preserving) ---------- */
const ScrollLock = (function(){
  let locks = 0;
  let savedPaddingRight = '';
  function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }
  function lock() {
    if (locks === 0) {
      const sbw = getScrollbarWidth();
      savedPaddingRight = document.body.style.paddingRight;
      if (sbw > 0) document.body.style.paddingRight = sbw + 'px';
      document.documentElement.style.overflow = 'hidden';
      document.body.classList.add('no-scroll');
    }
    locks++;
  }
  function unlock() {
    locks = Math.max(0, locks - 1);
    if (locks === 0) {
      document.documentElement.style.overflow = '';
      document.body.style.paddingRight = savedPaddingRight;
      document.body.classList.remove('no-scroll');
    }
  }
  function reset() { locks = 0; unlock(); }
  return { lock, unlock, reset };
})();

/* ---------- PROGRESS + NAV ---------- */
(function progress() {
  const bar = document.getElementById('scrollProgress');
  const nav = document.getElementById('nav');
  let lastY = 0;
  const darkSections = ['sandbox', 'cierre'];
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = (window.scrollY / h) * 100;
    bar.style.width = pct + '%';

    if (window.scrollY > 120) {
      if (window.scrollY > lastY + 4) nav.classList.add('hidden');
      else if (window.scrollY < lastY - 4) nav.classList.remove('hidden');
    } else {
      nav.classList.remove('hidden');
    }
    lastY = window.scrollY;

    // dark nav on dark sections
    let overDark = false;
    darkSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const r = el.getBoundingClientRect();
        if (r.top < 70 && r.bottom > 70) overDark = true;
      }
    });
    const hero = document.getElementById('top');
    if (hero) {
      const r = hero.getBoundingClientRect();
      if (r.bottom > 70) overDark = true;
    }
    nav.classList.toggle('dark', overDark);

    // active nav link
    document.querySelectorAll('[data-nav]').forEach(a => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      const rr = target.getBoundingClientRect();
      if (rr.top < 140 && rr.bottom > 200) a.classList.add('active');
      else a.classList.remove('active');
    });
  }, { passive: true });
})();

/* ---------- HERO CANVAS PARTICLES ---------- */
(function heroCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  if (REDUCED_MOTION) {
    canvas.style.display = 'none';
    return;
  }
  const ctx = canvas.getContext('2d');
  let w, h, dpr;
  const particles = [];
  const count = window.innerWidth < 760 ? 30 : 80;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.offsetWidth; h = canvas.offsetHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - .5) * .3,
      vy: (Math.random() - .5) * .3,
      r: Math.random() * 1.6 + .6,
      gold: Math.random() > .75
    });
  }

  const mouse = { x: -9999, y: -9999 };
  canvas.parentElement.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  let rafId = null;
  let running = false;

  function step() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      const dx = p.x - mouse.x, dy = p.y - mouse.y;
      const d = Math.hypot(dx, dy);
      if (d < 130) {
        p.x += dx / d * .6;
        p.y += dy / d * .6;
      }

      ctx.beginPath();
      ctx.fillStyle = p.gold ? 'rgba(242,201,76,.85)' : 'rgba(117,170,219,.7)';
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = Math.hypot(dx, dy);
        if (d < 120) {
          ctx.strokeStyle = `rgba(117,170,219,${.16 * (1 - d / 120)})`;
          ctx.lineWidth = .6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    rafId = requestAnimationFrame(step);
  }

  function start() { if (!running) { running = true; step(); } }
  function stop() { if (running) { running = false; cancelAnimationFrame(rafId); } }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) start(); else stop(); });
  }, { threshold: 0.05 });
  io.observe(canvas);
  start();
})();

/* ---------- REVEAL ON SCROLL ---------- */
(function reveal() {
  const els = document.querySelectorAll('[data-reveal], .hero-title .line, .hero-lead, .stat, .impl-item');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -80px 0px' });
  els.forEach(el => io.observe(el));

  // hero title staggered reveal on load
  setTimeout(() => {
    document.querySelectorAll('.hero-title .line').forEach((l, i) => {
      setTimeout(() => l.classList.add('revealed'), 200 + i * 120);
    });
    document.querySelector('.hero-lead')?.classList.add('revealed');
    document.querySelectorAll('.stat').forEach(s => s.classList.add('revealed'));
  }, 100);
})();

/* ---------- COUNTERS ---------- */
(function counters() {
  const els = document.querySelectorAll('[data-counter]');
  if (REDUCED_MOTION) {
    els.forEach(el => {
      const target = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      el.textContent = prefix + target.toLocaleString('es-AR');
    });
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const prefix = el.dataset.prefix || '';
      const duration = 1600;
      const start = performance.now();

      const easeOut = (t) => 1 - Math.pow(1 - t, 3);

      function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const v = Math.floor(easeOut(p) * target);
        el.textContent = prefix + v.toLocaleString('es-AR');
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = prefix + target.toLocaleString('es-AR');
      }
      requestAnimationFrame(tick);
      io.unobserve(el);
    });
  }, { threshold: 0.5 });
  els.forEach(el => io.observe(el));
})();

/* ---------- PILLAR DETAIL MODAL ---------- */
(function pillarDetail() {
  const content = {
    '1': {
      ref: 'Art. 3 · Art. 20 · Art. 40',
      title: 'Categorización <em>en tres niveles</em>',
      plain: 'Las PyMEs cumplen menos requisitos que las grandes. La ley busca ser proporcional al tamaño y complejidad del tratamiento.',
      body: `
        <p><strong>Básico · Intermedio · Avanzado.</strong> Proponemos sustituir el régimen homogéneo de la Ley 25.326 por obligaciones proporcionales a la naturaleza, alcance, contexto y finalidades del tratamiento.</p>
        <p>La categorización determina <strong>tres variables</strong> en cascada:</p>
        <ul>
          <li><strong>Obligaciones materiales:</strong> medidas técnicas, registros, DPIA, DPO.</li>
          <li><strong>Topes sancionatorios:</strong> 0,5% — 2% — 3% de la facturación anual argentina del infractor.</li>
          <li><strong>Períodos de adecuación:</strong> las micro y pequeñas empresas clasificadas como básicas acceden a regímenes diferenciados.</li>
        </ul>
        <p>Buscamos que una PyME argentina con bases transaccionales clásicas, al ingresar al nivel básico, pueda cumplir con la ley con costos razonables — distintos a los de una mediana en nivel intermedio o a los de una gran corporación en nivel avanzado, que sí asumirá la infraestructura de cumplimiento completa (DPO, certificaciones, auditorías).</p>
      `
    },
    '2': {
      ref: 'Art. 6 · Art. 9 · Art. 10 · Art. 11 · Art. 19',
      title: 'Reglas <em>claras</em> para la IA',
      plain: 'Cómo nuestro proyecto regula el entrenamiento de modelos, los datos inferidos por algoritmos y las decisiones automatizadas que afectan a las personas.',
      body: `
        <p>Cuatro piezas interconectadas permiten que el proyecto dialogue con la <strong>economía de la inteligencia artificial</strong>:</p>
        <p><strong>1. Entrenamiento con datos públicos (Art. 6).</strong> Se valida como interés legítimo cuando los datos son accesibles sin restricción técnica o legal, no incluyen datos sensibles, se adoptan medidas de seguridad proporcionales y existe un mecanismo claro, gratuito y accesible de oposición.</p>
        <p><strong>2. Datos inferidos (Art. 9).</strong> Reconocemos una categoría emergente: perfiles, predicciones o conclusiones generadas a partir del análisis de datos preexistentes con capacidad de influir en decisiones sobre el titular.</p>
        <p><strong>3. Machine unlearning (Art. 10).</strong> Si la supresión en modelos ya entrenados no es técnicamente viable, se documenta con declaración jurada y se aplican medidas alternativas: bloqueo inmediato, exclusión en nuevos ciclos y anonimización cuando sea posible.</p>
        <p><strong>4. Revisión humana razonable (Art. 19).</strong> Derecho a solicitar la revisión de decisiones exclusivamente automatizadas que produzcan efectos jurídicos o impactos relevantes.</p>
      `
    },
    '3': {
      ref: 'Art. 60 · Art. 61',
      title: 'Sandbox <em>regulatorio</em>',
      plain: 'Un carril legal para probar ideas nuevas (IA, modelos de negocio, mecanismos alternativos) con reglas claras y sin incumplir la ley.',
      body: `
        <p>Incorporamos al texto una figura poco explorada en Argentina: la posibilidad de que la autoridad de aplicación (AAIP) autorice, mediante resolución fundada, <strong>entornos regulatorios de prueba</strong> para proyectos innovadores basados en IA, nuevos modelos de negocio o mecanismos alternativos de cumplimiento.</p>
        <p>Las autorizaciones tendrían <strong>carácter temporal</strong> y podrían prever condiciones diferenciadas o excepciones limitadas, siempre que no impliquen riesgo significativo para los derechos de los titulares.</p>
        <ul>
          <li>Modalidades: tecnologías de privacidad, incertidumbre regulatoria, sistemas avanzados de IA.</li>
          <li>Cierre: incorporación al régimen regular, anonimización o supresión.</li>
          <li>Reportes: la AAIP puede requerir información o reportes finales.</li>
        </ul>
        <p>Miramos referencias como el modelo pedagógico de la ICO en Reino Unido, el AI Act español (arts. 57-59) y el Global AI Assurance Sandbox del PDPC de Singapur. Tratamos de encontrar un equilibrio adecuado a la escala y necesidades de Argentina.</p>
      `
    },
    '4': {
      ref: 'Art. 4 inc. k · Art. 21',
      title: 'Innovación <em>con responsabilidad</em>',
      plain: 'Cuando hay dudas sobre cómo aplicar la ley, favorecemos la interpretación que garantiza derechos sin frenar soluciones que ya funcionan.',
      body: `
        <p>Proponemos un principio hermenéutico: <strong>"las dudas de interpretación se resolverán en favor de soluciones que garanticen derechos sin desalentar prácticas tecnológicamente viables y socialmente beneficiosas"</strong>.</p>
        <p>Funciona como <strong>criterio de interpretación</strong> en casos de ambigüedad normativa. Se combina con el principio de <em>responsabilidad proactiva</em> (Art. 21), que busca el equilibrio entre protección efectiva y promoción de prácticas responsables.</p>
        <p>No queremos que la ley se convierta en un obstáculo para soluciones que ya son parte del día a día de las personas. Tampoco queremos que los derechos se diluyan: la idea es que ambos objetivos convivan.</p>
        <p>El efecto práctico que esperamos es <strong>mayor seguridad jurídica</strong> para quienes adopten tecnologías emergentes en contextos donde todavía no hay consenso regulatorio definido.</p>
      `
    }
  };

  const modal = document.getElementById('pillarDetail');
  const body = document.getElementById('detailBody');
  const close = document.getElementById('closeDetail');
  const pillars = document.querySelectorAll('.pillar');
  let lastFocused = null;
  let trapHandler = null;

  function getFocusable() {
    return modal.querySelectorAll('a[href], button, input, [tabindex]:not([tabindex="-1"])');
  }

  function openModal(id, sourceEl) {
    const d = content[id];
    if (!d) return;
    body.innerHTML = `
      <h4><span class="ref">${d.ref}</span></h4>
      <h2>${d.title}</h2>
      <blockquote class="plain-lang">${d.plain}</blockquote>
      ${d.body}
    `;
    lastFocused = sourceEl || document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    ScrollLock.lock();
    // Reset inline transforms + scroll so content starts fresh
    const wrap = modal.querySelector('.pillar-detail-wrap');
    const inner = modal.querySelector('.pillar-detail-inner');
    if (wrap) { wrap.style.transform = ''; wrap.style.transition = ''; }
    if (inner) inner.scrollTop = 0;
    setTimeout(() => close.focus({ preventScroll: true }), 50);

    trapHandler = (e) => {
      if (e.key !== 'Tab') return;
      const focusables = getFocusable();
      if (!focusables.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    modal.addEventListener('keydown', trapHandler);
  }

  function closeModal() {
    if (!modal.classList.contains('open')) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    // Clear any inline transform from swipe-to-close
    const wrap = modal.querySelector('.pillar-detail-wrap');
    if (wrap) { wrap.style.transform = ''; wrap.style.transition = ''; }
    ScrollLock.unlock();
    if (trapHandler) modal.removeEventListener('keydown', trapHandler);
    if (lastFocused && lastFocused.focus) lastFocused.focus({ preventScroll: true });
  }

  pillars.forEach(p => {
    p.addEventListener('click', () => openModal(p.dataset.pillar, p));
    p.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(p.dataset.pillar, p);
      }
    });
  });

  close.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Swipe-down to close (mobile bottom sheet)
  const wrap = modal.querySelector('.pillar-detail-wrap');
  const inner = modal.querySelector('.pillar-detail-inner');
  if (wrap && inner) {
    let startY = 0, currentY = 0, dragging = false;
    inner.addEventListener('touchstart', (e) => {
      if (inner.scrollTop > 0) return;
      startY = e.touches[0].clientY;
      currentY = startY;
      dragging = true;
    }, { passive: true });
    inner.addEventListener('touchmove', (e) => {
      if (!dragging) return;
      currentY = e.touches[0].clientY;
      const delta = currentY - startY;
      if (delta > 0 && inner.scrollTop === 0) {
        wrap.style.transform = `translateY(${Math.min(delta, 400)}px)`;
        wrap.style.transition = 'none';
      }
    }, { passive: true });
    inner.addEventListener('touchend', () => {
      if (!dragging) return;
      dragging = false;
      const delta = currentY - startY;
      wrap.style.transition = '';
      if (delta > 120) {
        closeModal();
      } else {
        wrap.style.transform = '';
      }
    });
  }
})();

/* ---------- RIGHTS FLIP ---------- */
(function rights() {
  document.querySelectorAll('[data-flip]').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });
})();

/* ---------- TIERS ---------- */
(function tiers() {
  const tabs = document.querySelectorAll('.tier-tab');
  const panels = document.querySelectorAll('.tier-panel');

  function activate(id) {
    tabs.forEach(t => t.classList.toggle('active', t.dataset.tier === id));
    panels.forEach(p => {
      const on = p.dataset.panel === id;
      p.classList.toggle('active', on);
      if (on) {
        const fill = p.querySelector('.tier-bar-fill');
        if (fill) {
          fill.style.animation = 'none';
          requestAnimationFrame(() => {
            fill.style.animation = 'barFill 1.4s cubic-bezier(.2,.9,.2,1) forwards';
          });
        }
      }
    });
  }

  tabs.forEach(t => {
    t.addEventListener('click', () => activate(t.dataset.tier));
  });
})();

/* ---------- COMPARATOR TOGGLE ---------- */
(function compare() {
  const btns = document.querySelectorAll('.ct-btn');
  document.body.dataset.ct = 'old';

  btns.forEach(b => {
    b.addEventListener('click', () => {
      btns.forEach(x => x.classList.toggle('active', x === b));
      document.body.dataset.ct = b.dataset.ct;
    });
  });
})();

/* ---------- SMOOTH SCROLL FOR NAV ---------- */
(function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#' || href.length < 2) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const offset = 70;
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });
})();

/* ---------- PARALLAX AUTHOR ---------- */
(function parallaxAuthor() {
  if (REDUCED_MOTION) return;
  const author = document.querySelector('.hero-author');
  if (!author) return;
  window.addEventListener('scroll', () => {
    const y = Math.min(window.scrollY, 600);
    author.style.transform = `translateY(${y * -0.2}px)`;
    author.style.opacity = Math.max(0, 1 - y / 600);
  }, { passive: true });
})();

/* ---------- SECTOR DETAILS EXCLUSIVE CLOSE ---------- */
(function sectorDetails() {
  const items = document.querySelectorAll('.sector');
  items.forEach(s => {
    s.addEventListener('toggle', () => {
      if (s.open) {
        items.forEach(o => { if (o !== s) o.open = false; });
      }
    });
  });
})();

/* ---------- MAGNETIC BUTTONS ---------- */
(function magnetic() {
  if (REDUCED_MOTION || !FINE_POINTER) return;
  const els = document.querySelectorAll('.btn, .nav-cta');
  els.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
})();

/* ---------- NAV DRAWER ---------- */
(function drawer() {
  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('drawerOverlay');
  const drawer = document.getElementById('navDrawer');
  const closeBtn = document.getElementById('drawerClose');
  if (!toggle || !drawer) return;

  let lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    drawer.classList.add('open');
    overlay.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
    drawer.setAttribute('aria-hidden', 'false');
    ScrollLock.lock();
    setTimeout(() => closeBtn && closeBtn.focus(), 50);
  }
  function close() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    drawer.setAttribute('aria-hidden', 'true');
    ScrollLock.unlock();
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  toggle.addEventListener('click', () => {
    if (drawer.classList.contains('open')) close();
    else open();
  });
  closeBtn && closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) close();
  });
  drawer.querySelectorAll('[data-drawer-link]').forEach(a => {
    a.addEventListener('click', () => setTimeout(close, 120));
  });
})();

/* ---------- TOC SCROLL-SPY ---------- */
(function toc() {
  const toc = document.getElementById('toc');
  if (!toc) return;
  const dots = toc.querySelectorAll('.toc-dot');
  const sections = Array.from(dots).map(d => document.getElementById(d.dataset.toc)).filter(Boolean);

  dots.forEach(d => {
    d.addEventListener('click', () => {
      const target = document.getElementById(d.dataset.toc);
      if (!target) return;
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        dots.forEach(d => d.classList.toggle('active', d.dataset.toc === id));
      }
    });
  }, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });
  sections.forEach(s => io.observe(s));

  // sync toc dark mode with nav
  const navEl = document.getElementById('nav');
  const mo = new MutationObserver(() => {
    toc.dataset.dark = navEl.classList.contains('dark') ? '1' : '0';
  });
  mo.observe(navEl, { attributes: true, attributeFilter: ['class'] });
})();

/* ---------- MOBILE CTA VISIBILITY ---------- */
(function mobileCta() {
  const cta = document.getElementById('mobileCta');
  if (!cta) return;
  const footer = document.querySelector('.footer');
  let pastHero = false, nearFooter = false;

  function sync() {
    cta.classList.toggle('visible', pastHero && !nearFooter);
  }
  const heroIO = new IntersectionObserver((entries) => {
    pastHero = !entries[0].isIntersecting;
    sync();
  }, { threshold: 0.1 });
  const hero = document.getElementById('top');
  if (hero) heroIO.observe(hero);

  if (footer) {
    const footIO = new IntersectionObserver((entries) => {
      nearFooter = entries[0].isIntersecting;
      sync();
    }, { threshold: 0.05 });
    footIO.observe(footer);
  }
})();

/* ---------- FONT SIZE CONTROL ---------- */
(function fontCtrl() {
  const root = document.documentElement;
  const KEY = 'hcdn-fontsize';
  const map = { sm: '87.5%', md: '100%', lg: '112.5%' };
  const saved = localStorage.getItem(KEY) || 'md';

  function apply(size) {
    root.style.fontSize = map[size] || '100%';
    document.querySelectorAll('[data-fs]').forEach(b => {
      b.classList.toggle('active', b.dataset.fs === size);
      b.setAttribute('aria-pressed', b.dataset.fs === size ? 'true' : 'false');
    });
    try { localStorage.setItem(KEY, size); } catch (e) {}
  }
  apply(saved);

  document.querySelectorAll('[data-fs]').forEach(b => {
    b.addEventListener('click', () => apply(b.dataset.fs));
  });
})();

/* ---------- COMMAND PALETTE ---------- */
(function palette() {
  const palette = document.getElementById('palette');
  const input = document.getElementById('paletteInput');
  const list = document.getElementById('paletteList');
  const trigger = document.getElementById('paletteTrigger');
  if (!palette || !input || !list) return;

  // Build index
  const index = [];
  document.querySelectorAll('section[id], header[id]').forEach(s => {
    const title = s.querySelector('.section-title, .hero-title');
    if (title) {
      index.push({
        kind: 'Sección',
        title: title.textContent.trim().replace(/\s+/g, ' '),
        id: s.id
      });
    }
  });
  // Rights articles
  document.querySelectorAll('.right-card').forEach(c => {
    const num = c.querySelector('.right-num')?.textContent.trim();
    const h = c.querySelector('h4')?.textContent.trim();
    if (num && h) index.push({ kind: num, title: h, id: 'derechos' });
  });
  // Pillars
  document.querySelectorAll('.pillar').forEach(p => {
    const num = p.querySelector('.pillar-num')?.textContent.trim();
    const h = p.querySelector('h3')?.textContent.trim();
    if (num && h) index.push({ kind: 'Pilar ' + num, title: h, id: 'pilares' });
  });
  // Custom terms
  [
    { kind: 'Término', title: 'Datos inferidos (Art. 9)', id: 'pilares' },
    { kind: 'Término', title: 'Machine unlearning (Art. 10)', id: 'pilares' },
    { kind: 'Término', title: 'Seudonimización (Art. 11)', id: 'pilares' },
    { kind: 'Término', title: 'Habeas data (Arts. 45-59)', id: 'beneficios' },
    { kind: 'Término', title: 'Transferencias internacionales (Art. 28)', id: 'comparador' },
    { kind: 'Término', title: 'Vigencia escalonada (Art. 64)', id: 'cierre' },
  ].forEach(x => index.push(x));

  let active = 0;
  let filtered = [];

  function render() {
    if (!filtered.length) {
      list.innerHTML = '<li class="palette-empty">Sin coincidencias</li>';
      return;
    }
    list.innerHTML = filtered.map((r, i) => `
      <li class="palette-item ${i === active ? 'active' : ''}" data-i="${i}" role="option" aria-selected="${i === active}">
        <span class="pal-kind">${r.kind}</span>
        <span class="pal-title">${r.title}</span>
        <span class="pal-arrow">↵</span>
      </li>`).join('');
  }

  function filter(q) {
    const qq = q.trim().toLowerCase();
    if (!qq) filtered = index.slice(0, 12);
    else filtered = index.filter(r =>
      r.title.toLowerCase().includes(qq) || r.kind.toLowerCase().includes(qq)
    ).slice(0, 20);
    active = 0;
    render();
  }

  function open() {
    palette.classList.add('open');
    palette.setAttribute('aria-hidden', 'false');
    ScrollLock.lock();
    input.value = '';
    filter('');
    setTimeout(() => input.focus(), 50);
  }
  function close() {
    palette.classList.remove('open');
    palette.setAttribute('aria-hidden', 'true');
    ScrollLock.unlock();
  }
  function go(r) {
    close();
    const t = document.getElementById(r.id);
    if (!t) return;
    const y = t.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (palette.classList.contains('open')) close();
      else open();
    } else if (e.key === 'Escape' && palette.classList.contains('open')) {
      close();
    }
  });

  trigger && trigger.addEventListener('click', open);

  input.addEventListener('input', (e) => filter(e.target.value));

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      active = Math.min(active + 1, filtered.length - 1);
      render();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      active = Math.max(active - 1, 0);
      render();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[active]) go(filtered[active]);
    }
  });

  list.addEventListener('click', (e) => {
    const item = e.target.closest('.palette-item');
    if (!item) return;
    const i = parseInt(item.dataset.i, 10);
    if (filtered[i]) go(filtered[i]);
  });

  palette.addEventListener('click', (e) => {
    if (e.target === palette) close();
  });
})();

/* ---------- ANCHOR COPY on section titles ---------- */
(function anchorCopy() {
  const heads = document.querySelectorAll('.section-head');
  heads.forEach(head => {
    const title = head.querySelector('.section-title');
    if (!title) return;
    const section = head.closest('section[id]');
    if (!section) return;

    // wrap title and add button
    if (title.parentElement.classList.contains('title-row')) return;
    const row = document.createElement('div');
    row.className = 'title-row';
    title.parentNode.insertBefore(row, title);
    row.appendChild(title);

    const btn = document.createElement('button');
    btn.className = 'anchor-copy';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Copiar enlace a esta sección');
    btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>';
    row.appendChild(btn);

    btn.addEventListener('click', async () => {
      const url = location.origin + location.pathname + '#' + section.id;
      try {
        await navigator.clipboard.writeText(url);
      } catch (e) {}
      btn.classList.add('copied');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1"/><path d="M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>';
      }, 1600);
    });
  });
})();

/* ---------- SHARE BUTTONS ---------- */
(function share() {
  const buttons = document.querySelectorAll('.share-btn');
  const toast = document.getElementById('shareToast');
  if (!buttons.length) return;

  const title = 'Proyecto 1751-D-2026 · Modernizar la protección de datos personales';
  const text = 'Propuesta del diputado Martín Yeza para modernizar la Ley 25.326: proporcionalidad para PyMEs, reglas claras para IA y un sandbox regulatorio. Conocé la propuesta:';
  const getUrl = () => location.origin + location.pathname;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove('show'), 3500);
  }

  async function copyToClipboard(str) {
    try {
      await navigator.clipboard.writeText(str);
      return true;
    } catch (e) {
      // fallback
      const ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
      return ok;
    }
  }

  function markCopied(btn) {
    btn.classList.add('copied');
    setTimeout(() => btn.classList.remove('copied'), 1600);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const kind = btn.dataset.share;
      const url = getUrl();
      const shareText = `${text} ${url}`;

      if (kind === 'whatsapp') {
        const wa = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(wa, '_blank', 'noopener');
      } else if (kind === 'twitter') {
        const tw = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
        window.open(tw, '_blank', 'noopener');
      } else if (kind === 'instagram') {
        // Instagram no permite compartir URL desde web. Intentamos Web Share API (móvil); fallback a copia.
        if (navigator.share) {
          try {
            await navigator.share({ title, text, url });
            return;
          } catch (e) {
            // usuario canceló o error — caemos a copia
          }
        }
        const ok = await copyToClipboard(shareText);
        if (ok) {
          markCopied(btn);
          showToast('Enlace copiado — pegalo en tu historia o bio de Instagram');
        } else {
          showToast('No se pudo copiar automáticamente');
        }
      } else if (kind === 'copy') {
        const ok = await copyToClipboard(url);
        if (ok) {
          markCopied(btn);
          showToast('Enlace copiado al portapapeles');
        } else {
          showToast('No se pudo copiar');
        }
      }
    });
  });
})();

/* ---------- READING TIME per section ---------- */
(function readingTime() {
  const sections = document.querySelectorAll('section[id]');
  sections.forEach(s => {
    const text = s.textContent || '';
    const words = text.trim().split(/\s+/).length;
    const mins = Math.max(1, Math.round(words / 220));
    const eyebrow = s.querySelector('.eyebrow');
    if (eyebrow && !eyebrow.querySelector('.read-time')) {
      const tag = document.createElement('span');
      tag.className = 'read-time';
      tag.textContent = `${mins} min de lectura`;
      eyebrow.insertAdjacentElement('afterend', tag);
      // Flex container for eyebrow row
      const head = s.querySelector('.section-head');
      if (head && !head.dataset.rtWrapped) {
        head.dataset.rtWrapped = '1';
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.alignItems = 'center';
        row.style.flexWrap = 'wrap';
        row.style.marginBottom = '24px';
        eyebrow.parentNode.insertBefore(row, eyebrow);
        eyebrow.style.marginBottom = '0';
        row.appendChild(eyebrow);
        row.appendChild(tag);
      }
    }
  });
})();
