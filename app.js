const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//Server Creation
const app = express();

//Connect to Mongo
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  () => console.log("Connected to DB")
);

//import Routes
const employeesRoutes = require("./routes/employee_route");

//Boby_Parser
app.use(express.json());

//cors MiddleWare
app.use(cors());

//Routes MiddeleWare
app.use("/api/v1", employeesRoutes);

app.listen(5000, () => {
  console.log("Server Run on 5000 PORT number");
});
