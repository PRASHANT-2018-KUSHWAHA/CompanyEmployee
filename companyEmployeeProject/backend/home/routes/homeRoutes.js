let express = require("express");
let router = express.Router();
let HomeController = require('../controller/homeController');



router.get('/fetchCompleteRecord',(req,res)=>{
       HomeController.fetchRecord().then(function(ResultData){
        if(ResultData){
            console.log(ResultData[0].length)
            console.log(ResultData[1].length)
           res.send({ success: true, MSG: ' Details is Found', data: ResultData })
       } else {
           res.send({ success: false, MSG: ' Details Not Found' })
       }
    });
})

module.exports=router;