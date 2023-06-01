//In mocking, we avoid the actual call to a function, and instead of actual call we just use a dummy call . We create the mock of it.

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

describe('---------Test suit for Mock------------', function(){
    // //example 1
    // it('stub the getMarksFromExternal method', function() {
    //     var stubObj = sinon.stub(studentObj, 'getMarksFromExternal'); //here we stubed getMarksFromExternal() function 
    //     stubObj.withArgs(50).returns(10);   // we calling getMArksFromExternal(). If got 50 marks (in "total" argument) we are hoping, external teacher will return 10 marks 
    //     expect(studentObj.finalMarksOfStudent(50)).to.be.equal(50);     //if passed 50 marks in finalMarksOfStudent(50) , from return of this function ==> 
    //                                              //we hoped external will give 10 marks (from stubbed) + 
    //                                      // from getMarksFromInternal(total) we get 30  + 10 
    // });


    //example 2
    it("mock the sayHello method", function(){
    /* SayHello() method is independent with callingAnotherFn().So, callingAnotherFn() should be tested on its own irrespective of what is happening in SayHello() method
        so SayHello() function can be ignored and testing becomes more faster.
        when executing, the sayHello method in stub, the console get printed everytime. We need to ignore that function/by pass the function and mock method should be called  */

        //creating a mock
        var mock = sinon.mock(studentObj); //this statement will not change our actual object but will only create a wrapper around it. 
        var expection = mock.expects("sayHello");//expection from mock is that, out of the "studentObj" object, mock should expect that sayHello method should be mocked 
        expection.exactly(1);
        studentObj.callingAnotherFn(10,20); 
        mock.verify();
       
    });
});