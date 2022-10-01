import { useTranslation } from 'react-i18next';
import { Box, Container } from '@mui/material';

export const WorkRequest = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth={'sm'} sx={{ py: '80px' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>{t('Welcome')}</Box>
      </Container>
    </Box>
  );
};
