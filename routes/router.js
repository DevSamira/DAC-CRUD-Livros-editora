const router = require("express").Router()
const livroRouter = require("./livro.js")
const editoraRouter = require("./editora")

/* router.get('/', async (req, res) => {
    res.render('../views/home.html')
}) */

router.use('/', livroRouter)
router.use('/', editoraRouter)

module.exports = router