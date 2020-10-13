const machineByProcessCtrl = {};

const MachineByProcess = require('../models/MachineByProcess.model.js')

machineByProcessCtrl.getMachinesByProcess = async (req, res) => {
	const machineByProcess = await MachineByProcess.find();
	res.json(machineByProcess)
}

machineByProcessCtrl.createMachineByProcess = async (req, res) => {
	const {
		lineName,
		machineNo,
		machineName,
		tacTime,
		sensorCode
	} = req.body
	const newMachineByProcess = new MachineByProcess({
		lineName,
		machineNo,
		machineName,
		tacTime,
		sensorCode
	})
	await newMachineByProcess.save();
	res.json({message: 'MachineByProcess Saved'})
}

machineByProcessCtrl.getMachineByProcess = async (req, res) => {
	const machineByProcess = await MachineByProcess.findById(req.params.id);
	res.json(machineByProcess)
}

machineByProcessCtrl.updateMachineByProcess = async (req, res) => {
	const {
		lineName,
		machineNo,
		machineName,
		tacTime,
		sensorCode
	} = req.body
	await MachineByProcess.findOneAndUpdate({_id: req.params.id}, {
		lineName,
		machineNo,
		machineName,
		tacTime,
		sensorCode
	})
	res.json({message: 'MachineByProcess Updated'})
}

machineByProcessCtrl.deleteMachineByProcess = async (req, res) => {
	await MachineByProcess.findByIdAndDelete(req.params.id);
	res.json({message: 'MachineByProcess Deleted'})
}

module.exports = machineByProcessCtrl;