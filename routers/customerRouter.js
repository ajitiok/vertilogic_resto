const router = require('express').Router()
const CustomerController = require('../controllers/customerController')

router.get('/', CustomerController.findAll)
router.post('/', CustomerController.create)


module.exports = router