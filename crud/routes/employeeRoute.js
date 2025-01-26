const express=require('express')
const router=express.Router();
const employeeController=require('../controller/employeeController')

router.post("/add-emp",employeeController.createEmployee);
router.get("/getemployees",employeeController.getEmployees);
router.get("/getemp/:id",employeeController.getEmployee);
router.put("/update-emp/:id",employeeController.updateEmployee);

module.exports=router;