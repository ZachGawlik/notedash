import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';

import 'normalize.css/normalize.css';
import './styles/base.scss';

import Main from './components/Main';
import NoteListWrapper from './components/NoteList';
import NoteDetail from './components/NoteDetail';

import 'whatwg-fetch';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={NoteListWrapper} />
      <Route path="/notes/:noteId" component={NoteDetail} />
      {/* Redirect all invalid URLs to home view */}
      <Redirect from="*" to="/" />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('app'));
