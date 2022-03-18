const http = require('http');

const requsetListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json')
    response.setHeader('X-Powered-By', 'NodeJS')

    const { url ,method } = request

    if(url === '/'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'Ini adalah homepage'
            }))
        }else{
            response.statusCode = 400
            response.end(JSON.stringify({
                message: 'Halaman ini tidak dapat diakses dengan ${method} request'
            }))
        }
    }
    else if(url === '/about'){
        if(method === 'GET'){
            response.statusCode = 200
            response.end(JSON.stringify({
                message: 'Halo! Ini adalah about'
            }))
        }
        else if(method === 'POST'){
            let body = []
    
            request.on('data', (data) => {
                body.push(data)
            })
    
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body)
                response.statusCode = 200
                response.end(JSON.stringify({
                    message: 'Halo! ${name}! ini adalah halaman about'
                }))
            })
        }else{
            response.statusCode = 400
            response.end(JSON.stringify({
                message: 'Halaman ini tidak dapat diakses dengan ${method} request'
            }))
        }
    }else {
        response.statusCode = 404
        response.end(JSON.stringify({
            message: 'Halaman tidak ditemukan'
        }));
    }
    // if(method === 'PUT')
    //     response.end('<h1>Put</h1>')
    // if(method === 'DELETE')
    //     response.end('<h1>Delete</h1>')
}

const server = http.createServer(requsetListener)

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server sedang berjalan pada http://${host}:${port}`)
});