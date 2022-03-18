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

module.exports = mongoose.model('League', LeagueSchema);