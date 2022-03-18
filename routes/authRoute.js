<<<<<<< HEAD
const express = require('express');
const router = express.Router()



const {
    register,
  login,
  logout,
} = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)


=======
const express = require('express');
const router = express.Router()



const {
    register,
  login,
  logout,
} = require('../controllers/authController')

router.post('/register', register)
router.post('/login', login)
router.get('/logout', logout)


>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
module.exports = router;