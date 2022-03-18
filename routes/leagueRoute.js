const express = require('express');
const router = express.Router()
const upload = require('../middleware/uploadImage')
const path = require('path')



const {
    createLeague,
    getAllLeagues,
    getSingleLeague,
    updateLeague,
    deleteLeague,
} = require('../controllers/leagueController')


const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');

router
.route('/')
.post(authenticateUser,authorizePermissions('superAdmin'),upload.single('logo'),createLeague)
.get(getAllLeagues)




router.route('/:id')
.get(authenticateUser,getSingleLeague)
.patch(authenticateUser,authorizePermissions('superAdmin'),updateLeague)
.delete(authenticateUser,authorizePermissions('superAdmin'),deleteLeague)


module.exports = router;



