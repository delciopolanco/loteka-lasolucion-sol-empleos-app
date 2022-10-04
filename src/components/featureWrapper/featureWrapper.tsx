import { Card } from '@mui/material';
import { FC, ReactNode } from 'react';

type PropsFeatureWrapper = {
  children: ReactNode;
};

export const FeatureWrapper: FC<PropsFeatureWrapper> = ({ children }) => {
  return <Card sx={{ p: 2 }}>{children}</Card>;
};
