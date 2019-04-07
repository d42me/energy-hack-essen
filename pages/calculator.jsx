import React, { Component } from 'react';
import '../style/calculator.scss';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import ChevronRight from '@material-ui/icons/ChevronRight';
import CircularProgress from '@material-ui/core/CircularProgress';
import Theme from '../style/Theme';
import Map from '../components/calculator/Map';

const Field = props => (
  <TextField
    {...props}
    InputProps={{
      classes: {
        root: 'calculator__input',
      },
    }}
    variant="outlined"
    fullWidth
  />
);

const CalculatorToolbar = ({ id }) => (
  <div className="calculator__toolbar">
    <div className="calculator__toolbar__icon">
      <img src="../static/images/pin.png" />
    </div>
    <Typography variant="h3">{id}</Typography>
  </div>
);

const CalculatorPlaceholder = () => (
  <div className="calculator__placeholder">
    <img src="https://firebasestorage.googleapis.com/v0/b/evseed-304d3.appspot.com/o/landing%2Fpick.png?alt=media&token=bad1f71e-03de-4984-96a8-673d530c8a41" />
    <Typography variant="h2">Select your charger</Typography>
    <Typography variant="body2">Select the charger you want to calculate your earnings at</Typography>
  </div>
);

const CalculatorResult = () => (
  <div className="calculator__placeholder">
    <img src="../static/images/coins.png" />
    <Typography variant="h2">You're gonna earn 21 tokens</Typography>
    <Typography variant="body2">Remember to leave by 18:30</Typography>
  </div>
);

const CalculatorComponent = ({ value, loading, onSubmit }) => (
  <div className="calculator__body">
    <Typography variant="h2">Learn how much you'll pay</Typography>
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Typography variant="h5">Your schedule</Typography>
      </Grid>
      <Grid item xs={6}>
        <Field label="Drop at" value={value.form} type="time" />
      </Grid>
      <Grid item xs={6}>
        <Field label="Recover at" value={value.to} type="time" />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Your vehicle</Typography>
      </Grid>
      <Grid item xs={6}>
        <Field label="Current %" value={value.current} type="number" />
      </Grid>
      <Grid item xs={6}>
        <Field label="Capacity" value={value.capacity} type="number" />
      </Grid>
    </Grid>

    <div className="calculator__footer">
      <Fab variant="extended" color="primary" onClick={onSubmit}>
        {loading ? "Loading" : "Get estimate"}
        {loading ? <CircularProgress color="secondary" className="calculator__loader"/> : <ChevronRight />}
      </Fab>
    </div>
  </div>
);

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      ready: false,
      selectedCharger: null,
    };
  }

  handleSubmit = () => {
    this.setState({loading: true});

    setTimeout(
      function() {
        this.setState({loading: false, ready: true});
      }
      .bind(this),
      4500
    );
  }

  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <div className="map">
          <Map
            focusPoint={this.state.selectedCharger}
            onMarkerClick={data => () => this.setState({
              selectedCharger: data,
            })}
          />
        </div>
        <Grid container className="calc">
          <Grid item xs={12} lg={8} />
          <Grid item xs={12} lg={4}>
            <div className="sidebar">
              <Paper
                className="calculator"
                elevation={5}
              >
                {this.state.selectedCharger && !this.state.ready ? ([
                  <CalculatorToolbar
                    id={this.state.selectedCharger.id} 
                  />,
                  <CalculatorComponent
                    loading={this.state.loading}
                    value={{}} 
                    onSubmit={this.handleSubmit}
                  />,
                ]) : !this.state.ready ? <CalculatorPlaceholder /> : null}
                {this.state.ready ? (
                  <CalculatorResult />
                ) : null}
              </Paper>
            </div>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default Calculator;
