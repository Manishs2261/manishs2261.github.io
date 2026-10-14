/**
 * Manish Sahu - Flutter Developer Portfolio
 * Interactive Script: Theme toggle, typing effect, filters, modals, scroll animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC TYPING EFFECT IN HERO SECTION
  const typingElement = document.getElementById('typingText');
  const roles = [
    'Flutter Developer',
    'Cross-Platform Mobile Engineer',
    'BLoC & Freezed Specialist',
    'Android & iOS Developer',
    'Clean Architecture Advocate'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingDelay = 100;

  function typeEffect() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingDelay = 50;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingDelay = 110;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingDelay = 1800;
    } else if (isDeleting && charIndex === 0) {
      // Move to next word
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingDelay = 400;
    }

    setTimeout(typeEffect, typingDelay);
  }

  if (typingElement) {
    typeEffect();
  }

  // 2. THEME TOGGLE (DARK / LIGHT MODE)
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Default to dark mode unless user previously toggled to light
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else {
    htmlElement.setAttribute('data-theme', 'dark');
  }

  themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });

  // 3. STICKY NAVBAR ON SCROLL & SCROLL-SPY
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar scrolled state
    if (scrollPos > 40) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }

    // Back to top button visibility
    if (scrollPos > 400) {
      backToTopBtn?.classList.add('visible');
    } else {
      backToTopBtn?.classList.remove('visible');
    }

    // Scroll-Spy: highlight current section link
    let currentSectionId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id') || '';
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  // 4. MOBILE DRAWER NAVIGATION
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navMenu = document.getElementById('navMenu');

  mobileMenuBtn?.addEventListener('click', () => {
    navMenu?.classList.toggle('open');
    const icon = mobileMenuBtn.querySelector('i');
    if (navMenu?.classList.contains('open')) {
      icon?.classList.replace('fa-bars-staggered', 'fa-xmark');
    } else {
      icon?.classList.replace('fa-xmark', 'fa-bars-staggered');
    }
  });

  // Close mobile menu on clicking any link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu?.classList.remove('open');
      const icon = mobileMenuBtn?.querySelector('i');
      icon?.classList.replace('fa-xmark', 'fa-bars-staggered');
    });
  });

  // 5. SKILLS CATEGORY FILTER
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 6. RESUME MODAL VIEWER
  const resumeModal = document.getElementById('resumeModal');
  const viewResumeBtn = document.getElementById('viewResumeBtn');
  const aboutViewCvBtn = document.getElementById('aboutViewCvBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');

  function openResumeModal() {
    resumeModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeResumeModal() {
    resumeModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  viewResumeBtn?.addEventListener('click', openResumeModal);
  aboutViewCvBtn?.addEventListener('click', openResumeModal);
  closeModalBtn?.addEventListener('click', closeResumeModal);

  // Close when clicking modal backdrop
  resumeModal?.addEventListener('click', (e) => {
    if (e.target === resumeModal) {
      closeResumeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal?.classList.contains('open')) {
      closeResumeModal();
    }
  });

  // 7. COPY TO CLIPBOARD WITH TOAST NOTIFICATION
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  let toastTimeout;

  function showToast(message) {
    if (!toast || !toastMsg) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        try {
          await navigator.clipboard.writeText(textToCopy);
          showToast(`Copied to clipboard: ${textToCopy}`);
        } catch (err) {
          // Fallback
          const tempInput = document.createElement('input');
          tempInput.value = textToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
          showToast(`Copied: ${textToCopy}`);
        }
      }
    });
  });

  // 8. CONTACT FORM SUBMISSION HANDLER
  const contactForm = document.getElementById('contactForm');
  const formNotice = document.getElementById('formNotice');

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName')?.value.trim();
    const email = document.getElementById('userEmail')?.value.trim();
    const subject = document.getElementById('userSubject')?.value.trim();
    const message = document.getElementById('userMessage')?.value.trim();

    if (!name || !email || !message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Construct mailto link as direct fallback
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const mailtoBody = encodeURIComponent(`Hi Manish,\n\n${message}\n\nFrom: ${name} (${email})`);
    const mailtoUrl = `mailto:manishsahu2609@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    if (formNotice) {
      formNotice.className = 'form-notice success';
      formNotice.innerHTML = `✓ Thank you <strong>${name}</strong>! Opening your email client to send your message to <em>manishsahu2609@gmail.com</em>...`;
    }

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 700);
  });

  // 9. BACK TO TOP CLICK
  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 10. CURRENT YEAR IN FOOTER
  const yearElement = document.getElementById('currentYear');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
