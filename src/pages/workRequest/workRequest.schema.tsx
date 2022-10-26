import * as Yup from 'yup';
import i18n from 'i18next';
import { SIZES } from '@shared';

const Step1 = Yup.object().shape({
  city: Yup.string().required(i18n.t('workRequestForm.validations.city')).nullable(),
  zone: Yup.string().required(i18n.t('workRequestForm.validations.zone')).nullable()
});

const Step2 = Yup.object().shape({
  phone: Yup.string().required(i18n.t('workRequestForm.validations.phone')).nullable(),
  identification: Yup.string().required(i18n.t('workRequestForm.validations.identification')).nullable(),
  fullName: Yup.string().required(i18n.t('workRequestForm.validations.fullName')).nullable()
});

const Step3 = Yup.object().shape({
  attachement: Yup.mixed()
    .required(i18n.t('workRequestForm.validations.attachementRequired'))
    .test(
      'fileSize',
      i18n.t('workRequestForm.validations.attachementMaxSize'),
      (f) => f && f[0].size <= SIZES.attachements
    )
});

export const workRequestSchema = [Step1, Step2, Step3];
