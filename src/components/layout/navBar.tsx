import {
  AppBar,
  Avatar,
  Badge,
  Box,
  ButtonBase,
  IconButton,
  styled,
  Toolbar,
  Typography,
  useTheme
} from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
import bgBlue from '@images/bgblue.png';
import MenuIcon from '@mui/icons-material/Menu';
import { AuthSelector, getInitials } from '@shared';
import { useRecoilValue } from 'recoil';
import { useTranslation } from 'react-i18next';
import { isEmpty } from 'lodash/fp';

type NavBarProps = {
  children?: ReactNode;
  onSideBarOpen?: boolean;
  showHamburger?: boolean;
  onSidebarMobileOpen?: () => void;
};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""'
    }
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0
    }
  }
}));

export const NavBar: FC<NavBarProps> = ({ children, showHamburger, onSidebarMobileOpen }) => {
  const theme = useTheme();
  const auth = useRecoilValue(AuthSelector);
  const { t } = useTranslation();

  return (
    <AppBar elevation={0} sx={{ backgroundImage: `url(${bgBlue})`, color: 'text.secondary' }}>
      <Toolbar sx={{ minHeight: 64 }}>
        {showHamburger && (
          <IconButton color={'inherit'} onClick={onSidebarMobileOpen} sx={{ display: { lg: 'none' }, mr: 2 }}>
            <MenuIcon fontSize={'medium'} sx={{ color: theme.palette.primary.contrastText }} />
          </IconButton>
        )}

        <Box
          sx={{
            display: {
              md: 'flex',
              xs: 'none'
            }
          }}
        >
          <RouterLink to={'/'} style={{ width: '120px', height: '80px' }}>
            <Logo
              sx={{
                display: 'inline',
                '& img': {
                  maxWidth: '100%'
                }
              }}
            />
          </RouterLink>
        </Box>

        <Box>
          <Typography
            variant={'h4'}
            sx={{ fontSize: { xs: '1.2rem', md: '2rem' } }}
            color={theme.palette.primary.contrastText}
            ml={1}
          >
            {t('workRequestManager')}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, ml: 2 }}></Box>
        <Box sx={{ display: { md: 'initial', xs: 'none' } }} textAlign={'right'} color={'primary.contrastText'}>
          <Typography>{auth.user?.name}</Typography>
          <Typography>{auth.user?.jobRole}</Typography>
        </Box>
        <Box sx={{ ml: 2 }}>
          <Box component={ButtonBase} sx={{ alignItems: 'center', display: 'flex' }}>
            <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
              <Avatar
                sx={{
                  height: 42,
                  width: 42,
                  backgroundColor: 'primary.contrastText',
                  color: 'primary.main'
                }}
              >
                {auth && !isEmpty(auth.user) && getInitials(auth.user.name)}
              </Avatar>
            </StyledBadge>
          </Box>
        </Box>
        {children}
      </Toolbar>
    </AppBar>
  );
};
