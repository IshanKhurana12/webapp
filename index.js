const express=require('express');
const app=express();
const port=8000;


//use exxpress router
app.use('/',require('./routes/index'));
app.listen(port,function(err){
    if(err){
        console.log(`error in eunning the server: ${err}`);
    }
    console.log(`server is running on port :${port}`);
});
 