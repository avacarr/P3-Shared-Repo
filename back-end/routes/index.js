const passport = require('passport');
const express = require('express')
const router = express.Router()
const usersController = require('../controller/usersController')

router.post("/google/login", usersController.googleLogin)
router.post("/google/logout", usersController.googleLogout)
// router.post('/characters/:id', usersController.getCharacter)
// router.get('/:id', usersController.getHero)
// router.get('/:id', usersControllers.getEvent)

module.exports = router