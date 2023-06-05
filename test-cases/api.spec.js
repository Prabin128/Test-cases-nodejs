var chai =  require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var server = require('../server');  //

let chaiHttp = require('chai-http');
chai.use(chaiHttp);


describe('API test case suit', function() {

    it('get user from API Test', function(done){
        chai.request(server)  //request URL is from server(from which server)
        .get('/user')  //providing URL
        .end((err, response)=>{
            expect(response.status).to.be.equal(200)   //status should be equal to 200. Because We have set 200 at a user Controller 
            //expect(response.status).to.be.equal(210); //it fails the test coz it didnt matched with the status that we have mentioned in the user.controller (which is 200 )



            //checking all the keys comming from "response.body" from  the user route( get method)
                 /*     //from the response og the get method data looks like :
                        {
                            "statusText": "success",
                            "data": {
                            "list": "Hello"
                            }
                        } */
            expect(response.body).to.have.all.keys('data', 'statusText');  
            //expect(response.body).to.have.all.keys('data', 'statusText' , 'random'); //it fails because random is not in the reponse body   

            done();
        });
    });
});