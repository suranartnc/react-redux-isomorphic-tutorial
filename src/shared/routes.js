import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, IndexRoute } from 'react-router'

import {
  App,
  HomePage,
  EntryPage
} from './containers'

export default (store, history) => {
  return (
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path='/' component={App}>
        <IndexRoute component={HomePage} />
        <Route path="post/:id" component={EntryPage} />
      </Route>
    </Router>
  )
}
