const http = require('http');

const server = http.createServer((req, res) =>{
    if (req.url === '/'){
        res.write('hello my friend');
        res.end();
    }
    if (req.url === '/api/test'){
        res.write(JSON.stringify([1, 2, 3, 4, 5]));
        res.end();
    }
});

server.on('connection',(socket) =>{
    console.log('new connection')
})

server.listen(3000)

console.log('server is listening on port 3000')

