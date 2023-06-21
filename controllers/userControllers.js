const { registerMessage, loginMessage } = require('../constants/messages')

const createUser = (req, res) => {
    //create user
    res.status(200).json({
        status: true,
        message: registerMessage 
    })
}


const userLogin = () => {
    //login user
    res.status(200).json({
        status: true,
        message: loginMessage
    })
}



module.exports = {
    createUser,
    userLogin
}