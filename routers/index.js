const router = require('express').Router()
const RestoRouter = require('./restoRouter')
const ProductRouter = require('./productRouter')
const CustomerRouter = require('./customerRouter')
const OrderRouter = require('./orderRouter')

router.use('/restaurant', RestoRouter)
router.use('/product', ProductRouter)
router.use('/customer', CustomerRouter)
router.use('/orderlist' , OrderRouter)

module.exports = router