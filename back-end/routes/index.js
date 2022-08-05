const passport = require('passport');
const express = require('express')
const router = express.Router()
const usersController = require('../controller/usersController')


router.post("/google/login/:id", usersController.googleLogin)
router.post("/google/logout/:id", usersController.googleLogout)
router.post("/user/update", usersController.update)
router.post("/comment/new", usersController.createComment)
router.post("/comment/delete", usersController.removeComment)
router.get("/comments", usersController.getComments)

module.exports = router