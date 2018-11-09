const mdb = require('./mongoClient')
const config = require("dotenv").config();

const mongoUrl = config.parsed.MONGO_HOST

initDB()
async function initDB() {
    await mdb.connect()
    await mdb.insert('profiles', {
        description: "After being alone for a long time",
        nationality: "Gambia",
        name: "Juln",
        username: "arnald",
        image: "url://"
    })
    await mdb.insert('profiles', {
        description: "Everything started back in the days",
        nationality: "Chile",
        name: "Fede",
        username: "baladi",
        image: "url://"
    })
    await mdb.insert('profiles', {
        description: "I left my country when I was 16",
        nationality: "Afghanistan",
        name: "Ahmed",
        username: "useiu",
        image: "url://"
    })
    mdb.closeConnection()
}
