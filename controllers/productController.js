const { Product } = require('../models')

class ProductController {

  static findAll( req, res ) {
    Product.findAll()
      .then(product => {
        res.status(200).json(product)
      })
      .catch(err => {
        console.log(err)
      })
  }


  static create( req, res ) {
    const { name , description , price, halal, restoId } = req.body

    Product.create({
      name,
      description,
      price,
      halal,
      restoId
    })
    .then(product => {
      res.status(201).json(product)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static update(req, res ){
    const { name  , description , price, halal } = req.body
    const { id } = req.params

    Product.findByPk(id)
      .then(product => {
        if ( !product ) throw { msg : 'Product not Found'}
        return product.update({
          name , 
          description,
          price,
          halal
        })
      })
      .then( product => {
        res.status(200).json(product)
      })
      .catch(err => {
        console.log(err);
      })
  }


  static delete( req, res ){
    const { id } = req.params

    Product.destroy({
      where : {
        id
      }
    })
    .then(product => {
      res.status(200).json({
        msg : `Product with id : ${id} deleted`
      })
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = ProductController