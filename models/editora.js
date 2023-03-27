const mongoose = require("mongoose")

const editoraSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true
    },
    origem :{
        type: String,
        required: true
    }
})

const editora = mongoose.model('editora', editoraSchema)

module.exports = editora;