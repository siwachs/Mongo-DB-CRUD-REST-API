const Employee = require("../models/employee");

//Get all employee
const getAllEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.json({ message: error });
  }
};

//Get Single employee
const getSingleEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.eid);
    res.json(employee);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add new employee
const addNewEmployee = async (req, res) => {
  const employee = new Employee({
    employee_name: req.body.employee_name,
    employee_salary: req.body.employee_salary,
    employee_age: req.body.employee_age,
    profile_image: req.body.profile_image,
    details: req.body.details,
  });
  try {
    const savedEmployee = await employee.save();
    res.send(savedEmployee);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Update employee
const updateEmployeeById = async (req, res) => {
  const employee = {
    employee_name: req.body.employee_name,
    employee_salary: req.body.employee_salary,
    employee_age: req.body.employee_age,
    profile_image: req.body.profile_image,
    details: req.body.details,
  };
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      {
        _id: req.params.eid,
      },
      employee
    );
    res.json(employee);
  } catch (error) {
    res.json({ error });
  }
};

//delete employee
const deleteEmployeeByID = async (req, res) => {
  try {
    const removedEmployee = await Employee.findByIdAndDelete(req.params.eid);
    res.json(removedEmployee);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  getAllEmployee,
  getSingleEmployeeById,
  updateEmployeeById,
  deleteEmployeeByID,
  addNewEmployee,
};
