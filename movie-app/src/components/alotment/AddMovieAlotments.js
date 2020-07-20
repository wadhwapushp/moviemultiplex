import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const useSelectStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function AddMovieAlotments() {
  const handleLogin = () => {
    alert("Login form example using MATERIAL UI");
  };
  
  const selectclasses = useSelectStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
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
      <b>Movie Alotments to  Multiplex</b></Typography>
    <form onSubmit="{this.handleLogin}">
    <FormControl className={selectclasses.formControl}>
        <InputLabel htmlFor="age-native-helper">Movie</InputLabel>
        <NativeSelect
          value={state.movieId}
          onChange={handleChange}
          inputProps={{
            name: 'movieId',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Please Select Movie</FormHelperText>
      </FormControl>
      <FormControl className={selectclasses.formControl}>
        <InputLabel htmlFor="age-native-helper">Multiplex</InputLabel>
        <NativeSelect
          value={state.multiplexId}
          onChange={handleChange}
          inputProps={{
            name: 'multiplexId',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Please Select Multiplex</FormHelperText>
      </FormControl>
      <FormControl className={selectclasses.formControl}>
        <InputLabel htmlFor="age-native-helper">Screen Number</InputLabel>
        <NativeSelect
          value={state.screenNumber}
          onChange={handleChange}
          inputProps={{
            name: 'screenNumber',
            id: 'age-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Ten</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
        <FormHelperText>Please Select Screen Number</FormHelperText>
      </FormControl>
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