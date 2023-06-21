const { registerMessage, loginMessage } = require('../constants/messages')
const UserModel = require('../models/userModels')

const createUser = async (req, res) => {
    //create user
  // const allusers = await UserModel.findAll()
    res.status(200).json({
        status: true,
        message: registerMessage
       // data : allusers
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