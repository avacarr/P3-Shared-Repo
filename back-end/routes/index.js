
const router = require('express').Router()
const usersController = require('../controller/usersController')

router.get('/', usersController.index )
router.get('/login', usersController.login )
router.get('/:id', usersController.getHero)

module.exports = router