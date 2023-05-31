/*
                                        Stubs function in Sinon

 1. With the stub() function, you can swap out a function for a fake version of that function with pre-determined behavior. 
    This is helpful for testing edge cases, like what happens when an HTTP request fails.
 2. There’re times when we wanted to test a function that has dependencies (Eg: another secondary function inside the function)
    You would stub those dependencies(secondary function) out to force your code into some specific path.
    
*/

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

describe('---------Stubs------------', function(){
    it('function return check', function(){
        var stubObj = sinon.stub(studentObj, 'getMarksFromExternal'); //here we stubed getMarksFromExternal() function 
        stubObj.withArgs(50).returns(10);   // we calling getMArksFromExternal(). If got 50 marks (in "total" argument) we are hoping, external teacher will return 10 marks 
        expect(studentObj.finalMarksOfStudent(50)).to.be.equal();      //if passed 50 marks in finalMarksOfStudent(50) ==> 
                                                 //we hoped external will give 10 marks (from stubbed) + from 
    })
})