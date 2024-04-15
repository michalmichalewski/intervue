import fastify from 'fastify'
import appRout from './routes/routes'
const app = fastify({ logger: true })

app.register(appRout)

export default app