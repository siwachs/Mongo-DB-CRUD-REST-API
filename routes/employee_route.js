const router = require("express").Router();
const employee_controllers = require("../controllers/employee_controllers");

router.get("/employees", employee_controllers.getAllEmployee);

router.get("/employees/:eid", employee_controllers.getSingleEmployeeById);

router.post("/create", employee_controllers.addNewEmployee);

router.patch("/update/:eid", employee_controllers.updateEmployeeById);

router.delete("/delete/:eid", employee_controllers.deleteEmployeeByID);

module.exports = router;
