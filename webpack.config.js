var path = require('path');
var webpack = require('webpack');

module.exports = {

  cache: true,
  devtool: 'eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, 'src/client.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: "[name].js",
    path: path.join(__dirname, 'static', 'build'),
    publicPath: '/build/'
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules|\.git/,
        query: {
          presets: ['react-hmre']
        }
      }
    ]
  },

  resolve: {
    extensions: ['', '.json', '.js', '.jsx'],
    root: [
      path.join(__dirname, 'src'),
      path.join(__dirname, 'node_modules')
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'BROWSER': true
      }
    })
  ]
};