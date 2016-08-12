var config = require('../src/shared/configs');

var path = require('path');

module.exports = {

  output: {
    libraryTarget: 'commonjs2',
    publicPath: `http://${config.host}:${config.clientPort}/build/`
  },

  module: {
    loaders: [
      // {
      //   test: /\.css$/,
      //   loaders: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }, {
      //   test: /\.scss$/,
      //   exclude: /node_modules/,
      //   loaders: [
      //     'style-loader',
      //     {
      //       loader: 'css-loader',
      //       query: {
      //         module: true,
      //         importLoaders: 2,
      //         localIdentName: '[name]__[local]___[hash:base64:5]'
      //       }
      //     },
      //     'sass-loader',
      //     'postcss-loader'
      //   ]
      // }, {
      //   test: /\.(eot|svg|ttf|woff|woff2)$/,
      //   loader: 'file-loader',
      // }, 
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
  },

  // sassLoader: {
  //   includePaths: [path.resolve(process.cwd(), "src/shared/theme/scss")]
  // }
};