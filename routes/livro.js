const router = require("express").Router()
const livroController = require("../controller/livroController")

router.route('/livro').post((req, res) => livroController.create(req, res))
router.route('/livro').get((req, res) => livroController.read(req, res))
router.route('/livro/:id').delete((req, res) => livroController.delete(req, res))
router.route('/livro/:id').put((req, res) => livroController.update(req, res))
router.route('/buscar/:texto').get((req, res) => livroController.pesquisar(req, res))

module.exports = router