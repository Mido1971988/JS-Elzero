const http = require("http");

const server = http.createServer(function(req, res) {
    res.setHeader("Content-Type", "text/html");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200);
    res.end(
        "<div><h2>The Sample Content</h2><ul><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li><li>Item 5</li><li>Item 6</li><li>Item 7</li><li>Item 8</li><li>Item 9</li><li>Item 10</li><li>Item 11</li><li>Item 12</li></ul></div>"
    );
});

server.listen(1234, function() {
    console.log("Server Listening on port 1234");
});