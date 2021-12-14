const router = require('express').Router()
const { getBlogs, postBlog, deleteBlog ,deleteBlogs, updateBlog} = require('../controllers/blogs')
const Blog = require('../models/BlogSchema')

router.get('/blogs', getBlogs)
  
router.post('/blogs', postBlog)

router.put('/blogs', updateBlog)

router.delete('/blogs/:id', deleteBlog)

router.delete('/blogsAll', deleteBlogs)  

module.exports = router