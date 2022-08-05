const mongoose = require('mongoose')

mongoose.connect(process.env.REACT_APP_DATABASE_URL, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
  });

const db = mongoose.connection

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.name}:${db.port}`)
})

