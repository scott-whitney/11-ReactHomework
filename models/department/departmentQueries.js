const findAllDepartments = 'SELECT * FROM department;';
const findDepartmentById = 'SELECT * FROM department WHERE id = ?;';


module.exports = {
  findAllDepartments,
  findDepartmentById
}