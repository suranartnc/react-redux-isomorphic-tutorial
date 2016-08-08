require('babel-register');
require('css-modules-require-hook')({
  extensions: ['.css', '.scss'],
  generateScopedName: '[name]__[local]___[hash:base64:5]'
});

require('./api/server');
require('./src/server');