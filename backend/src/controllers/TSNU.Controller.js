const TSNUCtrl = {};

const TSNU = require('../models/TSNU.Model.js')

TSNUCtrl.getTSNUs = async (req, res) => {
	const tsnu = await TSNU.find();
	res.json(tsnu)
}

TSNUCtrl.createTSNU = async (req, res) => {
	const {
		machineName,
		shiftName,
		cleanliness,
		firstMeal,
		secondMeal
	} = req.body
	const newMachineByProcess = new TSNU({
		machineName,
		shiftName,
		cleanliness,
		firstMeal,
		secondMeal
	})
	await newMachineByProcess.save();
	res.json({message: 'TSNU Saved'})
}

TSNUCtrl.getTSNU = async (req, res) => {
	const tsnu = await TSNU.findById(req.params.id);
	res.json(tsnu)
}

TSNUCtrl.updateTSNU = async (req, res) => {
	const {
		machineName,
		shiftName,
		cleanliness,
		firstMeal,
		secondMeal
	} = req.body
	await TSNU.findOneAndUpdate({_id: req.params.id}, {
		machineName,
		shiftName,
		cleanliness,
		firstMeal,
		secondMeal
	})
	res.json({message: 'TSNU Updated'})
}

TSNUCtrl.deleteTSNU = async (req, res) => {
	await TSNU.findByIdAndDelete(req.params.id);
	res.json({message: 'TSNU Deleted'})
}

module.exports = TSNUCtrl;