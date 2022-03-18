const Hapi = require('@hapi/hapi')
const route = require('./route')

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 5000
    })

    server.route(route)

    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()