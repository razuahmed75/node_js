const fs = require('fs');
const http = require('http');

// const ourReadStream = fs.createReadStream(`${__dirname}/big_data.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.pipe(ourWriteStream);


const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        const readStream = fs.createReadStream(`${__dirname}/big_data.txt`,'utf-8');
        readStream.pipe(res);
        // res.write('<html><head><title>Form</title></head><body><form method="post" action="/process"><input name="message"/></form></body></html>');
    // } else if(req.url === '/process' && req.method === 'POST'){
    //     const body = [];
    //     req.on('data',(chunk)=>{
    //         body.push(chunk);
            
    //     });
       

    //     req.on('end',()=>{
            
    //         console.log('Stream finished');
    //         const parsedBody = Buffer.concat(body).toString();
    //         console.log(parsedBody);
    //     });
    //     res.write('Thank you for submitting');
    }
    //  else{
    //     res.write('Not found');
    // }
    // res.end();
}).listen(3200);
console.log('listening server port');