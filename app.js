require('babel-register')({
  "plugins": [
    [
      "babel-plugin-webpack-loaders",
      {
        "config": "./webpack/webpack.config.babel.js",
        "verbose": false
      }
    ], [
      "css-modules-transform", {
        "extensions": [".css", ".scss"]
      }
    ]
  ]
});

require('./api/server');
require('./src/server');