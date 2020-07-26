import React from 'react';
import API from '../api'

export default function Addmoviedata(data) {
    //TODO 
    console.log(" Addmoviedata() Called");
    console.log(data) ;
    API.post('movie' , data ).then((res)=>{
          console.log(res.data);
           return "success"
      })
   
  }
