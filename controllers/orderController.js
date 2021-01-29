const { Order , Customer , Product } = require('../models')

class OrderController {

  static findAll(req, res ){
    Order.findAll({
      include: [{
        model : Customer,
        as : 'Customer'
      },
      {
        model : Product,
        as : 'Product'
      }]
    })
      .then(order => {
        res.status(200).json(order)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static create( req, res ){
    const { CustomerId  , ProductId, quantity , request } = req.body

    Order.create({
      CustomerId,
      ProductId,
      quantity,
      request
    })
    .then(order => {
      res.status(201).json(order)
    })
    .catch(err => {
      console.log(err);
    })
  }



}

module.exports = OrderController