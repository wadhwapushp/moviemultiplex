import React , { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { useDispatch } from 'react-redux' ;
import {ADD_MOVIE } from './../../redux/actions/index' ;

export default function AddMovie() {
  const [payload, setPayload] = useState(
  { 
    "name" : "" , "category"  : "" ,"producer" : "" , "director" : "" , "releaseDate" : ""
}
  );
  const dispatch = useDispatch() ;

  const handleSubmit = (event, property) => {
    alert("form was submitted: " + payload.name +"  " +payload.category  +payload.producer
    + payload.director +payload.releaseDate
    );
    
    dispatch({ type: 'ADD_MOVIE' , payload : payload })
    event.preventDefault();
  };

  
  return (  <Box alignItems="center"> <Grid 
    container  
    spacing={0}  
    direction="column"  
    alignItems="center"  
    justify="top"  
    style={{ minHeight: '100vh' }}  
    >  
<Typography component="h1" variant="h5">  
<b>Movie Onboading </b></Typography>  
<form onSubmit={handleSubmit} >  
<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Name"
        onChange ={(e) =>payload.name = e.target.value }
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Category"
        onChange ={(e) =>payload.category = e.target.value }
      /> 
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="producer"
        onChange ={(e) =>payload.producer = e.target.value }
      />

    <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="director"
        onChange ={(e) =>payload.director = e.target.value }
      />
     
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="releaseDate"
        onChange ={(e) =>payload.releaseDate = e.target.value }
      //  type="password"  
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