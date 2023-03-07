import http from 'http';


http.createServer((req, res) => {
    
    console.log(req);

    res.writeHead(200, { 'Content-Type': 'text-plain'});

    const persona = {
        id: 1,
        nombre: 'fernando'
    }

    
    res.write(JSON.stringify(persona));
    res.end();


})
.listen( 8080 );

console.log ( 'Escuchando el puerto: ', 8080);