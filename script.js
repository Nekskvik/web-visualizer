(function() {
  'use strict';

  /* ============================================================
     TRANSLATIONS
  ============================================================ */
  const translations = {
    en: {
      'nav.work': 'Work',
      'nav.about': 'About',
      'nav.contact': 'Contact',

      'hero.meta.role': 'Creative Developer',
      'hero.meta.est': 'Est. 2020',
      'hero.meta.available': 'Available for work',
      'hero.title.1': 'Digital',
      'hero.title.2': 'visualizer',
      'hero.title.3': '& creator.',
      'hero.desc': "I'm <strong>Artyom</strong> - a full-stack developer shaping immersive digital products for brands that refuse to blend in.",
      'hero.scroll': 'Scroll to explore',

      'ticker.1': 'SEO',
      'ticker.2': 'Interfaces',
      'ticker.3': 'Design',
      'ticker.4': 'Motion',
      'ticker.5': 'User-experience',

      'work.title.1': 'Some of my',
      'work.title.2': 'projects',
      'work.num': '(01) - Niches',

      'filter.all': 'All Work',
      'filter.med_n_beauty': 'Medicine & beauty',
      'filter.commerce': 'E‑Commerce',
      'filter.b2b': 'B2B',
      'filter.personal': 'Personal Templates (not online)',

      'project.1.title': 'Lux Boutique',
      'project.1.cat': 'E‑Commerce',

      'project.2.title': "Children's play areas",
      'project.2.cat': 'E‑Commerce',

      'project.3.title': 'Dlaser cosmetology',
      'project.3.cat': 'Medicine & beauty',

      /* 'project.4.title': 'Orbital',
      'project.4.cat': '3D / WebGL', */

      'project.5.title': 'Disinfection',
      'project.5.cat': 'B2B',

      'project.6.title': 'MagiCosmo',
      'project.6.cat': 'Medicine & beauty',

      'project.7.title': 'Vzlet Agency',
      'project.7.cat': 'Personal Template',

      'project.8.title': 'Pilatec online course',
      'project.8.cat': 'Personal Template',

      'project.9.cat': 'Personal Template',

      'count.title': 'Total',

      'about.title.1': 'About',
      'about.title.2': 'me',
      'about.num': '(02) - Hi everyone',
      'about.text': "I’m a web developer focused on building modern, responsive, and user-friendly websites. I have been building websites for almost 6 years now. I specialize in frontend development, clean UI/UX, landing pages, business websites, and custom web solutions. I pay close attention to performance, mobile responsiveness, and visual details. I help turn ideas into professional, functional websites that are easy to use, maintain, and grow. Use hard code and a bit of help of AI.",

      'stat.projects': 'Projects Shipped',
      'stat.years': 'Years Experience',

      'cta.line1': "Let's make",
      'cta.line2': 'something',
      'cta.em': 'great',
      'cta.btn': 'Start a project',

      'footer.copy': '© 2026 Artyom Nexvice - All rights reserved',
      'footer.made': 'Made with intent'
    },

    ru: {
      'nav.work': 'Работы',
      'nav.about': 'Обо мне',
      'nav.contact': 'Контакты',

      'hero.meta.role': 'Креативный разработчик',
      'hero.meta.est': 'С 2020 года',
      'hero.meta.available': 'Открыт для проектов',
      'hero.title.1': 'Цифровой',
      'hero.title.2': 'визуализатор',
      'hero.title.3': 'и креатор.',
      'hero.desc': 'Я - <strong>Артём</strong>, full-stack разработчик, создающий иммерсивные цифровые продукты для брендов, которые хотят быть заметными.',
      'hero.scroll': 'Листайте ниже для изучения портфолио',

      'ticker.1': 'SEO',
      'ticker.2': 'Интерфейсы',
      'ticker.3': 'Дизайн',
      'ticker.4': 'Анимация',
      'ticker.5': 'Пользовательский-опыт',

      'work.title.1': 'Часть моих',
      'work.title.2': 'проектов',
      'work.num': '(01) - Направления',

      'filter.all': 'Все работы',
      'filter.med_n_beauty': 'Медицина & бьюти',
      'filter.commerce': 'Интернет магазины',
      'filter.b2b': 'B2B',
      'filter.personal': 'Личные проекты (не онлайн)',

      'project.1.title': 'Lux Boutique',
      'project.1.cat': 'Интернет магазины',

      'project.2.title': 'Детские игровые площадки',
      'project.2.cat': 'Интернет магазины',

      'project.3.title': 'Dlaser аппараты для косметологий',
      'project.3.cat': 'Медицина & красота',

      /*'project.4.title': 'Orbital',
      'project.4.cat': '3D / WebGL', */

      'project.5.title': 'Центр Дезинфекции',
      'project.5.cat': 'B2B',

      'project.6.title': 'MagiCosmo',
      'project.6.cat': 'Медицина & красота',

      'project.7.title': 'Vzlet Agency',
      'project.7.cat': 'Личные проекты',

      'project.8.title': 'Обучение пилатес',
      'project.8.cat': 'Личные проекты',

      'project.9.cat': 'Личные проекты',

      'count.title': 'Количество',

      'about.title.1': 'Давайте',
      'about.title.2': 'знакомиться',
      'about.num': '(02) - Обо мне',
      'about.text': 'Я веб-разработчик, специализирующийся на создании современных, адаптивных и удобных в использовании веб-сайтов. Я занимаюсь созданием веб-сайтов уже почти 6 лет и специализируюсь на разработке интерфейсов, проработке UI/UX, лендингов, корпоративных сайтов. Я уделяю пристальное внимание производительности, отзывчивости мобильных устройств и визуальным деталям. Я помогаю воплощать идеи в профессиональные, функциональные веб-сайты, которые просты в использовании, обслуживании и развитии. Делаю самописные проекты и с помощью ИИ.',

      'stat.projects': 'Реализованных проектов',
      'stat.years': 'Лет опыта',

      'cta.line1': 'Давайте создадим',
      'cta.line2': 'новый',
      'cta.em': 'проект',
      'cta.btn': 'Начать проект',

      'footer.copy': '© 2026 Артём Nexvice - Все права защищены',
      'footer.made': 'Сделано с душой'
    }
  };

  /* ============================================================
     LANGUAGE SYSTEM
  ============================================================ */
  const html = document.documentElement;
  const langButtons = document.querySelectorAll('.lang-switch button');

  function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Update <html lang>
    html.setAttribute('lang', lang);

    // Simple text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // HTML nodes (allow <strong>, <em>, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Active button state
    langButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Persist
    localStorage.setItem('lumina-lang', lang);
  }

  // Init from storage (fallback to browser language)
  const storedLang = localStorage.getItem('lumina-lang');
  const browserLang = (navigator.language || 'en').toLowerCase().startsWith('ru') ? 'ru' : 'en';
  const initialLang = storedLang || browserLang;
  applyLanguage(initialLang);

  // Bind buttons
  langButtons.forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  /* ============================================================
     THEME
  ============================================================ */
  const toggle = document.getElementById('themeToggle');
  const icon = document.getElementById('themeIcon');

  const savedTheme = localStorage.getItem('lumina-theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  icon.textContent = savedTheme === 'dark' ? '☾' : '☀';

  toggle.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('lumina-theme', next);
    icon.textContent = next === 'dark' ? '☾' : '☀';
  });

  /* ============================================================
     CURSOR GLOW + PARALLAX
  ============================================================ */
  const glow = document.getElementById('cursorGlow');
  const shapes = document.querySelectorAll('[data-parallax]');
  let mx = window.innerWidth / 2, my = window.innerHeight / 2;
  let gx = mx, gy = my;

  document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

  function animate() {
    gx += (mx - gx) * 0.12;
    gy += (my - gy) * 0.12;
    glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;

    shapes.forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      const ox = (mx - window.innerWidth / 2) * speed;
      const oy = (my - window.innerHeight / 2) * speed;
      el.style.transform = `translate(${ox}px, ${oy}px)`;
    });

    requestAnimationFrame(animate);
  }
  animate();

  /* ============================================================
     SLIDER
  ============================================================ */
  const track = document.getElementById('slider');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const currentNum = document.getElementById('currentNum');
  const totalNum = document.getElementById('totalNum');

  const visibleSlides = () =>
    Array.from(track.querySelectorAll('.slide')).filter(s => !s.classList.contains('hidden'));

  function getGap() {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue('--slide-gap').trim();
    return parseFloat(raw) || 32;
  }

  function slidesPerView() {
    const slides = visibleSlides();
    if (!slides.length) return 2;
    const slideW = slides[0].offsetWidth;
    const gap = getGap();
    const vpW = track.clientWidth;
    return Math.max(1, Math.round((vpW + gap) / (slideW + gap)));
  }

  function pageStep() {
    const slides = visibleSlides();
    if (!slides.length) return 0;
    const perView = slidesPerView();
    const slideW = slides[0].offsetWidth;
    const gap = getGap();
    return perView * slideW + (perView - 1) * gap + gap;
  }

  function updateCounter() {
    const slides = visibleSlides();
    if (!slides.length) {
      currentNum.textContent = 'Total';
      totalNum.textContent = '00';
      prevBtn.disabled = true;
      nextBtn.disabled = true;
      return;
    }

    const slideW = slides[0].offsetWidth;
    const gap = getGap();
    const step = slideW + gap;

    const idx = Math.round(track.scrollLeft / step) + 1;
    const clamped = Math.max(1, Math.min(idx, slides.length));

    totalNum.textContent = String(slides.length).padStart(2, '0');

    prevBtn.disabled = track.scrollLeft <= 2;
    const maxScroll = track.scrollWidth - track.clientWidth;
    nextBtn.disabled = track.scrollLeft >= maxScroll - 2;
  }

  function scrollByPage(dir) {
    track.scrollBy({ left: pageStep() * dir, behavior: 'smooth' });
  }

  prevBtn.addEventListener('click', () => scrollByPage(-1));
  nextBtn.addEventListener('click', () => scrollByPage(1));
  track.addEventListener('scroll', updateCounter, { passive: true });
  window.addEventListener('resize', updateCounter);

  // Drag-to-scroll
  let isDown = false;
  let startX = 0;
  let startScroll = 0;
  let dragMoved = false;

  track.addEventListener('mousedown', (e) => {
    // ignore right/middle clicks
    if (e.button !== 0) return;

    isDown = true;
    dragMoved = false;
    startX = e.pageX;
    startScroll = track.scrollLeft;

    track.classList.add('dragging');
    document.body.style.userSelect = 'none';

    e.preventDefault();   // stops native text/image drag
  });

  // Use document (not window) + pointer capture for reliable delivery
  document.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    const walk = e.pageX - startX;
    if (Math.abs(walk) > 4) dragMoved = true;

    track.scrollLeft = startScroll - walk * 1.4;
    e.preventDefault();
  });

  document.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;

    track.classList.remove('dragging');
    document.body.style.userSelect = '';
  });

  // Safety net: if mouse leaves the window while dragging, stop cleanly
  window.addEventListener('blur', () => {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('dragging');
    document.body.style.userSelect = '';
  });

  // Prevent click "ghost" after a real drag (e.g. on the ↗ arrow)
  track.addEventListener('click', (e) => {
    if (dragMoved) {
      e.preventDefault();
      e.stopPropagation();
      dragMoved = false;
    }
  }, true);

  /* ============================================================
     FILTERS
  ============================================================ */
  const chips = document.querySelectorAll('.chip');
  const allSlides = document.querySelectorAll('.slide');

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;

      allSlides.forEach(slide => {
        const match = filter === 'all' || slide.dataset.category === filter;
        slide.classList.toggle('hidden', !match);
      });

      track.scrollTo({ left: 0, behavior: 'smooth' });
      updateCounter();
    });
  });

  window.addEventListener('load', updateCounter);
  updateCounter();

  /* ============================================================
     SCROLL REVEAL
  ============================================================ */
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  reveals.forEach(el => io.observe(el));

  /* ============================================================
     COUNT UP NUMBERS
  ============================================================ */
  const counters = document.querySelectorAll('[data-count]');
  const counterIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const current = Math.floor(eased * target);
          el.textContent = current < 10 ? '0' + current : current;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = target;
        }
        requestAnimationFrame(tick);
        counterIO.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => counterIO.observe(c));

  /* ============================================================
     SMOOTH ANCHORS
  ============================================================ */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#') return;
      const t = document.querySelector(id);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
