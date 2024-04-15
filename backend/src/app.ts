// app.js
import fastify, {FastifyInstance} from 'fastify'
const server = fastify()
import mainRoutes from './routes/routes'

function build(opts = {}): FastifyInstance {
    const app = fastify(opts);
    app.register(mainRoutes)

    return app;
}

export default build