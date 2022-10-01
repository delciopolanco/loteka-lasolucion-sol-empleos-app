import { experimentalStyled } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { MainFooter } from './mainFooter';
import { MainNavBar } from './mainNavBar';

type MainLayoutProps = {
  children?: ReactNode;
};

const MainLayoutRoot = experimentalStyled('div')(({ theme }) => ({
  height: '100%',
  paddingTop: 64,
  backgroundColor: theme.palette.background.default
}));

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainLayoutRoot>
      <MainNavBar />
      {children || <Outlet />}
      <MainFooter />
    </MainLayoutRoot>
  );
};
