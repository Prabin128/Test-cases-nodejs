/*
                                        Stubs function in Sinon

 1. With the stub() function, you can swap out a function for a fake version of that function with pre-determined behavior. 
    This is helpful for testing edge cases, like what happens when an HTTP request fails.
 2. There’re times when you wanted to test a function that has dependencies. 
    You would stub those dependencies out to force your code into some specific path.
    
*/




var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

describe('---------Spy------------', function(){
    it('function return check', function(){
        expect(studentObj.userId()).to.be.equal(12);
        //expect(studentObj.userId()).to.be.equal(13);   //this throws error because we returned 12 in our student.controller in userId()
                                                         // but we gave test cases, equal as 13

    })
})