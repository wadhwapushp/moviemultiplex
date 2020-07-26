import React from 'react';
import API from '../api'

export default function GetMovieList() {
   // let respData ={"rows" : {"movies" :rows} };
    return (dispatch) => {     
       API.get('movie/all').then((res)=>{
        let transformdata=   {"rows" : {"movies" :res.data} } ;
        console.log(transformdata.rows.movies[0].name) ;
        dispatch({ type: 'UPDATE_DATA' , payload : transformdata });
        })
      };
  } 


// function createData(name, category, producer, director, releaseDate) {
//     return { name, category, producer, director, releaseDate};
//   }
//   const rows = [
//     createData('3 Idiots', 'Comedy', 'Vidhu Vinod Chopra', 'Rajkumar Hirani', '25 December 2009 (India)'),
//     createData('Golmaal Again', 'Fantasy', 'Rohit Shetty & Sangeeta Ahir', 'Rohit Shetty', '20 October 2017'),
//     createData('Bajirao Mastani', 'Romance','Sanjay Leela Bhansali & Kishore Lulla', 'Sanjay Leela Bhansali',  '18 December 2015'),
//   ];