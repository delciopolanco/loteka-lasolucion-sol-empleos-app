import { Card, CardProps } from '@mui/material';
import { FC, ReactNode } from 'react';

type PropsFeatureWrapper = CardProps & {
  children: ReactNode;
};

export const FeatureWrapper: FC<PropsFeatureWrapper> = ({ children, ...other }) => {
  return (
    <Card
      sx={{
        p: {
          md: 2,
          xs: 1.2
        },
        borderRadius: '16px'
      }}
      {...other}
    >
      {children}
    </Card>
  );
};
