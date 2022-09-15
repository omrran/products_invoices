const { _getAll, _getById, _store, _update, _delete } = require('../Controllers/invoicesController')
const invoiceRouter = require('express').Router();

//get all invoices
invoiceRouter.get('/',_getAll);

//get one invoice by ID
invoiceRouter.get('/:id',_getById);

//post a new invoice 
invoiceRouter.post('/',_store);

//edit an exist invoice by id
invoiceRouter.put('/:id',_update);

//delete an exist invoice by id
invoiceRouter.delete('/:id',_delete);

module.exports = invoiceRouter;