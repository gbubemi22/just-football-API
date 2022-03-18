<<<<<<< HEAD
const mongoose = require('mongoose')

const LeagueSchema = new mongoose.Schema({
  leaguename:{
    type: String,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [18, 'Name can not be more than 18 characters'], 
  },
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: [60, 'Name can not be more than 60 characters'],
  },
     logo: {
      type: String, 
      required:true,
        
     }, 
  
}, {timestamps: true})

=======
const mongoose = require('mongoose')

const LeagueSchema = new mongoose.Schema({
  leaguename:{
    type: String,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [18, 'Name can not be more than 18 characters'], 
  },
    location: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, 'Name can not be more than 15 characters'],
  },
     logo: {
      type: String, 
      required: true, 
      trim: true,
      maxlength: [5, 'Name can not be more than 5 characters'],
     }, 
  
}, {timestamps: true})

>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
module.exports = mongoose.model('League', LeagueSchema);