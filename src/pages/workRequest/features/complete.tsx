import { currentStepSelector } from '@components';
import { Box, experimentalStyled, Typography } from '@mui/material';
import { useFormikContext } from 'formik';
import { useTranslation } from 'react-i18next';
import { useRecoilState } from 'recoil';
import './complete.css';
import { Button } from '@components';

const Header = experimentalStyled('h3')(({ theme }) => ({
  fontSize: 28,
  color: theme.palette.primary.main,
  textAlign: 'center',
  margin: 0
}));

export const Complete = () => {
  const { t } = useTranslation();
  const { resetForm } = useFormikContext();
  const setStepper = useRecoilState(currentStepSelector)[1];

  const onClickHandler = () => {
    resetForm();
    setStepper(0);
  };
  return (
    <>
      <Box
        sx={{
          px: {
            md: 30
          }
        }}
      >
        <Header>{t('workRequestForm.youSentWorkRequest')}</Header>
        <Typography variant={'body2'} textAlign={'center'}>
          {t('workRequestForm.afterSentWorkMessage')}
        </Typography>
      </Box>

      <Box
        className='container white center'
        sx={{
          '& svg': {
            width: '200px',
            height: 'auto'
          }
        }}
      >
        <div className='container buttons'>
          <svg className='checkmark' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 52 52'>
            <circle className='checkmark__circle' cx='26' cy='26' r='25' fill='none' />
            <path className='checkmark__check' fill='none' d='M14.1 27.2l7.1 7.2 16.7-16.8' />
          </svg>
        </div>
        <Button
          sx={{ margin: '0 auto', display: 'flex', mt: 2 }}
          onClick={onClickHandler}
          variant={'contained'}
        >
          {t('createNewRequest')}
        </Button>
      </Box>
    </>
  );
};
