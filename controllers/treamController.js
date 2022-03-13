const {StatusCodes} = require('http-status-codes')
const Team = require('../models/Team');
const CustomError = require('../errors');
const path = require('path');






const createTeam = async (req, res) =>{
    req.body.user = req.user.userId;
    const team = await Team.create(req.body);
    res.status(StatusCodes.CREATED).json({ team });   
}



const getAllTeams = async (req, res) => {
    const teams = await Team.find({});
  
    res.status(StatusCodes.OK).json({ teams, count: teams.length });
  };



  const getSingleTeam = async (req, res) => {
    const { id: teamId } = req.params;
  
    const team = await Team.findOne({ _id: teamId })
  
    if (!team) {
      throw new CustomError.NotFoundError(`No team with id : ${teamId}`);
    }
  
    res.status(StatusCodes.OK).json({ team });
  };




  const updateTeam = async (req, res) => {
    const { id: teamId } = req.params;
  
    const team = await Team.findOneAndUpdate({ _id: teamId }, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!team) {
      throw new CustomError.NotFoundError(`No team with id : ${teamId}`);
    }
  
    res.status(StatusCodes.OK).json({ team });
  };




  const deleteTeam = async (req, res) => {
    const { id: teamId } = req.params;
  
    const team = await Team.findOne({ _id: teamId });
  
    if (!team) {
      throw new CustomError.NotFoundError(`No team with id : ${teamId}`);
    }
  
    await product.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! team removed.' });
  };

model.exports = {
    createTeam,
    getSingleTeam,
    getAllTeams,
    updateTeam,
    deleteTeam,
}