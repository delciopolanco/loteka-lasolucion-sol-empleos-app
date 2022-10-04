import { FC, ReactNode } from 'react';
import { Box, Breadcrumbs, Container, experimentalStyled, Grid, Typography } from '@mui/material';
import { Breadcrumb, BreadcrumbProps } from '@components/breadcrumbs';
import { uniqueId } from 'lodash/fp';
import { Back } from '..';

type PageProps = {
  children?: ReactNode;
  breadCrumbs?: BreadcrumbProps[];
  backText?: string;
  backIcon?: boolean;
  headerText?: string;
  headerActions?: ReactNode[];
};

const PageRoot = experimentalStyled('div')(() => ({
  alignItems: 'center',
  display: 'grid',
  gap: '1rem',
  gridTemplateColumns: '1fr',
  padding: '1.625rem 0.6rem',

  '& + &': {
    marginTop: '1rem'
  }
}));

export const Page: FC<PageProps> = ({
  children,
  breadCrumbs,
  backText,
  backIcon,
  headerText,
  headerActions
}) => {
  return (
    <PageRoot>
      {!!breadCrumbs?.length && (
        <Box sx={{ mb: 2 }}>
          <Breadcrumbs>
            {breadCrumbs.map((b) => {
              if (b.label)
                return <Breadcrumb key={`${uniqueId(b.label)}`} label={b.label} path={b.path} />;
            })}
          </Breadcrumbs>
        </Box>
      )}

      {backText && <Back backText={backText} backIcon={backIcon} />}
      <Container maxWidth={'xl'}>
        {headerText && (
          <Grid container justifyContent={'space-between'} spacing={3}>
            <Grid item>
              <Typography color={'textPrimary'} variant={'h5'}>
                {headerText}
              </Typography>
            </Grid>
            {headerActions && (
              <Grid item>
                <Box sx={{ m: -1 }}>{headerActions}</Box>
              </Grid>
            )}
          </Grid>
        )}
        <Box sx={{ mt: 3 }}>{children}</Box>
      </Container>
    </PageRoot>
  );
};
