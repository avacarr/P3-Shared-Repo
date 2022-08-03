const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const Users = require('../models/Users');


const googleLogin = async (req, res) => {
    console.log("googleLogin called", req.data)
    // const { token }  = req.body
    // const ticket = await client.verifyIdToken({
    //     idToken: token,
    //     audience: process.env.GOOGLE_CLIENT_ID
    // });
    // const { name, email, picture } = ticket.getPayload();    
    // const user = await db.user.upsert({ 
    //     where: { email: email },
    //     update: { name, picture },
    //     create: { name, email, picture }
    // })
    // res.status(201)
    // res.json(user)
    res.json(JSON.parse(`{"Success": "true"}`))
}

const googleLogout = async (req, res) => {
    console.log("googleLogin called", req.data)
    
}


const getCharacter = async (req, res) => {
    console.log(req.body);

    //let getHero = await getHero.find(req.body)

    res.json(getHero)
}

const getEvent = async (req, res) => {
    console.log(req.body)

    //let getEvent = await getEvent.find(req.body)

    res.json(getEvent)
}

module.exports = {
    googleLogin,
    googleLogout,
    getCharacter,
    getEvent
}