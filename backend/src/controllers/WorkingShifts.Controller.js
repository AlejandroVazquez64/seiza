const workingShiftsCtrl = {};

const WorkingShifts = require('../models/WorkingShifts.Model.js')

workingShiftsCtrl.getWorkingShifts = async (req, res) => {
	const workingShifts = await WorkingShifts.find();
	res.json(workingShifts)
}

workingShiftsCtrl.createWorkingShift = async (req, res) => {
	const {
		shiftName,
		startTime,
		endTime,
		workDays,
		machineName
	} = req.body
	const newMachineByProcess = new WorkingShifts({
		shiftName,
		startTime,
		endTime,
		workDays,
		machineName
	})
	await newMachineByProcess.save();
	res.json({message: 'WorkingShifts Saved'})
}

workingShiftsCtrl.getWorkingShift = async (req, res) => {
	const workingShifts = await WorkingShifts.findById(req.params.id);
	res.json(workingShifts)
}

workingShiftsCtrl.updateWorkingShift= async (req, res) => {
	const {
		shiftName,
		startTime,
		endTime,
		workDays,
		machineName
	} = req.body
	await WorkingShifts.findOneAndUpdate({_id: req.params.id}, {
		shiftName,
		startTime,
		endTime,
		workDays,
		machineName
	})
	res.json({message: 'WorkingShifts Updated'})
}

workingShiftsCtrl.deleteWorkingShift = async (req, res) => {
	await WorkingShifts.findByIdAndDelete(req.params.id);
	res.json({message: 'WorkingShifts Deleted'})
}

module.exports = workingShiftsCtrl;