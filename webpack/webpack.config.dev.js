var path = require('path');
var webpack = require('webpack');
var AssetsPlugin = require('assets-webpack-plugin');

var config = require('../src/shared/configs');

module.exports = {

  devtool: 'cheap-module-eval-source-map',

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.host}:${config.clientPort}`,
    'webpack/hot/only-dev-server',
    'bootstrap-loader',
    path.join(process.cwd(), 'src/client.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: "[name].js",
    path: path.join(process.cwd(), 'static', 'build'),
    publicPath: `http://${config.host}:${config.clientPort}/build/`
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules|\.git/,
        loaders: [
          {
            loader: 'babel-loader',
            query: {
              babelrc: false,
              presets: ["es2015", "stage-0", "react"]
            }
          }
        ]
      }, {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              module: true,
              importLoaders: 2,
              sourceMap: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              outputStyle: 'expanded',
              sourceMap: true
            }
          },
          'postcss-loader'
        ]
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
    modules: [
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
  ],

  devServer: {
    port: config.clientPort,
    hot: true,
    inline: false,
    historyApiFallback: true
  }
};