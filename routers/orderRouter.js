const router = require('express').Router()
const OrderController = require('../controllers/orderController')

router.get('/', OrderController.findAll)
router.post('/', OrderController.create)

module.exports = router