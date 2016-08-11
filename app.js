require('babel-register')({
  "plugins": [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./webpack/webpack.config.babel.js",
        "verbose": false
      }
    ]
  ]
});

require('./api/server');
require('./src/server');