const express = require('express');
const router = express.Router()
const {StatusCodes} = require('http-status-codes')


const League = require('../models/League')




router.post('/', async (req, res) =>{
    const newLeague = new League(req.body);
   try {
       const savedLeague = await newLeague.save();
       res.status(StatusCodes.CREATED).json(savedLeague);
   } catch (error) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.msg)
   }
});


router.get('/', async (req, res) =>{
   try {
    const league = await League.find({})
    res.status(StatusCodes.OK).json({ league, count: league.length });
   } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
   }
})


router.get('/:id', async (req, res) => {
    try {
        const {id: leagueId} = req.params
        const league = await League.findOne({_id: leagueId})
        if(!league) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: "no league with that Id"
            })
        }
        res.status(StatusCodes.OK).json({league})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
    
})


router.patch('/:id', async (req, res) => {
    try {
        const {id: leagueId} = req.params
        const league = await League.findOneAndUpdate({ _id: leagueId }, req.body, {
            new: true,
            runValidators: true,
          });
        
        if(!league) {
            return res.status(404).json({
                msg: "no league with that Id"
            })
        }
        res.status(StatusCodes.OK).json({league})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const { id: leagueId } = req.params; 
        const league = await League.findOne({_id: leagueId}); 
        
        if(!league) {
            return res.status(StatusCodes.NOT_FOUND).json({msg: `No league with that Id: ${leagueId}`})
        }
        await league.remove()
        res.status(StatusCodes.OK).json({ msg: 'Success! League removed.' });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
    }
})


module.exports = router;