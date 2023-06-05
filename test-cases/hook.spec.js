var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();


describe ("-----Hooks test Suit----", function() {
    after (function () {
        console.log('****After the test suit****')
    });

    before (function () {
        console.log('****Before the test suit****')
    });


    describe('---------Spy------------', function() {

        it('function return check', function(){
            expect(studentObj.userId()).to.be.equal(12);

        });

        it('function arguments check', function() {

            var spyObj =  sinon.spy(studentObj, 'getInfo');  
            studentObj.home(5); 
            expect(spyObj.calledWith(5,1)).to.be.true;    

        });
        
    });
})