const { Schema, model } = require('mongoose');

const workingShiftsSchema = new Schema({
  shiftName: {
    type: String,
    required: true,
    trim: true
  },
  startTime: {
  	type: Date,
  	required: true
  },
	endTime: {
  	type: Date,
  	required: true
  },
  workDays: {
  	type: Number,
  	required: true,
  },
	machineName: {
		type: String,
		trim: true
	}
	
}, {
	timestamps: true
})

module.exports = model('workingShifts', workingShiftsSchema);