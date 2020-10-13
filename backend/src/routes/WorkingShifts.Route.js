const { Router } =  require('express');
const router = Router();

const { getWorkingShifts,
	createWorkingShift,
	getWorkingShift,
	updateWorkingShift,
	deleteWorkingShift
} =  require('../controllers/WorkingShifts.Controller.js')

router.route('/')
	.get(getWorkingShifts)
	.post(createWorkingShift)

router.route('/:id')
	.get(getWorkingShift)
	.put(updateWorkingShift)
	.delete(deleteWorkingShift)
module.exports = router;