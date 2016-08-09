import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { App, HomePage, EntryPage } from 'shared/containers';

export default function createRoutes(store) {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="post/:id" component={EntryPage} />
    </Route>
  );
}