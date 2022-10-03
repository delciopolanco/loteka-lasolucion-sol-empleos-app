import { AppBar, IconButton, Toolbar, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
import bgBlue from '@images/bgblue.png';
import MenuIcon from '@mui/icons-material/Menu';

type NavBarProps = {
  children?: ReactNode;
  onSideBarOpen?: boolean;
  showHamburger?: boolean;
  onSidebarMobileOpen?: () => void;
};

export const NavBar: FC<NavBarProps> = ({ children, showHamburger, onSidebarMobileOpen }) => {
  const theme = useTheme();
  return (
    <AppBar elevation={0} sx={{ backgroundImage: `url(${bgBlue})`, color: 'text.secondary' }}>
      <Toolbar sx={{ minHeight: 64 }}>
        {showHamburger && (
          <IconButton
            color={'inherit'}
            onClick={onSidebarMobileOpen}
            sx={{ display: { lg: 'none' }, mr: 2 }}
          >
            <MenuIcon fontSize={'medium'} sx={{ color: theme.palette.primary.contrastText }} />
          </IconButton>
        )}
        <RouterLink to={'/'}>
          <Logo
            sx={{
              display: 'inline',
              height: 40,
              width: 40,
              '& img': {
                md: {
                  maxWidth: '58%'
                },
                xs: {
                  maxWidth: '40%'
                }
              }
            }}
          />
        </RouterLink>
        {children}
      </Toolbar>
    </AppBar>
  );
};
