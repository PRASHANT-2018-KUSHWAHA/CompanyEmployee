let Promise = require('promise');
let companyModel = require('../model/companyModel');

/**
 * This is the operation file for saving the Company details.
 */

let saveNewCompany = (parameter) => {
    console.log("this is from backend company operation")
    console.log(parameter);

    return new Promise((resolve, reject) => {
        if (parameter) {
            let savecompany = companyModel(parameter);
            savecompany.save()
                .then(function (data) {
                    if (data) {
                        resolve(data);
                    }
                });
        }
    });
};

let fetchCompanyDetails = ()=>{
    return new Promise((resolve, reject) => {
        companyModel.find()
            .exec()
            .then((CompanyDetailsFromDB) => {
                if (CompanyDetailsFromDB) {
                    resolve(CompanyDetailsFromDB);
                }
            });
    });
}

let deleterCompany =(id)=>{
   return new  Promise((resolve,reject)=>{
       console.log("okoko")
       companyModel.findByIdAndDelete(id).then((data)=>{
        console.log('data in operation file')
        console.log(data)
        if(data){
            resolve(data)
        }
       })
   })
}

let companyUpdate=(id,data)=>{
    return new Promise((resolve,reject)=>{
        companyModel.findByIdAndUpdate(id,{$set:data}).then((data)=>{
            console.log("from operation file");
            
            console.log(data);
            if(data){
                resolve(data)
            }
        })
    })
}

module.exports = {
    saveNewCompany: saveNewCompany,
    fetchCompanyDetails: fetchCompanyDetails,
    deleterCompany:deleterCompany,
    companyUpdate:companyUpdate
}