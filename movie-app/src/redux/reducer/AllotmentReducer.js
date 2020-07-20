import React, { useState, useEffect } from 'react';
import { combineReducers } from 'redux'
import {LIST_ALLOTED , ALLOT_MOVIE ,EDIT_ALLOTED,DELETE_ALLOTED,SEARCH_ALLOTED } from '../actions'
import Alltmentlstdata from '../dataapi/allotment/Alltmentlstdata' ;
import Allotmoviedata from '../dataapi/allotment/Allotmoviedata' ;
import Editallotmentdata from '../dataapi/allotment/Editallotmentdata' ;
import Deleteallotmentdata from '../dataapi/allotment/Deleteallotmentdata' ;
import Searchallotmentdata from '../dataapi/allotment/Searchallotmentdata' ;

const initialAllotmentState = {
  rows : [{
  name :'', category : '', producer :'', director :'', releaseDate :''
}]
};

export default function AllotmentReducer(state=initialAllotmentState ,action){
  
  switch(action.type){
      case "ALLOT_MOVIE":
          state =Allotmoviedata();
          break;
      case "LIST_ALLOTED":
        state =Alltmentlstdata();
        console.log('AllotmentReducer =' + " | " + state.rows[0].name )
        break;
      case "EDIT_ALLOTED":
        state =Editallotmentdata();
        break;
      case "DELETE_ALLOTED":
        state =Deleteallotmentdata();
        break;
      case "SEARCH_ALLOTED":
        state =Searchallotmentdata();
        break;        
      default:
        return state;
  } 
  return { ...state};
} //combineReducers({names:AllotmentReducer});


// let reducers = combineReducers({names:listMovieReducer});
// export default reducers;  