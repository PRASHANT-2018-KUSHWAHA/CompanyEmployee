let express = require("express");
let router = express.Router();
let employeeController = require('../controller/employeeController');


/**
 * This is the route for saving Employee details
 */

router.post('/saveNewEmployee',(req,res)=>{
    console.log("this is from backend Routes file")
    console.log(req.body);
   
     
    let employeeName = req.body.employeeName; 
    let employeeId = req.body.employeeId;
    let employeeAdress = req.body.employeeAdress;
    let employeeCompany = req.body.employeeCompany;
    

    if(employeeName && employeeId){
        
        
        let record = {
            employee_id:employeeId,
            employee_name: employeeName,
            employee_adress: employeeAdress,
            employee_company:employeeCompany,
        
        }
      console.log(record);
      
        employeeController.saveEmployee(record).then((saveData)=>{
            if(saveData){
                res.send({success:true, MSG:"employee Data Saved Successfully", data:saveData});

            }else{
                res.send({success:false,MSG:"employee Data Not Saved"})
            }
        });
    }
});


 /**
  * This is the Route for Fetching  the employee details
  * 
  */
 router.get('/employeeDetails',(req,res)=>{
    employeeController.completeEmployeeDetails().then(function(ResultData){
        if(ResultData){
           res.send({ success: true, MSG: 'Complete Employee Details is Found', data: ResultData })
       } else {
           res.send({ success: false, MSG: 'Employee Details Not Found' })
       }
    });
});

router.post('/deleteEmployee',(req,res)=>{
   console.log(req.params);
   console.log(req.query);
   console.log(req.body);
   var id= req.body.params;
    employeeController.deleteEmployeeDetails(id).then(function(EmployeeDetails){
       if(EmployeeDetails){
           console.log("callback is in routes file");
       res.send({success:true,
           MSG:'Employee deleted successfully',
           data:EmployeeDetails
       });
      }
    });
});
 
router.post('/updateEmployeeDetails',(req,res)=>{
    console.log('this is from backend routes file for update')
    console.log(req.body);
    var id = req.body._id;

    let employeeUpdateObject ={
       employee_id : req.body.employee_id,
       employee_name : req.body.employee_name,
       employee_adress : req.body.employee_adress,
       company_name : req.body.company_name
    }

    employeeController.updateEmployeeDetails(id,employeeUpdateObject).then((employeeCallbackDetails)=>{
       console.log("employeeDetails in routes");
       console.log(employeeCallbackDetails);
       res.send({success:true,
           MSG:'Employee details Updated'
       })
    })
});


module.exports = router;