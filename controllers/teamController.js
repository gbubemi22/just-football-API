const {StatusCodes} = require('http-status-codes')
const Team = require('../models/TeamModel');
const League = require('../models/LeagueModel')
const CustomError = require('../errors');
const path = require('path');







const createTeam = async (req, res) =>{
    req.body.user = req.body;
    const team = await Team.create(req.body);
    res.status(StatusCodes.CREATED).json({ team });   
}



const getAllTeams = async (req, res) => {
    const teams = await Team.find({});
  
    res.status(StatusCodes.OK).json({ teams, count: teams.length });
  };



  const getSingleTeam = async (req, res) => {
    const { id: teamId } = req.params;
    
    const league = await League.findById(leagueId)
    const team = await Team.findOne({ _id: teamId }).populate('league_id','League')
    .populate({path: 'league_id', select:['leaguename', 'location', 'logo']}) 
  
    if (!team) {
      throw new CustomError.NotFoundError(`No team with id : ${teamId}`);
    }
    console.log(team)
    res.status(StatusCodes.OK).json({ team, league });
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


  

module.exports = {
    createTeam,
    getSingleTeam,
    getAllTeams,
    updateTeam,
    deleteTeam,
}