/* ── Navbar hide/show on scroll ── */
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll && current > 80) {
      navbar.classList.add('hidden');
    } else {
      navbar.classList.remove('hidden');
    }
    lastScroll = current;
  });

  /* ── Hamburger menu ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  function closeMobile() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  }

  /* ── Pipeline stagger animation ── */
  window.addEventListener('load', () => {
    const steps = document.querySelectorAll('.pipeline-step');
    steps.forEach((step, i) => {
      setTimeout(() => {
        step.classList.add('show');
      }, 300 + i * 150);
    });
  });

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── Gesture mode toggle ── */
  function switchMode(mode) {
    const btnMedia = document.getElementById('btnMedia');
    const btnPres = document.getElementById('btnPres');
    const panelMedia = document.getElementById('panelMedia');
    const panelPres = document.getElementById('panelPres');

    if (mode === 'media') {
      btnMedia.classList.add('active');
      btnPres.classList.remove('active');
      panelMedia.classList.add('active');
      panelPres.classList.remove('active');
    } else {
      btnPres.classList.add('active');
      btnMedia.classList.remove('active');
      panelPres.classList.add('active');
      panelMedia.classList.remove('active');
    }
  }