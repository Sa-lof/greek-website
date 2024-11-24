// theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: 0,
          padding: 0,
          overflowX: "hidden", // Evita el deslizamiento horizontal
          width: "100%",
        },
      },
    },
  },
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
