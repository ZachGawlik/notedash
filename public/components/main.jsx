import React from 'react';

import NoteList from './NoteList';

const exampleNotes = [
  { id: 1, text: 'artists to check out: Kiah Victoria, Mirah', tags: ['music', 'todo'] },
  { id: 2, text: 'return library book', tags: ['todo'] },
  { id: 3, text: 'wifi password: qwerty12345', tags: ['reference'] },
  { id: 4, text: 'note with a lot of tags',
    tags: ['school', 'coding', 'important', 'reminder', 'cs'] },
];

const Main = () => (
  <div>
    <h1 className="title">Notedash</h1>
    <NoteList notes={exampleNotes} />
  </div>
);

export default Main;
