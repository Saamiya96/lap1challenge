const request = require('supertest');
const app = require("../app");

describe('API server', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5000, () => {
            console.log('Test server running on port 5000')
        })
    })

    afterAll((done) => {
        console.log('Gracefully stopping test server');
        api.close(done)
    })

    it('responds to get / with status 200', (done) => {
        request(api)
        .get('/')
        .expect(200, done);
    })

    it('responds to get /random with status 200', (done) => {
        request(api)
        .get('/random')
        .expect(200, done);
    })

    it('responds to get /random/4 with status 200', (done) => {
        request(api)
        .get('/random/4')
        .expect(200)
        .expect("https://www.liverpoolfc.com/", done);
    })

    it('responds to get /random/11 with status 200', (done) => {
        request(api)
        .get('/random/11')
        .expect(200)
        .expect('"error: Choose a number between 1 and 10"', done);
    })
})

