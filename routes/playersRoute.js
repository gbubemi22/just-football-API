const express = require('express');
const router = express.Router()
const Player = require('../models/player');

const {StatusCodes} = require('http-status-codes')




router.post('/',async (req, res) =>{
    const newPlayer = new Player(req.body);
    try {
        const savedPlayer = await newPlayer.save();
        res.status(StatusCodes.CREATED).json(savedPlayer);
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error.msg)
    }
})


router.get('/', async (req, res) =>{
    try {
        const player = await Player.find({})
        res.status(StatusCodes.OK).json({ player, count: player.length });
       } catch (error) {
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
       }
})


router.get('/:id', async(req, res) => {
    try {
        const {id: playerId} = req.params
        const player = await Player.findOne({_id: playerId})
        if(!player) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: "no player with that Id"
            })
        }
        

        res.status(StatusCodes.OK).json({player})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const {id: playerId} = req.params
        const player = await Player.findOneAndUpdate({ _id: playerId }, req.body, {
            new: true,
            runValidators: true,
          });
        
        if(!player) {
            return res.status(StatusCodes.NOT_FOUND).json({
                msg: "no player with that Id"
            })
        }
        res.status(StatusCodes.OK).json({player})
    } catch (error) {
     res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error)   
    }
})

router.delete('/:id', async (req, res) =>{
    try {
        const { id: playerId } = req.params; 
        const player = await Player.findOne({_id: playerId}); 
        
        if(!player) {
            return res.status(StatusCodes.NOT_FOUND).json({ msg: `No player with that Id: ${playerId}`})
        }
        await player.remove()
        res.status(StatusCodes.OK).json({ msg: 'Success! player removed.' });
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(error) 
    }
})


module.exports = router;