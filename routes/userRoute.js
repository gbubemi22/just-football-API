<<<<<<< HEAD
const express = require('express');
//const { get } = require('mongoose');
const router = express.Router()
const {
getAllUsers,
getSingleUser,
updateUser,
updatePassword,
} = require('../controllers/userController');

const {
    authenticateUser,
    authorizePermissions
} = require('../middleware/authentication')


router.route('/')
.get(authenticateUser,authorizePermissions('admin','superAdmin'), getAllUsers)



router.route('/:id')
.get(authenticateUser,getSingleUser)

router
.route('/updateUser')
.patch(authenticateUser, updateUser)
router.route('/updatePassword').patch(authenticateUser, updatePassword)



=======
const express = require('express');
//const { get } = require('mongoose');
const router = express.Router()
const {
getAllUsers,
getSingleUser,
updateUser,
updatePassword,
} = require('../controllers/userController');

const {
    authenticateUser,
    authorizePermissions
} = require('../middleware/authentication')


router.route('/')
.get(authenticateUser,authorizePermissions('admin','superAdmin'), getAllUsers)



router.route('/:id')
.get(authenticateUser,getSingleUser)

router
.route('/updateUser')
.patch(authenticateUser, updateUser)
router.route('/updatePassword').patch(authenticateUser, updatePassword)



>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
module.exports = router;