const supertest = require('supertest');
import build from "../src/app";
import {FastifyInstance} from "fastify";
describe('app',() => {

    let app: FastifyInstance;

    beforeAll( async () => {
        app = build({
            logger: false
        })

        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should say hello on main route', async () => {
        const response = await supertest(app.server).get('/')

        expect(response.body).toEqual({
            hello: 'world'
        })
    })
})