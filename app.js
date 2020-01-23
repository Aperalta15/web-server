const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'application/json'});
    let salida = {
        nombre: 'Antonio',
        edad: 32,
        url: req.url
    }
    // res.write('Hi word');
    res.write(JSON.stringify(salida));
    res.end();
})
.listen(8080);

console.log('Conectando con 8080');