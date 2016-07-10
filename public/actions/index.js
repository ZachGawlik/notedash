const apiRoot = 'http://localhost:8000/api';

import { arrayOf, normalize } from 'normalizr';
import noteSchema from '../schemas/note';

function receiveNotes(noteEntities, noteIds) {
  return {
    type: 'RECEIVE_NOTES',
    noteEntities,
    noteIds
  };
}

export function fetchNotes() {
  return (dispatch) => {
    fetch(`${apiRoot}/notes`)
      .then(response => response.json())
      .then(notes => {
        const normalized = normalize(notes, arrayOf(noteSchema));
        dispatch(receiveNotes(normalized.entities.notes, normalized.result));
      });
  };
}
