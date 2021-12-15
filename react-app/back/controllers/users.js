const bcrypt = require('bcryptjs');
const User = require('../models/UserSchema')
exports.createUser = async (req,res)=>{
    const {username,name,password} = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const user = await User.create({
        username: username,
        name: name,
        password:passwordHash,
      })
      res.json(user)
}