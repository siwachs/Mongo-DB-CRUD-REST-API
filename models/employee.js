const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employee_name: String,
  employee_salary: Number,
  employee_age: Number,
  profile_image: String,
  details: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
