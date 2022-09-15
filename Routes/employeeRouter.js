const { _getAll, _getById, _store, _update, _delete } = require('../Controllers/employeesController')
const employeeRouter = require('express').Router();



//get all employees
employeeRouter.get('/', _getAll);

//get one employee by ID
employeeRouter.get('/:id', _getById);

//post a new employee 
employeeRouter.post('/', _store);

//edit an exist employee by id
employeeRouter.put('/:id', _update);

//delete an exist employee by id
employeeRouter.delete('/:id', _delete);

module.exports = employeeRouter;