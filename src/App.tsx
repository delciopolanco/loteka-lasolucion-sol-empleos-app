import { ThemeProvider } from '@mui/material';
import { createCustomTheme, THEMES } from '@shared';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

export const App = (): JSX.Element => {
  const appRoutes = useRoutes(routes);
  const theme = createCustomTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    roundedCorners: true,
    theme: THEMES.LIGHT
  });

  return <ThemeProvider theme={theme}>{appRoutes}</ThemeProvider>;
};
