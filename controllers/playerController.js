<<<<<<< HEAD
const {StatusCodes} = require('http-status-codes')
const Player = require('../models/playerModel');
const CustomError = require('../errors');
const path = require('path');






const createPlayer = async (req, res) =>{
    req.body.user = req.body;
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

module.exports = {
    createPlayer,
    getSinglePlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
=======
const {StatusCodes} = require('http-status-codes')
const Player = require('../models/playerModel');
const CustomError = require('../errors');
const path = require('path');






const createPlayer = async (req, res) =>{
    req.body.user = req.body;
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

module.exports = {
    createPlayer,
    getSinglePlayer,
    getAllPlayers,
    updatePlayer,
    deletePlayer,
>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
}