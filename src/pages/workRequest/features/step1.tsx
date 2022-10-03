import { FormControl, Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StepWrapper } from '../workRequest';
import { Select } from '@components';

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

type Step1Props = {
  children: React.ReactNode;
};

export const Step1: FC<Step1Props> = ({ children }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, errors, handleChange }: any = useFormikContext();

  return (
    <StepWrapper>
      <Grid container direction={'column'} spacing={3}>
        <Grid item>
          <Typography variant={'h6'} mb={1}>
            {t('workRequestForm.selectYourCity')}
          </Typography>
          <FormControl fullWidth>
            <Select
              name={'city'}
              label={t('workRequestForm.cities')}
              onChange={handleChange}
              items={Cities}
              value={values.city || ''}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant={'h6'} mb={1}>
            {t('workRequestForm.selectYourZone')}
          </Typography>
          <FormControl fullWidth>
            <Select
              name={'zone'}
              label={t('workRequestForm.zones')}
              onChange={handleChange}
              value={values.zone || ''}
              items={Zones}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item mt={5}>
          {children}
        </Grid>
      </Grid>
    </StepWrapper>
  );
};
