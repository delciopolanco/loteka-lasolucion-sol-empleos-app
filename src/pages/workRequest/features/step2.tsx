import { FormControl, Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { StepWrapper } from '../workRequest';
import { Input, InputFormat } from '@components';

type Step2Props = {
  children: React.ReactNode;
};

export const Step2: FC<Step2Props> = ({ children }) => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { errors, handleChange }: any = useFormikContext();

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
            <Input
              showCharCount
              name={'fullName'}
              onChange={handleChange}
              error={Boolean(errors.fullName)}
              fullWidth
            />
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
