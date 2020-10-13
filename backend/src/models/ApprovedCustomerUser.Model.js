const { Schema, model } = require('mongoose');

const approvedCustomerUserSchema = new Schema({
	noContrato: Number,
	firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
	userName: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	password: {
    type: String,
    required: true,
    //match: /(?=.*[a-zA-Z])(?=.*[0-9]+).*/,
    minlength: 8
  },
  gender: {
    type: String
  },
  email: {
    type: String,
    required: true,
    match: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
  },
}, {
	timestamps: true
})

module.exports = model('approvedCustomerUser', approvedCustomerUserSchema);


  
  
  
  