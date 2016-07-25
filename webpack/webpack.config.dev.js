var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(process.cwd(), 'src/client.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: "[name].js",
    path: path.join(process.cwd(), 'static', 'build'),
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
      path.join(process.cwd(), 'src'),
      path.join(process.cwd(), 'node_modules')
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
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(process.cwd(), 'static', 'build'),
      prettyPrint: true
    })
  ]
};