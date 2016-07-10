import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function notes(state = {
  noteEntities: {},
  noteIds: []
}, action) {
  switch (action.type) {
    case 'RECEIVE_NOTES': {
      const { noteEntities, noteIds } = action;
      return { ...state, noteEntities, noteIds };
    }
    default:
      return state;
  }
}


export function getNotes(state) {
  return state.notes.noteIds.map((noteId) => state.notes.noteEntities[noteId]);
}


const rootReducer = combineReducers({
  notes,
  routing: routerReducer
});

export default rootReducer;
