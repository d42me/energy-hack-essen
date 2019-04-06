import React, { Component } from 'react';
import Theme from '../style/Theme';
import '../style/calculator.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

const Field = (props) => (
  <TextField
    {...props}
    variant='outlined'
    fullWidth
    />
)

const CalculatorPlaceholder = () => (
  <div className='calculator-placeholder'>
    <Typography variant='h2'>Select your charger</Typography>
    <Typography variant='body2'>Select the charger you want to calculate your earnings at</Typography>
  </div>
);

const CalculatorComponent = ({ value }) => (
  <div className='calculator__body'>
    <Typography variant='h2'>Learn how much you'll pay</Typography>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <Field label='Drop at' value={value.form}/>
      </Grid>
      <Grid item xs={6}>
        <Field label='Recover at' value={value.to}/>
      </Grid>
      <Grid item xs={6}>
        <Field label='Current %' value={value.current}/>
      </Grid>
      <Grid item xs={6}>
        <Field label='Capacity' value={value.capacity}/>
      </Grid>
    </Grid>
  </div>
);

class Calculator extends Component {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <Grid container className='calc'>
          <Grid item xs={12} lg={8}>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className='sidebar'>
              <Paper 
                className='calculator' 
                elevation={5}>
                {/* <CalculatorPlaceholder /> */}
                <CalculatorComponent 
                  value={{}}/>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Calculator;
