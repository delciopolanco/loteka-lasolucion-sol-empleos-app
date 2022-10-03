import { Box, Container, Typography } from '@mui/material';
import { FC, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type FooterProps = { children?: ReactNode };

export const Footer: FC<FooterProps> = ({ children, ...others }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: 'background.default', pb: 6, pt: { md: 15, xs: 6 } }} {...others}>
      <Container maxWidth={'lg'}>
        <Typography>{t('all Rights Reserved')}</Typography>
        {children}
      </Container>
    </Box>
  );
};
