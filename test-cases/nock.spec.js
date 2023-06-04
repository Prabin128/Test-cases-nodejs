/*
Nock is an HTTP server mocking and expectations library for Node.js. 
Nock works by overriding the http.request and http.ClientRequest functions, 
intercepting all requests made to a specified URL and returning specified responses that mimic the data that the real URL would return.

Using Nock as a mock server, we can easily perform tests on modules that make HTTP requests to an external object like 
a URL without actually making any requests to the URL. This makes our testing process faster and more efficient. */


var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

const nock = require("nock");

describe("--------------Test suit for Nock----------------", function() {
    it("api test", function(done) {
        var obj = {status:"ok", statusCode:200, data: ["hellooo"]}

        const apihit = nock('http://localhost/api')  //path of the API
        .get('/dummyApi')  //assuming this as base url 
        .reply(200, obj);

        studentObj.thirdPartyApi().then(function(record){  //anything getting from the record (from the function)
            console.log("Consoled data :-",record);
            expect(record).to.be.eql(obj);  //should be equal to (match with) the obj that we haved defined above. 
            done(); //saying function that your work is done 
        }).catch(error => {
            done(new Error('error:' + error));
        })
    })
})