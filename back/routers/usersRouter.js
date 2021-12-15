const router = require('express').Router()
const { createUser, getUser } = require('../controllers/users')
const { userValidate } = require('../middleware/usersAuth')

router.post('/', userValidate ,createUser)

router.get('/', getUser);

module.exports = router