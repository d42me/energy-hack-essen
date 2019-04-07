import React, { Component } from 'react';
import Theme from '../style/Theme';
import '../style/calculator.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Map from '../components/calculator/Map';

const Field = (props) => (
  <TextField
    {...props}
    InputProps={{
      classes: {
        root: 'calculator__input'
      }
    }}
    variant='outlined'
    fullWidth
    />
)

const CalculatorToolbar = ({ id }) => (
  <div className='calculator__toolbar'>
    <div className='calculator__toolbar__icon'>
      <img src={'../static/images/pin.png'} />
    </div>
    <Typography variant='h3'>{id}</Typography>
  </div>
);

const CalculatorPlaceholder = () => (
  <div className='calculator__placeholder'>
    <img src='https://firebasestorage.googleapis.com/v0/b/evseed-304d3.appspot.com/o/landing%2Fpick.png?alt=media&token=bad1f71e-03de-4984-96a8-673d530c8a41' />
    <Typography variant='h2'>Select your charger</Typography>
    <Typography variant='body2'>Select the charger you want to calculate your earnings at</Typography>
  </div>
);

const CalculatorComponent = ({ value }) => (
  <div className='calculator__body'>
    <Typography variant='h2'>Learn how much you'll pay</Typography>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant='h5'>Your schedule</Typography>
      </Grid>
      <Grid item xs={6}>
        <Field label='Drop at' value={value.form} type='time'/>
      </Grid>
      <Grid item xs={6}>
        <Field label='Recover at' value={value.to} type='time'/>
      </Grid>
      <Grid item xs={12}>
        <Typography variant='h5'>Your vehicle</Typography>
      </Grid>
      <Grid item xs={6}>
        <Field label='Current %' value={value.current} type='number'/>
      </Grid>
      <Grid item xs={6}>
        <Field label='Capacity' value={value.capacity} type='number'/>
      </Grid>
    </Grid>

    <div className='calculator__footer'>
      <Fab variant="extended" color='primary'>
        Get estimate
        <ChevronRight />
      </Fab>
    </div>
  </div>
);

class Calculator extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedCharger: null,
    }
  }

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <div className='map'>
          <Map
            focusPoint={this.state.selectedCharger}
            onMarkerClick={(data) => () => this.setState({
              selectedCharger: data,
            })}/>
        </div>
        <Grid container className='calc'>
          <Grid item xs={12} lg={8}>
          </Grid>
          <Grid item xs={12} lg={4}>
            <div className='sidebar'>
              <Paper 
                className='calculator' 
                elevation={5}>
                {this.state.selectedCharger ? ([
                  <CalculatorToolbar 
                    id={this.state.selectedCharger.id}/>,
                  <CalculatorComponent 
                    value={{}}/>
                ]) : <CalculatorPlaceholder />}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Calculator;
