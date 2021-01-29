const { Restaurant , Product } = require('../models')

class RestoController {

  static findAll( req , res ) {
    Restaurant.findAll({
      include: {
        model : Product,
        as: 'Products'
      }
    })
      .then(resto => {
        res.status(200).json(resto)
      })
      .catch(err => {
        console.log(err)
      })
  }

  static create( req, res ) {
    const { Name , alamat , noTelp } = req.body 

    Restaurant.create({
      Name, 
      alamat,
      noTelp
    })
    .then(resto => {
      res.status(201).json(resto)
    })
    .catch(err => {
      console.log(err)
    })
  }

  static update( req, res ) {
    const { Name , alamat , noTelp } = req.body 
    const { id } = req.params

    Restaurant.findByPk(id)
      .then( resto => {
        if ( !resto ) throw { msg : 'Restaurant not Found' }
        return resto.update({Name , alamat , noTelp})
      })
      .then( resto => {
        res.status(200).json(resto)
      })
      .catch(err => {
        console.log(err);
      })
  }

  static delete( req, res ) {
    const { id } = req.params

    Restaurant.findByPk(id)
      .then(resto => {
        if (!resto) throw { msg : 'Restaurant not found'}
        return resto.destroy()
      })
      .then(resto => {
        res.status(200).json({
          msg : `Restaurant with id : ${id} deleted`
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

}

module.exports = RestoController