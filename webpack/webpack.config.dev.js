var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    'bootstrap-loader',
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
      }, {
        test: /\.css$/,
        loader: 'style!css'
      }, {
        test: /\.scss$/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?outputStyle=expanded&sourceMap!sass-resources'
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ],
      }, {
        test: /\.json$/,
        loader: 'json-loader',
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
  ],

  postcss: [],

  sassResources: [
    './src/shared/styles/variables.scss',
    './src/shared/styles/mixins.scss',
    './src/shared/styles/placeholder.scss'
  ]
};