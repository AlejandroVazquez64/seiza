const { Schema, model } = require('mongoose');

const approvedCustomerSchema = new Schema({
	noContrato: Number,
	nombreLegalCompania: {
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	fechaContrato: {
		type: Date,
		default: Date.now
	},
	noPaquetesContratados: Number,
	noMaquinasAnalizar: Number,
}, {
	timestamps: true
})

module.exports = model('approvedCustomer', approvedCustomerSchema);