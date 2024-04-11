// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe os arquivos de idioma
import translationEN from '../locales/en.json';
import translationPT from '../locales/pt.json';

// Configuração do i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      pt: {
        translation: translationPT,
      },
    },
    lng: 'en', // idioma padrão
    fallbackLng: 'en', // idioma de fallback
    interpolation: {
      escapeValue: false, // reagir não escapar nossas seqüências de tradução
    },
  });

export default i18n;
