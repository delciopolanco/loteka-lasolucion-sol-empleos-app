import { Grid } from '@mui/material';
import { FC } from 'react';
import { StepWrapper } from '../workRequest';
import { FileUpload } from '@components';

type Step3Props = {
  children: React.ReactNode;
};

export const Step3: FC<Step3Props> = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  return (
    <StepWrapper>
      <Grid container direction={'column'} spacing={3}>
        <Grid item>
          <FileUpload name={'attachement'} />
        </Grid>
        <Grid item mt={5}>
          {children}
        </Grid>
      </Grid>
    </StepWrapper>
  );
};
