import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux'
import { useDispatch } from 'react-redux' ;

//Movies
import { LIST_MOVIE, ADD_MOVIE, EDIT_MOVIE, DELETE_MOVIE, SEARCH_MOVIE } from './../actions'
import GetMovieList from '../dataapi/movie/Movielistdata'
import Addmoviedata from '../dataapi/movie/Addmoviedata'
import Editmoviedata from '../dataapi/movie/Editmoviedata'
import Deletemoviedata from '../dataapi/movie/Deletemoviedata'
import Searchmoviedata from '../dataapi/movie/Searchmoviedata'

// Multiplex
import { LIST_MULTIPLEX, ADD_MULTIPLEX, EDIT_MULTIPLEX, DELETE_MULTIPLEX, SEARCH_MULTIPLEX } from '../actions'
import Addmultiplexdata from '../dataapi/multiplex/Addmultiplexdata'
import MultiplexListdata from '../dataapi/multiplex/MultiplexListdata'
import Editmultiplexdata from '../dataapi/multiplex/Editmultiplexdata'
import Deletemultiplexdata from '../dataapi/multiplex/Deletemultiplexdata'
import Searchmultiplexdata from '../dataapi/multiplex/Searchmultiplexdata'

// Allotment
import { LIST_ALLOTED, ALLOT_MOVIE, EDIT_ALLOTED, DELETE_ALLOTED, SEARCH_ALLOTED } from '../actions'
import Alltmentlstdata from '../dataapi/allotment/Alltmentlstdata';
import Allotmoviedata from '../dataapi/allotment/Allotmoviedata';
import Editallotmentdata from '../dataapi/allotment/Editallotmentdata';
import Deleteallotmentdata from '../dataapi/allotment/Deleteallotmentdata';
import Searchallotmentdata from '../dataapi/allotment/Searchallotmentdata';


export default function MovieReducer(state = [], action) {
  console.log("action.type=" +action.type)
 // const dispatch = useDispatch() ;

  switch (action.type) {

    case "UPDATE_DATA" :
      console.log(action.payload) ;
    state=action.payload;
    break;

    case "LIST_MOVIE":
     // state = 
     //  GetMovieList();
    //   const promise = GetMovieList() ;
    //  promise.then((response)=>{
    // // console.log(response.rows.movies[0].name) ;
    // // dispatch({ type: 'UPDATE_DATA' , payload : response });
    // // state = response.rows.movies[0].name;
    //  } )

   //console.log(promise) ;
    
      console.log('MovieReducer list=' + " | " )
     // console.log(state);

     // console.log('MovieReducer list=' + " | " + state.rows.movies[0].name)
      break;
    case "ADD_MOVIE":
      state.status = Addmoviedata(action.payload);
      break;
    case "EDIT_MOVIE":
      state = Editmoviedata();
      console.log('MovieReducer edit=' + " | " + state.rows.movies[0].name)
      break;
    case "DELETE_MOVIE":
      state = Deletemoviedata();
      console.log('MovieReducer  delete=' + " | " + state.rows.movies[0].name)
      break;
    case "SEARCH_MOVIE":
      state = Searchmoviedata();
      console.log('MovieReducer Search =' + " | " + state.rows.movies[0].name)
      break;
    case "LIST_ALLOTED":
      state = Alltmentlstdata();
      console.log('AllotmentReducer =' + " | " + state.rows.alotments[0].movieId)
      break;
    case "ADD_MULTIPLEX":
      state = Addmultiplexdata(action.payload);
      break;
    case "LIST_MULTIPLEX":
      state = MultiplexListdata();
      //        console.log('MultiplexReducer =' + " | " + state.rows.multiplex[0].multiplexName )
      break;
    case "EDIT_MULTIPLEX":
      state = Editmultiplexdata();
      break;
    case "DELETE_MULTIPLEX":
      state = Deletemultiplexdata();
      break;
    case "SEARCH_MULTIPLEX":
      state = Searchmultiplexdata();
      break;
    case "ALLOT_MOVIE":
      state = Allotmoviedata();
      break;
    case "LIST_ALLOTED":
      state = Alltmentlstdata();
      console.log('AllotmentReducer =' + " | " + state.rows.alotments[0].movieId)
      break;
    case "EDIT_ALLOTED":
      state = Editallotmentdata();
      break;
    case "DELETE_ALLOTED":
      state = Deleteallotmentdata();
      break;
    case "SEARCH_ALLOTED":
      state = Searchallotmentdata();
      break;     


  }
  //initialState = { ...state};
  return { ...state };
} combineReducers({ names: MovieReducer });


export function MultiplexReducer(state = [], action) {

  switch (action.type) {
    case "ADD_MULTIPLEX":
      state = Addmultiplexdata();
      break;
    case "LIST_MULTIPLEX":
      state = MultiplexListdata();
      //        console.log('MultiplexReducer =' + " | " + state.rows.multiplex[0].multiplexName )
      break;
    case "EDIT_MULTIPLEX":
      state = Editmultiplexdata();
      break;
    case "DELETE_MULTIPLEX":
      state = Deletemultiplexdata();
      break;
    case "SEARCH_MULTIPLEX":
      state = Searchmultiplexdata();
      break;
    default:
      return state;
  }
  return { ...state };
} combineReducers({ names: MultiplexReducer });

const initialAllotmentState = {
  rows: [{
    name: '', category: '', producer: '', director: '', releaseDate: ''
  }]
};

export function AllotmentReducer(state = initialAllotmentState, action) {

  switch (action.type) {
    case "ALLOT_MOVIE":
      state = Allotmoviedata();
      break;
    case "LIST_ALLOTED":
      state = Alltmentlstdata();
      console.log('AllotmentReducer =' + " | " + state.rows.alotments[0].movieId)
      break;
    case "EDIT_ALLOTED":
      state = Editallotmentdata();
      break;
    case "DELETE_ALLOTED":
      state = Deleteallotmentdata();
      break;
    case "SEARCH_ALLOTED":
      state = Searchallotmentdata();
      break;
    default:
      return state;
  }
  return { ...state };
} combineReducers({ names: AllotmentReducer });

const rootReducer = combineReducers({ MovieReducer, MultiplexReducer, AllotmentReducer });
//  const rootReducer = combineReducers({MovieReducer});
 // export default rootReducer;  