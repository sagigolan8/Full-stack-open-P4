const Blog = require('../models/BlogSchema')

exports.postBlog = async (request, response) => {
  let likes = 0;
  if (request.body.likes) likes = request.body.likes;
  const blog = { likes, ...request.body };
  await Blog.insertMany(blog);
  response.send(blog);
};

exports.getBlogs = async (request, response) => {
    const res = await Blog.find({})
        response.json(res)
  }
