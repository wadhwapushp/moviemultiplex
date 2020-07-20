import React from 'react';


function createData(name, category, producer, director, releaseDate) {
    return { name, category, producer, director, releaseDate};
  }
  const rows = [
    createData('3 Idiots', 'Comedy', 'Vidhu Vinod Chopra', 'Rajkumar Hirani', '25 December 2009 (India)'),
    createData('Golmaal Again', 'Fantasy', 'Rohit Shetty & Sangeeta Ahir', 'Rohit Shetty', '20 October 2017'),
    createData('Bajirao Mastani', 'Romance','Sanjay Leela Bhansali & Kishore Lulla', 'Sanjay Leela Bhansali',  '18 December 2015'),
  ];

  export default function getMovieList() {
    console.log("Inside getMovieList()") ;
    return {"rows" : {"movies" :rows} };
  }
  