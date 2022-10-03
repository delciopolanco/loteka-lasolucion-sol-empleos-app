import { Box, Container, experimentalStyled } from '@mui/material';
import { currentStepSelector } from '@components';
import { Formik, FormikValues } from 'formik';
import { useRecoilValue } from 'recoil';
import { WorkStepper } from './features/WorkStepper';
import { Complete } from './features/complete';
import { useScrollReset } from '@hooks';
import { workRequestSchema } from './workRequest.schema';

export const StepWrapper = experimentalStyled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '0 auto'
}));

export const Root = experimentalStyled('div')(() => ({
  backgroundColor: 'background.default',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh'
}));

export const WorkRequest = () => {
  const currentStep = useRecoilValue(currentStepSelector);

  useScrollReset();

  const submitHandler = (v: FormikValues): void => {
    console.log('submit', v);
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
      validationSchema={workRequestSchema[currentStep]}
      onSubmit={submitHandler}
    >
      {() => {
        return (
          <Root>
            <Container sx={{ py: '80px', justifyContent: 'center' }}>
              <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 }}>
                {currentStep < 3 && <WorkStepper />}
                {currentStep >= 3 && <Complete />}
              </Box>
            </Container>
          </Root>
        );
      }}
    </Formik>
  );
};
