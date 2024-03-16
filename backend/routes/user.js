const express = require('express');
const router = express.Router();
const { registerController , loginController,urlController,urlgetController,testerController,prologinController,testloginController,getController}  = require ('../contollers/auth.js');
router.post('/register', registerController)

router.post('/login', loginController)

router.post('/url', urlController)

router.get('/urlget', urlgetController)
// router.put('/tester', testerController)
router.post('/product', prologinController)
router.post('/test', testloginController)
router.get('/get', getController)
module.exports=router;