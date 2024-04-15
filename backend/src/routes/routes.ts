import {FastifyInstance} from "fastify";

export default async function routes(fastify: FastifyInstance, options: any, done: any) {
    fastify.get('/', function (request, reply) {
        reply.send({ hello: 'world' })
    })

    done()
}