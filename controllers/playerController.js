const {StatusCodes} = require('http-status-codes')
const Player = require('../models/player');
const CustomError = require('../errors');
const path = require('path');






const createPlayer = async (req, res) =>{
    req.body.user = req.user.userId;
    const player = await Player.create(req.body);
    res.status(StatusCodes.CREATED).json({ player });   
}



const getAllPlayers = async (req, res) => {
    const players = await Player.find({});
  
    res.status(StatusCodes.OK).json({ players, count: players.length });
  };



  const getSinglePlayer = async (req, res) => {
    const { id: playerId } = req.params;
  
    const player = await Player.findOne({ _id: teamId })
  
    if (!player) {
      throw new CustomError.NotFoundError(`No player with id : ${playerId}`);
    }
  
    res.status(StatusCodes.OK).json({ team });
  };




  const updatePlayer = async (req, res) => {
    const { id: playerId } = req.params;
  
    const player = await Player.findOneAndUpdate({ _id: playerId }, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!player) {
      throw new CustomError.NotFoundError(`No player with id : ${playerId}`);
    }
  
    res.status(StatusCodes.OK).json({ player });
  };




  const deletePlayer = async (req, res) => {
    const { id: playerId } = req.params;
  
    const player = await Player.findOne({ _id: playerId });
  
    if (!player) {
      throw new CustomError.NotFoundError(`No player with id : ${playerId}`);
    }
  
    await player.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! player removed.' });
  };

model.exports = {
    createPlayer,
    getSinglePlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
}