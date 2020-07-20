import React from 'react';

const rows = [{'id' :'M1', 'multiplexName' :'PVR Cinemas', 'address' :'Vashi,Navi Mumbai',  'numberOfScreens' :'5'}
, {'id' :'M2', 'multiplexName' :'INOX', 'address' :'Mulund,Mumbai',  'numberOfScreens' :'3'},
{'id' :'M3', 'multiplexName' :'Cinepolis', 'address' :'Dadar,Mumbai',  'numberOfScreens' :'7'}
, {'id' :'M4', 'multiplexName' :'SRS Cinemas.', 'address' :'Aroli,Mumbai',  'numberOfScreens' :'2'}
]

export default function MultiplexListdata() {
    //TODO 
    console.log("Inside MultiplexListdata()") ;

    return {"mxrows" : {"multiplex" :rows} };
  }
