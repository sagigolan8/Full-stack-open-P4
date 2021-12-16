const Blog = require('../models/BlogSchema')
const User = require('../models/UserSchema')

exports.postBlog = async (request, response) => {
  const user = request.user
  let likes = 0;
  if (request.body.likes) likes = request.body.likes
  let blog = { likes, ...request.body };
  blog = {user,...blog}
  if(!request.body.title || !request.body.url){
  response.status(400).send('should include title and url')
  return
  }
  const newBlog = await Blog.create(blog);
  await User.findOneAndUpdate({_id:user.id},{$push:{ blogs: {_id: newBlog.id,...blog} }})
  response.send(blog);
};

exports.getBlogs = async (request, response) => {
    const res = await Blog.find({})
    response.json(res)
  }

exports.updateBlog = async (request, response) => {
    const {likes,_id} = request.body
    await Blog.findOneAndUpdate({_id},{likes})
    response.send('updated successfully')
  }

exports.deleteBlog = async (request, response) => {
  try {
    const id = request.params.id
     await Blog.deleteOne({_id:id})
    response.send('deleted successfully')
  } catch (error) {
    return response.status(422).send('wrong id, this blog does\'nt exist')
  }
  }

