document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('modal-open');
    });
  }

  // 2. Active Navigation
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link, .btn-primary[href="contact.html"]');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if ((currentPath === '/' || currentPath.endsWith('index.html')) && (href === 'index.html' || href === '/')) {
      link.classList.add('active');
    } else if (href !== '/' && href !== 'index.html' && currentPath.includes(href)) {
      link.classList.add('active');
    }
  });

  // 3. Scroll Reveal
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');
  if (prefersReducedMotion) {
    revealElements.forEach(el => el.classList.add('active'));
  } else {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // 4. Scroll & Navbar Logic
  const scrollProgress = document.getElementById('scrollProgress');
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (scrollProgress) {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      scrollProgress.style.width = pct + '%';
    }
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    }
    
    // Process Timeline
    const timelineProgress = document.getElementById('timelineProgress');
    if (timelineProgress) {
      const timelineRect = document.querySelector('.timeline').getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.5;
      let fillPct = 0;
      if (timelineRect.top < viewportCenter) {
        fillPct = Math.min(100, Math.max(0, ((viewportCenter - timelineRect.top) / timelineRect.height) * 100));
      }
      timelineProgress.style.height = fillPct + '%';

      document.querySelectorAll('.timeline-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if(rect.top < viewportCenter + 50) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }, { passive: true });

  // 5. Cursor Glow (Desktop)
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && !window.matchMedia('(hover: none)').matches && !prefersReducedMotion) {
    window.addEventListener('mousemove', (e) => {
      cursorGlow.style.opacity = '1';
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });
    window.addEventListener('mouseleave', () => {
      cursorGlow.style.opacity = '0';
    });
  }

  // 6. Portfolio Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.classList.remove('hidden');
            setTimeout(() => { card.style.display = 'block'; }, 50);
          } else {
            card.classList.add('hidden');
            setTimeout(() => { card.style.display = 'none'; }, 300);
          }
        });
      });
    });
  }

  // 7. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if(btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          const b = i.querySelector('.faq-btn');
          if (b) b.setAttribute('aria-expanded', 'false');
          const c = i.querySelector('.faq-content');
          if (c) c.style.maxHeight = null;
        });
        if (!isActive) {
          item.classList.add('active');
          btn.setAttribute('aria-expanded', 'true');
          const content = item.querySelector('.faq-content');
          if (content) content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });

  // 8. Project Modal Data & Logic
  const projectsData = {
    'baemeds': {
      title: 'BaeMeds',
      category: 'E-Commerce',
      image: 'images/projects/baemeds.png',
      overview: 'Multi-national e-commerce platform for a Durable Medical Equipment business operating in the USA and India. Required complex regulatory compliance and cross-border currency routing.',
      challenge: 'The client needed a unified platform that could handle distinct inventories, compliance standards, and payment gateways for two entirely different geographic markets without maintaining two separate codebases.',
      approach: 'We designed a headless e-commerce architecture, utilizing a single backend source of truth with localized frontend rendering based on user geography.',
      built: 'Custom storefront, admin dashboard, automated inventory sync, and regional compliance workflows.',
      tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API'],
      link: 'https://baemeds.com'
    },
    'erus-academy': {
      title: 'Erus Academy',
      category: 'Software',
      image: 'images/projects/erus-academy.png',
      overview: 'A comprehensive LMS platform featuring an administrative web portal alongside native iOS and Android learning applications.',
      challenge: 'Delivering a consistent, high-performance video learning experience across web and mobile while maintaining strict content security and piracy prevention.',
      approach: 'Built a unified API serving both the React web application and native mobile apps, utilizing encrypted HLS video streaming.',
      built: 'Web portal, iOS app, Android app, video streaming infrastructure, and payment integration.',
      tech: ['React', 'React Native', 'Node.js', 'AWS MediaLive'],
      link: 'https://erusacademy.in'
    },
    'auvia': {
      title: 'Auvia Behavioral Centers',
      category: 'Healthcare',
      image: 'images/projects/auvia.png',
      overview: 'Modern web platform and patient intake portal for an autism therapy clinic network based in Austin, Texas.',
      challenge: 'Creating a HIPAA-compliant digital intake process that was accessible to parents while integrating directly into the clinic\'s internal scheduling system.',
      approach: 'Developed a secure, component-driven frontend with an encrypted data pipeline to their practice management software.',
      built: 'Corporate website, secure intake forms, accessibility-first UI components.',
      tech: ['React', 'TypeScript', 'Healthcare API'],
      link: 'https://auviatherapy.com'
    },
    'talent-hunters': {
      title: 'Talent Hunters Consultancy',
      category: 'Software',
      image: 'images/projects/talent-hunters.png',
      overview: 'Corporate platform and candidate application tracking portal for an international talent acquisition firm.',
      challenge: 'Streamlining the candidate application pipeline and providing recruiters with a fast, searchable database of global applicants.',
      approach: 'Implemented a high-performance ATS portal with robust search indexing and automated resume parsing workflows.',
      built: 'Job board, recruiter dashboard, candidate portal.',
      tech: ['Next.js', 'Elasticsearch', 'PostgreSQL'],
      link: 'https://talenthunters.com'
    },
    'snowcms': {
      title: 'snowCMS Automation',
      category: 'ServiceNow',
      image: 'images/projects/snowcms.png',
      overview: 'Proprietary ServiceNow automation utility built to streamline content management, instance deployments, and workflows.',
      challenge: 'Enterprise teams were spending hundreds of hours manually migrating content and configurations between ServiceNow instances.',
      approach: 'Engineered a native ServiceNow scoped application that automates content packaging and instance synchronization.',
      built: 'ServiceNow scoped app, automated deployment pipelines, conflict detection algorithms.',
      tech: ['ServiceNow', 'JavaScript', 'GlideScript'],
      link: '#'
    },
    'clinic-connect': {
      title: 'Clinic Connect',
      category: 'Healthcare',
      image: 'images/projects/clinic-connect.png',
      overview: 'Automated session scheduling, provider assignment, and patient reminder pipeline built for specialized medical clinics.',
      challenge: 'High no-show rates and scheduling conflicts were impacting clinic revenue and provider utilization.',
      approach: 'Deployed an automated rules engine that handles provider matching, waitlist management, and multi-channel patient reminders.',
      built: 'Scheduling engine, SMS integration, provider dashboard.',
      tech: ['Node.js', 'Twilio', 'PostgreSQL', 'React'],
      link: '#'
    }
  };

  const modalOverlay = document.getElementById('projectModal');
  const modalClose = document.getElementById('modalClose');

  window.openProject = function(projectId) {
    const data = projectsData[projectId];
    if (data && modalOverlay) {
      document.getElementById('modalImg').src = data.image;
      document.getElementById('modalCategory').textContent = data.category;
      document.getElementById('modalTitle').textContent = data.title;
      document.getElementById('modalOverview').textContent = data.overview;
      document.getElementById('modalChallenge').textContent = data.challenge;
      document.getElementById('modalApproach').textContent = data.approach;
      document.getElementById('modalBuilt').textContent = data.built;
      
      const techContainer = document.getElementById('modalTech');
      techContainer.innerHTML = '';
      data.tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 's-tag';
        span.textContent = t;
        techContainer.appendChild(span);
      });

      const linkBtn = document.getElementById('modalLink');
      if(data.link !== '#') {
        linkBtn.href = data.link;
        linkBtn.style.display = 'inline-flex';
      } else {
        linkBtn.style.display = 'none';
      }

      modalOverlay.classList.add('active');
      document.body.classList.add('modal-open');
      
      // Update URL without reload
      const newUrl = window.location.pathname + '?project=' + projectId;
      window.history.pushState({ path: newUrl }, '', newUrl);
    }
  };

  const closeModal = () => {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.classList.remove('modal-open');
      // Revert URL
      window.history.pushState({ path: window.location.pathname }, '', window.location.pathname);
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Check URL on load for project
  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('project');
  if (projectId && projectsData[projectId]) {
    openProject(projectId);
  }

  // 9. Technical Background Animation (Home Hero)
  const canvas = document.getElementById('heroCanvas');
  if (canvas && !prefersReducedMotion) {
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles = [];
    
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    for(let i=0; i<60; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(99, 102, 241, 0.5)';
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.15)';
      
      for(let i=0; i<particles.length; i++) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy;
        if(p.x < 0 || p.x > width) p.vx *= -1;
        if(p.y < 0 || p.y > height) p.vy *= -1;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        for(let j=i+1; j<particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if(dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  }

  // 10. Interactive Scope & Cost Estimator
  const calcDiscipline = document.getElementById('calcDiscipline');
  const calcScale = document.getElementById('calcScale');
  const calcPriceDisplay = document.getElementById('calcPriceDisplay');
  const calcTimelineDisplay = document.getElementById('calcTimelineDisplay');
  const calcBillingType = document.getElementById('calcBillingType');
  const calcCtaBtn = document.getElementById('calcCtaBtn');

  if (calcDiscipline && calcScale && calcPriceDisplay) {
    function updateCalculator() {
      const activeDisc = calcDiscipline.querySelector('.calc-chip.active');
      const activeScale = calcScale.querySelector('.calc-chip.active');
      if (!activeDisc || !activeScale) return;

      const baseCost = parseFloat(activeDisc.getAttribute('data-base')) || 12000;
      const weeks = activeDisc.getAttribute('data-weeks') || '4 – 6 Weeks';
      const isRecurring = activeDisc.getAttribute('data-recurring') === 'true';
      const scaleMult = parseFloat(activeScale.getAttribute('data-mult')) || 1.0;
      const discType = activeDisc.getAttribute('data-type') || 'software';

      let addonsTotal = 0;
      document.querySelectorAll('.calc-check input[type="checkbox"]:checked').forEach(cb => {
        addonsTotal += parseFloat(cb.getAttribute('data-cost')) || 0;
      });

      let total = Math.round(baseCost * scaleMult + (isRecurring ? addonsTotal * 0.4 : addonsTotal));
      
      if (isRecurring) {
        calcPriceDisplay.textContent = `$${total.toLocaleString()}/mo`;
        if (calcBillingType) calcBillingType.textContent = 'Adjustable monthly retainer allocation';
      } else {
        calcPriceDisplay.textContent = `$${total.toLocaleString()}`;
        if (calcBillingType) calcBillingType.textContent = 'Fixed-scope milestone agreement';
      }

      if (calcTimelineDisplay) calcTimelineDisplay.textContent = weeks;

      if (calcCtaBtn) {
        let budgetParam = '10k_50k';
        if (isRecurring) budgetParam = 'retainer';
        else if (total < 10000) budgetParam = 'under_10k';
        else if (total > 50000) budgetParam = '50k_100k';

        calcCtaBtn.href = `contact.html?service=${encodeURIComponent(discType)}&budget=${encodeURIComponent(budgetParam)}`;
      }
    }

    calcDiscipline.querySelectorAll('.calc-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        calcDiscipline.querySelectorAll('.calc-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        updateCalculator();
      });
    });

    calcScale.querySelectorAll('.calc-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        calcScale.querySelectorAll('.calc-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        updateCalculator();
      });
    });

    document.querySelectorAll('.calc-check input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', updateCalculator);
    });

    updateCalculator();
  }

  // 11. Contact Form URL Param Pre-fill & Interactive Submission
  const contactForm = document.getElementById('contactForm');
  const formSuccessState = document.getElementById('formSuccessState');
  const resetFormBtn = document.getElementById('resetFormBtn');

  if (contactForm) {
    const qParams = new URLSearchParams(window.location.search);
    const serviceParam = qParams.get('service');
    const budgetParam = qParams.get('budget');
    const planParam = qParams.get('plan');

    const serviceSelect = document.getElementById('service');
    const budgetSelect = document.getElementById('budget');
    const messageInput = document.getElementById('message');

    if (serviceSelect && serviceParam) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value === serviceParam) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (budgetSelect && budgetParam) {
      for (let i = 0; i < budgetSelect.options.length; i++) {
        if (budgetSelect.options[i].value === budgetParam) {
          budgetSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (messageInput && planParam) {
      messageInput.value = `Interested in scoping the ${planParam.replace('_', ' ').toUpperCase()} model for our project.`;
    }

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitBtn');
      const originalText = submitBtn ? submitBtn.innerHTML : 'START THE CONVERSATION →';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>DISPATCHING BRIEF...</span>';
      }

      setTimeout(() => {
        const ticketNum = Math.floor(1000 + Math.random() * 9000);
        const ticketId = `TICKET #ZPL-2026-${ticketNum}`;
        const ticketElem = document.getElementById('successTicketId');
        if (ticketElem) ticketElem.textContent = `// ${ticketId} GENERATED`;

        try {
          const leadData = {
            name: document.getElementById('name')?.value || '',
            email: document.getElementById('email')?.value || '',
            company: document.getElementById('company')?.value || '',
            service: document.getElementById('service')?.value || '',
            budget: document.getElementById('budget')?.value || '',
            message: document.getElementById('message')?.value || '',
            submittedAt: new Date().toISOString(),
            ticketId: ticketId
          };
          localStorage.setItem('zemprolabs_last_inquiry', JSON.stringify(leadData));
        } catch(err) {}

        contactForm.style.display = 'none';
        if (formSuccessState) {
          formSuccessState.style.display = 'block';
        }
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }
      }, 700);
    });

    if (resetFormBtn && formSuccessState) {
      resetFormBtn.addEventListener('click', () => {
        contactForm.reset();
        formSuccessState.style.display = 'none';
        contactForm.style.display = 'block';
      });
    }
  }
});

