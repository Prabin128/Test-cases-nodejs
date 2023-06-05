var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();


describe ("-----Hooks test Suit----", function() {

    before(function() {  // this function will run at the very begining before executing any test cases in this file. 
        console.log('****Before the test case****')
    });

    after(function() {  // this function will run after all the rest cases gets executed in this file.
        console.log('****After the test case****')
    });

    afterEach(function() {  //this funtion will run after each of the test cases gets executed.
        console.log('****After each test case****')
    });

    beforeEach(function() {  //this function will run before each of the test cases will get executed.

         console.log('****Before each test case****')

        sinon.restore(); /* intead of using spy.restore(), 
        //sinon.restore() will restore all the different types of wrapper created using spy, mock, stub etc... Everything will be restored by sinon.restore() */
   
    });

 // just the copied code of spy.spec.js // just to show hook working after and  before this spy test.

    describe('---------Spy------------', function() {

        it('function return check', function(){
            expect(studentObj.userId()).to.be.equal(12);

        });

        it('function arguments check', function() {

            var spyObj =  sinon.spy(studentObj, 'getInfo');  
            studentObj.home(5); 
            expect(spyObj.calledWith(5,1)).to.be.true;   
        /* 
            spy.restore();  //in the below code.. its a copy of this function .. 
            so if we dont restore it, then it throws Typeerror(says already wrapped the same 'getInfo' method).
            So we must use restore() to restore it to use it the same method again . But its tedious to use this spy.restore() everywhere everytime. 
            So, for that we have better provision to use hooks. either in beforeEach() or afterEach() we can declare restore() there. Look above in beforeEach()
        */

        });
        
        it('copy function arguments check of the above', function() {

            var spyObj =  sinon.spy(studentObj, 'getInfo');  
            studentObj.home(5); 
            expect(spyObj.calledWith(5,1)).to.be.true;    

        });

    });
})