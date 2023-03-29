const express=require('express');

const router=express.Router();

const homeController=require('../controller/home_controller')



router.get('/',homeController.home);
router.use('/users', require('./users'));
router.use('/users',require('./post'));
router.use('/users',require('./english'));
module.exports=router;