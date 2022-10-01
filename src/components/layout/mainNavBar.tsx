import { AppBar, Toolbar } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
import bgBlue from '@images/bgblue.png';

type MainNavBarProps = {
  children?: ReactNode;
};

export const MainNavBar: FC<MainNavBarProps> = ({ children }) => {
  return (
    <AppBar elevation={0} sx={{ backgroundImage: `url(${bgBlue})`, color: 'text.secondary' }}>
      <Toolbar sx={{ minHeight: 64 }}>
        <RouterLink to={'/'}>
          <Logo />
        </RouterLink>
        {children}
      </Toolbar>
    </AppBar>
  );
};
