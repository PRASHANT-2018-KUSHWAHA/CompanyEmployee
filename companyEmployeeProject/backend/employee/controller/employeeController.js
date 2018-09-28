let Promise = require('promise');
let employeeOperation= require('../database/operation/employeeOperation');

/**
 * this is the controller save function, This we use for saveing the employee record
 */

let saveEmployee = (parameter) => {
    console.log("this is from backend employee controller");
    console.log(parameter);
    
    return new Promise((resolve, reject) => {
        if (parameter) {
            employeeOperation.saveNewEmployee(parameter).then(function (dataFetchInController) {
                if (dataFetchInController) {


                    resolve(dataFetchInController);
                }
            });
        }
    });

};

let completeEmployeeDetails = ()=>{
    return new Promise((resolve, reject) => {
        employeeOperation.fetchEmployeeDetails().then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
}

let deleteEmployeeDetails = (id)=>{
    return new Promise ((resolve,reject)=>{
        employeeOperation.deleterEmployee(id).then((detailsFromOperation)=>{
            if(detailsFromOperation){
                console.log('callback is in backend controller file');
                
                console.log(detailsFromOperation);
                
                resolve(detailsFromOperation);
            }
        })
    })
}
let updateEmployeeDetails =(id,updateData)=>{
    return new Promise ((resolve,reject)=>{
        employeeOperation.employeeUpdate(id,updateData).then((callbackData)=>{
            if(callbackData){
                resolve(callbackData);
            }
        })
    }) 
}

module.exports = {
    saveEmployee: saveEmployee,
    completeEmployeeDetails: completeEmployeeDetails,   
    deleteEmployeeDetails :deleteEmployeeDetails,
    updateEmployeeDetails:updateEmployeeDetails
}