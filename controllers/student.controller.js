class Student {
    constructor(){

    }
    home(type){   //lets suppose we are calling homepage function and defining what its type
        let data = this.getInfo(type,1) //passing 1 
        return data + 5;
    }
    userId(){
        return 12;
    }

    getInfo(type, status){
        return type;
    }
}

module.exports = Student