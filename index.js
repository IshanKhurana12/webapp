const express=require('express');
const app=express();
const port=8000;
const db=require('./config/mongoose');
const expressLayouts=require('express-ejs-layouts');
//use exxpress router

app.use(expressLayouts);
app.use('/',require('./routes/index'));

app.use(express.static('./assets'));

//setting the view engine
app.set('view engine','ejs');

app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log(`error in eunning the server: ${err}`);
    }
    console.log(`server is running on port :${port}`);
});
 