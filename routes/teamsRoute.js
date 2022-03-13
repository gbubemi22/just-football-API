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
.post(createLeague)
.get(getAllLeagues)


router.route('/:id')
.get(getSingleLeague)
.patch(updateLeague)
.delete(deleteLeague)


module.exports = router;


