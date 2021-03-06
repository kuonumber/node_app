const http = require('http');
const fs = require('fs');

const server =  http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url==='/'){
        res.write('<html>');
        res.write('<head><title>Please enter some messages.</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type = "submit">send</botton></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url==='/message' && method==='POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk)
        })
        req.on('end',() =>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message =  parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message);

        })

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<body><h1>Hello from my node.js server!</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000)
