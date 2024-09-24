const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    test("Convert a valid input", (done) => {
	chai.request(server).get("/api/convert?input=10L").end((error, result) => {
	    assert.equal(result.status, 200);
	    console.log(result);
    });
    done();
    });
    test("Convert an invalid input", (done) => {
	chai.request(server).get("/api/convert?input=32g").end((error,result) => {
	    assert.equal(result.status, 200);
	    assert.equal(result.text, '"invalid unit"');
	    console.log(result);
	});
	done();
    });
        test("Convert an invalid number", (done) => {
	chai.request(server).get("/api/convert?input=3/7.2/4kg").end((error,result) => {
	    assert.equal(result.text, '"invalid number"');
	    assert.equal(result.status, 200);
	    console.log(result);
	});
	done();
	});
            test("Convert an invalid number and unit", (done) => {
	chai.request(server).get("/api/convert?input=3/7.2/4kilomegagram").end((error,result) => {
	    assert.equal(result.text, '"invalid number and unit"');
	    assert.equal(result.status, 200);
	    console.log(result);
	});
	done();
	    });
            test("Convert with no number", (done) => {
	chai.request(server).get("/api/convert?input=kg").end((error,result) => {
	    assert.equal(result.body.initNum,1);
	    assert.equal(result.status, 200);
	    console.log(result);
	});
	done();
    });
});

