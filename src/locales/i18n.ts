import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

// Import translation files
import en from './en.json';
import vi from './vi.json';
import { Language } from './types';

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
};

// Get device language
const getDeviceLanguage = (): Language => {
  const locales = RNLocalize.getLocales();
  if (locales.length > 0) {
    const language = locales[0].languageCode;
    return language === 'vi' ? 'vi' : 'en'; // Default to English if not Vietnamese
  }
  return 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getDeviceLanguage(),
    fallbackLng: 'en',
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    react: {
      useSuspense: false, // Disable suspense for React Native
    },
  });

export default i18n;
