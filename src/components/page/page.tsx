import { FC, ReactNode } from 'react';
import { experimentalStyled } from '@mui/material';

type PageProps = {
  children: ReactNode;
};

const PageRoot = experimentalStyled('div')(() => ({
  alignItems: 'center',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '1fr',
  padding: '1.625rem',

  '& + &': {
    marginTop: '1rem'
  }
}));

export const Page: FC<PageProps> = ({ children }) => {
  return <PageRoot>{children}</PageRoot>;
};
