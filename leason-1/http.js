const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello world');
    } else if(req.url === '/about'){
        res.write('This is about page');
    } else{
        res.write('Not found');
    }
    res.end();
}).listen(3200);
console.log('listening server port');