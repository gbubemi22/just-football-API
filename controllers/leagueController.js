<<<<<<< HEAD
const League = require("../models/LeagueModel");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const path = require("path");

const createLeague = async (req, res) => {
  // const league  = new League({
  //   leaguename:req.body.leaguename,
  //   location: req.body.location,
  //   logo: req.file.path
  // })
  // console.log(req.file.path)
  // const newleague = await league.save()
  // res.status(StatusCodes.OK).json(newleague)
  req.body.user = req.body;
  const league = await League.create(req.body);
  res.status(StatusCodes.CREATED).json({ league });
};

const getAllLeagues = async (req, res) => {
  const leagues = await League.find({});

  res.status(StatusCodes.OK).json({ leagues, count: leagues.length });
  console.log(leagues);
};

const getSingleLeague = async (req, res) => {
  const { id: leagueId } = req.params;

  const league = await League.findOne({ _id: leagueId });

  if (!league) {
    throw new CustomError.NotFoundError(`No league with id : ${leagueId}`);
  }

  res.status(StatusCodes.OK).json({ league });
};

const updateLeague = async (req, res) => {
  const { id: leagueId } = req.params;

  const league = await League.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!league) {
    throw new CustomError.NotFoundError(`No league with id : ${leagueId}`);
  }

  res.status(StatusCodes.OK).json({ league });
};

const deleteLeague = async (req, res) => {
  const { id: leagueId } = req.params;

  const league = await League.findOne({ _id: leagueId });

  if (!league) {
    throw new CustomError.NotFoundError(`No product with id : ${productId}`);
  }

  await league.remove();
  res.status(StatusCodes.OK).json({ msg: "Success! League removed." });
};

module.exports = {
  createLeague,
  getAllLeagues,
  getSingleLeague,
  updateLeague,
  deleteLeague,
};
=======
const League = require('../models/LeagueModel')
const {StatusCodes} = require('http-status-codes')
const CustomError = require('../errors');
const path = require('path');





const createLeague =  async (req, res) =>{
    req.body.user = req.body;
    const league = await League.create(req.body);
    res.status(StatusCodes.CREATED).json({ league });   
}


const getAllLeagues = async (req, res) =>{
    const leagues = await League.find({ });

    res.status(StatusCodes.OK).json({ leagues, count: leagues.length }); 
    console.log(leagues)
}


const getSingleLeague = async (req, res) => {
    const { id: leagueId } = req.params;

    const league = await League.findOne({ _id: leagueId })
  
    if (!league) {
      throw new CustomError.NotFoundError(`No league with id : ${leagueId}`);
    }
  
    res.status(StatusCodes.OK).json({ league });   
    
}


const updateLeague =  async (req, res) => {
    const { id: leagueId } = req.params;

    const league = await League.findOneAndUpdate({ _id: productId }, req.body, {
      new: true,
      runValidators: true,
    });
  
    if (!league) {
      throw new CustomError.NotFoundError(`No league with id : ${leagueId}`);
    }
  
    res.status(StatusCodes.OK).json({ league });  
}



const deleteLeague =  async (req, res) =>{
    const { id: leagueId } = req.params;

    const league = await League.findOne({ _id: leagueId });
  
    if (!league) {
      throw new CustomError.NotFoundError(`No product with id : ${productId}`);
    }
  
    await league.remove();
    res.status(StatusCodes.OK).json({ msg: 'Success! League removed.' });   
}


module.exports = {
    createLeague,
    getAllLeagues,
    getSingleLeague,
    updateLeague,
    deleteLeague
}
>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
