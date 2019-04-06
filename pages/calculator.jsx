import React, { Component } from 'react';
import '../style/calculator.scss';
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
  <div className='calculator-body'>
    <Typography variant='h2'>Learn how much you'll pay</Typography>
    <Grid container spacing={16}>
      <Grid item xs={6}>
        <Field placeholder='Drop at' value={value.form}/>
      </Grid>
      <Grid item xs={6}>
        <Field placeholder='Recover at' value={value.to}/>
      </Grid>
      <Grid item xs={6}>
        <Field placeholder='Current %' value={value.current}/>
      </Grid>
      <Grid item xs={6}>
        <Field placeholder='Capacity' value={value.capacity}/>
      </Grid>
    </Grid>
  </div>
);

class Calculator extends Component {
  render() {
    return (
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
    );
  }
}

export default Calculator;
