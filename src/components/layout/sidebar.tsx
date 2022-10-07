import { PATHS } from '@shared';
import { useEffect, FC } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Drawer, Theme, useMediaQuery, useTheme } from '@mui/material';
import { Logo, Scrollbar } from '@components';
import { NavSection } from './navSection';

interface SidebarProps {
  onMobileClose: () => void;
  openMobile: boolean;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { onMobileClose, openMobile } = props;
  const location = useLocation();
  const theme = useTheme();
  const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
  const { t } = useTranslation();

  const sections = [
    {
      title: '',
      items: [
        {
          title: t('candidates'),
          path: PATHS.candidates,
          icon: <GroupAddOutlinedIcon fontSize={'small'} />
        }
      ]
    },
    {
      title: t('admin'),
      items: [
        {
          title: t('users'),
          path: PATHS.users(),
          icon: <PortraitOutlinedIcon fontSize={'small'} />
        }
      ]
    }
  ];

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box
          sx={{
            backgroundColor: theme.palette.primary.main,
            display: {
              lg: 'none',
              xs: 'flex'
            },
            justifyContent: 'center',
            p: 1
          }}
        >
          <RouterLink to={'/'}>
            <Logo
              sx={{
                justifyContent: 'left',
                '& img': {
                  maxWidth: '40%'
                }
              }}
            />
          </RouterLink>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
      </Scrollbar>
    </Box>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor={'left'}
        open
        PaperProps={{
          sx: {
            backgroundColor: 'background.paper',
            height: 'calc(100% - 80px) !important',
            top: '80px !Important',
            width: 280
          }
        }}
        variant={'permanent'}
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor={'left'}
      onClose={onMobileClose}
      open={openMobile}
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          width: 280
        }
      }}
      variant={'temporary'}
    >
      {content}
    </Drawer>
  );
};
