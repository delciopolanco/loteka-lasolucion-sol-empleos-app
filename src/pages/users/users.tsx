import { Grid } from '@mui/material';
import { FC } from 'react';
import { Button, Page } from '@components';
import { useTranslation } from 'react-i18next';
import { UserList } from './features/userList';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@shared/constants';

type PropsUsers = {};

export const Users: FC<PropsUsers> = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Page
      headerText={t('users')}
      headerActions={
        <Button
          sx={{ margin: '0 auto', display: 'flex', mt: 2 }}
          onClick={() => navigate(PATHS.usersCreate())}
          variant={'contained'}
        >
          {t('createNewUser')}
        </Button>
      }
    >
      <Grid container flexDirection={'column'} gap={1}>
        <Grid item md={12}>
          <UserList />
        </Grid>
      </Grid>
    </Page>
  );
};
