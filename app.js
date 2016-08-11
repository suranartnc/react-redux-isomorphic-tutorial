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
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});

require('./api/server');
require('./src/server');