<<<<<<< HEAD
const express = require('express');
const router = express.Router()
const upload = require('../middleware/uploadImage')

const {
    createTeam,
    getSingleTeam,
    getAllTeams,
    updateTeam,
    deleteTeam,
} = require('../controllers/teamController')

const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');



  // router
  // .route('/uploadImage')
  // .post([authenticateUser, authorizePermissions('superAdmin')], upload);


router
.route('/')
.post(authenticateUser,authorizePermissions('superAdmin'),createTeam)
.get(getAllTeams)


router.route('/:id')
.get(authenticateUser,getSingleTeam)
.patch(authenticateUser,authorizePermissions('superAdmin'),updateTeam)
.delete(authenticateUser,authorizePermissions('superAdmin'),deleteTeam)


module.exports = router;


=======
const express = require('express');
const router = express.Router()


const {
    createTeam,
    getSingleTeam,
    getAllTeams,
    updateTeam,
    deleteTeam,
} = require('../controllers/teamController')

const {
    authenticateUser,
    authorizePermissions,
  } = require('../middleware/authentication');



router
.route('/')
.post(authenticateUser,authorizePermissions('superAdmin'),createTeam)
.get(getAllTeams)


router.route('/:id')
.get(authenticateUser,getSingleTeam)
.patch(authenticateUser,authorizePermissions('superAdmin'),updateTeam)
.delete(authenticateUser,authorizePermissions('superAdmin'),deleteTeam)


module.exports = router;


>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
