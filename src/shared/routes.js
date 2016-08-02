import App from 'shared/containers/App'

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
          System.import('shared/containers/HomePage')
            .then(loadModule(cb))
            .catch(errorLoading);
        }         
      },
      childRoutes: [
        {
          path: 'post/:id',
          getComponent(nextState, cb) {
            System.import('shared/containers/EntryPage')
              .then(loadModule(cb))
              .catch(errorLoading);
          }
        }
      ]
    }
  ]
}