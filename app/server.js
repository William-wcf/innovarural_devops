const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
  res.end('Servicio Innovarural en ejecución\n');
});

server.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});