const router = require('express').Router()
const { getBlogs, postBlog, deleteBlog , updateBlog} = require('../controllers/blogs')

router.get('/', getBlogs)
  
router.post('/',postBlog)

router.put('/', updateBlog)

router.delete('/:id',deleteBlog)

module.exports = router
