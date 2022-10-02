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
      workRequestSteps: {
        selectLocation: 'Select Location',
        personalData: 'Personal Data',
        attachFiles: 'Attach Files'
      },
      workRequestForm: {
        selectYourCity: 'Select your city',
        cities: 'Cities...',
        selectYourZone: 'Select your zone',
        zones: 'Zones...'
      },
      continue: 'Continue',
      back: 'Back',
      'all Rights Reserved': 'all Rights Reserved'
    }
  },
  es: {
    translation: {
      Welcome: 'Bienvenido',
      fileUpload: {
        title: 'Titulo',
        isRequired: 'El archivo es requerido',
        fileUpload: 'Cargar el archivo',
        howTo1: 'blac bla',
        howTo2: 'blac black 2',
        howTo3: 'ablac bvlack 3',
        supportedFileTypes: 'png',
        qty: '1',
        maxFileSize: '5MB'
      },
      workRequestSteps: {
        selectLocation: 'Selecciona tu ubicación',
        personalData: 'Datos personales',
        attachFiles: 'Adjunta los archivos'
      },
      workRequestForm: {
        selectYourCity: 'Selecciona tu provincia',
        cities: 'Provincias...',
        selectYourZone: 'Seleciona tu municipio',
        zones: 'Municipios...',
        identification: 'Cédula',
        phone: 'Teléfono',
        fullName: 'Nombre completo'
      },
      continue: 'Continuar',
      back: 'Atrás',
      'all Rights Reserved': 'Todos los derechos reservados'
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
  lng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
