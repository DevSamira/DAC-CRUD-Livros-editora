const Livro = require("../models/livro")

const livroController = {

    create: async (req, res) => {
        try {
            const livro = {
                titulo: req.body.titulo,
                dataDeLancamento: req.body.dataDeLancamento,
            }

            await Livro.create(livro)

            res.status(200).redirect("/livraria/livro")
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const responseRead = await Livro.find()

            res.status(201).render("../views/livro.ejs", {responseRead: responseRead})
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const livro = await Livro.findById(id)

            if(!livro){
                const msg = "Livro não econtrado!"
                return res.render('../views/erro.ejs', {msg})
            }

            const responseDelete = await Livro.findByIdAndDelete(id)

            res.status(200).redirect('/livraria/livro')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const livro = {
                titulo: req.body.titulo,
                dataDeLancamento: req.body.dataDeLancamento,
            }

            const responseUpdate = await Livro.findByIdAndUpdate(id, livro)

            if(!responseUpdate){
                const msg = "Livro não econtrado!"
                return res.render('../views/erro.ejs', {msg})
            }

            res.status(200).redirect('/livraria/livro')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    pesquisar: async (req, res) => { //PESQUISA
        const pesquisa = req.params.texto

        const responseRead = await Livro.find({titulo:pesquisa})

        res.render("../views/livro.ejs", {responseRead: responseRead})
    },
}

module.exports = livroController;