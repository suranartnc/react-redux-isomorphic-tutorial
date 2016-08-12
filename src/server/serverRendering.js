import React from 'react';
import { match, RouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';

import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from 'shared/store/createStore';
import createRoutes from 'shared/routes/routes.prod';
import { fetchComponent } from './fetchComponent.js';

const assets = require('../../static/build/assets.json');

const renderHtml = (html, initialState) => (`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>React Redux Isomorphic Tutorial</title>
      ${assets.main.css ? '<link rel="stylesheet" href="' + assets.main.css + '" />' : ''}
    </head>
    <body>
      <div id="root">${html}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="${assets.main.js}"></script>
    </body>
  </html>
`)

export default function(req, res) {
  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({
    history,
    routes: createRoutes(store),
    location: req.originalUrl
  }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.log(error);
      res.status(500).send('Internal Server Error');
    } else if (redirectLocation) {
      res.redirect(302, `${redirectLocation.pathname}${redirectLocation.search}`);
    } else if (renderProps) {
      const { components, params } = renderProps;

      fetchComponent(store.dispatch, components, params)
        .then(html => {
          const componentHTML = renderToString(
            <Provider store={store} key="provider">
              <RouterContext {...renderProps} />
            </Provider>
          );
          const initialState = store.getState();

          res.status(200).send(
            renderHtml(componentHTML, initialState)
          );
        })
        .catch(error => {
          console.log(error);
          res.status(500).send('Internal Server Error');
        });
    } else {
      res.status(404).send('Not found');
    }
  })
}
