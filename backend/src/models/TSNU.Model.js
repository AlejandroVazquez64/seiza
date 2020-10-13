const { Schema, model } = require('mongoose');

const TNSUSchema = new Schema({
  machineName: {
    type: String,
    required: true,
    trim: true
  },
  shiftName: {
  	type: String,
    required: true,
    trim: true
  },
	cleanliness: {
  	type: Number,
    required: true
  },
  firstMeal: {
  	type: Number,
  	required: true,
  },
	secondMeal: {
		type: Number,
		trim: true
	}
	
}, {
	timestamps: true
})

module.exports = model('TNSU', TNSUSchema);