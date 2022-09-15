const InvoiceModel = require('../Models/Invoice');

const _getAll = (req, res) => {
    console.log('get all invoices');
}
const _getById = (req, res) => {
    console.log('get by id invoice');
}
const _store = (req, res) => {
    console.log('post invoice');
    
}
const _update = (req, res) => {
    console.log('update invoice');
}
const _delete = (req, res) => {
    console.log('delete invoice');
}

module.exports = {
    _getAll,
    _getById,
    _store,
    _update,
    _delete
}