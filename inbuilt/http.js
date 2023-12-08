let http = require('http');

var server = http.createServer(function(req,res){
    res.write('<h1>Creat server with node App</h1>');
    res.end;
});
server.listen(3400)