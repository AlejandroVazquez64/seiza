const approvedCustomerCtrl = {};

const ApprovedCustomer = require('../models/ApprovedCustomer.Model.js')

approvedCustomerCtrl.getApprovedCustomers = async (req, res) => {
	const approvedCustomers = await ApprovedCustomer.find();
	res.json(approvedCustomers)
}

approvedCustomerCtrl.createApprovedCustomer = async (req, res) => {
	const {
		noContrato,
		nombreLegalCompania,
		fechaContrato,
		noPaquetesContratados,
		noMaquinasAnalizar
	} = req.body
	const newApprovedCustomer = new ApprovedCustomer({
		noContrato,
		nombreLegalCompania,
		fechaContrato,
		noPaquetesContratados,
		noMaquinasAnalizar
	})
	await newApprovedCustomer.save();
	res.json({message: 'ApprovedCustomer Saved'})
}

approvedCustomerCtrl.getApprovedCustomer = async (req, res) => {
	const approvedCustomer = await ApprovedCustomer.findById(req.params.id);
	res.json(approvedCustomers)
}

approvedCustomerCtrl.updateApprovedCustomer = async (req, res) => {
	const {
		noContrato,
		nombreLegalCompania,
		fechaContrato,
		noPaquetesContratados,
		noMaquinasAnalizar
	} = req.body
	await ApprovedCustomer.findOneAndUpdate({_id: req.params.id}, {
		noContrato,
		nombreLegalCompania,
		fechaContrato,
		noPaquetesContratados,
		noMaquinasAnalizar
	})
	res.json({message: 'ApprovedCustomer Updated'})
}

approvedCustomerCtrl.deleteApprovedCustomer = async (req, res) => {
	await ApprovedCustomer.findByIdAndDelete(req.params.id);
	res.json({message: 'ApprovedCustomer Deleted'})
}

module.exports = approvedCustomerCtrl;