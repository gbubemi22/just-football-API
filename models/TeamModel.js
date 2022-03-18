const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({
  league_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'League',
    required: true
  },
  team:{
    type: String, required: true,
    required: [true, 'please provide a name'],
    trim: true,
    maxlength: [15, 'Name can not be more than 15 characters'],
  },
    nickname: {
      type: String,
      required: true,
      trim: true,
      maxlength: [15, 'Name can not be more than 15 characters'],
    },
    
   

    
}, {timestamps: true,  toJSON: { virtuals: true }, toObject: { virtuals: true }}
);

TeamSchema.virtual('league', {
  ref: 'League',
  localField: 'league_id',
  foreignField: '_id',
  justOne: true,
   
});


module.exports = mongoose.model('Team', TeamSchema);