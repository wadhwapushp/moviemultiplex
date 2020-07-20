import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux'
import {LIST_MULTIPLEX , ADD_MULTIPLEX ,EDIT_MULTIPLEX,DELETE_MULTIPLEX,SEARCH_MULTIPLEX } from '../actions'
import Addmultiplexdata from '../dataapi/multiplex/Addmultiplexdata'
import MultiplexListdata from '../dataapi/multiplex/MultiplexListdata'
import Editmultiplexdata from '../dataapi/multiplex/Editmultiplexdata'
import Deletemultiplexdata from '../dataapi/multiplex/Deletemultiplexdata'
import Searchmultiplexdata from '../dataapi/multiplex/Searchmultiplexdata'


const initialMultiplexState = {
  rows : [{
  name :'', category : '', producer :'', director :'', releaseDate :''
}]
};

export default function MultiplexReducer(state=initialMultiplexState ,action){
  
  switch(action.type){
      case "ADD_MULTIPLEX":
          state =Addmultiplexdata();
          break;
      case "LIST_MULTIPLEX":
        state =MultiplexListdata();
        console.log('MovieListReducer =' + " | " + state.rows[1].name )
        break;
      case "EDIT_MULTIPLEX":
        state =Editmultiplexdata();
        break;
      case "DELETE_MULTIPLEX":
        state =Deletemultiplexdata();
        break;
      case "SEARCH_MULTIPLEX":
        state =Searchmultiplexdata();
        break;        
      default:
        return state;
  } 
  return { ...state};
} combineReducers({names:MultiplexReducer});


// let reducers = combineReducers({names:listMovieReducer});
// export default reducers;  