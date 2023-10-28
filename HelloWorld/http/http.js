var http = require('http'); //importando um módulo interno do node

http.createServer(function(req, res){
res.end("Hello World!")
}).listen(8080);

console.log("Servidor no ar!")