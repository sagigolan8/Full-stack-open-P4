const router = require('express').Router()
const { getBlogs, postBlog } = require('../controllers/blogs')

router.get('/blogs', getBlogs)
  
router.post('/blogs',postBlog)

module.exports = router