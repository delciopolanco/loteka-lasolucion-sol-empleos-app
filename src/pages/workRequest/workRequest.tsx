import { Box, Container, experimentalStyled, FormControl, Grid, Typography } from '@mui/material';
import { Input, InputFormat, Select, Stepper, StepperButtons } from '@components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

const StepWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  maxWidth: 480,
  minWidth: 320,
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

export const WorkRequest = () => {
  const { t } = useTranslation();

  const submitHandler = (): void => {
    console.log('submit');
  };

  return (
    <Formik
      initialValues={{
        city: '',
        zone: '',
        identification: '',
        fullName: '',
        phone: ''
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={submitHandler}
    >
      {({ handleChange, errors }) => {
        return (
          <Box
            sx={{
              backgroundColor: 'background.default',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '100vh'
            }}
          >
            <Container sx={{ py: '80px', justifyContent: 'center' }}>
              <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
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
                  <div>3</div>
                </Stepper>
              </Box>
            </Container>
          </Box>
        );
      }}
    </Formik>
  );
};
