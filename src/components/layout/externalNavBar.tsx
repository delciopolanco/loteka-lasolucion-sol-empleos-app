import { AppBar, Box, Toolbar, Typography, useTheme } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './logo';
import bgBlue from '@images/bgblue.png';
import { useTranslation } from 'react-i18next';

type NavBarProps = {
  children?: ReactNode;
};

export const ExternalNavBarvBar: FC<NavBarProps> = ({ children }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <AppBar elevation={0} sx={{ backgroundImage: `url(${bgBlue})`, color: 'text.secondary' }}>
      <Toolbar sx={{ minHeight: 64 }}>
        <RouterLink to={'/'} style={{ width: '120px', height: '100px' }}>
          <Logo
            sx={{
              display: 'inline',
              '& img': {
                maxWidth: '100%'
              }
            }}
          />
        </RouterLink>

        <Box p={4}>
          <Typography variant={'h4'} color={theme.palette.primary.contrastText}>
            {t('workRequest')}
          </Typography>
          <Typography variant={'body1'} color={'primary.contrastText'}>
            {t('workRequestConstraints')}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, ml: 2 }}></Box>
        {children}
      </Toolbar>
    </AppBar>
  );
};
