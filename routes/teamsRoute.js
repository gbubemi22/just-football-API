const express = require('express');
const router = express.Router()


const {
    createTeam,
    getSingleTeam,
    getAllTeams,
    updateTeam,
    deleteTeam,
} = require('../controllers/teamController')


router
.route('/')
.post(createTeam)
.get(getAllTeams)


router.route('/:id')
.get(getSingleTeam)
.patch(updateTeam)
.delete(deleteTeam)


module.exports = router;


