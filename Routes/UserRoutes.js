const express = require('express')
const router = express.Router()

const UserController= require('../Controller/UserController');

router.get('/',UserController.index);
router.post('/Afficher',UserController.Afficher);
router.post('/Create',UserController.Create);
router.post('/Update',UserController.Update);
router.post('/Delete',UserController.Delete);

module.exports = router;
