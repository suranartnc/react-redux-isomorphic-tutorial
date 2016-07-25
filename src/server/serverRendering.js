export default function(req, res) {
  const HTML = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>React Redux Isomorphic Tutorial</title>
      </head>
      <body>
        <div id="root"></div>
        <script src="/build/main.js"></script>
      </body>
    </html>    
  `;
  res.status(200).end(HTML);
};