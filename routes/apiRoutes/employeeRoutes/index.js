const router = require('express').Router();
// /api/todos prepended to every route inside of here
const todosController = require('../../../controllers/employeeController');

// /api/todos
router.route('/')
  .get(todosController.getAllEmployees)
  // .post(todosController.addEmployee);


router.route('/:id')
  .get(todosController.getEmployeeById)
  // .delete(todosController.deleteEmployeeId);

module.exports = router;