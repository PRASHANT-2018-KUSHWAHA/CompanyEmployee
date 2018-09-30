/**
 * Third-party modules import
 */
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require('body-parser');
let http =  require('http');
let path = require('path');

/**
 * Custom Defined Modules
 */
let config = require('./config/config');
let Company = require('./backend/company/routes/companyRoutes');
let Employee = require('./backend/employee/routes/employeeRoutes');
let Home = require('./backend/home/routes/homeRoutes');
/**
 * ExpressJs function instance
 */

 let app = express();

 //middleware
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));

 app.use(express.static(path.join(__dirname,'dist/companyEmployeeProject')));

 //This is the static file for Angular 6
 //app.use(express.static(__dirname,'/dist/companyEmployeeProject'));

 /**
  * Main Routes for Particular Rest API
  */
 app.use('/employee',Employee);
 app.use('/company',Company);
 app.use('/home',Home);



 //This is the Default Route for Angular 6
// app.get('*', function (req, res, next) {
//     res.sendFile(path.join(__dirname));
// })
//Default Route
app.get('*', function (req, res, next) {
    res.sendFile(path.join(__dirname, 'dist'));
})

//server start 


app.listen(config.port, function (err) {
    if (err) {
        console.log('error found in server start' + err);
    } else {
        console.log("connected to server at port " + config.port);
    }
});


//databse connectivity
mongoose.connect(config.database);
mongoose.connection.on("connected", function (err) {
    if (err) {
        console.log("error in database connectivity" + err);
    } else {
        console.log('connected to database at port 27017');
    }
});
