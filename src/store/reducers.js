import {combineReducers} from 'redux'
import cargaStaffReducer from './cargaStaff/reducer'
import otherReducer from './otherReducer'

/*const combineReducer = reducer => {
  return (state = {}, action) => {
    let nextReducers = {}
    Object.keys(reducer).map(key => {
      nextReducers[key] = reducer[key](state, action)
    })
    console.log('combineReducers', nextReducers)
    return nextReducers;
  };
}; */

const reducers = {
  cargaStaffReducer,
  otherReducer
}

/* const combineReducer = reducers => {
  const reducerKeys = Object.keys(reducers);
console.log('reducerKeys',reducers);

  return (state = {}, action)=> {

    let nextState = state;

    for (let i = 0; i < reducerKeys.length; i++) {
      const key = reducerKeys[i];
      const reducer = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState = { ...nextState, [key]: nextStateForKey };
    }
    console.log('NextState',nextState)
    return nextState;
  };
}; */



export default combineReducers(reducers)