import { Box, Container } from '@mui/material';
import { currentStepSelector } from '@components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { WorkRequestStepper } from './features/workRequestStepper';
import { WorkRequestComplete } from './features/workRequestComplete';
import { useScrollReset } from '@hooks';

export const WorkRequest = () => {
  const { t } = useTranslation();
  const currentStep = useRecoilValue(currentStepSelector);

  useScrollReset();

  const submitHandler = (): void => {
    console.log('submit');
  };

  return (
    <Formik
      initialValues={{
        role: 'Agente de ventas',
        city: '',
        zone: '',
        identification: '',
        fullName: '',
        phone: ''
      }}
      validationSchema={Yup.object().shape({})}
      onSubmit={submitHandler}
    >
      {() => {
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
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}>
                {currentStep < 3 && <WorkRequestStepper />}

                {currentStep >= 3 && <WorkRequestComplete />}
              </Box>
            </Container>
          </Box>
        );
      }}
    </Formik>
  );
};
