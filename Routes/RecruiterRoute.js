const express = require('express')
const router = express.Router()

const RecruiterCont= require('../Controller/RecruiterCont');

router.get('/',RecruiterCont.index);
//router.post('/Afficher',RecruiterCont.Afficher);
router.get('/:RecuiterID',RecruiterCont.Afficher);
router.post('/Create',RecruiterCont.Create);
router.patch('/:RecuiterID',RecruiterCont.Update);
router.delete('/:RecuiterID',RecruiterCont.Delete);

module.exports = router;
