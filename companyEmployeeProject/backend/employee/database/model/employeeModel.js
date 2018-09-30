let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let newEmployeeSchema = Schema({

    employee_id:{
        type:String,
        required:true
    },
    employee_name:{
        type:String,
        required:true
    },
    employee_adress:{
        type:String,
        required:false
    },
    employee_company:{
        type:String,
        required:false
    }
    
});

let employee = module.exports = mongoose.model('Employee',newEmployeeSchema);