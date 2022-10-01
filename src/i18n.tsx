import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      Welcome: 'Welcome to React and react-i18next',
      fileUpload: {
        title: 'This is the title',
        isRequired: 'The file is required',
        fileUpload: 'You need to upload the file',
        howTo1: 'need to be like',
        howTo2: 'and like this',
        howTo3: 'and this',
        supportedFileTypes: 'png',
        qty: '1',
        maxFileSize: '5MB'
      },
      'all Rights Reserved': 'all Rights Reserved'
    }
  },
  fr: {
    translation: {
      Welcome: 'Bienvenue à React et react-i18next'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
