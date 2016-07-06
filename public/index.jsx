import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import 'normalize.css/normalize.css';
import './styles/base.scss';

import Main from './components/Main';
import NoteListWrapper from './components/NoteList';

import 'whatwg-fetch';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={NoteListWrapper} />
    </Route>
  </Router>
)

ReactDOM.render(router, document.getElementById('app'));
