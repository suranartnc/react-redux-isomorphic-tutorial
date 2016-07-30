import config from 'shared/configs'
import path from 'path';
import express from 'express';

import webpack from 'webpack';
import webpackConfig from '../../webpack/webpack.config.dev.js';

import serverRendering from './serverRendering';

const app = express();

app.use(express.static(path.join(process.cwd(), 'static')));

app.use(serverRendering);

app.listen(config.port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Server listening on', config.port);
});