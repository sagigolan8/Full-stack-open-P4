const Blog = require('../models/BlogSchema')


exports.getBlogs =(request, response) => {
    Blog
      .find({})
      .then(blogs => {
        response.json(blogs)
      })
  }

exports.postBlog = (request, response) => {
    const blog = new Blog(request.body)
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  }