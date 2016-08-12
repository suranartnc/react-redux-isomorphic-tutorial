import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'shared/containers/App/App';

// if (typeof System === "undefined") {
//   var System = {
//     import: function(path) {
//       return Promise.resolve(require(path));
//     }
//   };
// }

// const errorLoading = (err) => {
//   console.error('Dynamic page loading failed', err);
// };

// const loadModule = (cb) => (componentModule) => {
//   cb(null, componentModule.default);
// };

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

export default function createRoutes(store) {
  // return [
  //   {
  //     path: '/',
  //     component: App,
  //     indexRoute: {
  //       getComponent(nextState, cb) {
  //         System.import('shared/containers/HomePage/HomePage')
  //           .then(loadModule(cb))
  //           .catch(errorLoading);
  //       }         
  //     },
  //     childRoutes: [
  //       {
  //         path: 'post/:id',
  //         getComponent(nextState, cb) {
  //           System.import('shared/containers/EntryPage/EntryPage')
  //             .then(loadModule(cb))
  //             .catch(errorLoading);
  //         }
  //       }
  //     ]
  //   }
  // ]
  return (
    <Route path="/" component={App}>
      <IndexRoute
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('shared/containers/HomePage/HomePage').default);
          });
        }}
      />
      <Route
        path="post/:id"
        getComponent={(nextState, cb) => {
          require.ensure([], require => {
            cb(null, require('shared/containers/EntryPage/EntryPage').default);
          });
        }}
      />
    </Route>
  );
}