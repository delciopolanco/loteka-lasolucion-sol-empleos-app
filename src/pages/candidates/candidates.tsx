import { Page } from '@components';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Filters } from './features/filters';

type CandidatesProps = {};

export const Candidates: FC<CandidatesProps> = () => {
  const { t } = useTranslation();
  return (
    <Page headerText={`${t('candidates')}`}>
      <Filters />
    </Page>
  );
};
