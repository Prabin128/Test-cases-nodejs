//When fetching data from third-partylike any function or databases then it takes time So, we use Promises async/await 

/* Here we are testing a promise in 2 different ways: 
 1. with normal promise test without any library 
 2. with the help of library as "chai-as-promised"  */

var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;
var Student = require('../controllers/student.controller');
var studentObj = new Student();
