import { App } from 'shared/containers';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err);
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  return [
    {
      path: '/',
      component: App,
      indexRoute: {
        getComponent(nextState, cb) {
          System.import('shared/containers/HomePage/HomePage')
            .then(loadModule(cb))
            .catch(errorLoading);
        }         
      },
      childRoutes: [
        {
          path: 'post/:id',
          getComponent(nextState, cb) {
            System.import('shared/containers/EntryPage/EntryPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          }
        }
      ]
    }
  ]
}