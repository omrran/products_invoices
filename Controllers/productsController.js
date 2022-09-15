const ProductModel = require('../Models/Product');
const { Op } = require("sequelize");

//get all unpaid products 
const _getAll = async (req, res) => {
    console.log('get all products');

    const products = await ProductModel.findAll({
        where: {
            invoiceID: null
        }
    });

    res.json({
        "status": 200,
        "data": products
    })
}

const _getById = async (req, res) => {
    console.log('get by id product');
    
    const product = await ProductModel.findByPk(req.params.id);

    if (product === null) {
        return res.status(400).json({
            "message": "this product doesn't exist "
        })
    }
    else {
        res.status(200).json({
            "status": 200,
            "data": product
        })
    }
}

const _store = async (req, res) => {
    console.log('post product');

    const product = await ProductModel.create({
        name: req.body.name,
        price: req.body.price
    });

    res.json(product);
}

const _update = (req, res) => {
    console.log('update product');
    res.json({
        "msg": "nothing to update now"
    })
}

const _delete = async (req, res) => {
    console.log('delete product');
    const deletedPro = await ProductModel.destroy({
        where: {
            id: req.params.id,
            invoiceID: {
                [Op.eq]: null
            }
        }
    })

    if (deletedPro) {
        res.json({ 'msg': "this product has been deleted" })
    } else {
        res.status(400).json({ "msg": "this product doesn't exist " })
    }
}

module.exports = {
    _getAll,
    _getById,
    _store,
    _update,
    _delete
}