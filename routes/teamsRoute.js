const express = require('express');
const router = express.Router()
const {StatusCodes} = require('http-status-codes')


const Team = require('../models/Team');

router.post('/', async (req, res) =>{
    const newTeam = new Team(req.body);
    try {
        const savedTeam = await newTeam.save();
        res.status(StatusCodes.CREATED).json(savedTeam);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.msg)
    }
})


router.get('/', async (req, res) =>{
    try {
        const team = await Team.find({})
        res.status(StatusCodes.OK).json({ team, count: team.length });
       } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
       }
})


router.get('/:id', async (req, res) => {
    try {
        const {id: teamId} = req.params
        const team = await Team.findOne({_id: teamId})
        if(!team) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: "no team with that Id"
            })
        }
        

        res.status(StatusCodes.OK).json({team})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
});
//const league = await league.findById(team.league_id);

router.patch('/:id', async (req, res) => {
    try {
        const {id: teamId} = req.params
        const team = await Team.findOneAndUpdate({ _id: teamId }, req.body, {
            new: true,
            runValidators: true,
          });
        
        if(!team) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: "no team with that Id"
            })
        }
        res.status(StatusCodes.OK).json({team})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const { id: teamId } = req.params; 
        const team = await Team.findOne({_id: teamId}); 
        
        if(!team) {
            return res.status(StatusCodes.NOT_FOUND).json({msg: `No team with that Id: ${teamId}`})
        }
        await team.remove()
        res.status(StatusCodes.OK).json({ msg: 'Success! Team removed.' });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
    }
})


module.exports = router;