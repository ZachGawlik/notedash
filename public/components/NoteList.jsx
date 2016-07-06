import React, { PropTypes } from 'react';

import Note from './Note';

const NoteList = ({ notes }) => (
  <div className="note-list">
    <input className="note-list__input" type="text" placeholder="Type Note or #Search" />
    {notes.map((note) => <Note text={note.text} tags={note.tags} key={note.id} />)}
  </div>
);

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    tags: PropTypes.array
  }))
};

export default NoteList;
