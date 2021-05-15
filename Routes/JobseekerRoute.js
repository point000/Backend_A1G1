
const express = require('express')
const router = express.Router();


const JobseekerCont= require('../Controller/JobseekerCont');

router.get('/',JobseekerCont.index);
router.post('/Afficher',JobseekerCont.Afficher);
router.post('/Create',JobseekerCont.Create);
router.post('/Update',JobseekerCont.Update);
router.post('/Delete',JobseekerCont.Delete);


module.exports = router;
