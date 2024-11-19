// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Jost, sans-serif',
  },
  palette: {
    primary: {
      main: '#32CD32',
    },
    background: {
      default: '#121212',
    },
  },
});

export default theme;
