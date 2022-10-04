import { Link, Box } from '@mui/material';
import { FC } from 'react';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

type BackProps = {
  backText: string;
  backIcon?: boolean;
};

export const Back: FC<BackProps> = ({ backText, backIcon }) => {
  return (
    <Link
      color={'primary'}
      underline={'none'}
      component={'a'}
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', fontWeight: 600 }}
    >
      {backIcon && <ArrowBackIosNewOutlinedIcon fontSize={'small'} />}
      <Box ml={2}>{backText}</Box>
    </Link>
  );
};
