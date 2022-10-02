import { FileUpload, Input, InputFormat, Select, Stepper, StepperButtons } from '@components';
import { Box, experimentalStyled, FormControl, Grid, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';

const StepWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto'
}));

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

export const WorkRequestStepper = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values, errors, handleChange }: any = useFormikContext();

  return (
    <>
      <Box>
        <Typography variant={'h3'} textAlign={'center'}>
          {values.role}
        </Typography>
        <Typography variant={'body2'} textAlign={'center'}>
          {t('workRequestForm.completeSteps')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Stepper>
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
                    error={Boolean(errors.city)}
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
                    items={Zones}
                    error={Boolean(errors.zone)}
                    fullWidth
                  />
                </FormControl>
              </Grid>
              <Grid item mt={5}>
                <StepperButtons />
              </Grid>
            </Grid>
          </StepWrapper>
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
                <StepperButtons showPreviousStep />
              </Grid>
            </Grid>
          </StepWrapper>
          <StepWrapper>
            <Grid container direction={'column'} spacing={3}>
              <Grid item>
                <FileUpload />
              </Grid>
              <Grid item mt={5}>
                <StepperButtons showPreviousStep />
              </Grid>
            </Grid>
          </StepWrapper>
        </Stepper>
      </Box>
      <Typography variant={'subtitle2'} textAlign={'center'}>
        {t('workRequestForm.confidential')}
      </Typography>
    </>
  );
};
