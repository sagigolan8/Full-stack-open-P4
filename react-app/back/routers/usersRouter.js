const router = require('express').Router()
const { createUser } = require('../controllers/users')
const { userValidate } = require('../middleware/users')

router.post('/', userValidate ,createUser)

module.exports = router