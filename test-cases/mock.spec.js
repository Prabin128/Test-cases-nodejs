/* to run this file as single  => npm run test-single-file -- test-cases/mock.spec.js */

//In mocking, we avoid the actual call to a function, and instead of actual call we just use a dummy call . We create the mock of it.

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();

describe('---------Test suit for Mock------------', function(){

    //example 2
    it("mock the sayHello method", function(){
    /* SayHello() method is independent with callingAnotherFn().So, callingAnotherFn() should be tested on its own irrespective of what is happening in SayHello() method
        so SayHello() function can be ignored and testing becomes more faster.
        when executing, the sayHello method in stub, the console get printed everytime. We need to ignore that function/by pass the function and mock method should be called  */

        //creating a mock
        var mock = sinon.mock(studentObj); //this statement will not change our actual object but will only create a wrapper around it. 
        var expection = mock.expects("sayHello");//expection from mock is that, out of the "studentObj" object, mock should expect that sayHello method should be mocked 
        expection.exactly(1); // expectations should happen only once.
        expection.withArgs("hello!! from the sayHello method"); //it has been called with args => "hello!! from the sayHello method"
        studentObj.callingAnotherFn(10,20); 
        mock.verify(); //at the end we need to verify all the expections
        
        // In the output,it has not printed the console part of the sayHello method. It has ignored it.
    });

    //example 1
    it('count function call', function() {
        //mock also can be used for how many times  the function is called and with what argument.
        var mock = sinon.mock(studentObj);
        var expect = mock.expects('getMarksFromExternal');    
        expect.exactly(1);
        expect.withArgs(40)   //argument is "total" here ..so, same argument shoukd be passed in finalMarksOfStudent() & getMarksFromExternal()
        studentObj.finalMarksOfStudent(40);
        mock.verify();
    });       
});