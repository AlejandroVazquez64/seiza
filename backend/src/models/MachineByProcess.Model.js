const { Schema, model } = require('mongoose');

const machineByProcessSchema = new Schema({

  lineName: {
    type: String,
    required: true,
    trim: true
  },
	machineNo: Number,
	machineName: {
    type: String,
    required: true,
    trim: true
  },
  tacTime: Number,
	sensorCode: {
		type: String,
		required: true,
		trim: true,
		unique: true
	}
	
}, {
	timestamps: true
})

module.exports = model('machineByProcess', machineByProcessSchema);


  
  
  
  