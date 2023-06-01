/*
//to run the single file 
          => npm run test-single-file -- test-cases/spy.spec.js      
               ===> "test-single-file" should be mentioned in package.json inside scripts  as test-single-file: mocha
*/


//Sinon
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

    });


/*
    //we are checking how many times the getInfo() function is called.
    //So, to test this, we have to use Sinon 

    it('function count', function(){

        //for how many times the function is called we should use sinon 
        var spyObj =  sinon.spy(studentObj, 'getInfo');  //passing out object => studentObj. Inside this object,
                                                      // we are checking for getInfo() so passing getInfo as second parameter
        
        //when to check ? check when inside studentObj our home function is called.       
        studentObj.home(5); // 5 is the type that we have declared as parameter in home function
        
        //when this home function is called we are testing how many times getInfo is called
        expect(spyObj.calledOnce).to.be.true;  //expecting getInfo is called once 

       
        //expect(spyObj.calledOnce).to.be.true;  //if getInfo called twice inside home function then 
                                               //this throws error coz we expected getInfo() to be called only once
    })


*/

    //to check how many arguments are there in function
    it('function arguments check', function(){

        var spyObj =  sinon.spy(studentObj, 'getInfo');  //passing out object => studentObj. Inside this object,
                                                      // we are checking for getInfo() so passing getInfo as second parameter
        studentObj.home(5); 
        //expect(spyObj.calledOnce).to.be.true;   // function getInfo is called once so checking if it is called once or not. 

        expect(spyObj.calledWith(5,1)).to.be.true;   //Returns true if spy was called at least once with the provided arguments.
                                                 //Can be used for partial matching, Sinon only checks the provided arguments 
                                                 //against actual arguments, so a call that received the provided 
                                                 //arguments (in the same spots) and possibly others as well will return true. 
    });
    
});