const superTest = require('supertest');

const request = superTest('http://localhost:6000');
var tempPlanetId = null;

describe('GET /planets', () => {
    it('reponds with status 200 and content-type json', (done) => {
        request.get('/planets').expect('Content-Type', /json/).expect(200, done);
    });
});

describe('PUT /planets', () => {
    it('reponds with status 201', (done) => {
        request.put('/planets').expect(201).then(response => {
            tempPlanetId = response.body._id;
            console.log(`Resource ${response.body._id} created`);
            done();
        });
    });
});

describe('DELETE /planets', () => {
    it('reponds with status 200', (done) => {
        request.delete(`/planets/${tempPlanetId}`).expect(200).then(response => {
            console.log(`Resource ${tempPlanetId} removed`);
            done();
        })
    });
});
