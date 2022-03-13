const express = require('express');
const router = express.Router()


const {
    createPlayer,
    getSinglePlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
} = require('../controllers/playerController')


router
.route('/')
.post(createPlayer)
.get(getAllPlayers)


router.route('/:id')
.get(getSinglePlayer)
.patch(updatePlayer)
.delete(deletePlayer)


module.exports = router;


