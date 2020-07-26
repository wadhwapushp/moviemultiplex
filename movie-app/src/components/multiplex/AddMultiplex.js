import React , { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux' ;
import {ADD_MULTIPLEX } from './../../redux/actions/index' ;

export default function AddMultiplex() {

  const [payload, setPayload] = useState(
    { 
      "name" : "" , "category"  : "" ,"producer" : "" , "director" : "" , "releaseDate" : ""
    }
    );
    const dispatch = useDispatch() ;
    const handleSubmit = (event, property) => {
      alert("form was submitted: " + payload.multiplexName +"  " +payload.address  + payload.numberOfScreens );
      dispatch({ type: 'ADD_MULTIPLEX' , payload : payload })
      event.preventDefault();
    };

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
    <form onSubmit={handleSubmit}>
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="MultiplexName"
        onChange ={(e) =>payload.multiplexName = e.target.value }
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Address"
        onChange ={(e) =>payload.address = e.target.value }
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Number Of Screens"
        onChange ={(e) =>payload.numberOfScreens = e.target.value }
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