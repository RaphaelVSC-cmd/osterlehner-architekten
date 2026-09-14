/**
 * OSTERLEHNER ARCHITEKTEN GMBH — MASTER APPLICATION ENGINE (v7.0)
 * Stack: Lenis Smooth Scroll + GSAP Core + ScrollTrigger + SplitType
 * Architektonisches Tektonik-System & Bestands-Potenzial-Navigator
 */

'use strict';

// === LENIS SMOOTH SCROLL ===
let lenis = null;

function initLenis() {
  if (typeof Lenis === 'undefined') return;

  lenis = new Lenis({
    duration: 0.9,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
    smoothTouch: false, /* Natives Touch auf Smartphones */
    autoResize: true,
  });

  if (typeof ScrollTrigger !== 'undefined') {
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
  }

  /* Sanfter Anker-Scroll */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id && id !== '#') {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -75 });
        }
      }
    });
  });
}

// === MOTION-PRIMITIVE 1: HERO KINETIC TYPOGRAPHY & BLUEPRINT DRAW ===
function initKineticTypography() {
  if (typeof gsap === 'undefined' || typeof SplitType === 'undefined') return;

  const heroHeading = document.getElementById('hero-heading');
  if (heroHeading) {
    const split = new SplitType(heroHeading, { types: 'words,chars' });
    gsap.from(split.chars, {
      opacity: 0,
      y: 60,
      rotateX: -25,
      stagger: 0.02,
      duration: 0.9,
      ease: 'power4.out',
      delay: 0.15,
      clearProps: 'all'
    });
  }

  // Section-Titles Split Lines Reveal
  document.querySelectorAll('.section-title').forEach(el => {
    const s = new SplitType(el, { types: 'lines' });
    gsap.from(s.lines, {
      opacity: 0,
      y: 35,
      duration: 0.85,
      ease: 'power3.out',
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      },
      clearProps: 'all'
    });
  });

  // Blueprint Lines Stroke Draw
  document.querySelectorAll('[data-svg-draw]').forEach(svg => {
    const paths = svg.querySelectorAll('path, line');
    paths.forEach(p => {
      const len = p.getTotalLength ? p.getTotalLength() : 600;
      p.style.strokeDasharray = len;
      p.style.strokeDashoffset = len;
      gsap.to(p, {
        strokeDashoffset: 0,
        duration: 1.4,
        ease: 'power2.out',
        delay: 0.3
      });
    });
  });
}

// === MOTION-PRIMITIVE 2: TEKTONISCHE SCHNITT-PARALLAXE ===
function initTektonischeParallaxe() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('[data-parallax-container]').forEach(container => {
    const photo = container.querySelector('.layer-photo');
    const plan = container.querySelector('.layer-plan');

    if (photo) {
      gsap.fromTo(photo, 
        { yPercent: -6 },
        {
          yPercent: 6,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1
          }
        }
      );
    }

    if (plan) {
      gsap.fromTo(plan, 
        { yPercent: 12 },
        {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.1
          }
        }
      );
    }
  });
}

// === MOTION-PRIMITIVE 3: FADENKREUZ-PEILUNG (Magnetic Crosshair Cursor) ===
function initCrosshairCursor() {
  const cursor = document.getElementById('crosshairCursor');
  const metricLabel = document.getElementById('chMetric');
  if (!cursor || window.matchMedia('(hover: none)').matches) return;

  cursor.classList.add('active');

  const xTo = gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power3' });
  const yTo = gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power3' });

  window.addEventListener('mousemove', (e) => {
    xTo(e.clientX);
    yTo(e.clientY);
  });

  // Magnetisches Snapping an Projektkennzahlen & Kataster
  document.querySelectorAll('[data-magnetic-target]').forEach(target => {
    target.addEventListener('mouseenter', () => {
      cursor.classList.add('snapped');
      const name = target.getAttribute('data-metric-name') || 'M 1:100';
      if (metricLabel) metricLabel.textContent = name;
      gsap.to(cursor, { scale: 1.3, duration: 0.2, ease: 'power2.out' });
    });

    target.addEventListener('mouseleave', () => {
      cursor.classList.remove('snapped');
      if (metricLabel) metricLabel.textContent = 'RÖTEL 1:1';
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: 'power2.out' });
    });
  });
}

// === MOTION-PRIMITIVE 4: DYNAMIC METRIC COUNTERS ===
function initCounters() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('.stat-counter').forEach(el => {
    const target = parseFloat(el.dataset.target || '0');
    const suffix = el.dataset.suffix || '';

    gsap.fromTo({ val: 0 }, { val: target }, {
      duration: 1.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        toggleActions: 'play none none none'
      },
      onUpdate: function () {
        const current = Math.round(this.targets()[0].val);
        el.textContent = current + suffix;
      }
    });
  });
}

// === MOTION-PRIMITIVE 5: KATASTER AKKORDEON & FILTER ===
function initKatasterEngine() {
  const rows = document.querySelectorAll('.kataster-row');
  const filterBtns = document.querySelectorAll('.filter-btn');

  rows.forEach(row => {
    const summary = row.querySelector('.row-summary');
    const slot = row.querySelector('.row-slot');
    if (!summary || !slot) return;

    summary.addEventListener('click', () => {
      const isOpen = row.classList.contains('is-open');

      // Schließe alle anderen offenen Akten
      rows.forEach(r => {
        if (r !== row) {
          r.classList.remove('is-open');
          const otherSummary = r.querySelector('.row-summary');
          const otherSlot = r.querySelector('.row-slot');
          if (otherSlot) otherSlot.hidden = true;
          if (otherSummary) otherSummary.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle aktueller Schlitz
      if (isOpen) {
        row.classList.remove('is-open');
        slot.hidden = true;
        summary.setAttribute('aria-expanded', 'false');
      } else {
        row.classList.add('is-open');
        slot.hidden = false;
        summary.setAttribute('aria-expanded', 'true');
        if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      }
    });

    summary.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        summary.click();
      }
    });
  });

  // Filter-Funktionalität
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      rows.forEach(row => {
        const cat = row.dataset.category;
        if (filter === 'all' || cat === filter) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      });

      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    });
  });
}

// === MOTION-PRIMITIVE 6: NATIVE CSS-3D PERSPECTIVE TILT ===
function init3DTilt() {
  const isTouch = window.matchMedia('(hover: none)').matches;
  document.querySelectorAll('[data-tilt-3d], .card-3d').forEach(card => {
    if (!isTouch) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const rotateX = -(y / (rect.height / 2)) * 6; // Max 6 Grad
        const rotateY = (x / (rect.width / 2)) * 6;

        gsap.to(card, {
          transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
          duration: 0.6,
          ease: 'elastic.out(1, 0.6)'
        });
      });
    } else if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.fromTo(card,
        { transform: 'perspective(1000px) rotateX(5deg)' },
        {
          transform: 'perspective(1000px) rotateX(0deg)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none'
          }
        }
      );
    }
  });
}

// === MOTION-PRIMITIVE 7: ROTATING SEAL BADGE ===
function initRotatingBadge() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('[data-rotating-seal]').forEach(badge => {
    gsap.to(badge, {
      rotation: 360,
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 2
      }
    });
  });
}

// === MOTION-PRIMITIVE 8: EDITORIAL TEXT-SCRUBBING ===
function initTextScrub() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  document.querySelectorAll('[data-text-scrub]').forEach(container => {
    const text = container.textContent.trim();
    container.innerHTML = text.split(' ').map(w => `<span class="text-scrub-word" style="opacity: 0.28; transition: opacity 0.15s ease;">${w}</span> `).join('');
    const words = container.querySelectorAll('.text-scrub-word');

    gsap.to(words, {
      opacity: 1.0,
      stagger: 0.04,
      scrollTrigger: {
        trigger: container,
        start: 'top 82%',
        end: 'bottom 55%',
        scrub: 0.6
      }
    });
  });
}

// === SIGNATURE FEATURE: DER BESTANDS-POTENZIAL-NAVIGATOR ===
function initPotenzialNavigator() {
  const bgfSlider = document.getElementById('bgfSlider');
  const bgfOutput = document.getElementById('bgfOutput');
  const metaBgf = document.getElementById('metaBgf');
  const resGain = document.getElementById('resGain');
  const resCarbon = document.getElementById('resCarbon');
  const resRefName = document.getElementById('resRefName');
  const resRefDesc = document.getElementById('resRefDesc');
  const typeBtns = document.querySelectorAll('[data-type]');
  const goalBtns = document.querySelectorAll('[data-goal]');
  const btnTransfer = document.getElementById('btnTransferConfig');

  // SVG Elements for Morphing
  const svgBase = document.getElementById('svgBase');
  const svgRoof = document.getElementById('svgRoof');
  const svgRoofText = document.getElementById('svgRoofText');

  if (!bgfSlider) return;

  let currentType = 'nachkrieg';
  let currentGoal = 'aufstockung';

  function updateCalculations() {
    const bgf = parseInt(bgfSlider.value, 10);
    if (bgfOutput) bgfOutput.textContent = `${bgf.toLocaleString('de-DE')} m²`;
    if (metaBgf) metaBgf.textContent = `${bgf.toLocaleString('de-DE')} m²`;

    let gainMultiplier = 0.20; // 20% Aufstockungsgewinn
    let carbonFactor = 0.16;   // 0.16 t CO2 pro m² geretteter BGF

    if (currentGoal === 'konversion') {
      gainMultiplier = 0.65; // Bis zu 65% in Wohnraum umgewandelt
      carbonFactor = 0.22;
    } else if (currentGoal === 'sanierung') {
      gainMultiplier = 0.08; // Effizienzoptimierung
      carbonFactor = 0.28;
    }

    const gainM2 = Math.round(bgf * gainMultiplier);
    const carbonSaved = Math.round(bgf * carbonFactor);

    if (resGain) resGain.textContent = `+${gainM2.toLocaleString('de-DE')} m²`;
    if (resCarbon) resCarbon.textContent = `~${carbonSaved.toLocaleString('de-DE')} t CO₂`;

    // Referenz-Zuordnung basierend auf Typ & Ziel
    if (currentGoal === 'aufstockung') {
      if (bgf > 2000) {
        if (resRefName) resRefName.textContent = 'Rathausstraße 37–41 // Königsbrunn';
        if (resRefDesc) resRefDesc.textContent = 'Aufstockung von 28 Einheiten auf einer WEG-Großwohnanlage.';
      } else {
        if (resRefName) resRefName.textContent = 'Fuggerstraße 5 + 7 // Augsburg';
        if (resRefDesc) resRefDesc.textContent = 'Dachaufstockung mit 3 Luxuswohnungen im laufenden Geschäftsbetrieb.';
      }
    } else if (currentGoal === 'konversion') {
      if (resRefName) resRefName.textContent = 'Lange Gasse 26 // Altstadt Augsburg (2024)';
      if (resRefDesc) resRefDesc.textContent = 'Gewerbekonversion in 10 Stadtwohnungen im denkmalnahen Altstadtring.';
    } else {
      if (currentType === 'denkmal') {
        if (resRefName) resRefName.textContent = 'Frauentorstraße 40 // Denkmalschutzpreis';
        if (resRefDesc) resRefDesc.textContent = 'Vorbildliche Sanierung eines denkmalgeschützten Wohn- und Geschäftshauses.';
      } else {
        if (resRefName) resRefName.textContent = 'Beethoven Carrée // Schießgrabenstraße';
        if (resRefDesc) resRefDesc.textContent = 'Energetische Komplettsanierung & Umbau von 86 Wohneinheiten.';
      }
    }

    // 2D SVG Baukörper Morphing
    if (svgBase && svgRoof && svgRoofText && typeof gsap !== 'undefined') {
      // Breiten- & Höhenskalierung basierend auf BGF
      const widthScale = gsap.utils.mapRange(300, 6000, 160, 260, bgf);
      const startX = (340 - widthScale) / 2;
      const endX = startX + widthScale;

      gsap.to(svgBase, {
        attr: { x: startX, width: widthScale },
        duration: 0.35,
        ease: 'power2.out'
      });

      if (currentGoal === 'aufstockung') {
        // Steiles Rötel-Aufstockungsdach
        const roofPeak = 30;
        svgRoof.setAttribute('points', `${startX},80 ${startX + widthScale / 2},${roofPeak} ${endX},80`);
        svgRoofText.setAttribute('x', `${startX + widthScale / 2}`);
        svgRoofText.textContent = `+${gainM2} m² AUFSTOCKUNG`;
        svgRoof.style.display = 'block';
        svgRoofText.style.display = 'block';
      } else if (currentGoal === 'konversion') {
        // Flacheres modernes Mansardvolumen
        svgRoof.setAttribute('points', `${startX},80 ${startX + 20},45 ${endX - 20},45 ${endX},80`);
        svgRoofText.setAttribute('x', `${startX + widthScale / 2}`);
        svgRoofText.textContent = `+${gainM2} m² WOHNRAUM`;
        svgRoof.style.display = 'block';
        svgRoofText.style.display = 'block';
      } else {
        // Reine Sanierungshülle
        svgRoof.setAttribute('points', `${startX},80 ${startX + widthScale / 2},55 ${endX},80`);
        svgRoofText.setAttribute('x', `${startX + widthScale / 2}`);
        svgRoofText.textContent = `EFFIZIENZ KfW 70`;
        svgRoof.style.display = 'block';
        svgRoofText.style.display = 'block';
      }
    }
  }

  bgfSlider.addEventListener('input', updateCalculations);

  typeBtns.forEach(b => {
    b.addEventListener('click', () => {
      typeBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-checked', 'true');
      currentType = b.dataset.type;
      updateCalculations();
    });
  });

  goalBtns.forEach(b => {
    b.addEventListener('click', () => {
      goalBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-checked', 'false');
      });
      b.classList.add('active');
      b.setAttribute('aria-checked', 'true');
      currentGoal = b.dataset.goal;
      updateCalculations();
    });
  });

  // 1-Klick-Übertrag in die Terminanfrage
  if (btnTransfer) {
    btnTransfer.addEventListener('click', () => {
      const bgf = bgfSlider.value;
      const flaecheInput = document.getElementById('formFlaeche');
      if (flaecheInput) {
        flaecheInput.value = `ca. ${parseInt(bgf, 10).toLocaleString('de-DE')} m² BGF`;
      }

      // Passende Vorhaben-Radio Option wählen
      let radioVal = 'Dachaufstockung & Nachverdichtung';
      if (currentGoal === 'konversion') radioVal = 'Gewerbekonversion & Umnutzung';
      else if (currentGoal === 'sanierung') radioVal = 'Denkmalschutz & Komplettsanierung';

      const radio = document.querySelector(`input[name="vorhaben"][value="${radioVal}"]`);
      if (radio) radio.checked = true;

      // Scroll zum Kontaktpunkt
      const kontaktSec = document.getElementById('kontakt');
      if (kontaktSec) {
        if (lenis) lenis.scrollTo(kontaktSec, { offset: -70 });
        else kontaktSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initial Run
  updateCalculations();
}

// === ERLEBNIS-KONTAKTPUNKT MULTI-STEP & FORMSPREE ENGINE ===
function initExperienceContact() {
  const container = document.querySelector('[data-experience-contact]');
  const form = document.getElementById('contactForm');
  if (!container || !form) return;

  const fallback = document.getElementById('formFallback');
  const status = document.getElementById('formStatus');
  const badges = container.querySelectorAll('.step-badge');
  const panels = container.querySelectorAll('.step-panel');

  function goToStep(stepNum) {
    panels.forEach(p => {
      const isTarget = p.id === `stepPanel${stepNum}`;
      p.hidden = !isTarget;
      p.classList.toggle('active', isTarget);
    });

    badges.forEach(b => {
      const isActive = parseInt(b.dataset.step, 10) === stepNum;
      b.classList.toggle('active', isActive);
      b.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    const activePanel = container.querySelector(`.step-panel#stepPanel${stepNum}`);
    if (activePanel) {
      const firstInput = activePanel.querySelector('input:not([type="hidden"]), select, textarea, button');
      if (firstInput) firstInput.focus();
    }
  }

  container.querySelectorAll('[data-goto-step]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetStep = parseInt(btn.dataset.gotoStep, 10);
      goToStep(targetStep);
    });
  });

  badges.forEach(b => {
    b.addEventListener('click', () => {
      const step = parseInt(b.dataset.step, 10);
      goToStep(step);
    });
  });

  // Form Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btnSubmitContact');
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Vorprüfungs-Anfrage wird übermittelt…';
    }

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      });

      if (res.ok) {
        if (status) {
          status.textContent = 'Vielen Dank! Ihre Projektanfrage ist direkt bei Architekt Jochen Osterlehner eingegangen. Wir melden uns zur Abstimmung der Vorprüfung.';
          status.style.color = 'var(--sc-accent)';
        }
        form.reset();
        goToStep(1);
      } else if (res.status === 429) {
        if (fallback) fallback.style.display = 'block';
        form.style.display = 'none';
      } else {
        if (status) status.textContent = 'Übertragung fehlgeschlagen. Bitte rufen Sie uns direkt an: +49 821 96902';
        if (btn) {
          btn.disabled = false;
          btn.textContent = 'Vorprüfungs-Anfrage jetzt absenden';
        }
      }
    } catch {
      if (fallback) fallback.style.display = 'block';
      if (btn) {
        btn.disabled = false;
        btn.textContent = 'Vorprüfungs-Anfrage jetzt absenden';
      }
    }
  });
}

// === TWO-CLICK GOOGLE MAPS UNLOCK ===
function initMapsUnlock() {
  const btnUnlock = document.getElementById('btnUnlockMap');
  const iframe = document.getElementById('googleMapsIframe');
  const placeholder = document.getElementById('mapsPlaceholder');

  function unlock() {
    if (iframe && iframe.dataset.src) {
      iframe.src = iframe.dataset.src;
      delete iframe.dataset.src;
    }
    if (placeholder) placeholder.classList.add('hidden');
  }

  if (btnUnlock) {
    btnUnlock.addEventListener('click', unlock);
  }

  // Auch global bei Consent-Akzeptanz
  window.addEventListener('maps-consent-granted', unlock);
}

// === DSGVO CONSENT MANAGER ===
function initConsent() {
  const KEY = 'consent_v1';
  const banner = document.getElementById('consentBanner');
  const stored = localStorage.getItem(KEY);

  function applyConsent(accepted) {
    if (accepted) {
      window.dispatchEvent(new CustomEvent('maps-consent-granted'));
    }
    if (banner) banner.hidden = true;
  }

  if (stored === 'accepted') applyConsent(true);
  else if (stored === 'rejected') applyConsent(false);
  else if (banner) banner.hidden = false;

  document.getElementById('consentAccept')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'accepted');
    applyConsent(true);
  });

  document.getElementById('consentReject')?.addEventListener('click', () => {
    localStorage.setItem(KEY, 'rejected');
    applyConsent(false);
  });

  document.getElementById('cookieSettingsLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem(KEY);
    if (banner) banner.hidden = false;
  });
}

// === MOBILE NAVIGATION ===
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  if (!hamburger || !menu) return;

  const open = () => {
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    menu.removeAttribute('hidden');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
  };

  const close = () => {
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!menu.classList.contains('is-open')) menu.setAttribute('hidden', '');
    }, 250);
    if (lenis) lenis.start();
  };

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) close();
    else open();
  });

  menu.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      close();
      if (targetId && targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          setTimeout(() => {
            if (lenis) lenis.scrollTo(target, { offset: -70 });
            else target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 80);
        }
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
      close();
    }
  });
}

// === MODALS (IMPRESSUM & DATENSCHUTZ) ===
function initModals() {
  document.querySelectorAll('[data-modal-open]').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = trigger.dataset.modalOpen;
      const modal = document.getElementById(modalId);
      if (!modal) return;
      modal.removeAttribute('hidden');
      modal.setAttribute('aria-hidden', 'false');
      if (lenis) lenis.stop();
      const focusable = modal.querySelector('button, [href], input');
      if (focusable) focusable.focus();
    });
  });

  const closeAll = () => {
    document.querySelectorAll('.modal:not([hidden])').forEach(m => {
      m.setAttribute('hidden', '');
      m.setAttribute('aria-hidden', 'true');
    });
    if (lenis) lenis.start();
  };

  document.querySelectorAll('[data-modal-close]').forEach(el => {
    el.addEventListener('click', closeAll);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

// === TAGESZEIT-PERSONALISIERUNG ===
function initTimeGreeting() {
  const el = document.querySelector('[data-time-greeting]');
  if (!el) return;
  const h = new Date().getHours();
  let msg = 'Guten Tag';
  if (h >= 6 && h < 12) msg = 'Guten Morgen — Baubüro Stephingergraben 4 besetzt';
  else if (h >= 12 && h < 18) msg = 'Guten Tag — Projektbesprechungen & Termine aktiv';
  else msg = 'Guten Abend — Wir prüfen Ihre Anfrage am nächsten Werktag';
  el.textContent = msg;
}

// === HEADER SCROLL STATE ===
function initHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 25);
  }, { passive: true });
}

// === LIVE-ALARM DEMO-TRACKER (Standard v6.2) ===
function initDemoTracker() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' || window.location.search.includes('preview=true')) return;

  const startTime = Date.now();
  const company = 'Osterlehner Architekten GmbH';
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const deviceType = isMobile ? 'Smartphone (Mobil)' : 'Desktop-Computer';
  const referrer = document.referrer ? (document.referrer.includes('whatsapp') ? 'WhatsApp Direktlink' : document.referrer) : 'Direktaufruf';

  let pingSent = false;
  let exitSent = false;
  const clickedActions = new Set();

  document.querySelectorAll('[data-track]').forEach(el => {
    el.addEventListener('click', () => {
      const type = el.getAttribute('data-track');
      if (type === 'whatsapp') clickedActions.add('WhatsApp-Direktchat');
      else if (type === 'telefon') clickedActions.add('Telefonanruf');
      else if (type === 'rechner') clickedActions.add('Potenzial-Navigator');
      else if (type === 'angebot') clickedActions.add('Vorprüfungs-Formular');
      else if (type === 'projekt-klick') clickedActions.add('Kataster-Akte geöffnet');
    });
  });

  async function sendAlert(stage) {
    const elapsedSeconds = Math.round((Date.now() - startTime) / 1000);
    const durationText = elapsedSeconds < 60 ? `${elapsedSeconds}s` : `${Math.floor(elapsedSeconds / 60)}m ${elapsedSeconds % 60}s`;

    let statusText = '⚡ Reingeschaut';
    let empfehlung = 'Planmäßig anrufen und Bezug auf den Kataster-Entwurf nehmen.';

    if (elapsedSeconds >= 45 || clickedActions.size > 0) {
      statusText = '🔥 HEISS! Hohes Interesse & Klicks im Bestands-Kataster!';
      empfehlung = 'SOFORTIGE AKTION: In den nächsten 15–30 Minuten via WhatsApp nachhaken („Guten Tag Herr Osterlehner, ich habe gesehen, Sie prüfen den Kataster-Entwurf gerade...“).';
    } else if (elapsedSeconds >= 20) {
      statusText = '👍 WARM! Hat die Seite aufmerksam betrachtet.';
      empfehlung = 'Follow-Up Call vorbereiten. Skript Phase 8 bereithalten.';
    }

    const clickedList = clickedActions.size > 0 ? Array.from(clickedActions).join(', ') : 'Nur gescrollt';
    const message = `🔔 [NEXBOT LIVE-ALARM] Architekt schaut Demo an!\n\n` +
      `🏢 Büro: ${company}\n` +
      `📱 Gerät: ${deviceType}\n` +
      `🔗 Quelle: ${referrer}\n` +
      `⏱️ Verweildauer: ${durationText}\n` +
      `🎯 Klicks: ${clickedList}\n` +
      `📊 Status: ${statusText}\n\n` +
      `💡 Empfehlung für Raphael:\n${empfehlung}`;

    // 1. Telegram Push-Alarm an Raphael
    try {
      fetch('https://api.telegram.org/bot8932370815:AAEfF_FRLC12FTFwoa9uRrizlARluM8KYxE/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: '5942652345', text: message }),
        keepalive: true
      }).catch(() => {});
    } catch (_) {}

    // 2. Formspree E-Mail Alarm
    try {
      fetch('https://formspree.io/f/xbjnqkyv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ subject: `🔥 [LIVE-ALARM] ${company} (${durationText})`, message: message }),
        keepalive: true
      }).catch(() => {});
    } catch (_) {}
  }

  setTimeout(() => {
    if (!pingSent) {
      pingSent = true;
      sendAlert('initial');
    }
  }, 5000);

  window.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && !exitSent) {
      exitSent = true;
      sendAlert('exit');
    }
  });
}

// === DOMCONTENTLOADED MASTER INITIALISIERUNG ===
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
  // Grundsysteme
  initLenis();
  initDemoTracker();
  initTimeGreeting();
  initHeader();
  initConsent();
  initMapsUnlock();
  initMobileNav();
  initModals();
  initKatasterEngine();
  initExperienceContact();
  initPotenzialNavigator();

  // Motion-Budget (Mindestens 5 Primitiven aktiv)
  if (!prefersReducedMotion) {
    initKineticTypography();     // Primitiv 1: 3D Typo Reveal & Blueprint Draw
    initTektonischeParallaxe();   // Primitiv 2: Parallaxe Risszeichnung vs. Fotografie
    initCrosshairCursor();       // Primitiv 3: Magnetisches Fadenkreuz
    initCounters();              // Primitiv 4: Hochzählen der Messzahlen
    init3DTilt();                // Primitiv 6: 3D Perspective Tilt auf Plänen
    initRotatingBadge();         // Primitiv 7: Rotierendes 25-Jahre-Büro-Siegel
    initTextScrub();             // Primitiv 8: Editorial Text Scrubbing
  }
});
