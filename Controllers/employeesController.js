const EmployeeModel = require('../Models/Employee');
const bcrypt = require("bcrypt");


const _getAll = async (req, res) => {

    console.log('get all employees');
    const employees = await EmployeeModel.findAll();

    res.json({
        "status": 200,
        "data": employees
    })
}

const _getById = async (req, res) => {
    console.log('get by id employee');
    const employee = await EmployeeModel.findByPk(req.params.id);

    if (employee === null) {
        return res.status(400).json({
            "message": "this employee doesn't exist "
        })
    }
    else {
        res.status(200).json({
            "status": 200,
            "data": employee
        })
    }

}

const _store = async (req, res) => {

    console.log('post employee');

    let emp = await EmployeeModel.findOne({
        where: {
            email: req.body.email
        }
    });

    if (emp !== null) {
        return res.status(400).json({
            "message": "this email already exist !"
        });
    }

    emp = await EmployeeModel.findOne({
        where: {
            phone: req.body.phone
        }
    });

    if (emp !== null) {
        return res.status(400).json({
            "message": "this phone already exist !"
        });
    }

    const employee = await EmployeeModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: await bcrypt.hash(req.body.password, 5)
    });

    res.json(employee);
}

const _update = async (req, res) => {
    console.log('update employee');

    const employee = await EmployeeModel.findByPk(req.params.id);

    if (employee === null) {
        return res.status(400).json({
            "message": "this employee doesn't exist "
        })
    }
    else {
        let updatedEmp = await EmployeeModel.update({
            firstName: req.body.firstName,
            lastName: req.body.lastName
        }, {
            where: {
                id: req.params.id
            }
        });

        res.json({
            "message": "updated done !"
        })
    }


}

const _delete = async (req, res) => {
    console.log('delete employee');
    const deletedEmp = await EmployeeModel.destroy({
        where: {
            id: req.params.id
        }
    })

    if (deletedEmp) {
        res.json({ 'msg': "this employee has been deleted" })
    } else {
        res.status(400).json({ "msg": "this employee doesn't exist " })
    }

}

module.exports = {
    _getAll,
    _getById,
    _store,
    _update,
    _delete
}