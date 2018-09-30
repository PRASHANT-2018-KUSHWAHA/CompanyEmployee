let express = require("express");
let router = express.Router();
let companyController = require('../controller/companyController');

/**
 * This is the route for saving company
 */

 router.post('/saveNewCompany',(req,res)=>{
     console.log("this is from backend Routes file")
     console.log(req.body);
    
      
     let companyName = req.body.companyName; 
     let companyId = req.body.companyId;
     let companyAdress = req.body.companyAdress;
     let companyType = req.body.companyType;
     

     if(companyName && companyId){
         
         
         let record = {
             company_id:companyId,
             company_name: companyName,
             company_adress: companyAdress,
             company_type:companyType,
            
         }
       console.log(record);
       
         companyController.saveCompany(record).then((saveData)=>{
             if(saveData){
                 res.send({success:true, MSG:"Company Data Saved Successfully", data:saveData});

             }else{
                 res.send({success:false,MSG:"Company Data Not Saved"})
             }
         });
     }
 });

 /**
  * This is the Route for Fetching  the company details
  * 
  */
 router.get('/companyDetails',(req,res)=>{
     companyController.completeCompanyDetails().then(function(ResultData){
         if(ResultData){
            res.send({ success: true, MSG: 'Complete Company Details is Found', data: ResultData })
        } else {
            res.send({ success: false, MSG: 'Company Details Not Found' })
        }
     });
 });

 router.post('/deleteCompany',(req,res)=>{
    console.log(req.params);
    console.log(req.body);
    var id= req.body.params;
     companyController.deleteCompanyDetails(id).then(function(CompanyDetails){
        if(CompanyDetails){
            console.log("callback is in routes file");
        res.send({success:true,
            MSG:'Company deleted successfully',
            data:CompanyDetails
        });
       }
     });
 });
  
 router.post('/updateCompanyDetails',(req,res)=>{
     console.log('this is from backend routes file for update')
     console.log(req.body);
     var id = req.body._id;

     let companyUpdateObject ={
        company_id : req.body.company_id,
        company_name : req.body.company_name,
        company_adress : req.body.company_adress,
        company_type : req.body.company_type
     }

     companyController.updateCompanyDetails(id,companyUpdateObject).then((companyCallbackDetails)=>{
        console.log("companyDetails in routes");
        console.log(companyCallbackDetails);
        res.send({success:true,
            MSG:'Company details Updated'
        })
     })
 });



 module.exports = router;