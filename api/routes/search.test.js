const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);


describe('testing get /search endpoint', () => {
    it('Get search endpoint with query params', async done => {
        const response = await request.get('/search').query({ searchParam: 'google' });
        expect(response.status).toBe(200);
        done();
    });

    it('Get 400 for request without query param named searchParam', async done => {
        const response = await request.get('/search').query({ searchParam: '' });
        expect(response.status).toBe(400);
        done();
    })
});

describe('testing post /search endpoint', () => {
    it('Post search endpoint with search param in body', async done => {
        const response = await request.post('/search').send({ searchParam: 'google' });
        expect(response.status).toBe(200);
        done();
    });

    it('Get 400 for request without body param named searchParam', async done => {
        const response = await request.post('/search').send({ searchParam: '' });
        expect(response.status).toBe(400);
        done();
    })
});