import { Page } from '@components';
import { Pagination } from '@components/pagination';
import { Grid } from '@mui/material';
import { Formik, FormikValues } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { CadidateCard } from './features/candidateCard';
import { Filters } from './features/filters';

type CandidatesProps = {};

export const Candidates: FC<CandidatesProps> = () => {
  const { t } = useTranslation();

  const onSearchHandle = (v: FormikValues) => {
    console.log(v);
  };

  return (
    <Page headerText={`100 ${t('candidates')}`}>
      <Formik initialValues={{}} onSubmit={onSearchHandle}>
        {() => {
          return (
            <Grid container flexDirection={'column'} gap={1}>
              <Grid item md={12}>
                <Filters />
              </Grid>
              <Grid my={1}>
                <Pagination
                  sx={{ display: 'flex', justifyContent: { md: 'flex-end', xs: 'center' } }}
                  variant={'outlined'}
                  color='primary'
                  count={8}
                  page={1}
                />
              </Grid>
              <Grid item md={12} container spacing={2} sx={{ p: 0 }}>
                {[1, 1, 1, 1].map((e, i) => (
                  <Grid key={i} item md={3} xs={6}>
                    <CadidateCard />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          );
        }}
      </Formik>
    </Page>
  );
};
