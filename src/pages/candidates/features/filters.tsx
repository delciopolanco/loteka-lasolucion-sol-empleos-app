import { FeatureWrapper, LabelMenu, Select } from '@components';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { InputAdornment, Grid, TextField, Stack, Typography } from '@mui/material';
import { Formik, FormikValues } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type PropsFilters = {};

const Process = [
  {
    value: '1',
    label: 'Entrevistada'
  },
  {
    value: '2',
    label: 'Contactada'
  },
  {
    value: '3',
    label: 'Contratada'
  }
];

const Cities = [
  {
    value: '1',
    label: 'Santo Domingo'
  }
];

const Zones = [
  {
    value: '1',
    label: 'Distrio Nacional'
  }
];

export const Filters: FC<PropsFilters> = () => {
  const { t } = useTranslation();

  const filterHandler = (v: FormikValues) => {
    console.log(v);
  };

  return (
    <Formik initialValues={{}} onSubmit={filterHandler}>
      {() => {
        return (
          <FeatureWrapper>
            <Grid container spacing={0.5}>
              <Grid item md={4} xs={12}>
                <TextField
                  name={'byText'}
                  size={'small'}
                  fullWidth
                  label={t('candidatesPage.filters.searchBy')}
                  placeholder={t('candidatesPage.filters.searchByCriteria')}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position={'start'}>
                        <SearchOutlinedIcon fontSize={'small'} />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <Select
                  name={'process'}
                  size={'small'}
                  items={Process}
                  fullWidth
                  label={t('candidatesPage.filters.process')}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <Select
                  name={'city'}
                  size={'small'}
                  items={Cities}
                  fullWidth
                  label={t('candidatesPage.filters.city')}
                />
              </Grid>
              <Grid item md={2} xs={12}>
                <Select
                  name={'zone'}
                  size={'small'}
                  items={Zones}
                  fullWidth
                  label={t('candidatesPage.filters.zone')}
                />
              </Grid>
              <Grid item md={2} xs={12} display={'flex'} alignItems={'center'}>
                <LabelMenu
                  label={t('candidatesPage.filters.orderBy')}
                  options={[
                    { label: 'Fecha', value: '1' },
                    { label: 'Nombre', value: '2' },
                    { label: 'Más Reciente', value: '3' }
                  ]}
                />
              </Grid>
            </Grid>
          </FeatureWrapper>
        );
      }}
    </Formik>
  );
};
