import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const handleLogin = () => {
  alert("Login form example using MATERIAL UI");
};

export default function AddMultiplex() {
  return (<Box alignItems="center"> <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="top"
    style={{ minHeight: '100vh' }}
  >
    <Typography component="h1" variant="h5">
      <b>Multiplex Onboading </b></Typography>
    <form onSubmit="{this.handleLogin}">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="MultiplexName"
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Address"
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Number Of Screens"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
      >
        Submit </Button>
    </form>
  </Grid>
  </Box>
  );
}