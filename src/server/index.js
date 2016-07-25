import express from 'express';
import webpack from 'webpack';
import webpackConfig from '../../webpack.config.js';
import serverRendering from './serverRendering';

const app = express();
const compiler = webpack(webpackConfig);

app.use(express.static(`${__dirname}/static`));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(serverRendering);

const PORT = process.env.PORT || 3000;
app.listen(PORT, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening on', PORT);
});