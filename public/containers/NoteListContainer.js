import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';

import NoteList from '../components/NoteList';

const mapStateToProps = (state) => ({
  notes: state.notes
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchNotes
}, dispatch);

const NoteListContainer = connect(mapStateToProps, mapDispatchToProps)(NoteList);

export default NoteListContainer
