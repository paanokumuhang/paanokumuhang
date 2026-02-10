// pkn/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const menuToggle = document.querySelector('.menu-toggle');
  const navbar = document.querySelector('.navbar');

  // ===== HAMBURGER MENU (works on all pages) =====
  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', () => {
      navbar.classList.toggle('open');
    });
  }

  // ===== LANGUAGE TOGGLE (works on all pages) =====
  const translations = {
    tl: {
      brandTitle: 'Paano Kumuha Ng',
      nav: ['🏠Home', '🚨NBI', '👮‍♂️Police Clearance', '🏥PhilHealth', '🔃SSS', '🪙BIR', '🌐Language'],
      heroTitle: 'Paano kumuha ng',
      placeholder: 'NBI Clearance',
      cards: [
        { title: 'NBI Clearance', text: 'Ang NBI Clearance ay isang mahalagang dokumento para sa employment, travel, at iba pang legal na layunin.', btn: 'Tignan ang proseso' },
        { title: 'Police Clearance', text: 'Ang Police Clearance ay ginagamit bilang katibayan na ang isang indibidwal ay walang kasong kriminal sa kanyang lokalidad.', btn: 'Tignan ang proseso' },
        { title: 'PhilHealth ID', text: 'Ang PhilHealth ay nagbibigay ng health insurance benefits para sa mga miyembro nito. Alamin kung paano mag-register.', btn: 'Tignan ang proseso' },
        { title: 'SSS E-1 Form', text: 'Ang Social Security System ay nagbibigay ng proteksyon para sa mga manggagawa sa Pilipinas.', btn: 'Tignan ang proseso' },
        { title: 'BIR TIN Number', text: 'Ang Taxpayer Identification Number (TIN) mula sa BIR ay kailangan para sa mga transaksyong pampinansyal at employment.', btn: 'Tignan ang proseso' }
      ],
      disclaimer: 'Disclaimer: Hindi ako konektado o kaakibat sa anumang ahensya ng gobyerno. Ang website na ito ay para lamang magbigay ng gabay sa publiko.',
      footer: '&copy; 2026 Paano Kumuha Ng. All rights reserved. | <a href="{PRIVACY_PATH}">Privacy Policy</a>',
      nbi: {
        title: 'NBI Clearance',
        intro: 'Ang NBI Clearance ay isang opisyal na dokumento na madalas kailangan para sa trabaho, travel abroad, visa application, at iba pang legal na transaksyon.',
        officialLink: '🔗 Official NBI Clearance Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Mag-register Online', text: 'Pumunta sa opisyal na website ng NBI: Piliin ang "Register as New Account" kung first-time user, at ilagay ang iyong email, full name, at gumawa ng password.' },
          { heading: 'Punan ang Personal Information', text: 'Matapos ang registration, mag-login at kumpletuhin ang iyong profile. Ilagay ang buong pangalan, petsa ng kapanganakan, address, civil status, at iba pang hinihinging detalye. Siguraduhing tama ang lahat ng impormasyon.' },
          { heading: 'Pumili ng Appointment Schedule', text: 'Sa dashboard, piliin ang NBI branch na pinakamalapit sa\'yo. Pumili rin ng petsa at oras para sa iyong biometrics appointment.' },
          { heading: 'Magbayad ng NBI Clearance Fee', text: 'Pagkatapos pumili ng schedule, makakakuha ka ng reference number. Gamitin ito para magbayad sa pamamagitan ng online banking, GCash, Maya, o mga payment centers gaya ng 7‑Eleven at Bayad Center. Ang karaniwang bayad ay ₱130–₱170 depende sa service fee.' },
          { heading: 'Pumunta sa NBI Branch', text: 'Sa araw ng appointment, dalhin ang iyong reference number at dalawang valid IDs. Magpapakuha ka ng litrato, fingerprint, at pirma para sa database ng NBI.' },
          { heading: 'Kunin ang Iyong NBI Clearance', text: 'Kung walang "hit" (o derogatory record), agad mo nang makukuha ang clearance. Kung may "hit," aantayin muna ang resulta ng background check bago ma-release ang dokumento sa itinakdang petsa.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['📄 Online Registration Account', '🧾 Payment Reference Number', '🪪 Dalawa (2) sa mga sumusunod na valid government-issued IDs:'],
        govIds: ['Philippine Passport', 'Driver\'s License', 'SSS/UMID', 'PhilHealth ID', 'Postal ID', 'Voter\'s ID / COMELEC Voter\'s Certificate', 'PRC ID', 'Barangay Certificate (with dry seal)'],
        disclaimer: 'Disclaimer: Hindi ako konektado sa anumang ahensya ng gobyerno. Gabay lamang ito para sa publiko.'
      },
      police: {
        title: 'Police Clearance',
        intro: 'Ang Police Clearance ay isang dokumento na kailangan para sa iba ibang legal na transaksyon tulad ng visa application, employment, at iba pa.',
        officialLink: '🔗 Official Online Police Clearance System Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Mag-register sa PNP Clearance System website', text: 'Buksan ang opisyal na website ng PNP Online Police Clearance, i-click ang "Register" at ilagay ang iyong aktibong email address, gumawa ng password, at sundin ang instructions sa email para ma-verify ang iyong account.' },
          { heading: 'Punan ang personal information', text: 'Pagkatapos mag-log in, pumunta sa iyong profile at ilagay ang mga hinihinging detalye tulad ng buong pangalan, tirahan, petsa ng kapanganakan, civil status, at iba pa.' },
          { heading: 'Pumili ng police station at appointment date', text: 'Sa dashboard, piliin ang "Apply for Clearance" at pumili ng lungsod o bayan at ang petsa at oras para sa iyong appointment.' },
          { heading: 'Magbayad ng clearance fee online', text: 'Pumili ng payment method tulad ng GCash, Maya, 7-Eleven, o iba pang e-payment channels at bayaran ang clearance fee ayon sa instructions.' },
          { heading: 'Magpunta sa istasyon ng pulis para sa biometrics', text: 'Dalhin ang reference number, valid ID, at resibo ng bayad. Kukuhanin ang litrato, fingerprints, at pirma para sa database.' },
          { heading: 'Pag-claim ng Police Clearance', text: 'Kung walang "hit" makukuha agad ang Police Clearance; kung may "hit," sundin ang instructions para sa verification.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['🪪 1–2 Valid Government IDs', '📄 Barangay Clearance (kung kailangan sa branch)', '🧾 Payment Reference Number at Resibo'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      philhealth: {
        title: 'PhilHealth ID',
        intro: 'Ang PhilHealth ID ay isang mahalagang dokumento para sa mga miyembro ng Philippine Health Insurance Corporation. Kailangan ito sa mga transaksyong medikal at pag-claim ng benefits.',
        officialLink: '🔗 Official PhilHealth Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Mag-fill out ng PhilHealth Member Registration Form (PMRF)', text: 'I-download ang PMRF mula sa opisyal na website ng PhilHealth o kumuha ng kopya sa pinakamalapit na PhilHealth branch. Punan ang lahat ng kinakailangang detalye tulad ng buong pangalan, address, civil status, at dependents (kung mayroon). Siguraduhing tama at malinaw ang impormasyon.' },
          { heading: 'Pumunta sa pinakamalapit na PhilHealth office', text: 'I-submit ang PMRF sa pinakamalapit na PhilHealth branch sa Member Services section.' },
          { heading: 'Magpresenta ng valid ID at supporting documents', text: 'Ipakita ang valid government ID at PSA birth certificate kung first-time registrant.' },
          { heading: 'Hintayin ang verification at issuance ng PhilHealth Number (PIN)', text: 'Iva-verify ng PhilHealth staff ang iyong mga dokumento. Kapag kumpleto at walang isyu, agad na ibibigay ang iyong <strong>PhilHealth Identification Number (PIN)</strong>.' },
          { heading: 'Humiling ng PhilHealth ID (optional)', text: 'Pagkatapos makuha ang PIN, humiling ng ID card kung available.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['📄 PhilHealth Registration Form (PMRF)', '🪪 Valid ID', '📄 Birth Certificate (new members only)'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      sss: {
        title: 'SSS E-1 Form',
        intro: 'Ang SSS Number ay isang natatanging identifier para sa mga miyembro ng Social Security System sa Pilipinas.',
        officialLink: '🔗 Official SSS Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Mag-register sa My.SSS Portal', text: 'Buksan ang opisyal na website ng SSS at simulan ang account registration ayon sa user type.' },
          { heading: 'Punan ang E‑1 Form Online', text: 'Ilagay ang personal na impormasyon nang kumpleto sa E-1 form sa portal.' },
          { heading: 'I-print o i-save ang E‑1 Form', text: 'I-download o i-print ang form bilang patunay ng aplikasyon.' },
          { heading: 'Mag-submit sa pinakamalapit na SSS Branch', text: 'Dalhin ang printed E-1 form, valid ID, at birth certificate para sa validation.' },
          { heading: 'Kunin ang Iyong SSS Number', text: 'Matapos ma-validate, ibibigay ang permanenteng SSS Number.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['🪪 Valid Government ID', '📄 PSA Birth Certificate', '📄 Completed E-1 Form'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      bir: {
        title: 'BIR TIN Number',
        intro: 'Ang BIR TIN ay kinakailangan para sa buwis at iba pang financial na transaksyon.',
        officialLink: '🔗 Official BIR Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Kumuha at punan ang BIR Form', text: 'Kumuha at punan ang BIR Form 1901 / 1902.' },
          { heading: 'Maghanda ng valid IDs at birth certificate', text: 'Ihanda ang mga kinakailangang dokumento.' },
          { heading: 'Pumunta sa tamang RDO', text: 'Dalhin ang form sa tamang Revenue District Office.' },
          { heading: 'Magbayad ng registration fee', text: 'Magbayad ng registration fee kung applicable.' },
          { heading: 'Kunin ang iyong TIN', text: 'Kunin ang TIN slip o card pagkatapos ma-process.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['🪪 Valid Government ID', '📄 PSA Birth Certificate', '📄 BIR Form 1901 / 1902'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      privacy: {
        title: 'Privacy Policy',
        paragraphs: [
          'Ang website na ito ay hindi direktang nangangalap ng personal na impormasyon mula sa mga gumagamit. Gayunpaman, ang mga third-party services tulad ng Google AdSense ay maaaring mangalap ng data tulad ng cookies at usage behavior para sa layunin ng pag-display ng ads.',
          'Sa paggamit ng site na ito, sumasang-ayon ka sa paggamit ng naturang serbisyo. Maaari mong i-manage ang iyong ad preferences sa pamamagitan ng iyong Google account.',
          'Hindi namin ibinabahagi ang iyong impormasyon sa mga third party maliban sa kinakailangan para sa pag-display ng ads o analytics.',
          'Para sa mga tanong, makipag-ugnayan sa amin sa your@email.com.'
        ]
      }
    },
    en: {
      brandTitle: 'How to Get',
      nav: ['🏠Home', '🚨NBI', '👮‍♂️Police Clearance', '🏥PhilHealth', '🔃SSS', '🪙BIR', '🌐Language'],
      heroTitle: 'How to get',
      placeholder: 'NBI Clearance',
      cards: [
        { title: 'NBI Clearance', text: 'An NBI Clearance is an important document for employment, travel, and other legal purposes.', btn: 'View steps' },
        { title: 'Police Clearance', text: 'A Police Clearance is used as proof that an individual has no criminal record in their locality.', btn: 'View steps' },
        { title: 'PhilHealth ID', text: 'PhilHealth provides health insurance benefits for its members. Learn how to register.', btn: 'View steps' },
        { title: 'SSS E-1 Form', text: 'The Social Security System provides protection for workers in the Philippines.', btn: 'View steps' },
        { title: 'BIR TIN Number', text: 'The BIR Taxpayer Identification Number (TIN) is required for financial transactions and employment.', btn: 'View steps' }
      ],
      disclaimer: 'Disclaimer: I am not connected with or affiliated to any government agency. This site only provides public guidance.',
      footer: '&copy; 2026 How to Get. All rights reserved. | <a href="{PRIVACY_PATH}">Privacy Policy</a>',
    
      nbi: {
        title: 'NBI Clearance',
        intro: 'The NBI Clearance is an official document often needed for employment, traveling abroad, visa applications, and other legal transactions.',
        officialLink: '🔗 Official NBI Clearance Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Register Online', text: 'Go to the official NBI website: Select "Register as New Account" if you\'re a first-time user, and enter your email, full name, and create a password.' },
          { heading: 'Fill Out Personal Information', text: 'After registration, log in and complete your profile. Enter your full name, date of birth, address, civil status, and other required details. Make sure all information is accurate.' },
          { heading: 'Choose Appointment Schedule', text: 'In the dashboard, select the NBI branch closest to you. Also choose a date and time for your biometrics appointment.' },
          { heading: 'Pay NBI Clearance Fee', text: 'After choosing a schedule, you\'ll receive a reference number. Use it to pay online via banking, GCash, Maya, or payment centers like 7‑Eleven and Bayad Center. The standard fee is ₱130–₱170 depending on service charges.' },
          { heading: 'Visit NBI Branch', text: 'On the day of your appointment, bring your reference number and two valid IDs. You\'ll have your photo, fingerprints, and signature taken for the NBI database.' },
          { heading: 'Get Your NBI Clearance', text: 'If there\'s no "hit" (or derogatory record), you can get your clearance immediately. If there\'s a "hit," wait for the background check results before the document is released on the scheduled date.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['📄 Online Registration Account', '🧾 Payment Reference Number', '🪪 Two (2) of the following valid government-issued IDs:'],
        govIds: ['Philippine Passport', 'Driver\'s License', 'SSS/UMID', 'PhilHealth ID', 'Postal ID', 'Voter\'s ID / COMELEC Voter\'s Certificate', 'PRC ID', 'Barangay Certificate (with dry seal)'],
        disclaimer: 'Disclaimer: I am not connected to any government agency. This is a guide for the public.'
      },
      police: {
        title: 'Police Clearance',
        intro: 'A Police Clearance is a document required for various legal transactions such as visa applications and employment.',
        officialLink: '🔗 Official Online Police Clearance System Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Register on the PNP Clearance System website', text: 'Open the official PNP Online Police Clearance site, click "Register", enter your active email, create a password, and follow verification instructions.' },
          { heading: 'Fill out personal information', text: 'After logging in, complete your profile with full name, address, date of birth, civil status, and other required details.' },
          { heading: 'Choose police station and appointment date', text: 'In the dashboard, select "Apply for Clearance", choose your city/town, and pick a date and time for the appointment.' },
          { heading: 'Pay the clearance fee online', text: 'Choose a payment method such as GCash, Maya, or 7-Eleven and pay the required fee per the instructions.' },
          { heading: 'Go to the police station for biometrics', text: 'Bring the reference number, valid ID, and payment receipt. Your photo, fingerprints, and signature will be taken.' },
          { heading: 'Claim the Police Clearance', text: 'If there\'s no "hit" you can claim your clearance the same day; if there\'s a "hit", follow further verification steps.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['🪪 1–2 Valid Government IDs', '📄 Barangay Clearance (if required)', '🧾 Payment Reference Number and Receipt'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      philhealth: {
        title: 'PhilHealth ID',
        intro: 'The PhilHealth ID is important for members of the Philippine Health Insurance Corporation and is used for medical transactions and benefit claims.',
        officialLink: '🔗 Official PhilHealth Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Fill out the PMRF', text: 'Download or obtain the PMRF form and complete all required fields.' },
          { heading: 'Submit the form to a PhilHealth office', text: 'Submit the completed PMRF at the nearest PhilHealth branch.' },
          { heading: 'Present valid ID and birth certificate', text: 'Provide a valid government ID and PSA birth certificate if you\'re a new registrant.' },
          { heading: 'Wait for verification and issuance', text: 'PhilHealth staff will verify documents and issue your PhilHealth number when approved.' },
          { heading: 'Request PhilHealth ID (optional)', text: 'After receiving your PIN, request an ID card if available.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['PhilHealth Registration Form (PMRF)', 'Valid ID', 'Birth Certificate (new members only)'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      sss: {
        title: 'SSS E-1 Form',
        intro: 'The SSS Number is a unique identifier for Social Security System members in the Philippines.',
        officialLink: '🔗 Official SSS Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Register on the My.SSS Portal', text: 'Open the official SSS website and begin account registration according to user type.' },
          { heading: 'Fill out the E-1 Form online', text: 'Complete the E-1 form in the portal with accurate personal information.' },
          { heading: 'Print or save the E-1 Form', text: 'Download or print the form as proof of application.' },
          { heading: 'Submit at the nearest SSS branch', text: 'Bring the printed E-1 form, valid ID, and birth certificate for validation.' },
          { heading: 'Receive your SSS Number', text: 'After validation, your permanent SSS Number will be issued.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['Valid Government ID', 'PSA Birth Certificate', 'Completed E-1 Form'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      bir: {
        title: 'BIR TIN Number',
        intro: 'The BIR TIN is required for tax and other financial transactions.',
        officialLink: '🔗 Official BIR Website',
        stepTitle: 'Step-by-Step Guide',
        steps: [
          { heading: 'Obtain and fill out BIR Form 1901 / 1902', text: 'Get and complete the appropriate BIR registration form.' },
          { heading: 'Prepare valid IDs and birth certificate', text: 'Gather the required documents.' },
          { heading: 'Go to the correct RDO', text: 'Submit the form to the appropriate Revenue District Office.' },
          { heading: 'Pay registration fee', text: 'Pay the registration fee if applicable.' },
          { heading: 'Receive your TIN', text: 'Receive your TIN slip or card after processing.' }
        ],
        requirementsTitle: 'Requirements',
        reqList: ['Valid Government ID', 'PSA Birth Certificate', 'BIR Form 1901 / 1902'],
        govIds: ['UMID', 'Driver\'s License', 'Passport']
      },
      privacy: {
        title: 'Privacy Policy',
        paragraphs: [
          'This website does not collect personal information directly from users. However, third-party services like Google AdSense may collect data such as cookies and usage behavior for the purpose of serving ads.',
          'By using this site, you agree to the use of such services. You can control your ad preferences via your Google account.',
          'We do not share your information with any third party outside of what\'s required for displaying ads or analytics.',
          'For questions, please contact us at paanokumuhang@gmail.com.'
        ]
      }
    }
  };

  function applyLanguage(lang) {
    const t = translations[lang] || translations.tl;
    document.documentElement.lang = (lang === 'en') ? 'en' : 'tl';

    // Nav links (first 6 anchors are main links)
    const navAnchors = Array.from(document.querySelectorAll('.nav-links > li > a'));
    if (navAnchors.length >= 7) {
      for (let i = 0; i < 6; i++) {
        if (navAnchors[i]) navAnchors[i].textContent = t.nav[i];
      }
      const toggle = navAnchors[6];
      if (toggle) toggle.textContent = (lang === 'en') ? 'Language ▼' : 'Language ▼';
    }

    // Hero title + placeholder (if they exist)
    const hero = document.querySelector('.search-section h1');
    if (hero) hero.textContent = t.heroTitle;
    if (searchInput) searchInput.placeholder = t.placeholder;

    // Cards (if they exist)
    const cards = Array.from(document.querySelectorAll('.id-cards-wrapper .id-card'));
    cards.forEach((card, idx) => {
      const titleEl = card.querySelector('h2');
      const pEl = card.querySelector('p');
      const btn = card.querySelector('.btn-primary');
      const data = t.cards[idx];
      if (data) {
        if (titleEl) titleEl.textContent = data.title;
        if (pEl) pEl.textContent = data.text;
        if (btn) btn.textContent = data.btn;
      }
    });

    // Disclaimer (if it exists)
    const disc = document.querySelector('.disclaimer p');
    if (disc) disc.textContent = t.disclaimer;

    // Apply per-page guide translations for all supported pages
    const path = window.location.pathname;
    let pageKey = null;
    if (path.endsWith('/ids/nbi.html') || path.endsWith('nbi.html')) pageKey = 'nbi';
    else if (path.endsWith('police-clearance.html')) pageKey = 'police';
    else if (path.endsWith('philhealth.html')) pageKey = 'philhealth';
    else if (path.endsWith('sss.html')) pageKey = 'sss';
    else if (path.endsWith('bir.html')) pageKey = 'bir';
    else if (path.endsWith('/footer/privacy.html') || path.endsWith('privacy.html')) pageKey = 'privacy';

    if (pageKey && t[pageKey]) {
      const guide = t[pageKey];

      if (pageKey === 'privacy') {
        const h2 = document.querySelector('.privacy-policy h2');
        if (h2 && guide.title) h2.textContent = guide.title;
        const paras = document.querySelectorAll('.privacy-policy p');
        if (paras && paras.length && guide.paragraphs) {
          guide.paragraphs.forEach((txt, idx) => {
            if (paras[idx]) paras[idx].textContent = txt;
          });
        }
      } else {
        // Generic guide mapping (works for nbi, police, philhealth, sss, bir)
        const guideTitle = document.querySelector('.guide-section h2');
        if (guideTitle && guide.title) guideTitle.textContent = guide.title;

        const guidePara = document.querySelector('.guide-section > p');
        if (guidePara && guide.intro) guidePara.textContent = guide.intro;

        const officialLink = document.querySelector('.official-link-box p');
        if (officialLink && guide.officialLink) officialLink.textContent = guide.officialLink;

        const stepsHeading = document.querySelector('.guide-section h3');
        if (stepsHeading && guide.stepTitle) stepsHeading.textContent = guide.stepTitle;

        const stepItems = Array.from(document.querySelectorAll('.enhanced-steps li'));
        stepItems.forEach((li, idx) => {
          const step = guide.steps && guide.steps[idx];
          if (step) {
            li.innerHTML = `<strong>${step.heading}</strong><br />\n            ${step.text}`;
          }
        });

        const allH3s = Array.from(document.querySelectorAll('.guide-section h3'));
        const reqHeading = allH3s[1];
        if (reqHeading && guide.requirementsTitle) reqHeading.textContent = guide.requirementsTitle;

        const reqItems = Array.from(document.querySelectorAll('.requirements-list > li'));
        reqItems.forEach((li, idx) => {
          if (guide.reqList && idx < guide.reqList.length) li.textContent = guide.reqList[idx];
        });

        const govIdItems = Array.from(document.querySelectorAll('.gov-id-list li'));
        govIdItems.forEach((li, idx) => {
          if (guide.govIds && idx < guide.govIds.length) li.textContent = guide.govIds[idx];
        });
      }
    }

    // Footer (with correct Privacy Policy path based on current page)
    const footer = document.querySelector('.site-footer p');
    if (footer) {
      const isIdPage = window.location.pathname.includes('/ids/');
      const privacyPath = isIdPage ? '../footer/privacy.html' : 'footer/privacy.html';
      const footerHTML = t.footer.replace('{PRIVACY_PATH}', privacyPath);
      footer.innerHTML = footerHTML;
    }

    try { localStorage.setItem('pkn-lang', lang); } catch (e) {}
  }

  // Wire dropdown items (works on all pages)
  const langAnchors = Array.from(document.querySelectorAll('.dropdown-menu a'));
  langAnchors.forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const text = a.textContent || '';
      const lang = /english/i.test(text) ? 'en' : 'tl';
      applyLanguage(lang);
      if (navbar.classList.contains('open')) navbar.classList.remove('open');
    });
  });

  // Apply persisted language
  const saved = (function(){ try { return localStorage.getItem('pkn-lang'); } catch(e){ return null; }})();
  if (saved) applyLanguage(saved);

  // ===== SEARCH-SPECIFIC CODE (only runs on pages with search input) =====
  if (!searchInput) return;
  const placeholders = [
    'NBI Clearance',
    'PhilHealth ID',
    'Police Clearance',
    'SSS E1 Form',
    'BIR TIN Number',
    'Pag-IBIG MID Number'
  ];
  let currentIndex = 0;

  setInterval(() => {
    currentIndex = (currentIndex + 1) % placeholders.length;
    searchInput.setAttribute('placeholder', placeholders[currentIndex]);
  }, 2000);

  // Redirect mapping (adjust paths based on current location)
  const isIdPage = window.location.pathname.includes('/ids/');
  const pathPrefix = isIdPage ? '' : 'ids/';
  const suggestionMap = {
    "nbi": pathPrefix + "nbi.html",
    "nbi clearance": pathPrefix + "nbi.html",
    "philhealth": pathPrefix + "philhealth.html",
    "philhealth id": pathPrefix + "philhealth.html",
    "police": pathPrefix + "police-clearance.html",
    "police clearance": pathPrefix + "police-clearance.html",
    "sss": pathPrefix + "sss.html",
    "sss e1": pathPrefix + "sss.html",
    "sss e1 form": pathPrefix + "sss.html",
    "bir": pathPrefix + "bir.html",
    "tin": pathPrefix + "bir.html",
    "bir tin number": pathPrefix + "bir.html",
    "pag-ibig": "#", // Change when available
    "pag-ibig mid number": "#" // Change when available
  };

  // Suggestion Box
  const suggestionBox = document.createElement('ul');
  suggestionBox.classList.add('suggestion-box');
  Object.assign(suggestionBox.style, {
    position: 'absolute',
    zIndex: '1000',
    width: '100%',
    background: '#fff',
    border: '1px solid #ccc',
    display: 'none',
    listStyle: 'none',
    marginTop: '5px',
    padding: '0'
  });

  if (searchInput.parentNode) {
    if (getComputedStyle(searchInput.parentNode).position === 'static') {
      searchInput.parentNode.style.position = 'relative';
    }
    searchInput.parentNode.appendChild(suggestionBox);
  } else {
    document.body.appendChild(suggestionBox);
  }

  searchInput.addEventListener('input', () => {
    const input = searchInput.value.toLowerCase().trim();
    suggestionBox.innerHTML = '';

    if (input === '') {
      suggestionBox.style.display = 'none';
      return;
    }

    const matches = placeholders.filter(item =>
      item.toLowerCase().includes(input)
    );

    if (matches.length === 0) {
      suggestionBox.style.display = 'none';
      return;
    }

    matches.forEach(match => {
      const li = document.createElement('li');
      li.textContent = match;
      li.style.padding = '10px';
      li.style.cursor = 'pointer';
      li.addEventListener('mouseenter', () => li.style.background = '#f0f0f0');
      li.addEventListener('mouseleave', () => li.style.background = 'white');
      li.addEventListener('click', () => {
        searchInput.value = match;
        suggestionBox.innerHTML = '';
        suggestionBox.style.display = 'none';
        handleSearch(match);
      });
      suggestionBox.appendChild(li);
    });

    suggestionBox.style.display = 'block';
  });

  // Handle Search
  function handleSearch(query) {
    const normalized = query.toLowerCase().trim();
    const url = suggestionMap[normalized];
    if (url && url !== '#') {
      window.location.href = url;
    } else if (url === '#') {
      alert('Link not yet available.');
    } else {
      alert('Paumanhin, walang gabay na nahanap para sa iyong hinanap.');
    }
  }

  // Click search button
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      handleSearch(searchInput.value);
    });
  }

  // Press Enter (use keydown)
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSearch(searchInput.value);
      suggestionBox.style.display = 'none';
    }
  });

  // Hide suggestion box on outside click
  document.addEventListener('click', function (e) {
    if (e.target !== searchInput && !suggestionBox.contains(e.target)) {
      suggestionBox.style.display = 'none';
    }
  });
});

