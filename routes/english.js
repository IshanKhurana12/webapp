const express=require('express');
const router=express.Router();

const englishController=require('../controller/english_controller');


router.get('/english',englishController.eng);


module.exports=router;