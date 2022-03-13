const express = require('express');
const router = express.Router()

const {
    createLeague,
    getAllLeagues,
    getSingleLeague,
    updateLeague,
    deleteLeague,
} = require('../controllers/leagueController')


router
.route('/')
.post(createLeague)
.get(getAllLeagues)


router.route('/:id')
.get(getSingleLeague)
.patch(updateLeague)
.delete(deleteLeague)


module.exports = router;



