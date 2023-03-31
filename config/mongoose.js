const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/development');

const db=mongoose.connection;
db.on('error',console.error.bind(console,"error occured while connecting to the db"));

db.once('open',function(){
    console.log('connected to database');
});


module.exports=db;