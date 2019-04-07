import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#38c5a0',
      contrastText: '#ffffff',
    },
    secondary: amber,
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '1.8rem',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat',
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '1rem',
      fontWeight: 700,
    },
  },
});
