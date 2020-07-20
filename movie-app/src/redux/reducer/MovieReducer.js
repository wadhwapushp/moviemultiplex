import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux'
import {LIST_MOVIE , ADD_MOVIE ,EDIT_MOVIE,DELETE_MOVIE,SEARCH_MOVIE } from './../actions'
import getMovieListData from '../dataapi/movie/Movielistdata'
import Addmoviedata from '../dataapi/movie/Addmoviedata'
import Editmoviedata from '../dataapi/movie/Editmoviedata'
import Deletemoviedata from '../dataapi/movie/Deletemoviedata'
import Searchmoviedata from '../dataapi/movie/Searchmoviedata'

const initialState = {
  rows : [{
  name :'', category : '', producer :'', director :'', releaseDate :''
}]
};

export default function MovieReducer(state=initialState ,action){
  
  switch(action.type){
      case "LIST_MOVIE":
       state =getMovieListData();
       console.log('MovieReducer list=' + " | " + state.rows[0].name )
      break;
      case "ADD_MOVIE":
        state =Addmoviedata();
        console.log('MovieReducer  add=' + " | " + state.rows[0].name )
       break;
       case "EDIT_MOVIE":
        state =Editmoviedata();
        console.log('MovieReducer edit=' + " | " + state.rows[0].name )
       break;
       case "DELETE_MOVIE":
        state =Deletemoviedata();
        console.log('MovieReducer  delete=' + " | " + state.rows[0].name )
       break;
       case "SEARCH_MOVIE":
        state =Searchmoviedata();
        console.log('MovieReducer Search =' + " | " + state.rows[0].name )
       break;
  } 
  return { ...state};
} combineReducers( { names:[MovieReducer,initialState]});

// let reducers = combineReducers({names:listMovieReducer});
// export default reducers;  