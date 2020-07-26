import React from 'react';
import API from '../multiplexapi'


export default function Addmultiplexdata(data) {
    console.log(" Addmultiplexdata() Called");
    API.post('multiplex' , data ).then((res)=>{
          console.log(res.data);
           return "success"
      })
 }