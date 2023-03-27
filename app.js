// Importações de pacotes
const express = require("express")
const cors = require("cors")
const parser = require("body-parser")
const methodOverride = require("method-override")
const banco = require("./db/banco")
const routes = require("./routes/router")
const app = express()

// Iniciando o Cors
app.use(cors())

// Iniciando o express parser
app.use(parser.urlencoded({extended: false}))
app.use(parser.json())

// Iniciando o banco
banco()

// Iniciando o method-override
app.use(methodOverride('_method'))

// Iniciando as rotas
app.use('/livraria', routes)

// Iniciando o view engine
app.set('view engine', 'ejs')

// Listando porta da aplicação
app.listen(3002, () => {
    console.log("SERVER RODANDO! http://localhost:3002/livraria/livro")
})