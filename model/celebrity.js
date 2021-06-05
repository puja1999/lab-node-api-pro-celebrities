const mongoose = require('mongoose'), Schema = mongoose.Schema;

const CelebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})


const Celebrity = mongoose.model("celebrities", CelebritySchema)

module.exports = {Celebrity};