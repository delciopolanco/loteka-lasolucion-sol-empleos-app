import { Button, FeatureWrapper, Input, Page, Select } from '@components';
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  experimentalStyled,
  FormControl,
  Typography
} from '@mui/material';
import { Formik } from 'formik';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Content = experimentalStyled(CardContent)({
  display: 'grid',
  gridGap: '1.rem',
  gap: '1rem',
  gridTemplateColumns: '1fr'
});

const Roles = [
  {
    value: '1',
    label: 'Administrador'
  },
  {
    value: '1',
    label: 'Editor'
  }
];

type PropsCreateUser = {};

export const CreateUser: FC<PropsCreateUser> = () => {
  const { t } = useTranslation();

  const onSubmit = () => {
    console.log('');
  };

  return (
    <Formik initialValues={{}} onSubmit={onSubmit}>
      {({ handleBlur }) => {
        return (
          <Page maxWidth={'md'} backText={t('users')}>
            <FeatureWrapper>
              <CardHeader
                title={
                  <Typography color={'textPrimary'} variant={'h4'}>
                    {t('createNewUser')}
                  </Typography>
                }
              />
              <Divider />

              <Content>
                <Typography variant={'h6'}>{t('generalData')}</Typography>
                <FormControl>
                  <Input name='fullName' label={'Nombre Completo'} fullWidth onBlur={handleBlur} />
                </FormControl>
                <FormControl>
                  <Input name='title' label={'Cargo ocupante'} fullWidth onBlur={handleBlur} />
                </FormControl>
                <Divider
                  variant={'middle'}
                  sx={{ maxWidth: '454px', width: '100%', margin: '2rem auto' }}
                />
                <Typography variant={'h6'}>{t('sesionData')}</Typography>
                <FormControl>
                  <Input
                    name='username'
                    label={'Nombre de usuario'}
                    fullWidth
                    onBlur={handleBlur}
                  />
                </FormControl>
                <FormControl>
                  <Select items={Roles} name='rol' label={'Rol'} fullWidth onBlur={handleBlur} />
                </FormControl>
                <FormControl>
                  <Input name='Cargo' label={'Nombre Completo'} fullWidth onBlur={handleBlur} />
                </FormControl>

                <Divider />
              </Content>

              <Box
                sx={{
                  padding: '30px 15px',
                  justifyContent: 'end',
                  display: 'grid',
                  gridGap: '1rem',
                  gridTemplateColumns: '140px 140px',
                  gridColumnStart: 1,
                  gridColumnEnd: 'span 3'
                }}
              >
                <Button name={'cancel'} variant={'outlined'}>
                  {'Cancelar'}
                </Button>
                <Button name={'save'} color={'primary'} variant={'contained'}>
                  {'Guargar'}
                </Button>
              </Box>
            </FeatureWrapper>
          </Page>
        );
      }}
    </Formik>
  );
};
