const router = require('express').Router()
const RestoController = require('../controllers/restoController')

router.get('/', RestoController.findAll )
router.post('/', RestoController.create)
router.put('/:id', RestoController.update)
router.delete('/:id', RestoController.delete)

module.exports = router