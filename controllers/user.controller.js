
const userList = (req,res) => {
    let data = {
        list: "Hello"
    }
    res.status(200).json({
        statusText : "success",
        data  
        

    });
}

module.exports = {
    userList
}