import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';




export default function AddMovie() {
  const handleLogin = () => {
    alert("Login form example using MATERIAL UI");
    console.log("inside handleLogin function")
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
<form onSubmit="this.handleLogin">  
<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Name"
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Category"
      /> 
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="producer"
      />
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="director"
      />

      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="releaseDate"
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