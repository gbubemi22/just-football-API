const express = require('express');
const { get } = require('mongoose');
const router = express.Router()
const {
getAllUsers,
getSingleUser,
updateUser,
updatePassword,
} = require('../controllers/userController')


router.route('/')
.get(getAllUsers)



router.route('/:id')
.get(getSingleUser)

router
.route('/updateUser')
.patch(updateUser)
router.route('/updatePassword').patch(updatePassword)



module.exports = router;