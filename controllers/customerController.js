const { Customer } = require('../models')

class CustomerController {

  static findAll( req, res ){

    Customer.findAll()
      .then(customer => {
        res.status(200).json(customer)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static create( req, res ) {
    const { name , alamat } = req.body

    Customer.create({
      name,
      alamat
    })
    .then(customer => {
      res.status(201).json(customer)
    })
    .catch(err => {
      console.log(err);
    })
  }

}

module.exports = CustomerController