import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import store, { history } from './store';
import { Provider } from 'react-redux';

import 'normalize.css/normalize.css';
import './styles/base.scss';

import Main from './components/Main';
import NoteListContainer from './containers/NoteListContainer';
import NoteDetail from './components/NoteDetail';

import 'whatwg-fetch';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={NoteListContainer} />
        <Route path="/notes/:noteId" component={NoteDetail} />
        {/* Redirect all invalid URLs to home view */}
        <Redirect from="*" to="/" />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(router, document.getElementById('app'));
