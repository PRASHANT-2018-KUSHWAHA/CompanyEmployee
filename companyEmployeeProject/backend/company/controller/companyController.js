let Promise = require('promise');
let companyOperation= require('../database/operation/companyOperation');

/**+
 * this is the controller save function, This we use for saveing the company record
 */

let saveCompany = (parameter) => {
    console.log("this is from backend company controller");
    console.log(parameter);
    
    return new Promise((resolve, reject) => {
        if (parameter) {
            companyOperation.saveNewCompany(parameter).then(function (dataFetchInController) {
                if (dataFetchInController) {


                    resolve(dataFetchInController);
                }
            });
        }
    });

};

let completeCompanyDetails = ()=>{
    return new Promise((resolve, reject) => {
        companyOperation.fetchCompanyDetails().then((dataFromOperation) => {
            if (dataFromOperation) {
                resolve(dataFromOperation);
            }
        });
    });
}

let deleteCompanyDetails = (id)=>{
    return new Promise ((resolve,reject)=>{
        companyOperation.deleterCompany(id).then((detailsFromOperation)=>{
            if(detailsFromOperation){
                console.log('callback is in backend controller file');
                
                console.log(detailsFromOperation);
                
                resolve(detailsFromOperation);
            }
        })
    })
}
let updateCompanyDetails =(id,updateData)=>{
    return new Promise ((resolve,reject)=>{
        companyOperation.companyUpdate(id,updateData).then((callbackData)=>{
            if(callbackData){
                resolve(callbackData);
            }
        })
    }) 
}

module.exports = {
    saveCompany: saveCompany,
    completeCompanyDetails: completeCompanyDetails,   
    deleteCompanyDetails :deleteCompanyDetails,
    updateCompanyDetails:updateCompanyDetails
}