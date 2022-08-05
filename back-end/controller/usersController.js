const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Users = require('../models/Users');
const Comments = require('../models/Comments');

let loggedIn
var userID

const refreshLoginUser = async (email) => {
    let result = await Users.findOne({"email": email, createNew: false})
    return await result
}

const googleLogin = async (req, res) => {
    if (loggedIn = {}) {
        loggedIn = req.body
        userID = ""
        console.log("USER LOGGED IN")
    }
    
    let user = await refreshLoginUser(loggedIn.email)
    console.log("LoggedIn", loggedIn )
    if (user === null) { 
        console.log("Creating new user")
        let newUser = new Users({
            email: loggedIn.email,
            givenName: loggedIn.givenName,
            familyName: loggedIn.familyName,
            favorites: {
                comics: [],
                series: [],
                characters: [],
                events: []
            },
            view_history: {
                comics: [],
                series: [],
                characters: [],
                events: []
            }
        })
        await newUser.save()
        //res.redirect('/google/login')
        let user1 = await refreshLoginUser(loggedIn.email)
        console.log("user1", user1)
        userID = user1._id
        res.json(user1)
    } 
    if (user != null) {
        console.log("user", user)
        userID = user._id
        res.json(user)
    }
}


const googleLogout = async (req, res) => {
    console.log("USER LOGGED OUT")
    loggedIn = {}
    res.json()
}


const update = async (req, res) => {
    console.log("UPDATE USER")
    await Users.findByIdAndUpdate(userID, req.body)
    res.json()
}

const removeComment = async (req, res) => {
    data = req.body
    console.log("REMOVE COMMENT")
    await Comments.findOneAndDelete({"_id": req.body.id})
    res.json()
}


const createComment = async (req, res) => {
    data = req.body
    console.log("CREATED COMMENT", req.body)
    let newComment = await Comments(data)
    await newComment.save()
    res.json()
}


const getComments = async (req, res) => {
    let all = await Comments.find({})
    //console.log("all", all)
    res.json(all)
}

module.exports = {
    googleLogin,
    googleLogout,
    update,
    removeComment,
    createComment,
    getComments
}