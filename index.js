function startHTTPServer() {
  const http = require('http');
  const app = require('./src/routes/app');
  const port = process.env.PORT || 3000;
  const server = http.createServer(app);

  return new Promise((resolve) => {
    server.listen(port, () => {

      console.log('[ROUTER] routes is now enabled: ' + port + ' | ' + Date.now());
      resolve();
    });
  });
}

async function Init(){

  await startHTTPServer();
}

Init().catch(err => {
  console.log(err);
});