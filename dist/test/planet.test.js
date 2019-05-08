'use strict';

var superTest = require('supertest');

var request = superTest('http://localhost:6000');
var tempPlanetId = null;

describe('GET /planets', function () {
    it('reponds with status 200 and content-type json', function (done) {
        request.get('/planets').expect('Content-Type', /json/).expect(200, done);
    });
});

describe('PUT /planets', function () {
    it('reponds with status 201', function (done) {
        request.put('/planets').expect(201).then(function (response) {
            tempPlanetId = response.body._id;
            console.log('Resource ' + response.body._id + ' created');
            done();
        });
    });
});

describe('DELETE /planets', function () {
    it('reponds with status 200', function (done) {
        request.delete('/planets/' + tempPlanetId).expect(200).then(function (response) {
            console.log('Resource ' + tempPlanetId + ' removed');
            done();
        });
    });
});
//# sourceMappingURL=planet.test.js.map