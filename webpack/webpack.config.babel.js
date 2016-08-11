var config = require('../src/shared/configs');

var path = require('path');

module.exports = {

  output: {
    libraryTarget: 'commonjs2',
    publicPath: `http://${config.host}:${config.clientPort}/build/`
  },

  module: {
    loaders: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    modules: [
      path.join(process.cwd(), 'src'),
      path.join(process.cwd(), 'node_modules')
    ]
  }
};