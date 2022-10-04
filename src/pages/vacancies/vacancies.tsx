import { Page } from '@components';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type VacanciesProps = {};

export const Vacancies: FC<VacanciesProps> = () => {
  const { t } = useTranslation();
  return <Page headerText={`${t('vacancies')}`}></Page>;
};
