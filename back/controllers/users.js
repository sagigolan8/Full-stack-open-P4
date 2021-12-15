const bcrypt = require('bcryptjs');
const User = require('../models/UserSchema')
const Blog = require('../models/BlogSchema')

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

exports.getUser = async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
}