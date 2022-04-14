import i18next from 'i18next';
import en from './lang/en.json';

i18next.init({
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18next;
