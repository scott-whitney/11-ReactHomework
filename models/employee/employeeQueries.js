const findAllEmployees = 'SELECT * FROM employee'
const findEmployeeById = 'SELECT * FROM employee WHERE id = ?;'

module.exports = {
  findAllEmployees,
  findEmployeeById
}