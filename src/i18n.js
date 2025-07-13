import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        medical: 'Medical & Private Services',
        surgery: 'Minor Surgery',
        nutrition: 'Nutrition',
        programs: 'Programs',
        workshops: 'Workshops & Trainings',
        events: 'Events',
        registration: 'Event Registration',
        info: 'Info',
        useful: 'Useful Info',
        map: 'Map',
        imprint: 'Imprint',
        privacy: 'Privacy Policy',
        contact: 'Contact',
      },
      hero: {
        welcome: 'Welcome to Hausarzt Nord',
        subtitle: 'Your trusted partner for comprehensive healthcare in Vienna. We provide professional medical services with a focus on personalized care and patient comfort.',
        book: 'Book Appointment',
        services: 'Our Services',
      },
      lang: {
        en: 'EN',
        de: 'DE'
      }
    }
  },
  de: {
    translation: {
      nav: {
        home: 'Startseite',
        services: 'Leistungen',
        medical: 'Medizinische & Private Leistungen',
        surgery: 'Kleinchirurgie',
        nutrition: 'Ernährung',
        programs: 'Programme',
        workshops: 'Workshops & Schulungen',
        events: 'Veranstaltungen',
        registration: 'Eventanmeldung',
        info: 'Info',
        useful: 'Nützliche Infos',
        map: 'Karte',
        imprint: 'Impressum',
        privacy: 'Datenschutz',
        contact: 'Kontakt',
      },
      hero: {
        welcome: 'Willkommen bei Hausarzt Nord',
        subtitle: 'Ihr vertrauensvoller Partner für umfassende Gesundheitsversorgung in Wien. Wir bieten professionelle medizinische Leistungen mit Fokus auf persönliche Betreuung und Patientenzufriedenheit.',
        book: 'Termin buchen',
        services: 'Unsere Leistungen',
      },
      lang: {
        en: 'EN',
        de: 'DE'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 