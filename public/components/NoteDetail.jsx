import React, { PropTypes } from 'react';
import Note from './Note';

class NoteDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', tags: [] };
  }

  componentWillMount() {
    fetch(`http://localhost:8000/api/notes/${this.props.params.noteId}`)
      .then(response => response.json())
      .then(note => this.setState({ text: note.text, tags: note.tags }));
  }

  render() {
    return <Note text={this.state.text} tags={this.state.tags} />;
  }
}

NoteDetail.propTypes = {
  params: PropTypes.shape({
    noteId: PropTypes.string.isRequired
  })
};

export default NoteDetail;
