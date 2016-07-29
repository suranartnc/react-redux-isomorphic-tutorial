export default function(req, res) {
  const assets = require('../../static/build/assets.json');
  const HTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Redux Isomorphic Tutorial</title>
        ${assets.main.css ? '<link rel="stylesheet" href="' + assets.main.css + '" />' : ''}
      </head>
      <body>
        <div id="root"></div>
        <script src="${assets.main.js}"></script>
      </body>
    </html>    
  `;
  res.status(200).end(HTML);
};