import { FeatureWrapper } from '@components';
import { Box, CardMedia, Link, Typography, useTheme } from '@mui/material';
import { FC } from 'react';
import Cedula from '@images/cedula.png';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';

type PropsCadidateCard = {};

export const CadidateCard: FC<PropsCadidateCard> = () => {
  const theme = useTheme();
  return (
    <FeatureWrapper>
      <Typography variant={'body2'} color={theme.palette.grey[400]} mb={2}>
        AGENTE DE SERVICIO
      </Typography>

      <Box sx={{ background: theme.palette.primary.main, padding: 1, borderRadius: '16px' }}>
        <CardMedia
          image={Cedula}
          sx={{ height: '100px', width: '100%', maxWidth: 200, margin: 'auto' }}
        ></CardMedia>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: 0
        }}
      >
        <Typography variant={'h6'} color={'textPrimary'} mt={1}>
          Maria Cepeda
        </Typography>
        <Typography variant={'body2'} color={'textSecondary'}>
          001-0000000-1
        </Typography>
        <Typography variant={'subtitle2'} color={'textPrimary'}>
          <div>Santo Domingo Este</div>
          <div>Distrito Nacional</div>
        </Typography>

        <Link
          color={'primary'}
          underline={'none'}
          component={'a'}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            fontWeight: 600,
            justifyContent: 'center',
            mt: 2
          }}
        >
          <PhoneOutlinedIcon fontSize={'small'} />
          <Typography ml={2} variant={'body2'} color={'textSecondary'}>
            (809) 961-3034
          </Typography>
        </Link>
      </Box>
    </FeatureWrapper>
  );
};
