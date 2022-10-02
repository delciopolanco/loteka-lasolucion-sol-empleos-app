import { Children, FC, ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Step } from './step';
import { stepCountSelector, currentStepSelector } from './state';
import { Box, Stepper as MuiStepper, Paper, experimentalStyled } from '@mui/material';

const Root = experimentalStyled('div')(({ theme }) => ({
  maxWidth: 480,
  minWidth: 320,
  [theme.breakpoints.up('lg')]: { width: 'calc(100vw - 349px)' }
}));

interface StepperProps {
  children?: ReactNode[];
  message?: ReactNode;
}
export const Stepper: FC<StepperProps> = ({ children, message }) => {
  const stepCount = useRecoilValue(stepCountSelector);
  const [currentStep] = useRecoilState(currentStepSelector);

  if (!stepCount || Children.toArray(children).length !== stepCount) {
    return null;
  }

  return (
    <Root>
      <Paper sx={{ p: '20px' }}>
        {message}
        <MuiStepper aria-label={'breadcrumb'} activeStep={currentStep}>
          {!!stepCount &&
            Array.from(Array(stepCount), (_, i) => i).map((i) => (
              <Step
                key={i}
                stepKey={i}
                sx={{
                  display: {
                    lg: 'block',
                    md: 'block',
                    xs: currentStep === i ? 'block' : 'none'
                  }
                }}
              />
            ))}
        </MuiStepper>
        <Box sx={{ paddingTop: '40px' }}>{children ? children[currentStep] : null}</Box>
      </Paper>
    </Root>
  );
};
