let Promise = require('promise');
let employeeModel = require('../model/employeeModel');

/**
 * This is the operation file for saving the employee details.
 */

let saveNewEmployee = (parameter) => { 
    console.log("this is from backend employee operation")
    console.log(parameter);

    return new Promise((resolve, reject) => {
        if (parameter) {
            let saveemployee = employeeModel(parameter);
            saveemployee.save()
                .then(function (data) {
                    if (data) {
                        resolve(data);
                    }
                });
        }
    });
};

let fetchEmployeeDetails = ()=>{
    return new Promise((resolve, reject) => {
        employeeModel.find()
            .exec()
            .then((EmployeeDetailsFromDB) => {
                if (EmployeeDetailsFromDB) {
                    resolve(EmployeeDetailsFromDB);
                }
            });
    });
}

let deleterEmployee =(id)=>{
   return new  Promise((resolve,reject)=>{
       console.log("okoko")
       employeeModel.findByIdAndDelete(id).then((data)=>{
        console.log('data in operation file')
        console.log(data)
        if(data){
            resolve(data)
        }
       })
   })
}

let employeeUpdate=(id,data)=>{
    return new Promise((resolve,reject)=>{
        employeeModel.findByIdAndUpdate(id,{$set:data}).then((data)=>{
            console.log("from operation file");
            
            console.log(data);
            if(data){
                resolve(data)
            }
        })
    })
}

module.exports = {
    saveNewEmployee: saveNewEmployee,
    fetchEmployeeDetails: fetchEmployeeDetails,
    deleterEmployee:deleterEmployee,
    employeeUpdate:employeeUpdate
}