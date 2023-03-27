const mongoose = require("mongoose")

const livroSchema = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    dataDeLancamento :{
        type: String,
        required: true
    }
})

const livro = mongoose.model('livro', livroSchema)

module.exports = livro;