import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';

export default createMuiTheme({
  palette: {
    primary: green,
    secondary: amber,
  },
  typography: {
    h2: {
      fontFamily: 'Montserrat',
      fontSize: '1.8rem',
      fontWeight: 500,
    },
  },
});
