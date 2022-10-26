import { FormControl, Grid, Typography } from '@mui/material';
import { FormikContextType, useFormikContext } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StepWrapper } from '../workRequest';
import { Input, InputFormat } from '@components';
import { WorkRequest } from '@types';

type Step2Props = {
  children: React.ReactNode;
};

export const Step2: FC<Step2Props> = ({ children }) => {
  const { t } = useTranslation();
  const { errors, handleChange }: FormikContextType<WorkRequest> = useFormikContext();

  return (
    <StepWrapper>
      <Grid container direction={'column'} spacing={3}>
        <Grid item>
          <Typography variant={'h6'} mb={1}>
            {t('workRequestForm.identification')}
          </Typography>
          <FormControl fullWidth>
            <InputFormat
              name={'identification'}
              format={'### - ####### - #'}
              onChange={handleChange}
              error={Boolean(errors.identification)}
              fullWidth
            />
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant={'h6'} mb={1}>
            {t('workRequestForm.fullName')}
          </Typography>
          <FormControl fullWidth>
            <Input showCharCount name={'fullName'} onChange={handleChange} error={Boolean(errors.fullName)} fullWidth />
          </FormControl>
        </Grid>
        <Grid item>
          <Typography variant={'h6'} mb={1}>
            {t('workRequestForm.phone')}
          </Typography>
          <FormControl fullWidth>
            <InputFormat
              name={'phone'}
              format={'(###) ###-####'}
              onChange={handleChange}
              error={Boolean(errors.phone)}
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
