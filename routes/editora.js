const router = require("express").Router()
const editoraController = require("../controller/editoraController")

router.route('/editora').post((req, res) => editoraController.create(req, res))
router.route('/editora').get((req, res) => editoraController.read(req, res))
router.route('/editora/:id').delete((req, res) => editoraController.delete(req, res))
router.route('/editora/:id').put((req, res) => editoraController.update(req, res))
router.route('/buscarEditora/:texto').get((req, res) => editoraController.pesquisar(req, res))

module.exports = router