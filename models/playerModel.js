<<<<<<< HEAD
const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  playername:{
    type: String, required: true, unique: true,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [25, 'Name can not be more than 25 characters'],
  },
    position: {
      type: String, 
      required: true,
      trim: true,
      maxlength: [10, 'Name can not be more than 10 characters'],
    },
    nationality:{
      type: String ,
       required: true,
       trim: true,
       maxlength: [13, 'Name can not be more than 13 characters'],
      },
    number:{
      type: Number,
      trim: true,
      unique: true,
      maxlength: [2, 'Number can not be more than 2 Figures'],
    },
    isCaptain: {
        type: Boolean, 
        default: false,
    },
    team_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    League_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
   

   
}, {timestamps: true})

=======
const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
  playername:{
    type: String, required: true, unique: true,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [25, 'Name can not be more than 25 characters'],
  },
    position: {
      type: String, 
      required: true,
      trim: true,
      maxlength: [10, 'Name can not be more than 10 characters'],
    },
    nationality:{
      type: String ,
       required: true,
       trim: true,
       maxlength: [13, 'Name can not be more than 13 characters'],
      },
    number:{
      type: Number,
      trim: true,
      unique: true,
      maxlength: [2, 'Number can not be more than 2 Figures'],
    },
    isCaptain: {
        type: Boolean, 
        default: false,
    },
    team_id: {
      type: mongoose.Schema.ObjectId,
      required: true,
    },
    League_id: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
   

   
}, {timestamps: true})

>>>>>>> e70fd34293b544f3e2a649d93ef6b70ac20f85b2
module.exports = mongoose.model('Player', PlayerSchema);