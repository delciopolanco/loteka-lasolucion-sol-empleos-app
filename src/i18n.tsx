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
        title: 'Cédula de identidad',
        isRequired: 'Requerida',
        fileUpload: 'Cargar el archivo',
        howTo1: 'Arrastra tu archivo o',
        howTo2: 'has click para adjuntar',
        howTo3: 'desde tus dispositivo',
        supportedFileTypes: 'Tipo de documento soportado: PNG, JPEG, JPG',
        qty: 'Un solo archivo',
        maxFileSize: '5MB máximo'
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
        fullName: 'Nombre completo',
        completeSteps: 'Completa los 3 pasos a continuación para aplicar a esta vacante',
        confidential: 'Los datos suministrados se evaluarán de forma confidencial.',
        youSentWorkRequest: '¡ Has enviado tu solicitud !',
        afterSentWorkMessage:
          'Estaremos evaluando tu datos y nos pondremos en contacto contigo a mayor brevedad.',
        validations: {
          city: 'Debe seleccionar su provincia en la lista',
          zone: 'Debe seleccionar su municipio de la lista',
          identification: 'Debe especificar su cédula',
          phone: 'Debe especificar su móvil o teléfono',
          fullName: 'Debe especificar su nombre completo',
          attachementRequired: 'Debes adjuntar tu cédula de indentidad para continuar',
          attachementMaxSize: 'El archivo es muy pesado, intenta con un archivo no mayor a los 5MB'
        }
      },
      candidatesPage: {
        filters: {
          searchBy: 'Buscar por',
          searchByCriteria: 'nombre, apellido, cédula...',
          process: 'Por proceso',
          city: 'Por pronvicia',
          zone: 'Por municipio',
          vacancy: 'Vacante',
          orderBy: 'Ordernar por'
        }
      },
      continue: 'Continuar',
      applyToRol: 'Aplicar a la vacante',
      createNewRequest: 'Crear nueva solicitud',
      back: 'Atrás',
      'all Rights Reserved': 'Todos los derechos reservados',
      vacancies: 'Vacantes',
      candidates: 'Candidatos',
      users: 'Usuarios',
      rowsPerPage: 'Elementos por páginas',
      of: 'de',
      moreThan: 'más de'
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
