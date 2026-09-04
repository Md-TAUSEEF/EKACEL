// src/context/LanguageContext.jsx

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* =========================================================
   LANGUAGE CONTEXT
========================================================= */

export const LanguageContext = createContext(null);

/* =========================================================
   SUPPORTED LANGUAGES
========================================================= */

const SUPPORTED_LANGUAGES = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    dir: "rtl",
  },
  {
    code: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    dir: "ltr",
  },
  {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    dir: "ltr",
  },
  {
    code: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    dir: "ltr",
  },
];

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    nav: {
      home: "Home",
      about: "About Us",
      batterySolutions: "Battery & Energy",
      energySolutions: "Energy Solutions",
      industries: "Industries",
      global: "Global",
      resources: "Resources",
      support: "Support",
      partner: "Partner With Us",
      contact: "Contact Us",
      talkToTeam: "Talk to Our Team",
      language: "Language",
      selectLanguage: "Select Language",
      cart: "Cart",
      viewAll: "View all",
    },

    navigation: {
      "Become a Partner": "Become a Partner",
      "Dealer Locator": "Dealer Locator",
      "Service & Support": "Service & Support",
      Downloads: "Downloads",
      "Global Presence": "Global Presence",

      "About Us": "About Us",
      "Company Overview": "Company Overview",
      "Key Team": "Key Team",
      "Manufacturing & R&D": "Manufacturing & R&D",
      Manufacturing: "Manufacturing",
      "R&D & Technology": "R&D & Technology",
      "Quality & Testing": "Quality & Testing",
      Innovation: "Innovation",
      "Group Companies": "Group Companies",

      "Battery & Energy": "Battery & Energy",
      Automotive: "Automotive",
      "2-Wheeler Battery": "2-Wheeler Battery",
      "Passenger Vehicle Battery": "Passenger Vehicle Battery",
      "Commercial Vehicle Battery": "Commercial Vehicle Battery",
      "Heavy Duty Battery": "Heavy Duty Battery",

      "Inverter Batteries": "Inverter Batteries",
      "Tubular Battery": "Tubular Battery",
      "Home Backup Battery": "Home Backup Battery",
      "High Performance Battery": "High Performance Battery",
      "Solar Backup": "Solar Backup",

      "E-Rickshaw & EV": "E-Rickshaw & EV",
      "E-Rickshaw Battery 120Ah": "E-Rickshaw Battery 120Ah",
      "Heavy Duty E-Rickshaw Battery":
        "Heavy Duty E-Rickshaw Battery",
      "Electric Mobility Battery": "Electric Mobility Battery",
      "Advanced EV Power Pack": "Advanced EV Power Pack",

      "Solar & Lithium": "Solar & Lithium",
      "Solar Tubular Battery": "Solar Tubular Battery",
      "Solar Deep Cycle Battery": "Solar Deep Cycle Battery",
      "Lithium Battery Pack": "Lithium Battery Pack",
      "Lithium Energy Storage Battery":
        "Lithium Energy Storage Battery",

      "Industrial & Backup": "Industrial & Backup",
      "Industrial Battery System": "Industrial Battery System",
      "Heavy Duty Industrial Battery":
        "Heavy Duty Industrial Battery",
      "Home Energy Storage System":
        "Home Energy Storage System",
      "Commercial Energy Storage System":
        "Commercial Energy Storage System",
      "Telecom Backup Battery": "Telecom Backup Battery",
      "Critical Power Battery": "Critical Power Battery",

      "Energy Solutions": "Energy Solutions",
      Residential: "Residential",
      Commercial: "Commercial",
      Industrial: "Industrial",
      "Solar + Storage": "Solar + Storage",
      "Energy Storage Systems": "Energy Storage Systems",
      "Hybrid Energy": "Hybrid Energy",
      "Clean Energy": "Clean Energy",

      Industries: "Industries",
      "Telecom & Infrastructure": "Telecom & Infrastructure",
      "Commercial & Industrial": "Commercial & Industrial",
      "Renewable & Solar": "Renewable & Solar",
      "Energy Storage": "Energy Storage",
      "Electric Mobility": "Electric Mobility",
      "EV Infrastructure": "EV Infrastructure",

      Global: "Global",
      "Global Markets": "Global Markets",
      India: "India",
      "Asia Pacific": "Asia Pacific",
      "Middle East": "Middle East",
      Africa: "Africa",
      Europe: "Europe",
      "Global Network": "Global Network",
      "International Partners": "International Partners",
      "Global Opportunities": "Global Opportunities",
      "Global Enquiries": "Global Enquiries",
      "International Enquiries": "International Enquiries",

      Resources: "Resources",
      "Contact Us": "Contact Us",
    },

    common: {
      learnMore: "Learn More",
      explore: "Explore",
      exploreMore: "Explore More",
      viewDetails: "View Details",
      readMore: "Read More",
      getStarted: "Get Started",
      contactUs: "Contact Us",
      requestQuote: "Request a Quote",
      download: "Download",
      submit: "Submit",
      send: "Send",
      search: "Search",
      select: "Select",
      close: "Close",
      back: "Back",
      next: "Next",
      previous: "Previous",
    },

    hero: {
      eyebrow: "Reliable Energy. Built for Tomorrow.",
      title:
        "Powering Progress With Smarter Energy Solutions.",
      description:
        "Reliable battery and energy solutions designed for homes, mobility, businesses, industries and evolving energy needs.",
      exploreProducts: "Explore Products",
      talkToExpert: "Talk to an Expert",
    },

    sections: {
      products: "Our Products",
      solutions: "Our Solutions",
      industries: "Industries We Serve",
      whyChooseUs: "Why Choose EKACEL",
      globalPresence: "Global Presence",
      resources: "Resources",
      support: "Support",
    },

    footer: {
      company: "Company",
      products: "Products",
      solutions: "Solutions",
      industries: "Industries",
      resources: "Resources",
      support: "Support",
      global: "Global",
      about: "About Us",
      contact: "Contact Us",
      partner: "Partner With Us",
      privacy: "Privacy Policy",
      terms: "Terms & Conditions",
      copyright:
        "© 2026 EKACEL Energy Solutions. All rights reserved.",
    },
  },

  /* =======================================================
     ARABIC
  ======================================================= */

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      batterySolutions: "البطاريات والطاقة",
      energySolutions: "حلول الطاقة",
      industries: "القطاعات",
      global: "الأسواق العالمية",
      resources: "الموارد",
      support: "الدعم",
      partner: "كن شريكًا معنا",
      contact: "اتصل بنا",
      talkToTeam: "تحدث مع فريقنا",
      language: "اللغة",
      selectLanguage: "اختر اللغة",
      cart: "السلة",
      viewAll: "عرض الكل",
    },

    navigation: {
      "Become a Partner": "كن شريكًا معنا",
      "Dealer Locator": "محدد الوكلاء",
      "Service & Support": "الخدمة والدعم",
      Downloads: "التنزيلات",
      "Global Presence": "الحضور العالمي",

      "About Us": "من نحن",
      "Company Overview": "نظرة عامة على الشركة",
      "Key Team": "فريق القيادة",
      "Manufacturing & R&D":
        "التصنيع والبحث والتطوير",
      Manufacturing: "التصنيع",
      "R&D & Technology":
        "البحث والتطوير والتكنولوجيا",
      "Quality & Testing": "الجودة والاختبار",
      Innovation: "الابتكار",
      "Group Companies": "شركات المجموعة",

      "Battery & Energy": "البطاريات والطاقة",
      Automotive: "السيارات",
      "2-Wheeler Battery":
        "بطارية المركبات ذات العجلتين",
      "Passenger Vehicle Battery":
        "بطارية سيارات الركاب",
      "Commercial Vehicle Battery":
        "بطارية المركبات التجارية",
      "Heavy Duty Battery":
        "بطارية للخدمة الشاقة",

      "Inverter Batteries": "بطاريات العاكس",
      "Tubular Battery": "بطارية أنبوبية",
      "Home Backup Battery":
        "بطارية احتياطية منزلية",
      "High Performance Battery":
        "بطارية عالية الأداء",
      "Solar Backup":
        "النسخ الاحتياطي بالطاقة الشمسية",

      "E-Rickshaw & EV":
        "الريكشا الكهربائية والمركبات الكهربائية",
      "E-Rickshaw Battery 120Ah":
        "بطارية ريكشا كهربائية 120 أمبير",
      "Heavy Duty E-Rickshaw Battery":
        "بطارية ريكشا كهربائية للخدمة الشاقة",
      "Electric Mobility Battery":
        "بطارية التنقل الكهربائي",
      "Advanced EV Power Pack":
        "حزمة طاقة متقدمة للمركبات الكهربائية",

      "Solar & Lithium":
        "الطاقة الشمسية والليثيوم",
      "Solar Tubular Battery":
        "بطارية أنبوبية للطاقة الشمسية",
      "Solar Deep Cycle Battery":
        "بطارية شمسية عميقة الدورة",
      "Lithium Battery Pack":
        "حزمة بطاريات الليثيوم",
      "Lithium Energy Storage Battery":
        "بطارية تخزين الطاقة بالليثيوم",

      "Industrial & Backup":
        "الصناعة والطاقة الاحتياطية",
      "Industrial Battery System":
        "نظام بطاريات صناعي",
      "Heavy Duty Industrial Battery":
        "بطارية صناعية للخدمة الشاقة",
      "Home Energy Storage System":
        "نظام تخزين الطاقة المنزلية",
      "Commercial Energy Storage System":
        "نظام تخزين الطاقة التجارية",
      "Telecom Backup Battery":
        "بطارية احتياطية للاتصالات",
      "Critical Power Battery":
        "بطارية الطاقة الحرجة",

      "Energy Solutions": "حلول الطاقة",
      Residential: "سكني",
      Commercial: "تجاري",
      Industrial: "صناعي",
      "Solar + Storage":
        "الطاقة الشمسية والتخزين",
      "Energy Storage Systems":
        "أنظمة تخزين الطاقة",
      "Hybrid Energy": "الطاقة الهجينة",
      "Clean Energy": "الطاقة النظيفة",

      Industries: "القطاعات",
      "Telecom & Infrastructure":
        "الاتصالات والبنية التحتية",
      "Commercial & Industrial":
        "التجاري والصناعي",
      "Renewable & Solar":
        "الطاقة المتجددة والطاقة الشمسية",
      "Energy Storage": "تخزين الطاقة",
      "Electric Mobility": "التنقل الكهربائي",
      "EV Infrastructure":
        "بنية المركبات الكهربائية التحتية",

      Global: "عالمي",
      "Global Markets": "الأسواق العالمية",
      India: "الهند",
      "Asia Pacific":
        "آسيا والمحيط الهادئ",
      "Middle East": "الشرق الأوسط",
      Africa: "أفريقيا",
      Europe: "أوروبا",
      "Global Network": "الشبكة العالمية",
      "International Partners":
        "الشركاء الدوليون",
      "Global Opportunities":
        "الفرص العالمية",
      "Global Enquiries":
        "الاستفسارات العالمية",
      "International Enquiries":
        "الاستفسارات الدولية",

      Resources: "الموارد",
      "Contact Us": "اتصل بنا",
    },

    common: {
      learnMore: "اعرف المزيد",
      explore: "استكشف",
      exploreMore: "استكشف المزيد",
      viewDetails: "عرض التفاصيل",
      readMore: "اقرأ المزيد",
      getStarted: "ابدأ الآن",
      contactUs: "اتصل بنا",
      requestQuote: "اطلب عرض سعر",
      download: "تحميل",
      submit: "إرسال",
      send: "إرسال",
      search: "بحث",
      select: "اختر",
      close: "إغلاق",
      back: "رجوع",
      next: "التالي",
      previous: "السابق",
    },

    hero: {
      eyebrow:
        "طاقة موثوقة. مصممة للمستقبل.",
      title:
        "ندعم التقدم من خلال حلول طاقة أكثر ذكاءً.",
      description:
        "حلول موثوقة للبطاريات والطاقة مصممة للمنازل والتنقل والأعمال والصناعات واحتياجات الطاقة المتطورة.",
      exploreProducts: "استكشف المنتجات",
      talkToExpert: "تحدث مع خبير",
    },

    sections: {
      products: "منتجاتنا",
      solutions: "حلولنا",
      industries: "القطاعات التي نخدمها",
      whyChooseUs: "لماذا تختار EKACEL",
      globalPresence: "حضورنا العالمي",
      resources: "الموارد",
      support: "الدعم",
    },

    footer: {
      company: "الشركة",
      products: "المنتجات",
      solutions: "الحلول",
      industries: "القطاعات",
      resources: "الموارد",
      support: "الدعم",
      global: "الأسواق العالمية",
      about: "من نحن",
      contact: "اتصل بنا",
      partner: "كن شريكًا معنا",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
      copyright:
        "© 2026 EKACEL Energy Solutions. جميع الحقوق محفوظة.",
    },
  },
    /* =======================================================
     FRENCH
  ======================================================= */

  fr: {
    nav: {
      home: "Accueil",
      about: "À propos de nous",
      batterySolutions: "Batteries et énergie",
      energySolutions: "Solutions énergétiques",
      industries: "Industries",
      global: "International",
      resources: "Ressources",
      support: "Support",
      partner: "Devenir partenaire",
      contact: "Nous contacter",
      talkToTeam: "Parler à notre équipe",
      language: "Langue",
      selectLanguage: "Choisir la langue",
      cart: "Panier",
      viewAll: "Voir tout",
    },

    navigation: {
      "Become a Partner": "Devenir partenaire",
      "Dealer Locator": "Trouver un distributeur",
      "Service & Support": "Service et support",
      Downloads: "Téléchargements",
      "Global Presence": "Présence internationale",

      "About Us": "À propos de nous",
      "Company Overview": "Présentation de l'entreprise",
      "Key Team": "Équipe dirigeante",
      "Manufacturing & R&D": "Fabrication et R&D",
      Manufacturing: "Fabrication",
      "R&D & Technology": "R&D et technologie",
      "Quality & Testing": "Qualité et tests",
      Innovation: "Innovation",
      "Group Companies": "Sociétés du groupe",

      "Battery & Energy": "Batteries et énergie",
      Automotive: "Automobile",
      "2-Wheeler Battery": "Batterie pour deux-roues",
      "Passenger Vehicle Battery":
        "Batterie pour véhicules particuliers",
      "Commercial Vehicle Battery":
        "Batterie pour véhicules commerciaux",
      "Heavy Duty Battery": "Batterie haute performance",

      "Inverter Batteries": "Batteries pour onduleurs",
      "Tubular Battery": "Batterie tubulaire",
      "Home Backup Battery":
        "Batterie de secours domestique",
      "High Performance Battery":
        "Batterie haute performance",
      "Solar Backup": "Secours solaire",

      "E-Rickshaw & EV":
        "E-Rickshaw et véhicules électriques",
      "E-Rickshaw Battery 120Ah":
        "Batterie E-Rickshaw 120Ah",
      "Heavy Duty E-Rickshaw Battery":
        "Batterie E-Rickshaw haute performance",
      "Electric Mobility Battery":
        "Batterie pour mobilité électrique",
      "Advanced EV Power Pack":
        "Bloc d'alimentation EV avancé",

      "Solar & Lithium": "Solaire et lithium",
      "Solar Tubular Battery":
        "Batterie tubulaire solaire",
      "Solar Deep Cycle Battery":
        "Batterie solaire à décharge profonde",
      "Lithium Battery Pack":
        "Pack de batteries au lithium",
      "Lithium Energy Storage Battery":
        "Batterie de stockage d'énergie au lithium",

      "Industrial & Backup":
        "Industrie et secours",
      "Industrial Battery System":
        "Système de batteries industriel",
      "Heavy Duty Industrial Battery":
        "Batterie industrielle haute performance",
      "Home Energy Storage System":
        "Système de stockage d'énergie domestique",
      "Commercial Energy Storage System":
        "Système de stockage d'énergie commercial",
      "Telecom Backup Battery":
        "Batterie de secours télécom",
      "Critical Power Battery":
        "Batterie pour alimentation critique",

      "Energy Solutions": "Solutions énergétiques",
      Residential: "Résidentiel",
      Commercial: "Commercial",
      Industrial: "Industriel",
      "Solar + Storage": "Solaire + stockage",
      "Energy Storage Systems":
        "Systèmes de stockage d'énergie",
      "Hybrid Energy": "Énergie hybride",
      "Clean Energy": "Énergie propre",

      Industries: "Industries",
      "Telecom & Infrastructure":
        "Télécoms et infrastructures",
      "Commercial & Industrial":
        "Commercial et industriel",
      "Renewable & Solar":
        "Renouvelable et solaire",
      "Energy Storage": "Stockage d'énergie",
      "Electric Mobility": "Mobilité électrique",
      "EV Infrastructure":
        "Infrastructure pour véhicules électriques",

      Global: "International",
      "Global Markets": "Marchés internationaux",
      India: "Inde",
      "Asia Pacific": "Asie-Pacifique",
      "Middle East": "Moyen-Orient",
      Africa: "Afrique",
      Europe: "Europe",
      "Global Network": "Réseau international",
      "International Partners":
        "Partenaires internationaux",
      "Global Opportunities":
        "Opportunités internationales",
      "Global Enquiries":
        "Demandes internationales",
      "International Enquiries":
        "Demandes internationales",

      Resources: "Ressources",
      "Contact Us": "Nous contacter",
    },

    common: {
      learnMore: "En savoir plus",
      explore: "Explorer",
      exploreMore: "Explorer davantage",
      viewDetails: "Voir les détails",
      readMore: "Lire la suite",
      getStarted: "Commencer",
      contactUs: "Nous contacter",
      requestQuote: "Demander un devis",
      download: "Télécharger",
      submit: "Soumettre",
      send: "Envoyer",
      search: "Rechercher",
      select: "Sélectionner",
      close: "Fermer",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
    },

    hero: {
      eyebrow:
        "Une énergie fiable. Pensée pour demain.",
      title:
        "Accélérer le progrès grâce à des solutions énergétiques plus intelligentes.",
      description:
        "Des solutions fiables de batteries et d'énergie conçues pour les particuliers, la mobilité, les entreprises, l'industrie et les besoins énergétiques de demain.",
      exploreProducts: "Découvrir les produits",
      talkToExpert: "Parler à un expert",
    },

    sections: {
      products: "Nos produits",
      solutions: "Nos solutions",
      industries: "Industries que nous servons",
      whyChooseUs: "Pourquoi choisir EKACEL",
      globalPresence: "Présence internationale",
      resources: "Ressources",
      support: "Support",
    },

    footer: {
      company: "Entreprise",
      products: "Produits",
      solutions: "Solutions",
      industries: "Industries",
      resources: "Ressources",
      support: "Support",
      global: "International",
      about: "À propos de nous",
      contact: "Nous contacter",
      partner: "Devenir partenaire",
      privacy: "Politique de confidentialité",
      terms: "Conditions générales",
      copyright:
        "© 2026 EKACEL Energy Solutions. Tous droits réservés.",
    },
  },

  /* =======================================================
     SPANISH
  ======================================================= */

  es: {
    nav: {
      home: "Inicio",
      about: "Sobre nosotros",
      batterySolutions: "Baterías y energía",
      energySolutions: "Soluciones energéticas",
      industries: "Industrias",
      global: "Mercados globales",
      resources: "Recursos",
      support: "Soporte",
      partner: "Sé nuestro socio",
      contact: "Contáctanos",
      talkToTeam: "Habla con nuestro equipo",
      language: "Idioma",
      selectLanguage: "Seleccionar idioma",
      cart: "Carrito",
      viewAll: "Ver todo",
    },

    navigation: {
      "Become a Partner": "Sé nuestro socio",
      "Dealer Locator":
        "Localizador de distribuidores",
      "Service & Support": "Servicio y soporte",
      Downloads: "Descargas",
      "Global Presence": "Presencia global",

      "About Us": "Sobre nosotros",
      "Company Overview":
        "Descripción de la empresa",
      "Key Team": "Equipo directivo",
      "Manufacturing & R&D":
        "Fabricación e I+D",
      Manufacturing: "Fabricación",
      "R&D & Technology":
        "I+D y tecnología",
      "Quality & Testing":
        "Calidad y pruebas",
      Innovation: "Innovación",
      "Group Companies":
        "Empresas del grupo",

      "Battery & Energy":
        "Baterías y energía",
      Automotive: "Automoción",
      "2-Wheeler Battery":
        "Batería para vehículos de dos ruedas",
      "Passenger Vehicle Battery":
        "Batería para vehículos particulares",
      "Commercial Vehicle Battery":
        "Batería para vehículos comerciales",
      "Heavy Duty Battery":
        "Batería de servicio pesado",

      "Inverter Batteries":
        "Baterías para inversores",
      "Tubular Battery":
        "Batería tubular",
      "Home Backup Battery":
        "Batería de respaldo doméstico",
      "High Performance Battery":
        "Batería de alto rendimiento",
      "Solar Backup":
        "Respaldo solar",

      "E-Rickshaw & EV":
        "E-Rickshaw y vehículos eléctricos",
      "E-Rickshaw Battery 120Ah":
        "Batería E-Rickshaw 120Ah",
      "Heavy Duty E-Rickshaw Battery":
        "Batería E-Rickshaw de servicio pesado",
      "Electric Mobility Battery":
        "Batería para movilidad eléctrica",
      "Advanced EV Power Pack":
        "Pack de energía EV avanzado",

      "Solar & Lithium":
        "Solar y litio",
      "Solar Tubular Battery":
        "Batería tubular solar",
      "Solar Deep Cycle Battery":
        "Batería solar de ciclo profundo",
      "Lithium Battery Pack":
        "Pack de baterías de litio",
      "Lithium Energy Storage Battery":
        "Batería de almacenamiento de energía de litio",

      "Industrial & Backup":
        "Industrial y respaldo",
      "Industrial Battery System":
        "Sistema de baterías industrial",
      "Heavy Duty Industrial Battery":
        "Batería industrial de servicio pesado",
      "Home Energy Storage System":
        "Sistema de almacenamiento de energía doméstico",
      "Commercial Energy Storage System":
        "Sistema de almacenamiento de energía comercial",
      "Telecom Backup Battery":
        "Batería de respaldo para telecomunicaciones",
      "Critical Power Battery":
        "Batería para energía crítica",

      "Energy Solutions":
        "Soluciones energéticas",
      Residential: "Residencial",
      Commercial: "Comercial",
      Industrial: "Industrial",
      "Solar + Storage":
        "Solar + almacenamiento",
      "Energy Storage Systems":
        "Sistemas de almacenamiento de energía",
      "Hybrid Energy":
        "Energía híbrida",
      "Clean Energy":
        "Energía limpia",

      Industries: "Industrias",
      "Telecom & Infrastructure":
        "Telecomunicaciones e infraestructura",
      "Commercial & Industrial":
        "Comercial e industrial",
      "Renewable & Solar":
        "Renovable y solar",
      "Energy Storage":
        "Almacenamiento de energía",
      "Electric Mobility":
        "Movilidad eléctrica",
      "EV Infrastructure":
        "Infraestructura para vehículos eléctricos",

      Global: "Global",
      "Global Markets":
        "Mercados globales",
      India: "India",
      "Asia Pacific":
        "Asia Pacífico",
      "Middle East":
        "Oriente Medio",
      Africa: "África",
      Europe: "Europa",
      "Global Network":
        "Red global",
      "International Partners":
        "Socios internacionales",
      "Global Opportunities":
        "Oportunidades globales",
      "Global Enquiries":
        "Consultas globales",
      "International Enquiries":
        "Consultas internacionales",

      Resources: "Recursos",
      "Contact Us": "Contáctanos",
    },

    common: {
      learnMore: "Más información",
      explore: "Explorar",
      exploreMore: "Explorar más",
      viewDetails: "Ver detalles",
      readMore: "Leer más",
      getStarted: "Comenzar",
      contactUs: "Contáctanos",
      requestQuote: "Solicitar presupuesto",
      download: "Descargar",
      submit: "Enviar",
      send: "Enviar",
      search: "Buscar",
      select: "Seleccionar",
      close: "Cerrar",
      back: "Volver",
      next: "Siguiente",
      previous: "Anterior",
    },

    hero: {
      eyebrow:
        "Energía fiable. Diseñada para el futuro.",
      title:
        "Impulsamos el progreso con soluciones energéticas más inteligentes.",
      description:
        "Soluciones fiables de baterías y energía diseñadas para hogares, movilidad, empresas, industrias y las necesidades energéticas del futuro.",
      exploreProducts:
        "Explorar productos",
      talkToExpert:
        "Hablar con un experto",
    },

    sections: {
      products: "Nuestros productos",
      solutions: "Nuestras soluciones",
      industries:
        "Industrias a las que servimos",
      whyChooseUs:
        "Por qué elegir EKACEL",
      globalPresence:
        "Presencia global",
      resources: "Recursos",
      support: "Soporte",
    },

    footer: {
      company: "Empresa",
      products: "Productos",
      solutions: "Soluciones",
      industries: "Industrias",
      resources: "Recursos",
      support: "Soporte",
      global: "Mercados globales",
      about: "Sobre nosotros",
      contact: "Contáctanos",
      partner: "Sé nuestro socio",
      privacy:
        "Política de privacidad",
      terms:
        "Términos y condiciones",
      copyright:
        "© 2026 EKACEL Energy Solutions. Todos los derechos reservados.",
    },
  },

  /* =======================================================
     GERMAN
  ======================================================= */

  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      batterySolutions:
        "Batterien und Energie",
      energySolutions: "Energielösungen",
      industries: "Branchen",
      global: "Globale Märkte",
      resources: "Ressourcen",
      support: "Support",
      partner: "Partner werden",
      contact: "Kontakt",
      talkToTeam:
        "Mit unserem Team sprechen",
      language: "Sprache",
      selectLanguage:
        "Sprache auswählen",
      cart: "Warenkorb",
      viewAll: "Alle anzeigen",
    },

    navigation: {
      "Become a Partner":
        "Partner werden",
      "Dealer Locator":
        "Händlersuche",
      "Service & Support":
        "Service und Support",
      Downloads: "Downloads",
      "Global Presence":
        "Globale Präsenz",

      "About Us": "Über uns",
      "Company Overview":
        "Unternehmensübersicht",
      "Key Team":
        "Führungsteam",
      "Manufacturing & R&D":
        "Produktion und F&E",
      Manufacturing: "Produktion",
      "R&D & Technology":
        "F&E und Technologie",
      "Quality & Testing":
        "Qualität und Prüfung",
      Innovation: "Innovation",
      "Group Companies":
        "Konzernunternehmen",

      "Battery & Energy":
        "Batterien und Energie",
      Automotive: "Automobil",
      "2-Wheeler Battery":
        "Zweiradbatterie",
      "Passenger Vehicle Battery":
        "Batterie für Pkw",
      "Commercial Vehicle Battery":
        "Batterie für Nutzfahrzeuge",
      "Heavy Duty Battery":
        "Hochleistungsbatterie",

      "Inverter Batteries":
        "Wechselrichterbatterien",
      "Tubular Battery":
        "Röhrenbatterie",
      "Home Backup Battery":
        "Heim-Backup-Batterie",
      "High Performance Battery":
        "Hochleistungsbatterie",
      "Solar Backup":
        "Solar-Backup",

      "E-Rickshaw & EV":
        "E-Rickshaw und Elektrofahrzeuge",
      "E-Rickshaw Battery 120Ah":
        "E-Rickshaw-Batterie 120Ah",
      "Heavy Duty E-Rickshaw Battery":
        "Hochleistungs-E-Rickshaw-Batterie",
      "Electric Mobility Battery":
        "Batterie für Elektromobilität",
      "Advanced EV Power Pack":
        "Modernes EV-Energiepaket",

      "Solar & Lithium":
        "Solar und Lithium",
      "Solar Tubular Battery":
        "Solar-Röhrenbatterie",
      "Solar Deep Cycle Battery":
        "Solar-Tiefzyklusbatterie",
      "Lithium Battery Pack":
        "Lithium-Batteriepaket",
      "Lithium Energy Storage Battery":
        "Lithium-Energiespeicherbatterie",

      "Industrial & Backup":
        "Industrie und Backup",
      "Industrial Battery System":
        "Industrielles Batteriesystem",
      "Heavy Duty Industrial Battery":
        "Hochleistungs-Industriebatterie",
      "Home Energy Storage System":
        "Heim-Energiespeichersystem",
      "Commercial Energy Storage System":
        "Gewerbliches Energiespeichersystem",
      "Telecom Backup Battery":
        "Telekom-Backup-Batterie",
      "Critical Power Battery":
        "Batterie für kritische Stromversorgung",

      "Energy Solutions":
        "Energielösungen",
      Residential: "Privat",
      Commercial: "Gewerblich",
      Industrial: "Industriell",
      "Solar + Storage":
        "Solar + Speicher",
      "Energy Storage Systems":
        "Energiespeichersysteme",
      "Hybrid Energy":
        "Hybride Energie",
      "Clean Energy":
        "Saubere Energie",

      Industries: "Branchen",
      "Telecom & Infrastructure":
        "Telekommunikation und Infrastruktur",
      "Commercial & Industrial":
        "Gewerbe und Industrie",
      "Renewable & Solar":
        "Erneuerbare Energien und Solar",
      "Energy Storage":
        "Energiespeicherung",
      "Electric Mobility":
        "Elektromobilität",
      "EV Infrastructure":
        "EV-Infrastruktur",

      Global: "Global",
      "Global Markets":
        "Globale Märkte",
      India: "Indien",
      "Asia Pacific":
        "Asien-Pazifik",
      "Middle East":
        "Naher Osten",
      Africa: "Afrika",
      Europe: "Europa",
      "Global Network":
        "Globales Netzwerk",
      "International Partners":
        "Internationale Partner",
      "Global Opportunities":
        "Globale Möglichkeiten",
      "Global Enquiries":
        "Globale Anfragen",
      "International Enquiries":
        "Internationale Anfragen",

      Resources: "Ressourcen",
      "Contact Us": "Kontakt",
    },

    common: {
      learnMore: "Mehr erfahren",
      explore: "Entdecken",
      exploreMore: "Mehr entdecken",
      viewDetails: "Details ansehen",
      readMore: "Weiterlesen",
      getStarted: "Jetzt starten",
      contactUs:
        "Kontaktieren Sie uns",
      requestQuote:
        "Angebot anfordern",
      download: "Herunterladen",
      submit: "Absenden",
      send: "Senden",
      search: "Suchen",
      select: "Auswählen",
      close: "Schließen",
      back: "Zurück",
      next: "Weiter",
      previous: "Zurück",
    },

    hero: {
      eyebrow:
        "Zuverlässige Energie. Für morgen entwickelt.",
      title:
        "Wir treiben Fortschritt mit intelligenteren Energielösungen voran.",
      description:
        "Zuverlässige Batterie- und Energielösungen für Haushalte, Mobilität, Unternehmen, Industrie und zukünftige Energieanforderungen.",
      exploreProducts:
        "Produkte entdecken",
      talkToExpert:
        "Mit einem Experten sprechen",
    },

    sections: {
      products: "Unsere Produkte",
      solutions: "Unsere Lösungen",
      industries:
        "Branchen, die wir bedienen",
      whyChooseUs:
        "Warum EKACEL",
      globalPresence:
        "Globale Präsenz",
      resources: "Ressourcen",
      support: "Support",
    },

    footer: {
      company: "Unternehmen",
      products: "Produkte",
      solutions: "Lösungen",
      industries: "Branchen",
      resources: "Ressourcen",
      support: "Support",
      global: "Globale Märkte",
      about: "Über uns",
      contact: "Kontakt",
      partner: "Partner werden",
      privacy:
        "Datenschutzrichtlinie",
      terms:
        "Allgemeine Geschäftsbedingungen",
      copyright:
        "© 2026 EKACEL Energy Solutions. Alle Rechte vorbehalten.",
    },
  },
};

/* =========================================================
   CENTRAL LITERAL TRANSLATION LAYER
========================================================= */

let activeLanguage = "en";

/* =========================================================
   LITERAL PHRASES
========================================================= */

const literalPhrases = {
  /* =======================================================
     ARABIC LITERAL TRANSLATIONS
  ======================================================= */

  ar: {
    "Home": "الرئيسية",
    "About Us": "من نحن",
    "Battery & Energy": "البطاريات والطاقة",
    "Energy Solutions": "حلول الطاقة",
    "Industries": "القطاعات",
    "Global": "عالمي",
    "Resources": "الموارد",
    "Support": "الدعم",
    "Partner With Us": "كن شريكًا معنا",
    "Contact Us": "اتصل بنا",
    "Talk to Our Team": "تحدث إلى فريقنا",
    "Language": "اللغة",
    "Select Language": "اختر اللغة",
    "Cart": "السلة",
    "View all": "عرض الكل",

    "Learn More": "اعرف المزيد",
    "Explore": "استكشف",
    "Explore More": "استكشف المزيد",
    "View Details": "عرض التفاصيل",
    "Read More": "اقرأ المزيد",
    "Get Started": "ابدأ الآن",
    "Request a Quote": "اطلب عرض سعر",
    "Download": "تنزيل",
    "Submit": "إرسال",
    "Send": "إرسال",
    "Search": "بحث",
    "Select": "اختيار",
    "Close": "إغلاق",
    "Back": "رجوع",
    "Next": "التالي",
    "Previous": "السابق",

    "Explore Products": "استكشف المنتجات",
    "Talk to an Expert": "تحدث إلى خبير",
    "Explore Solutions": "استكشف الحلول",
    "Explore All Solutions":
      "استكشف جميع الحلول",
    "Explore All Industries":
      "استكشف جميع القطاعات",

    "Privacy Policy": "سياسة الخصوصية",
    "Terms & Conditions":
      "الشروط والأحكام",

    "Frequently Asked Questions":
      "الأسئلة الشائعة",
    "Everything You Need to Know":
      "كل ما تحتاج إلى معرفته",
    "Need assistance?":
      "هل تحتاج إلى مساعدة؟",
    "Still have questions?":
      "هل ما زالت لديك أسئلة؟",

    "Battery Solutions":
      "حلول البطاريات",
    "Reliable Performance":
      "أداء موثوق",
    "Energy Storage":
      "تخزين الطاقة",
    "Backup Power":
      "الطاقة الاحتياطية",
    "Industrial Power":
      "الطاقة الصناعية",
    "Smart Monitoring":
      "المراقبة الذكية",
    "Sustainability":
      "الاستدامة",
    "Global Energy":
      "الطاقة العالمية",
    "Built for Every Market":
      "مصمم لكل سوق",
    "Powering Every Application":
      "طاقة لكل تطبيق",

    "Mobility & Automotive":
      "التنقل والسيارات",
    "Backup & Energy Storage":
      "الطاقة الاحتياطية وتخزين الطاقة",
    "Industrial & Critical Power":
      "الطاقة الصناعية والحرجة",
    "Solar & Energy Storage":
      "الطاقة الشمسية وتخزين الطاقة",
    "Commercial & Industrial":
      "التجاري والصناعي",
    "Solar Energy Solutions":
      "حلول الطاقة الشمسية",
    "Advanced Energy Solutions":
      "حلول الطاقة المتقدمة",
    "Sustainable Innovation":
      "الابتكار المستدام",
    "Powering Possibilities":
      "نصنع إمكانات جديدة",
    "Quality Focus":
      "التركيز على الجودة",
    "Tested Performance":
      "أداء مُختبر",
    "Reliable Delivery":
      "توصيل موثوق",
    "Powering Confidence Through":
      "نبني الثقة من خلال",
    "Better Energy Solutions.":
      "حلول طاقة أفضل.",

    "India & Global Markets":
      "الهند والأسواق العالمية",
    "Manufacturing Process":
      "عملية التصنيع",
    "Manufacturing Excellence":
      "تميز التصنيع",
    "Technology & Innovation":
      "التقنية والابتكار",
    "Quality You Can Build On":
      "جودة يمكنك الاعتماد عليها",
    "Innovation with purpose":
      "ابتكار هادف",

    "Ready to Find the Right Energy Solution?":
      "هل أنت مستعد لإيجاد حل الطاقة المناسب؟",
    "Find the right solution":
      "اعثر على الحل المناسب",
    "View Category":
      "عرض الفئة",
    "Featured": "مميز",
    "Capacity": "السعة",
    "Warranty": "الضمان",

    "Products coming soon.":
      "المنتجات ستتوفر قريبًا.",
    "No Product Selected":
      "لم يتم اختيار منتج",
    "Browse Products":
      "تصفح المنتجات",
    "Back to Product":
      "العودة إلى المنتج",

    "Complete Your Order":
      "أكمل طلبك",
    "Quantity": "الكمية",
    "Total": "الإجمالي",
    "Delivery Information":
      "معلومات التوصيل",
    "Confirm Order":
      "تأكيد الطلب",

    "Shopping Cart":
      "سلة التسوق",
    "Your Cart":
      "سلتك",
    "Your cart is empty":
      "سلتك فارغة",
    "Cart Items":
      "منتجات السلة",
    "Clear Cart":
      "إفراغ السلة",
    "Item Total":
      "إجمالي المنتجات",
    "Continue Shopping":
      "متابعة التسوق",
    "Order Summary":
      "ملخص الطلب",
    "Checkout Summary":
      "ملخص الدفع",
    "Subtotal":
      "المجموع الفرعي",
    "Delivery":
      "التوصيل",
    "FREE":
      "مجانًا",
    "Proceed to Buy":
      "المتابعة للشراء",
    "Secure Checkout":
      "دفع آمن",

    "Get in touch":
      "تواصل معنا",
    "Global Reach":
      "انتشار عالمي",
    "Thank you for contacting us.":
      "شكرًا لتواصلك معنا.",

    "Powering India with":
      "نزوّد الهند بالطاقة مع",
    "Our Portfolio":
      "محفظتنا",
    "Categories":
      "الفئات",
    "Solutions":
      "الحلول",
    "Products":
      "المنتجات",

    "EKACEL Energy Solutions — Battery & Energy Solutions":
      "EKACEL لحلول الطاقة — البطاريات وحلول الطاقة",

    "Reliable battery and energy solutions for homes, businesses, mobility and industries.":
      "حلول بطاريات وطاقة موثوقة للمنازل والشركات والتنقل والقطاعات الصناعية.",

    /* Long FAQ/content paragraphs */
    "EKACEL battery solutions are developed for a wide range of applications including homes, offices, commercial establishments, industrial environments, backup power systems, mobility and other modern energy requirements.":
      "تم تطوير حلول بطاريات EKACEL لمجموعة واسعة من التطبيقات، بما في ذلك المنازل والمكاتب والمنشآت التجارية والبيئات الصناعية وأنظمة الطاقة الاحتياطية والتنقل وغيرها من احتياجات الطاقة الحديثة.",

    "The right battery depends on your application, load requirement, desired backup time, usage pattern and installation environment. EKACEL can help identify a suitable solution based on your specific power and energy requirements.":
      "تعتمد البطارية المناسبة على التطبيق ومتطلبات الحمل ومدة النسخ الاحتياطي المطلوبة ونمط الاستخدام وبيئة التركيب. يمكن لـ EKACEL مساعدتك في تحديد الحل المناسب بناءً على متطلبات الطاقة والقدرة الخاصة بك.",

    "Yes. EKACEL is focused on modern energy storage and power solutions that support reliable electricity availability, efficient energy management and renewable energy integration across different applications.":
      "نعم. تركز EKACEL على حلول تخزين الطاقة والطاقة الحديثة التي تدعم توفر الكهرباء بشكل موثوق وإدارة الطاقة بكفاءة ودمج الطاقة المتجددة في مختلف التطبيقات.",

    "Safety, durability and dependable performance are key considerations in our product approach. EKACEL solutions are developed with attention to quality, engineering, performance and reliable operation for their intended applications.":
      "تُعد السلامة والمتانة والأداء الموثوق من الاعتبارات الأساسية في نهجنا تجاه المنتجات. يتم تطوير حلول EKACEL مع التركيز على الجودة والهندسة والأداء والتشغيل الموثوق للتطبيقات المخصصة لها.",

    "Yes. EKACEL solutions are designed to support a broad range of requirements, from residential backup and commercial power systems to industrial applications where dependable and consistent energy performance is important.":
      "نعم. تم تصميم حلول EKACEL لدعم مجموعة واسعة من المتطلبات، بدءًا من الطاقة الاحتياطية السكنية وأنظمة الطاقة التجارية وصولًا إلى التطبيقات الصناعية التي يكون فيها الأداء الموثوق والمتسق للطاقة أمرًا مهمًا.",

    "Yes. EKACEL's growing energy portfolio is designed to support renewable energy applications through solar panels, solar inverters, battery systems and energy storage solutions.":
      "نعم. تم تصميم محفظة الطاقة المتنامية لدى EKACEL لدعم تطبيقات الطاقة المتجددة من خلال الألواح الشمسية والعاكسات الشمسية وأنظمة البطاريات وحلول تخزين الطاقة.",

    "EKACEL aims to build long-term relationships with dealers, distributors, system integrators and business partners by providing dependable products, responsive support and practical energy solutions.":
      "تهدف EKACEL إلى بناء علاقات طويلة الأمد مع الوكلاء والموزعين ومتكاملي الأنظمة وشركاء الأعمال من خلال تقديم منتجات موثوقة ودعم سريع وحلول طاقة عملية.",
  },

  /* =======================================================
     FRENCH LITERAL TRANSLATIONS
  ======================================================= */

  fr: {
    "Home": "Accueil",
    "About Us": "À propos de nous",
    "Battery & Energy":
      "Batteries & énergie",
    "Energy Solutions":
      "Solutions énergétiques",
    "Industries": "Secteurs",
    "Global": "International",
    "Resources": "Ressources",
    "Support": "Assistance",
    "Partner With Us":
      "Devenez partenaire",
    "Contact Us":
      "Nous contacter",
    "Talk to Our Team":
      "Parlez à notre équipe",
    "Language": "Langue",
    "Select Language":
      "Choisir la langue",
    "Cart": "Panier",
    "View all": "Tout voir",

    "Learn More":
      "En savoir plus",
    "Explore": "Explorer",
    "Explore More":
      "Explorer davantage",
    "View Details":
      "Voir les détails",
    "Read More":
      "Lire la suite",
    "Get Started":
      "Commencer",
    "Request a Quote":
      "Demander un devis",
    "Download":
      "Télécharger",
    "Submit": "Envoyer",
    "Send": "Envoyer",
    "Search":
      "Rechercher",
    "Select":
      "Sélectionner",
    "Close":
      "Fermer",
    "Back":
      "Retour",
    "Next":
      "Suivant",
    "Previous":
      "Précédent",

    "Explore Products":
      "Découvrir les produits",
    "Talk to an Expert":
      "Parler à un expert",
    "Explore Solutions":
      "Découvrir les solutions",
    "Explore All Solutions":
      "Découvrir toutes les solutions",
    "Explore All Industries":
      "Découvrir tous les secteurs",

    "Privacy Policy":
      "Politique de confidentialité",
    "Terms & Conditions":
      "Conditions générales",

    "Frequently Asked Questions":
      "Questions fréquentes",
    "Everything You Need to Know":
      "Tout ce que vous devez savoir",
    "Need assistance?":
      "Besoin d'aide ?",
    "Still have questions?":
      "Vous avez encore des questions ?",

    "Battery Solutions":
      "Solutions de batteries",
    "Reliable Performance":
      "Performance fiable",
    "Energy Storage":
      "Stockage d'énergie",
    "Backup Power":
      "Alimentation de secours",
    "Industrial Power":
      "Énergie industrielle",
    "Smart Monitoring":
      "Surveillance intelligente",
    "Sustainability":
      "Durabilité",
    "Global Energy":
      "Énergie mondiale",
    "Built for Every Market":
      "Conçu pour chaque marché",
    "Powering Every Application":
      "Une énergie pour chaque application",

    "Mobility & Automotive":
      "Mobilité & automobile",
    "Backup & Energy Storage":
      "Secours & stockage d'énergie",
    "Industrial & Critical Power":
      "Énergie industrielle & critique",
    "Solar & Energy Storage":
      "Solaire & stockage d'énergie",
    "Commercial & Industrial":
      "Commercial & industriel",
    "Solar Energy Solutions":
      "Solutions d'énergie solaire",
    "Advanced Energy Solutions":
      "Solutions énergétiques avancées",
    "Sustainable Innovation":
      "Innovation durable",
    "Quality Focus":
      "Priorité à la qualité",
    "Tested Performance":
      "Performance testée",
    "Reliable Delivery":
      "Livraison fiable",
    "Better Energy Solutions.":
      "De meilleures solutions énergétiques",
    "India & Global Markets":
      "Inde & marchés internationaux",
    "Manufacturing Process":
      "Processus de fabrication",
    "Manufacturing Excellence":
      "Excellence industrielle",
    "Technology & Innovation":
      "Technologie & innovation",
    "Innovation with purpose":
      "Innover avec sens",

    "Find the right solution":
      "Trouvez la solution adaptée",
    "View Category":
      "Voir la catégorie",
    "Featured":
      "À la une",
    "Capacity":
      "Capacité",
    "Warranty":
      "Garantie",

    "Products coming soon.":
      "Produits bientôt disponibles.",
    "No Product Selected":
      "Aucun produit sélectionné",
    "Browse Products":
      "Parcourir les produits",
    "Back to Product":
      "Retour au produit",

    "Complete Your Order":
      "Finalisez votre commande",
    "Quantity":
      "Quantité",
    "Total":
      "Total",
    "Delivery Information":
      "Informations de livraison",
    "Confirm Order":
      "Confirmer la commande",

    "Shopping Cart":
      "Panier",
    "Your Cart":
      "Votre panier",
    "Your cart is empty":
      "Votre panier est vide",
    "Cart Items":
      "Articles du panier",
    "Clear Cart":
      "Vider le panier",
    "Continue Shopping":
      "Continuer les achats",
    "Order Summary":
      "Résumé de la commande",
    "Checkout Summary":
      "Résumé du paiement",
    "Subtotal":
      "Sous-total",
    "Delivery":
      "Livraison",
    "FREE":
      "GRATUIT",
    "Proceed to Buy":
      "Passer à l'achat",
    "Secure Checkout":
      "Paiement sécurisé",

    "Get in touch":
      "Contactez-nous",
    "Global Reach":
      "Présence mondiale",
    "Thank you for contacting us.":
      "Merci de nous avoir contactés.",

    "Our Portfolio":
      "Notre portefeuille",
    "Categories":
      "Catégories",
    "Solutions":
      "Solutions",
    "Products":
      "Produits",

    "EKACEL Energy Solutions — Battery & Energy Solutions":
      "EKACEL Energy Solutions — Batteries & solutions énergétiques",

    "Reliable battery and energy solutions for homes, businesses, mobility and industries.":
      "Des solutions fiables de batteries et d'énergie pour les particuliers, les entreprises, la mobilité et l'industrie.",

    "EKACEL battery solutions are developed for a wide range of applications including homes, offices, commercial establishments, industrial environments, backup power systems, mobility and other modern energy requirements.":
      "Les solutions de batteries EKACEL sont développées pour un large éventail d'applications, notamment les maisons, les bureaux, les établissements commerciaux, les environnements industriels, les systèmes d'alimentation de secours, la mobilité et les besoins énergétiques modernes.",

    "The right battery depends on your application, load requirement, desired backup time, usage pattern and installation environment. EKACEL can help identify a suitable solution based on your specific power and energy requirements.":
      "La batterie adaptée dépend de votre application, de vos besoins en charge, de la durée de secours souhaitée, de votre mode d'utilisation et de l'environnement d'installation. EKACEL peut vous aider à identifier une solution adaptée à vos besoins spécifiques en puissance et en énergie.",

    "Yes. EKACEL is focused on modern energy storage and power solutions that support reliable electricity availability, efficient energy management and renewable energy integration across different applications.":
      "Oui. EKACEL se concentre sur des solutions modernes de stockage et d'énergie qui favorisent une alimentation électrique fiable, une gestion efficace de l'énergie et l'intégration des énergies renouvelables dans différentes applications.",

    "Safety, durability and dependable performance are key considerations in our product approach. EKACEL solutions are developed with attention to quality, engineering, performance and reliable operation for their intended applications.":
      "La sécurité, la durabilité et les performances fiables sont des éléments essentiels de notre approche produit. Les solutions EKACEL sont développées avec une attention particulière portée à la qualité, à l'ingénierie, aux performances et au fonctionnement fiable pour leurs applications prévues.",

    "Yes. EKACEL solutions are designed to support a broad range of requirements, from residential backup and commercial power systems to industrial applications where dependable and consistent energy performance is important.":
      "Oui. Les solutions EKACEL sont conçues pour répondre à un large éventail de besoins, de l'alimentation de secours résidentielle et des systèmes électriques commerciaux aux applications industrielles où des performances énergétiques fiables et constantes sont importantes.",

    "Yes. EKACEL's growing energy portfolio is designed to support renewable energy applications through solar panels, solar inverters, battery systems and energy storage solutions.":
      "Oui. Le portefeuille énergétique croissant d'EKACEL est conçu pour accompagner les applications d'énergie renouvelable grâce aux panneaux solaires, aux onduleurs solaires, aux systèmes de batteries et aux solutions de stockage d'énergie.",

    "EKACEL aims to build long-term relationships with dealers, distributors, system integrators and business partners by providing dependable products, responsive support and practical energy solutions.":
      "EKACEL souhaite établir des relations à long terme avec les revendeurs, distributeurs, intégrateurs de systèmes et partenaires commerciaux en fournissant des produits fiables, un support réactif et des solutions énergétiques pratiques.",
  },};
  /* =========================================================
   LEXICAL FALLBACK TRANSLATIONS
   ---------------------------------------------------------
   Used when a literal phrase does not have an exact
   translation inside literalPhrases.
========================================================= */

const lexical = {
  ar: {
    Reliable: "موثوق",
    Power: "طاقة",
    Energy: "طاقة",
    Solutions: "حلول",
    Solution: "حل",
    Battery: "بطارية",
    Batteries: "بطاريات",
    Solar: "شمسي",
    Storage: "تخزين",
    Technology: "تقنية",
    Quality: "جودة",
    Innovation: "ابتكار",
    Global: "عالمي",
    Home: "منزل",
    Business: "أعمال",
    Commercial: "تجاري",
    Industrial: "صناعي",
    Support: "دعم",
    Contact: "اتصال",
    Products: "منتجات",
    Product: "منتج",
    Performance: "أداء",
    Future: "مستقبل",
    Smart: "ذكي",
    Advanced: "متقدم",
    Manufacturing: "تصنيع",
    Engineering: "هندسة",
    Testing: "اختبار",
    Learn: "اعرف المزيد",
    Explore: "استكشف",
    Request: "اطلب",
    Download: "تنزيل",
    Search: "بحث",
    Next: "التالي",
    Previous: "السابق",
    Back: "رجوع",
    Read: "اقرأ",
    More: "المزيد",
  },

  fr: {
    Reliable: "Fiable",
    Power: "Énergie",
    Energy: "Énergie",
    Solutions: "Solutions",
    Solution: "Solution",
    Battery: "Batterie",
    Batteries: "Batteries",
    Solar: "Solaire",
    Storage: "Stockage",
    Technology: "Technologie",
    Quality: "Qualité",
    Innovation: "Innovation",
    Global: "Mondial",
    Home: "Maison",
    Business: "Entreprise",
    Commercial: "Commercial",
    Industrial: "Industriel",
    Support: "Assistance",
    Contact: "Contact",
    Products: "Produits",
    Product: "Produit",
    Performance: "Performance",
    Future: "Avenir",
    Smart: "Intelligent",
    Advanced: "Avancé",
    Manufacturing: "Fabrication",
    Engineering: "Ingénierie",
    Testing: "Tests",
    Learn: "En savoir plus",
    Explore: "Explorer",
    Request: "Demander",
    Download: "Télécharger",
    Search: "Rechercher",
    Next: "Suivant",
    Previous: "Précédent",
    Back: "Retour",
    Read: "Lire",
    More: "plus",
  },

  es: {
    Reliable: "Fiable",
    Power: "Energía",
    Energy: "Energía",
    Solutions: "Soluciones",
    Solution: "Solución",
    Battery: "Batería",
    Batteries: "Baterías",
    Solar: "Solar",
    Storage: "Almacenamiento",
    Technology: "Tecnología",
    Quality: "Calidad",
    Innovation: "Innovación",
    Global: "Global",
    Home: "Hogar",
    Business: "Empresa",
    Commercial: "Comercial",
    Industrial: "Industrial",
    Support: "Soporte",
    Contact: "Contacto",
    Products: "Productos",
    Product: "Producto",
    Performance: "Rendimiento",
    Future: "Futuro",
    Smart: "Inteligente",
    Advanced: "Avanzado",
    Manufacturing: "Fabricación",
    Engineering: "Ingeniería",
    Testing: "Pruebas",
    Learn: "Más información",
    Explore: "Explorar",
    Request: "Solicitar",
    Download: "Descargar",
    Search: "Buscar",
    Next: "Siguiente",
    Previous: "Anterior",
    Back: "Volver",
    Read: "Leer",
    More: "más",
  },

  de: {
    Reliable: "Zuverlässig",
    Power: "Energie",
    Energy: "Energie",
    Solutions: "Lösungen",
    Solution: "Lösung",
    Battery: "Batterie",
    Batteries: "Batterien",
    Solar: "Solar",
    Storage: "Speicherung",
    Technology: "Technologie",
    Quality: "Qualität",
    Innovation: "Innovation",
    Global: "Global",
    Home: "Privat",
    Business: "Unternehmen",
    Commercial: "Gewerblich",
    Industrial: "Industriell",
    Support: "Support",
    Contact: "Kontakt",
    Products: "Produkte",
    Product: "Produkt",
    Performance: "Leistung",
    Future: "Zukunft",
    Smart: "Intelligent",
    Advanced: "Fortschrittlich",
    Manufacturing: "Fertigung",
    Engineering: "Ingenieurwesen",
    Testing: "Prüfung",
    Learn: "Mehr erfahren",
    Explore: "Entdecken",
    Request: "Anfordern",
    Download: "Herunterladen",
    Search: "Suchen",
    Next: "Weiter",
    Previous: "Zurück",
    Back: "Zurück",
    Read: "Lesen",
    More: "mehr",
  },
};

/* =========================================================
   HELPER
========================================================= */

/**
 * Safely get a nested translation value.
 *
 * Example:
 * getNestedValue(translations.en, "hero.title")
 */
const getNestedValue = (object, path) => {
  if (!object || typeof path !== "string") {
    return undefined;
  }

  return path.split(".").reduce((current, key) => {
    if (
      current === null ||
      current === undefined
    ) {
      return undefined;
    }

    return current[key];
  }, object);
};

/* =========================================================
   DETECT REAL TRANSLATION KEYS
   ---------------------------------------------------------
   This is VERY important.

   These should trigger missing-key warnings:

      hero.title
      sections.products
      faq.answer1

   But these should NOT trigger warnings:

      EKACEL battery solutions are developed...
      Reliable battery and energy solutions...
      Frequently Asked Questions
========================================================= */

const isLikelyTranslationKey = (value) => {
  if (typeof value !== "string") {
    return false;
  }

  if (value.length >= 100) {
    return false;
  }

  return /^[A-Za-z][A-Za-z0-9_]*(\.[A-Za-z0-9_]+)+$/.test(
    value
  );
};

/* =========================================================
   NORMALIZE TEXT
========================================================= */

const normalizeLiteral = (value) => {
  if (typeof value !== "string") {
    return "";
  }

  return value
    .replace(/\s+/g, " ")
    .trim();
};

/* =========================================================
   TRANSLATE LITERAL TEXT
   ---------------------------------------------------------
   Supports:

   1. Exact phrase translation
   2. Navigation translation
   3. Already translated text protection
   4. Word-level fallback
   5. Original English fallback
========================================================= */

export const translateLiteral = (
  value,
  language = activeLanguage
) => {
  if (
    typeof value !== "string" ||
    !value.trim()
  ) {
    return value;
  }

  const normalizedValue =
    normalizeLiteral(value);

  /* English does not need translation */
  if (language === "en") {
    return value;
  }

  /* Make sure language exists */
  const targetPhrases =
    literalPhrases[language] || {};

  const targetLexical =
    lexical[language] || {};

  const targetTranslations =
    translations[language] || {};

  /* =======================================================
     1. EXACT LITERAL PHRASE
  ======================================================= */

  if (
    Object.prototype.hasOwnProperty.call(
      targetPhrases,
      normalizedValue
    )
  ) {
    return targetPhrases[
      normalizedValue
    ];
  }

  /* =======================================================
     2. NAVIGATION TRANSLATION
  ======================================================= */

  const navigation =
    targetTranslations.navigation || {};

  if (
    Object.prototype.hasOwnProperty.call(
      navigation,
      normalizedValue
    )
  ) {
    return navigation[
      normalizedValue
    ];
  }

  /* =======================================================
     3. COMMON TRANSLATION
  ======================================================= */

  const common =
    targetTranslations.common || {};

  const commonMatches = {
    "Learn More": common.learnMore,
    "Explore": common.explore,
    "Explore More": common.exploreMore,
    "View Details": common.viewDetails,
    "Read More": common.readMore,
    "Get Started": common.getStarted,
    "Contact Us": common.contactUs,
    "Request a Quote": common.requestQuote,
    Download: common.download,
    Submit: common.submit,
    Send: common.send,
    Search: common.search,
    Select: common.select,
    Close: common.close,
    Back: common.back,
    Next: common.next,
    Previous: common.previous,
  };

  if (
    Object.prototype.hasOwnProperty.call(
      commonMatches,
      normalizedValue
    ) &&
    commonMatches[normalizedValue]
  ) {
    return commonMatches[normalizedValue];
  }

  /* =======================================================
     4. PROTECT ALREADY TRANSLATED VALUES
     -------------------------------------------------------
     Prevents:

       Arabic -> Arabic -> another Arabic translation

     and similar problems.
  ======================================================= */

  const localizedValues = new Set();

  const collectStrings = (object) => {
    if (!object || typeof object !== "object") {
      return;
    }

    Object.values(object).forEach((item) => {
      if (typeof item === "string") {
        localizedValues.add(
          normalizeLiteral(item)
        );
      } else if (
        item &&
        typeof item === "object"
      ) {
        collectStrings(item);
      }
    });
  };

  collectStrings(targetTranslations);

  if (
    localizedValues.has(normalizedValue)
  ) {
    return value;
  }

  /* =======================================================
     5. WORD-LEVEL FALLBACK
     -------------------------------------------------------
     Example:

       "Reliable Energy Solutions"

     can become approximately:

       "Solutions énergétiques fiables"

     when no exact phrase exists.

     Punctuation and spacing are preserved.
  ======================================================= */

  const words = value.split(
    /(\s+|[·•,&/().:;!?—-]+)/
  );

  let changed = false;

  const translatedWords = words.map(
    (part) => {
      if (
        !part ||
        !part.trim()
      ) {
        return part;
      }

      const cleanPart =
        part.trim();

      if (
        Object.prototype.hasOwnProperty.call(
          targetLexical,
          cleanPart
        )
      ) {
        changed = true;

        return part.replace(
          cleanPart,
          targetLexical[
            cleanPart
          ]
        );
      }

      /* Case-insensitive lexical lookup */
      const lexicalKey =
        Object.keys(
          targetLexical
        ).find(
          (key) =>
            key.toLowerCase() ===
            cleanPart.toLowerCase()
        );

      if (lexicalKey) {
        changed = true;

        return part.replace(
          cleanPart,
          targetLexical[
            lexicalKey
          ]
        );
      }

      return part;
    }
  );

  if (changed) {
    return translatedWords.join("");
  }

  /* =======================================================
     6. FINAL FALLBACK
  ======================================================= */

  return value;
};

/* =========================================================
   LANGUAGE PROVIDER
========================================================= */



/* =========================================================
   LANGUAGE PROVIDER COMPONENT
========================================================= */

export const LanguageProvider = ({
  children,
}) => {
  /* =======================================================
     INITIAL LANGUAGE
  ======================================================= */

  const [language, setLanguage] =
    useState(() => {
      try {
        const savedLanguage =
          localStorage.getItem(
            "ekacel-language"
          );

        if (
          savedLanguage &&
          SUPPORTED_LANGUAGES.some(
            (item) =>
              item.code ===
              savedLanguage
          )
        ) {
          return savedLanguage;
        }
      } catch (error) {
        console.warn(
          "[i18n] Unable to read saved language:",
          error
        );
      }

      return "en";
    });

  /* =======================================================
     KEEP ACTIVE LANGUAGE IN SYNC
  ======================================================= */

  useEffect(() => {
    activeLanguage = language;
  }, [language]);

  /* =======================================================
     APPLY LANGUAGE TO DOCUMENT
  ======================================================= */

  useEffect(() => {
    activeLanguage = language;

    const selectedLanguage =
      SUPPORTED_LANGUAGES.find(
        (item) =>
          item.code === language
      );

    const isRTL =
      language === "ar";

    /* HTML language */
    document.documentElement.lang =
      selectedLanguage?.code ||
      language;

    /* HTML direction */
    document.documentElement.dir =
      isRTL ? "rtl" : "ltr";

    /* Body direction */
    document.body.dir =
      isRTL ? "rtl" : "ltr";

    /* Useful for CSS */
    document.documentElement.dataset.language =
      language;

    document.documentElement.dataset.direction =
      isRTL ? "rtl" : "ltr";

    document.body.dataset.language =
      language;

    document.body.dataset.direction =
      isRTL ? "rtl" : "ltr";

    /* =====================================================
       SAVE LANGUAGE
    ===================================================== */

    try {
      localStorage.setItem(
        "ekacel-language",
        language
      );
    } catch (error) {
      console.warn(
        "[i18n] Unable to save language:",
        error
      );
    }
  }, [language]);

  /* =======================================================
     CHANGE LANGUAGE
  ======================================================= */

  const changeLanguage = (
    nextLanguage
  ) => {
    if (
      !SUPPORTED_LANGUAGES.some(
        (item) =>
          item.code ===
          nextLanguage
      )
    ) {
      console.warn(
        `[i18n] Unsupported language: ${nextLanguage}`
      );

      return;
    }

    setLanguage(nextLanguage);
  };

  /* =======================================================
     CURRENT TRANSLATIONS
  ======================================================= */

  const currentTranslations =
    translations[language] ||
    translations.en;

  /* =======================================================
     MAIN TRANSLATION FUNCTION
     -------------------------------------------------------
     Supports BOTH:

       t("hero.title")

     and legacy:

       t("Reliable battery and energy solutions...")
  ======================================================= */

  const t = (
    key,
    fallback = ""
  ) => {
    /* =====================================================
       Invalid input
    ===================================================== */

    if (
      key === null ||
      key === undefined
    ) {
      return fallback || "";
    }

    if (
      typeof key !== "string"
    ) {
      return key;
    }

    /* =====================================================
       Empty string
    ===================================================== */

    if (!key.trim()) {
      return fallback || key;
    }

    /* =====================================================
       1. CURRENT LANGUAGE NESTED KEY
    ===================================================== */

    const translatedValue =
      getNestedValue(
        currentTranslations,
        key
      );

    if (
      translatedValue !==
        undefined &&
      translatedValue !== null
    ) {
      return translatedValue;
    }

    /* =====================================================
       2. ENGLISH NESTED KEY
       -----------------------------------------------------
       This allows English to act as the source language
       when a specific translation is missing.
    ===================================================== */

    const englishValue =
      getNestedValue(
        translations.en,
        key
      );

    if (
      englishValue !==
        undefined &&
      englishValue !== null
    ) {
      /*
       * If English value exists but current language
       * does not have it, return translated literal when
       * possible instead of immediately showing English.
       */

      if (
        language !== "en" &&
        typeof englishValue ===
          "string"
      ) {
        const literalTranslation =
          translateLiteral(
            englishValue,
            language
          );

        return literalTranslation;
      }

      return englishValue;
    }

    /* =====================================================
       3. LITERAL TRANSLATION
       -----------------------------------------------------
       This is the important fix for your console warning.

       Example:

       t(
         "EKACEL battery solutions are developed..."
       )

       will NOT be treated as a missing key.
    ===================================================== */

    const literalSource =
      fallback || key;

    const literalTranslation =
      translateLiteral(
        literalSource,
        language
      );

    /* =====================================================
       4. WARN ONLY FOR REAL-LOOKING KEYS
       -----------------------------------------------------
       BEFORE:

       [i18n] Missing translation key:
       EKACEL battery solutions are developed...

       AFTER:

       No warning for long literal text.

       But:

       t("faq.answer1")

       still warns if missing.
    ===================================================== */

    if (
      import.meta.env?.DEV &&
      isLikelyTranslationKey(key)
    ) {
      console.warn(
        `[i18n] Missing translation key: ${key}`
      );
    }

    return literalTranslation;
  };

  /* =======================================================
     NAVIGATION TRANSLATION FUNCTION
     -------------------------------------------------------
     Specifically useful for legacy navigation/menu data.
  ======================================================= */

  const tn = (
    label,
    fallback = ""
  ) => {
    if (
      label === null ||
      label === undefined
    ) {
      return fallback || "";
    }

    if (
      typeof label !== "string"
    ) {
      return label;
    }

    if (!label.trim()) {
      return fallback || label;
    }

    /* =====================================================
       CURRENT LANGUAGE NAVIGATION
    ===================================================== */

    const translatedNavigation =
      currentTranslations.navigation?.[
        label
      ];

    if (
      translatedNavigation !==
        undefined &&
      translatedNavigation !== null
    ) {
      return translatedNavigation;
    }

    /* =====================================================
       ENGLISH NAVIGATION
    ===================================================== */

    const englishNavigation =
      translations.en.navigation?.[
        label
      ];

    if (
      englishNavigation !==
        undefined &&
      englishNavigation !== null
    ) {
      if (
        language !== "en"
      ) {
        return translateLiteral(
          englishNavigation,
          language
        );
      }

      return englishNavigation;
    }

    /* =====================================================
       FALLBACK TO GENERAL LITERAL TRANSLATION
    ===================================================== */

    return translateLiteral(
      fallback || label,
      language
    );
  };

  /* =======================================================
     CONTEXT VALUE
  ======================================================= */

  const value = {
    language,

    changeLanguage,

    currentLanguage:
      SUPPORTED_LANGUAGES.find(
        (item) =>
          item.code === language
      ) || SUPPORTED_LANGUAGES[0],

    languages:
      SUPPORTED_LANGUAGES,

    translations,

    t,

    tn,
  };

  /* =======================================================
     PROVIDER
  ======================================================= */

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
};

/* =========================================================
   USE LANGUAGE HOOK
========================================================= */

export const useLanguage = () => {
  const context =
    useContext(
      LanguageContext
    );

  if (!context) {
    throw new Error(
      "useLanguage must be used inside a LanguageProvider"
    );
  }

  return context;
};

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default LanguageContext;