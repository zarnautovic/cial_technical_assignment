const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('testing superset with index get endpoint', () => {
    it('Get index endpoint', async done => {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('This is API forCial Technical Assignment!');
        done();
    });
});