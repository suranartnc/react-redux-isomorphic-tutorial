import React from 'react'
import { Route, IndexRoute } from 'react-router'

import {
  App,
  HomePage,
  EntryPage
} from './containers'

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store, history) {
  return (
    <Route path='/' component={App}>
      <IndexRoute component={HomePage} />
      <Route path="post/:id" component={EntryPage} />
    </Route>
  )
}