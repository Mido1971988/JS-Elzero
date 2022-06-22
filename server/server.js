const http = require("http");

const server = http.createServer(function(req, res) {
    req.on('data',function(data){
        // handle data as it recieved .... for POST Method
    })
    req.on('end',function(){
        res.setHeader("Content-Type", "text/html");
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.writeHead(200, "OK");
        res.end('{"data": "just a plain old json reply"}');
    })
});

server.listen(1234, function() {
    console.log("Server Listening on port 1234");
});