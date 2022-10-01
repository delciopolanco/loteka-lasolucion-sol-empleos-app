import { useTranslation } from 'react-i18next';

export const WorkRequest = (): JSX.Element => {
  const { t } = useTranslation();
  return <>{t('Welcome to React')}</>;
};
