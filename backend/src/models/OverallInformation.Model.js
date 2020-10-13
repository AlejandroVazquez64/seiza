const { Schema, model } = require('mongoose');

const overallInformationSchema = new Schema({
	contractNo: Number,
	lineName: {
    type: String,
    required: true,
    trim: true
  },
  lineCustomer: {
    type: String,
    required: true,
    trim: true
  },
	lineProgramName: {
		type: String,
		required: true,
		trim: true
		//unique: true
	},
	noOfMachinesPerLine: Number,
  tacTime: Number,
}, {
	timestamps: true
})

module.exports = model('overallInformation', overallInformationSchema);


  
  
  
  