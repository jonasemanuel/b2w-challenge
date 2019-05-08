const superTest = require('supertest');
const assert = require('assert');

const request = superTest('http://localhost:9000');
var tempPlanetId = null;

describe('GET /planets', () => {
    it('reponds with status 200 and content-type json', (done) => {
        request.get('/planets').expect('Content-Type', /json/).expect(200, done);
    });
});

describe('POST /planets', () => {
    it('reponds with status 201', (done) => {
        request.post('/planets')
        .send({
            name: "Alderaan",
            climate: "temperate",
            terrain: "grasslands, mountains"
        })
        .expect(201).then(response => {
            tempPlanetId = response.body._id;
            console.log(`Planet Alderaan ID:${response.body._id} created`);
            done();
        });
    });
});

describe('GET /planets?name=Alderaan', () => {
    it('reponds with status 200 and planet with name Alderaan', (done) => {
        request.get('/planets')
        .expect('Content-Type', /json/)
        .expect(200)
        .then(response => {
            assert(response.body[0].name, "Alderaan");
            done();
        });
    });
});

describe('DELETE /planets', () => {
    it('reponds with status 200', (done) => {
        request.delete(`/planets/${tempPlanetId}`).expect(200).then(response => {
            console.log(`Planet ${tempPlanetId} removed`);
            done();
        })
    });
});
