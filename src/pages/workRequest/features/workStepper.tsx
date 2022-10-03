import { currentStepSelector, Stepper, StepperButtons } from '@components';
import { Box, Typography } from '@mui/material';
import { WorkRequest } from '@types';
import { FormikContextType, useFormikContext } from 'formik';
import { isEmpty } from 'lodash/fp';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';

type WorkStepperProps = {};

export const WorkStepper: FC<WorkStepperProps> = () => {
  const { t } = useTranslation();
  const { values, validateForm, submitForm }: FormikContextType<WorkRequest> = useFormikContext();
  const [currentStep, setCurrentStep] = useRecoilState(currentStepSelector);

  const nextHandler = async () => {
    const validationErrors = await validateForm();

    if (isEmpty(validationErrors)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const submitHandler = async () => {
    const validationErrors = await validateForm();

    if (isEmpty(validationErrors)) {
      setCurrentStep(currentStep + 1);
      submitForm();
    }
  };

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
          <Step1>
            <StepperButtons showPreviousStep nextHandler={nextHandler} />
          </Step1>
          <Step2>
            <StepperButtons showPreviousStep nextHandler={nextHandler} />
          </Step2>
          <Step3>
            <StepperButtons showPreviousStep nextHandler={submitHandler} />
          </Step3>
        </Stepper>
      </Box>
      <Typography variant={'subtitle2'} textAlign={'center'}>
        {t('workRequestForm.confidential')}
      </Typography>
    </>
  );
};
