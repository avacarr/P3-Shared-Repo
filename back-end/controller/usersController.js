const Users = require('../models/Users')

const login = (req, res) => {
    
}

const index = (req, res) => {
    Users.find({}, (err, Users)=>{
        if(err){ 
        res.status(400).json(err)
        return
    }

    res.json(Users)

    })
}

const getHero = async (req, res) => {
    console.log(req.body);

    let newUsers = await Users.create(req.body)

    res.json(newUsers)
}


module.exports = {
    login,
    index,
    getHero
}