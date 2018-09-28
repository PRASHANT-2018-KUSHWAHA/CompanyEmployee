let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let newCompanySchema = Schema({
    company_id:{
        type:String,
        required:true
    },
    coampany_name:{
        type:String,
        required:false
    },
    company_adress:{
        type:String,
        required:false
    },
    company_type:{
       type:String,
       required:true
    }

});

let company = module.exports = mongoose.model('Company',newCompanySchema);