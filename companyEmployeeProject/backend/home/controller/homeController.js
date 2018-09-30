let Promise = require('promise');
let employeeOperation= require('../../employee/database/operation/employeeOperation');
let companyOperation= require('../../company/database/operation/companyOperation');

/**
 * this is the controller for fetching employ and company record
 */
let fetchRecord=()=>{
    return new Promise((resolve, reject) => {
        var Promise1=companyOperation.fetchCompanyDetails();
        var Promise2=employeeOperation.fetchEmployeeDetails();
       
        
        Promise.all([Promise1,Promise2]).then((data)=>{
            console.log('data is in Promise.all');
            console.log(data);
            console.log('-------------------------------------------')
            resolve(data);
        
        });

    });
};

module.exports = {
 fetchRecord:fetchRecord,

}