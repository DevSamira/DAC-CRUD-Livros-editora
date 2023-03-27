const Editora = require("../models/editora")

const editoraController = {

    create: async (req, res) => {
        try {
            const editora = {
                nome: req.body.nome,
                origem: req.body.origem,
            }

            await Editora.create(editora)

            res.status(200).redirect("/livraria/editora")
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    read: async (req, res) => {
        try {
            const responseRead = await Editora.find()

            res.status(201).render("../views/editora.ejs", {responseRead: responseRead})
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    delete: async (req, res) => {
        try {
            const id = req.params.id

            const editora = await Editora.findById(id)

            if(!editora){
                const msg = "Editora não econtrada!"
                return res.render('../views/erro.ejs', {msg})
            }

            const responseDelete = await Editora.findByIdAndDelete(id)

            res.status(200).redirect('/livraria/livro')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    update: async (req, res) => {
        try {
            const id = req.params.id

            const editora = {
                nome: req.body.nome,
                origem: req.body.origem,
            }

            const responseUpdate = await Editora.findByIdAndUpdate(id, editora)

            if(!responseUpdate){
                const msg = "Editora não econtrado!"
                return res.render('../views/erro.ejs', {msg})
            }

            res.status(200).redirect('/livraria/editora')
        } catch (error) {
            console.log(`ERRO: ${error}`)
        }
    },
    pesquisar: async (req, res) => { 
        const pesquisa = req.params.texto

        const responseRead = await Editora.find({origem: pesquisa})

        res.render("../views/editora.ejs", {responseRead: responseRead})
    },
}

module.exports = editoraController;