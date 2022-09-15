const productRouter = require('express').Router();
const { _getAll, _getById, _store, _update, _delete } = require('../Controllers/productsController')

//get all products
productRouter.get('/', _getAll);

//get one product by ID
productRouter.get('/:id', _getById);

//post a new product 
productRouter.post('/', _store);

//edit an exist product by id
productRouter.put('/:id', _update);

//delete an exist product by id
productRouter.delete('/:id', _delete);

module.exports = productRouter;