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

describe('---------Test suit for Stubs------------', function(){
    //example 1
    it('stub the getMarksFromExternal method', function() {
        var stubObj = sinon.stub(studentObj, 'getMarksFromExternal'); //here we stubed getMarksFromExternal() function 
        stubObj.withArgs(50).returns(10);   // we calling getMArksFromExternal(). If got 50 marks (in "total" argument) we are hoping, external teacher will return 10 marks 
        expect(studentObj.finalMarksOfStudent(50)).to.be.equal(50);     //if passed 50 marks in finalMarksOfStudent(50) , from return of this function ==> 
                                                 //we hoped external will give 10 marks (from stubbed) + 
                                         // from getMarksFromInternal(total) we get 30  + 10 
    });

    //example 2
    it("stub the add method", function(){
        var stub = sinon.stub(studentObj, "add");  //our function is still on student class, so passing its object and add method
    /*   
       //Normal method as above
        stub.withArgs(10,20).returns(100); //stubbed add method here     // when passed 10 & 20  it returns 100 instead of 30
        expect(studentObj.callingAnotherFn(10,20)).to.be.equal(100);
    */
       // 
       stub.
            withArgs(10,20)
            .onFirstCall().returns(100)
            .onSecondCall().returns(30);
       expect(studentObj.callingAnotherFn(10,20)).to.be.equal(100);
       expect(studentObj.callingAnotherFn(10,20)).to.be.equal(30);
       
    })
})