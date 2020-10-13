const overallInformationCtrl = {};

const OverallInformation = require('../models/OverallInformation.Model.js')

overallInformationCtrl.getOverallInformations = async (req, res) => {
	const overallInformation = await OverallInformation.find();
	res.json(overallInformation)
}

overallInformationCtrl.createOverallInformation = async (req, res) => {
	const {
		contractNo,
		lineName,
		lineCustomer,
		lineProgramName,
		noOfMachinesPerLine,
		tacTime
	} = req.body
	const newOverallInformation = new OverallInformation({
		contractNo,
		lineName,
		lineCustomer,
		lineProgramName,
		noOfMachinesPerLine,
		tacTime
	})
	await newOverallInformation.save();
	res.json({message: 'OverallInformation Saved'})
}

overallInformationCtrl.getOverallInformation = async (req, res) => {
	const overallInformation = await OverallInformation.findById(req.params.id);
	res.json(overallInformation)
}

overallInformationCtrl.updateOverallInformation = async (req, res) => {
	const {
		contractNo,
		lineName,
		lineCustomer,
		lineProgramName,
		noOfMachinesPerLine,
		tacTime
	} = req.body
	await OverallInformation.findOneAndUpdate({_id: req.params.id}, {
		contractNo,
		lineName,
		lineCustomer,
		lineProgramName,
		noOfMachinesPerLine,
		tacTime
	})
	res.json({message: 'OverallInformation Updated'})
}

overallInformationCtrl.deleteOverallInformation = async (req, res) => {
	await OverallInformation.findByIdAndDelete(req.params.id);
	res.json({message: 'OverallInformation Deleted'})
}

module.exports = overallInformationCtrl;