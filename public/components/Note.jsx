import React, { PropTypes } from 'react';

const Note = ({ text, tags }) => (
  <div className="note">
    <p className="note__text">
      {text}
    </p>
    <ul className="note__tags">
      {tags.map((tag) => <li className="note__tag" key={tag.id}>{tag.name}</li>)}
    </ul>
  </div>
);

Note.propTypes = {
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
};

export default Note;
