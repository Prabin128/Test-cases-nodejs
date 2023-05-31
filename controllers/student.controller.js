class Student {

    //for spy 
    constructor(){

    }
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


    //for stub 
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

    getMarksFromInternal(total){    //30

        return total - 20 ;  //internal teacher decresing 20 marks and sending to finalMarksOfStudent 
    }

}

module.exports = Student