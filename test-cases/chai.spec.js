//by using chai 


//give a name according to your controller ...
//for example if you have student controller then your test cases name will be student.spec.js or something like this

var chai =  require('chai');
const { ExclusionConstraintError } = require('sequelize');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;


                                //********* ASSERT  ***********/


//  "Aspect" refers to a specific feature or attribute of the code being tested.
//   In a test suite, you might write multiple tests to cover different aspects of the code's behavior. 
/*
   For example, if you're testing a function that performs mathematical operations, you might write tests 
   to cover different aspects such as addition, subtraction, multiplication, and division.

*/

 describe('------------Aspect check------------' , function (){

    let userName = 'Prabin Poudel';   // now will check is this userName a boolean /string / number 
    let mylist = {
        item :[
            {id : 1 , name : "prabin"},
            {id : 2 , name : "poudel"},
        ],
    }

    it("check string", function(){
        assert.typeOf(userName, 'string');
    })

    //for example, we want to check that the value is equal or not 
    it("equal match to the string ", function (){
        assert.equal(userName, 'Prabin Poudel');
    })

    // if we want to match the length of the userName 
    it('should match the length of the string', function (){
        assert.lengthOf(userName, 13);
    })

    //wanna match the length of mylist
    it('should match the length of mylist', function(){
        assert.lengthOf(mylist.item, 2);
    })

    //Same above But, just to show in test report that coz of .skip , its still pending to test.
    it.skip('should match the length of mylist', function(){
        assert.lengthOf(mylist.item, 2);
    })
})

//same copy of the above describe.. Just skipping this descibe for the test case report to show this describe was skipped(pending)
describe.skip ('------------Example to show in test report that coz of .skip its still pending to test ------------' , function (){

    let userName = 'Prabin Poudel';   // now will check is this userName a boolean /string / number 
    let mylist = {
        item :[
            {id : 1 , name : "prabin"},
            {id : 2 , name : "poudel"},
        ],
    }

    it("check string", function(){
        assert.typeOf(userName, 'string');
    })

    //for example, we want to check that the value is equal or not 
    it("equal match to the string ", function (){
        assert.equal(userName, 'Prabin Poudel');
    })

    // if we want to match the length of the userName 
    it('should match the length of the string', function (){
        assert.lengthOf(userName, 13);
    })

    //wanna match the length of mylist
    it('should match the length of mylist', function(){
        assert.lengthOf(mylist.item, 2);
    })
})



                                         //********* SHOULD  ***********/


describe('should check', function(){
    let userName = "PRabinPoudel";
    let mylist = {
        item :[
            {id :1 , name: 'Prabin'},
            {id :2 , name: 'Poudel'},
        ],
        title : 'user list'
    }
        it('check string', function(){
            userName.should.be.a('string');
        })  
        
        // it('equal check', function(){
        //     userName.should.equal('PrabinPoudel');    //it throws an error coz the userName name is PRabinPoudel 
        //                                               //but we are checking equal as PrabinPoudel
        // })

        it('equal check', function(){
            userName.should.equal('PRabinPoudel');
        })

        it('length check' , function(){
            mylist.should.have.property('item').with.lengthOf(2);
        })
});

                                         //********* EXPECT  ***********/

//  "Expect" refers to the expected outcome of a test related to that aspect.. 
//  In a test, you specify what you expect the code under test to do and then use assertions to verify if the expected outcome has been met. 

//  In the example, The code uses the assert.equal method from the assert module to check 
//   if the result of calling indexOf with the value 4 on the array [1, 2, 3] is equal to -1.
//    If the result is not equal to -1, the test will fail., 
//    the expectation was that the result of calling indexOf with the value 4 on the array [1, 2, 3] would be equal to -1.
// The purpose of the test is to verify that the indexOf method behaves as expected and returns -1 when the value is not present in the array.

describe("check expect" , function(){
    let userName = "PRabinPoudel";
    let mylist = {
        item :[
            {id :1 , name: 'Prabin'}
        ],
        title : 'user list'
    }
    it('string match', function(){
        expect(userName).to.be.a('string');
    })

    it('equal check', function(){
        expect(userName).to.equal('PRabinPoudel')   
    })

    it('length check' , function(){
        expect(userName).to.lengthOf(12);
    })


    //  this checks wether all fields are presents or not (item, title)
//this helps us in CRUD operation where we wanna check wether all the fields like name, email,phone,address are working/present or not
    it ('api object match' , function(){
        expect(mylist).to.have.all.keys('item', 'title');
       //for example we are giving an extra "hello" key which is not present while defining the object.So, this throws error
            //expect(mylist).to.have.all.keys('item', 'title', 'hello');

    })
});

    //more complex version 
    describe("checking complex object", function(){
        myNewList  = {
            item : [{
                id : 1, name: 'Prabin'
            }],
            title : "title for chai expect check",
            address: {
                country : 'Nepal',
                phoneNumber : ['9898989898','89898989898']
            }
        }
    
        it('object match' ,  function (){
            expect(myNewList).to.have.all.keys('item','title','address');   
        });
    
        it('phone Number checking' ,  function (){
            expect(myNewList).to.have.nested.property('address.phoneNumber[0]');   // phoneNumber[1] => if it exceeds from 1 then,  
                                                    // it throws error coz we have only phoneNumbers till index 1    => if given phoneNumber[0] it will be fine too
        });
    
        //value checking,  check wether the country has Nepal or not 
        it('Country name checking' ,  function (){
            expect(myNewList).to.have.nested.include({'address.country' : "Nepal"}); 
        })
    
        //matching phone Number
        it('Phone Number match ' ,  function (){
            expect(myNewList).to.have.nested.include({'address.phoneNumber[1]' : "89898989898"}); 
        })
        it('check title to be a string' ,  function (){
            expect(myNewList).to.have.nested.property('title').to.be.a('string'); 
        })
    
    });
 