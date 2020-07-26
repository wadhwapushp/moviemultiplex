import React from 'react';
import API from '../multiplexapi'

export default function MultiplexListdata() {
    //TODO 
    console.log("Inside MultiplexListdata()") ;
    //return {"mxrows" : {"multiplex" :rows} };
      return (dispatch) => {     
      API.get('multiplex').then((res)=>{
        console.log(res.config);
       let transformdata=   {"mxrows" : {"multiplex" :res.data} } ;
       console.log(transformdata.mxrows.multiplex[0].name) ;
       dispatch({ type: 'UPDATE_DATA' , payload : transformdata });
       })
     };

  }

    // const rows = [{'id' :'M1', 'multiplexName' :'PVR Cinemas', 'address' :'Vashi,Navi Mumbai',  'numberOfScreens' :'5'}
    // , {'id' :'M2', 'multiplexName' :'INOX', 'address' :'Mulund,Mumbai',  'numberOfScreens' :'3'},
    // {'id' :'M3', 'multiplexName' :'Cinepolis', 'address' :'Dadar,Mumbai',  'numberOfScreens' :'7'}
    // , {'id' :'M4', 'multiplexName' :'SRS Cinemas.', 'address' :'Aroli,Mumbai',  'numberOfScreens' :'2'}
    // ]