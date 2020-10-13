const approvedCustomerUserCtrl = {};

const ApprovedCustomerUser = require('../models/ApprovedCustomerUser.Model.js')

approvedCustomerUserCtrl.getApprovedCustomersUsers = async (req, res) => {
	const approvedCustomersUsers = await ApprovedCustomerUser.find();
	res.json(approvedCustomersUsers)
}

approvedCustomerUserCtrl.createApprovedCustomerUser = async (req, res) => {
	const {
		noContrato,
		firstName,
		lastName,
		userName,
		password,
		gender,
		email
	} = req.body
	const newApprovedCustomerUser = new ApprovedCustomerUser({
		noContrato,
		firstName,
		lastName,
		userName,
		password,
		gender,
		email
	})
	await newApprovedCustomerUser.save();
	res.json({message: 'ApprovedCustomerUser Saved'})
}

approvedCustomerUserCtrl.getApprovedCustomerUser = async (req, res) => {
	const approvedCustomerUser = await ApprovedCustomerUser.findById(req.params.id);
	res.json(approvedCustomerUser)
}

approvedCustomerUserCtrl.updateApprovedCustomerUser = async (req, res) => {
	const {
		noContrato,
		firstName,
		lastName,
		userName,
		password,
		gender,
		email
	} = req.body
	await ApprovedCustomerUser.findOneAndUpdate({_id: req.params.id}, {
		noContrato,
		firstName,
		lastName,
		userName,
		password,
		gender,
		email
	})
	res.json({message: 'ApprovedCustomerUser Updated'})
}

approvedCustomerUserCtrl.deleteApprovedCustomerUser = async (req, res) => {
	await ApprovedCustomerUser.findByIdAndDelete(req.params.id);
	res.json({message: 'ApprovedCustomerUser Deleted'})
}

module.exports = approvedCustomerUserCtrl;