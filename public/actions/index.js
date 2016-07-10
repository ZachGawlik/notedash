const apiRoot = 'http://localhost:8000/api';

export function receiveNotes(notes) {
  return {
    type: 'RECEIVE_NOTES',
    notes
  };
}

export function fetchNotes() {
  return (dispatch) => {
    fetch(`${apiRoot}/notes`)
      .then(response => response.json())
      .then(notes => dispatch(receiveNotes(notes)));
  };
}
