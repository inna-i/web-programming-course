const http = require('http');
 
const PORT = 3000;
const HOST = 'localhost';
// Create an HTTP server
const server = http.createServer((req, res) => {
    console.log({ req })
    res.writeHead(200, { 'Content-Type': 'text/json' });

    if (req.url === '/page') {
        res.end('Hello there! There will be page');
    } else if(req.url === '/data') {
        res.end(JSON.stringify({ name: 'test'}));
    } else {
        res.end('okay');
    }
}); 	

server.listen(PORT, HOST, () => {
    console.log('Server is running...')
});