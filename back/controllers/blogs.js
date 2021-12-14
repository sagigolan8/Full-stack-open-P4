const Blog = require('../models/BlogSchema')

exports.postBlog = async (request, response) => {
  let likes = 0;
  if (request.body.likes) likes = request.body.likes
  const blog = { likes, ...request.body };
  if(!request.body.title || !request.body.url){
  response.status(400).send('should include title and url')
  return
  }
  await Blog.insertMany(blog);
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
    const id = request.params.id
    const res = await Blog.deleteOne({_id:id})
    response.json(res)
  }
exports.deleteBlogs = async (request,response)=>{ //for delete all
  await Blog.deleteMany()
  response.send('nice')
}
