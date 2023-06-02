class Student 
{
    constructor(){}  //Empty Initialization of constructor  


               //************************************** Functions Forfor spy *********************************************************// 

    home(type){   //lets suppose we are calling homepage function and defining what its type
        let data = this.getInfo(type,1) //passing 1  ==> hardcoded
        return data + 5;
    }

    userId(){
        return 12;
    }

    getInfo(type, status){
        return type;
    }


    //******************************************** Functions For stub  & also for mock ************************************************//

    // example 1
    finalMarksOfStudent(total){    //passed 50 while testing 

        //here finalSum depends on externalMarks and internalMarks .
        //suppose we dont know the externalMArks. So, we test by setting value of getMarksFromExternal() according to our view. in this case we use Stub 
        let externalMArks = this.getMarksFromExternal(total);  
        let internalMArks = this.getMarksFromInternal(total);
        let finalSum = externalMArks + internalMArks + 10;   // enjoy 10 marks ;)
        return finalSum; 
    }
    getMarksFromExternal(total){

        return total + 20 ;  //external teacher increasing 20 marks and sending to finalMarksOfStudent 
    }

    getMarksFromInternal(total){    //got 50 marks while testing => this function return 30 after returing (total -20)

        return total - 20 ;  //internal teacher decresing 20 marks and sending to finalMarksOfStudent 
    }

    // example 2
    sayHello(str) {
        console.log(str);
    }
    
    add(arg1, arg2) {
        var result;
        result = arg1 + arg2;
        return result;
    }

    callingAnotherFn(arg1, arg2) {
        this.sayHello("hello!! from the sayHello method");
        var result = this.add(arg1, arg2); //calling add method
        return result;
    }

    //******************************************Functions For Promises Testing ************************************************** */

    testPromise() {
        return new Promise (function(resolve, reject) {
            setTimeout(() => resolve(4), 5000);  //returns 1 as a result , after 3000 => 3 second
        }).then(function(result) {
            return result * 2;
        })
    }
}

module.exports = Student