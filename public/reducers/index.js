import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function notes(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_NOTES': {
      return action.notes;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  notes,
  routing: routerReducer
});

export default rootReducer;
