var path = require('path');
var webpack = require('webpack');

var AssetsPlugin = require('assets-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = {

  entry: [
    path.join(process.cwd(), 'src/client.js')
  ],

  output: {
    filename: '[name].[hash].js',
    chunkFilename: "[name].[chunkhash].js",
    path: path.join(process.cwd(), 'static', 'build'),
    publicPath: "/build/"
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
              plugins: ["lodash"],
              presets: ["es2015-webpack", "stage-0", "react"]
            }
          }
        ]
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ 
          fallbackLoader: 'style-loader',
          loader: 'css-loader'
        })
      }, {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ 
          fallbackLoader: 'style-loader',
          loader: 'css?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass'
        })
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      }, {
        test: /\.(jpg|png|gif)$/,
        loaders: [
          'file-loader',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}',
        ]
      }, {
        test: /\.json$/,
        loader: 'json-loader'
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
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BROWSER': true
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new AssetsPlugin({
      filename: 'assets.json',
      path: path.join(process.cwd(), 'static', 'build'),
      prettyPrint: true
    }),
    new ExtractTextPlugin({ 
      filename: '[name].[hash].css',
      allChunks: true
    })
  ],

  postcss: [
    autoprefixer({ browsers: ['last 2 versions', 'IE > 10'] }),
    cssnano()
  ],

  sassLoader: {
    includePaths: [path.resolve(process.cwd(), "src/shared/theme/scss")]
  }
};