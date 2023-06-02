//When fetching data from third-partylike any function or databases then it takes time So, we use Promises async/await 

/* Here we are testing a promise in 2 different ways: 
 1. with normal promise test without any library 
 2. with the help of library as "chai-as-promised"  */

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

describe("test the promise", function() {

    //1. Method 1 (Normal way without any library)
    it("Promise test case", function(done) {  // done is callback method, which keeps track of the completion of asynchronous call.
                        //If done, callback is called even at a later point of time. At that point of time it will decide, whether a test case is succesfull or not 
      //this.timeout(6000); // Normally gives timeout after 2 seconds. It automatically fails the test cases after 2 sec. So, setting timeout to 6000ms and wait until that point ..if still not resolved/rejected it fails the test.
      this.timeout(0); //better is to set as 0 , it waits as long as promise is not resolved or rejected.
      studentObj.testPromise().then(function(result){
        expect(result).to.be.equal(8);
        //expect(false).to.be.true;
        done();  
      });  
    })
})