/* eslint-disable */

var http = require('http'),
    app = require('app');

var port = process.env.ELECTRON_WORKER_PORT,
    host = process.env.ELECTRON_WORKER_HOST,
    foo = process.env.FOO,
    customEnv = process.env.CUSTOM_ENV;

app.on('ready', () => {
  var server = http.createServer((req, res) => {
    process.send('ping');

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({}));
  });

  server.listen(port, host);
});
