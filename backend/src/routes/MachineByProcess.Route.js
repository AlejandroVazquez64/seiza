const { Router } =  require('express');
const router = Router();

const { getMachinesByProcess,
	createMachineByProcess,
	getMachineByProcess,
	updateMachineByProcess,
	deleteMachineByProcess
} =  require('../controllers/MachineByProcess.Controller.js')

router.route('/')
	.get(getMachinesByProcess)
	.post(createMachineByProcess)

router.route('/:id')
	.get(getMachineByProcess)
	.put(updateMachineByProcess)
	.delete(deleteMachineByProcess)
module.exports = router;