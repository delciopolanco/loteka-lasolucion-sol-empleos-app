import Loteka from '@images/loteka.png';
import { experimentalStyled, SxProps, Theme } from '@mui/material';
import { FC } from 'react';

type LogoProps = {
  sx?: SxProps<Theme>;
};

const LogoRoot = experimentalStyled('div')(() => ({
  width: '100%',
  height: '100%',
  '& img': {
    maxWidth: '80%',
    height: 'auto',
    padding: '0',
    margin: '0'
  }
}));

export const Logo: FC<LogoProps> = ({ sx }) => {
  return (
    <LogoRoot sx={sx}>
      <img src={Loteka} alt={'logo'} />
    </LogoRoot>
  );
};
