const connection = require('../config/connection');
const employeeQueries = require('../models/employee/employeeQueries');

module.exports = {
  getAllEmployees: async (req, res) => {
    console.log("me?")
    try{
      const [employee] = await connection.query(employeeQueries.findAllEmployees);
      return res.status(200).json(employee);
    } catch (e) {
      res.status(403).json({ e });
      console.log("am I the problem?")
    }
  },
  getEmployeeById: async (req, res) => {
    console.log("no me")
    try {
      const [employee] = await connection.query(employeeQueries.findEmployeeById, id);
      res.status(200).json(employee[0]);
    } catch (e) {
      res.status(403).json({ e })
      console.log("no im the problem")
      
    }
  }
}