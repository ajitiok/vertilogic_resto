const router = require('express').Router()
const ProductController = require('../controllers/productController')

router.get('/', ProductController.findAll)
router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)


module.exports = router