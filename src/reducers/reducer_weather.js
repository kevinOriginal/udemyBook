import { FETCH_WEATHER } from '../actions/index';

//action.payload.data

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}

/*
 export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER :
      console.log('Action recieved');
      return [action.payload.data, ...state ];
  }
  return state;
}

*/

//we only update state by calling setState
//so we don't mutate our state, we return a completely new instance of state.

//return state.concat([ action.payload.data ]); it can be written like this also, the syntax below is a new es6 syntax

// [city, city, city], not [city, [city]]
