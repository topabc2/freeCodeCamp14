const chai = require("chai");
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', () => {
    test("solve a puzzle with valid puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: "1.5..2.84..63.12.7.2..5.....9..1....8.2.3674.3.7.2..9.47...8..1..16....926914.37."
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "135762984946381257728459613694517832812936745357824196473298561581673429269145378")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with invalid characters", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: "test"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Expected puzzle to be 81 characters long")
                done();
            });
    });

    test("solve a puzzle with incorrect length", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: "test"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Expected puzzle to be 81 characters long")
                done();
            });
    });

    test("solve a puzzle that cannot be solved", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: "test"
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Expected puzzle to be 81 characters long")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });

    test("solve a puzzle with missing puzzle string", function(done) {
        chai
            .request(server)
            .keepOpen()
            .post("/api/solve")
            .send({
                puzzle: ""
            })
            .end(function(err, res) {
                assert.equal(res.status, 200);
                assert.include(res.text, "Required field missing")
                done();
            });
    });
});

