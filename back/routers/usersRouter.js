const router = require('express').Router()
const { createUser, getUsers } = require('../controllers/users')
const { userValidate } = require('../middleware/usersAuth')

router.post('/', userValidate ,createUser)

router.get('/', getUsers);

module.exports = router