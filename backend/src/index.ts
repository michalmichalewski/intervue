import appBuilder from './app'

const server = appBuilder({
    log: console.log
})

server.listen({ port: 3000 }, function (err, address) {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }

    console.log(`Server is now listening on ${address}`)
})

export default server