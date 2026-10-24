/**
 * Aether Homes — Main frontend logic
 * Handles WhatsApp deep links, form validation, mobile nav, and analytics hooks.
 */

(function () {
  'use strict';

  const cfg = window.SITE_CONFIG || {};

  // ---------- Helpers ----------
  function getWhatsAppBase() {
    const num = (cfg.whatsappNumber || '91XXXXXXXXXX').replace(/\D/g, '');
    return `https://wa.me/${num}`;
  }

  function buildWhatsAppUrl(message) {
    const encoded = encodeURIComponent(message);
    return `${getWhatsAppBase()}?text=${encoded}`;
  }

  // Pre-defined messages
  const MESSAGES = {
    general: 'Hi, I found your home automation website. I would like to know more about your services and pricing.',
    newHome: 'Hi, I am building a new home and would like to explore home automation options. Can we discuss my requirements?',
    existing: 'Hi, I would like to automate some existing switches, lights, fans or other devices in my home. Can you suggest suitable options?',
    designer: 'Hi, I am an interior designer and would like to explore a partnership for home automation projects.',
    architect: 'Hi, I am an architect and would like to discuss home automation collaboration for ongoing projects.',
    builder: 'Hi, I am a builder / electrical contractor and would like to explore partnership or project-based pricing.',
    demo: 'Hi, I am interested in a home automation demonstration. Please let me know the available options.',
    quote: 'Hi, I would like a quote for home automation services. Please guide me on the next steps.',
    lighting: 'Hi, I am interested in Smart Lighting Automation. Can you share more details and pricing?',
    switches: 'Hi, I am interested in Smart Switches and Fan Control. Can you share options for my home?',
    curtains: 'Hi, I am interested in Motorized Curtain Automation. Please share details.',
    locks: 'Hi, I am interested in Smart Door Locks and Video Doorbells.',
    security: 'Hi, I am interested in Home Security Sensors and Alerts.',
    hvac: 'Hi, I am interested in AC / HVAC control automation (where compatible).',
    scenes: 'Hi, I am interested in Smart Scenes (Movie Mode, Night Mode, Away Mode).',
    energy: 'Hi, I am interested in Energy Monitoring solutions.',
    custom: 'Hi, I am interested in Custom Home Automation Integration.',
    support: 'Hi, I need help with installation, troubleshooting or maintenance of existing automation.',
  };

  // ---------- Apply config to DOM ----------
  // function applyConfig() {
  //   // Company name
  //   document.querySelectorAll('[data-config="companyName"]').forEach(el => {
  //     el.textContent =cfg.companyName || 'MV Home Automation';
  //       // cfg.companyName || 'Aether Homes';
  //   });
  //   document.querySelectorAll('[data-config="logoText"]').forEach(el => {
  //     el.textContent = cfg.logoText || 'MV Home Automation'
  //       // cfg.logoText || 'AETHER';
  //   });
  //   document.querySelectorAll('[data-config="email"]').forEach(el => {
  //     el.textContent = cfg.email || 'hello@yourdomain.com';
  //     if (el.tagName === 'A') el.href = `mailto:${cfg.email || 'hello@yourdomain.com'}`;
  //   });
  //   document.querySelectorAll('[data-config="phoneDisplay"]').forEach(el => {
  //     el.textContent = cfg.phoneDisplay || '+91 XXXXX XXXXX';
  //   });
  //   document.querySelectorAll('[data-config="address"]').forEach(el => {
  //     el.textContent = cfg.address || 'Madurai • Coimbatore • Chennai, Tamil Nadu';
  //   });
  //   document.querySelectorAll('[data-config="tagline"]').forEach(el => {
  //     el.textContent = cfg.tagline || 'Smart Living, Simply Delivered';
  //   });

  //   // Service areas list
  //   const areas = cfg.serviceAreas || ['Madurai', 'Coimbatore', 'Chennai'];
  //   document.querySelectorAll('[data-config="serviceAreas"]').forEach(el => {
  //     el.textContent = areas.join(' • ');
  //   });

  // //   // Update page title if needed
  // //   if (cfg.defaultTitle) {
  // //     document.title = cfg.defaultTitle;
  // //   }
  // // }
    
  //   // Update page title
  //   if (cfg.defaultTitle) {
  //     document.title = cfg.defaultTitle;
  //   }

  //   // Update meta description
  //   if (cfg.defaultDescription) {
  //     let description = document.querySelector(
  //       'meta[name="description"]'
  //     );

  //     if (!description) {
  //       description = document.createElement('meta');
  //       description.setAttribute('name', 'description');
  //       document.head.appendChild(description);
  //     }

  //     description.setAttribute(
  //       'content',
  //       cfg.defaultDescription
  //     );
  //   }

  //   // Update canonical URL for the homepage
  //   if (cfg.siteUrl) {
  //     let canonical = document.querySelector(
  //       'link[rel="canonical"]'
  //     );

  //     if (!canonical) {
  //       canonical = document.createElement('link');
  //       canonical.setAttribute('rel', 'canonical');
  //       document.head.appendChild(canonical);
  //     }

  //     const baseUrl = cfg.siteUrl.replace(/\/+$/, '');
  //     canonical.setAttribute('href', baseUrl + '/');
  //   }



    // ---------- Apply config to DOM ----------
  function applyConfig() {
    // Company name
    document.querySelectorAll('[data-config="companyName"]').forEach(el => {
      el.textContent = cfg.companyName || 'MV Home Automation';
    });

    // Logo text
    document.querySelectorAll('[data-config="logoText"]').forEach(el => {
      el.textContent = cfg.logoText || 'MV Home Automation';
    });

    // Email
    document.querySelectorAll('[data-config="email"]').forEach(el => {
      el.textContent = cfg.email || '';
      if (el.tagName === 'A') {
        el.href = cfg.email ? `mailto:${cfg.email}` : '#';
      }
    });

    // Phone
    document.querySelectorAll('[data-config="phoneDisplay"]').forEach(el => {
      el.textContent = cfg.phoneDisplay || '';
    });

    // Address
    document.querySelectorAll('[data-config="address"]').forEach(el => {
      el.textContent = cfg.address || 'Madurai, Tamil Nadu';
    });

    // Tagline
    document.querySelectorAll('[data-config="tagline"]').forEach(el => {
      el.textContent = cfg.tagline || 'Smart Living, Simply Delivered';
    });

    // Service areas
    const areas = cfg.serviceAreas || ['Madurai', 'Coimbatore', 'Chennai'];
    document.querySelectorAll('[data-config="serviceAreas"]').forEach(el => {
      el.textContent = areas.join(' • ');
    });

    // Page title
    if (cfg.defaultTitle) {
      document.title = cfg.defaultTitle;
    }

    // Meta description
    if (cfg.defaultDescription) {
      let description = document.querySelector('meta[name="description"]');

      if (!description) {
        description = document.createElement('meta');
        description.setAttribute('name', 'description');
        document.head.appendChild(description);
      }

      description.setAttribute('content', cfg.defaultDescription);
    }

    // Canonical URL
    if (cfg.siteUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');

      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }

      const baseUrl = cfg.siteUrl.replace(/\/+$/, '');
      canonical.setAttribute('href', baseUrl + '/');
    }
  }


  

  // ---------- WhatsApp links ----------
  function wireWhatsAppLinks() {
    document.querySelectorAll('[data-wa]').forEach(el => {
      const key = el.getAttribute('data-wa');
      const msg = MESSAGES[key] || MESSAGES.general;
      el.href = buildWhatsAppUrl(msg);
      el.target = '_blank';
      el.rel = 'noopener noreferrer';

      // Track click (placeholder for GA)
      el.addEventListener('click', () => {
        trackEvent('whatsapp_click', { message_key: key });
      });
    });
  }

  // ---------- Mobile menu ----------
  function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');
    if (!btn || !menu) return;

    btn.addEventListener('click', () => menu.classList.add('open'));
    if (closeBtn) closeBtn.addEventListener('click', () => menu.classList.remove('open'));

    // Close on link click
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => menu.classList.remove('open'));
    });
  }

  // ---------- Enquiry form ----------
  // function initForm() {
  //   const form = document.getElementById('enquiry-form');
  //   if (!form) return;

  //   const successBox = document.getElementById('form-success');
  //   const errorBox = document.getElementById('form-error');

  //   form.addEventListener('submit', async (e) => {
  //     e.preventDefault();
  //     if (errorBox) errorBox.classList.add('hidden');

  //     // Basic validation
  //     const name = form.querySelector('[name="fullName"]').value.trim();
  //     const whatsapp = form.querySelector('[name="whatsapp"]').value.trim();
  //     const customerType = form.querySelector('[name="customerType"]').value;
  //     const location = form.querySelector('[name="projectLocation"]').value.trim();
  //     const projectType = form.querySelector('[name="projectType"]').value;
  //     const consent = form.querySelector('[name="consent"]').checked;

  //     if (!name || !whatsapp || !customerType || !location || !projectType || !consent) {
  //       if (errorBox) {
  //         errorBox.textContent = 'Please fill all required fields and accept the consent checkbox.';
  //         errorBox.classList.remove('hidden');
  //       }
  //       return;
  //     }

  //     // Collect multi-select services
  //     const services = Array.from(form.querySelectorAll('[name="services"]:checked')).map(c => c.value);

  //     const payload = {
  //       fullName: name,
  //       whatsapp,
  //       customerType,
  //       projectLocation: location,
  //       projectType,
  //       services,
  //       projectStage: form.querySelector('[name="projectStage"]').value || '',
  //       budget: form.querySelector('[name="budget"]').value || '',
  //       preferredDate: form.querySelector('[name="preferredDate"]').value || '',
  //       requirements: form.querySelector('[name="requirements"]').value || '',
  //       source: 'website_enquiry_form',
  //       timestamp: new Date().toISOString(),
  //     };

  //     // Submit if endpoint configured
  //     let saved = false;
  //     if (cfg.formEndpoint) {
  //       try {
  //         const res = await fetch(cfg.formEndpoint, {
  //           method: 'POST',
  //           headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
  //           body: JSON.stringify(payload),
  //         });
  //         saved = res.ok;
  //       } catch (err) {
  //         console.warn('Form endpoint error:', err);
  //       }
  //     }

  //     // Always show success UI (honest about storage)
  //     form.classList.add('hidden');
  //     if (successBox) {
  //       successBox.classList.remove('hidden');
  //       const note = successBox.querySelector('[data-storage-note]');
  //       if (note) {
  //         note.textContent = saved
  //           ? 'Your enquiry has been received. Our team will contact you shortly.'
  //           : 'Thank you! Please also message us on WhatsApp so we can respond faster. (Form storage is not yet configured — contact via WhatsApp for guaranteed follow-up.)';
  //       }
  //     }

  //     trackEvent('form_submit', { customerType, projectType, services_count: services.length });
  //   });
  // }
function initForm() {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const successBox = document.getElementById('form-success');
  const errorBox = document.getElementById('form-error');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (errorBox) errorBox.classList.add('hidden');

    // Basic validation
    const name = form.querySelector('[name="fullName"]').value.trim();
    const whatsapp = form.querySelector('[name="whatsapp"]').value.trim();
    const customerType = form.querySelector('[name="customerType"]').value;
    const location = form.querySelector('[name="projectLocation"]').value.trim();
    const projectType = form.querySelector('[name="projectType"]').value;
    const consent = form.querySelector('[name="consent"]').checked;

    if (!name || !whatsapp || !customerType || !location || !projectType || !consent) {
      if (errorBox) {
        errorBox.textContent = 'Please fill all required fields and accept the consent checkbox.';
        errorBox.classList.remove('hidden');
      }
      return;
    }

    // Collect multi-select services
    const services = Array.from(form.querySelectorAll('[name="services"]:checked')).map(c => c.value);

    const projectStage = form.querySelector('[name="projectStage"]')?.value || '';
    const budget = form.querySelector('[name="budget"]')?.value || '';
    const preferredDate = form.querySelector('[name="preferredDate"]')?.value || '';
    const requirements = form.querySelector('[name="requirements"]')?.value || '';

    const payload = {
      fullName: name,
      whatsapp,
      customerType,
      projectLocation: location,
      projectType,
      services,
      projectStage,
      budget,
      preferredDate,
      requirements,
      source: 'website_enquiry_form',
      timestamp: new Date().toISOString(),
    };

    // Submit if endpoint configured
    let saved = false;
    if (cfg.formEndpoint) {
      try {
        const res = await fetch(cfg.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(payload),
        });
        saved = res.ok;
      } catch (err) {
        console.warn('Form endpoint error:', err);
      }
    }

    // ---------- Build WhatsApp message with form details ----------
    const servicesText = services.length > 0 ? services.join(', ') : 'Not specified';
    const message = 
`*New Enquiry - MV Home Automation*

*Name:* ${name}
*WhatsApp:* ${whatsapp}
*I am a:* ${customerType}
*Location:* ${location}
*Project Type:* ${projectType}
*Services Interested:* ${servicesText}
*Project Stage:* ${projectStage || 'Not specified'}
*Budget:* ${budget || 'Not specified'}
*Preferred Date:* ${preferredDate || 'Not specified'}
*Requirements:* ${requirements || 'None'}

Please contact me.`;

    // Update the "Continue on WhatsApp" button with dynamic message
    const waButton = successBox?.querySelector('a[data-wa], a.btn-primary');
    if (waButton) {
      waButton.href = buildWhatsAppUrl(message);
    }

    // Always show success UI
    form.classList.add('hidden');
    if (successBox) {
      successBox.classList.remove('hidden');
      const note = successBox.querySelector('[data-storage-note]');
      if (note) {
        note.textContent = saved
          ? 'Your enquiry has been received. Our team will contact you shortly.'
          : 'Thank you! Please also message us on WhatsApp so we can respond faster.';
      }
    }

    trackEvent('form_submit', { customerType, projectType, services_count: services.length });
  });
}
  // ---------- Analytics placeholder ----------
  function trackEvent(name, params = {}) {
    // Google Analytics 4
    if (typeof gtag === 'function' && cfg.googleAnalyticsId) {
      gtag('event', name, params);
    }
    // Console for development
    if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
      console.log('[track]', name, params);
    }
  }

  // ---------- Load GA if configured ----------
  function loadAnalytics() {
    if (!cfg.googleAnalyticsId) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${cfg.googleAnalyticsId}`;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', cfg.googleAnalyticsId);
  }

  // ---------- Init ----------
  document.addEventListener('DOMContentLoaded', () => {
    applyConfig();
    wireWhatsAppLinks();
    initMobileMenu();
    initForm();
    loadAnalytics();

    // Smooth scroll for internal anchors
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  });
})();
