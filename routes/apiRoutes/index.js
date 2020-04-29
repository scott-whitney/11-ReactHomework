const router = require('express').Router();
const todoRoutes = require('./employeeRoutes');

// /api prepended to everyRoute inside of here
router.use('/employee', todoRoutes);


module.exports = router;