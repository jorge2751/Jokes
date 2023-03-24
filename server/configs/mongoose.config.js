const mongoose = require('mongoose');

const dbName = "jokesdb"
const username = process.env.ATLAS_USERNAME // read variable in .env
const pw = process.env.ATLAS_PASSWORD
const uri = `mongodb+srv://${username}:${pw}@${dbName}.vnduczd.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err)); 