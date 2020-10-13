const { Router } =  require('express');
const router = Router();

const { getOverallInformations,
	createOverallInformation,
	getOverallInformation,
	updateOverallInformation,
	deleteOverallInformation
} =  require('../controllers/OverallInformation.Controller.js')

router.route('/')
	.get(getOverallInformations)
	.post(createOverallInformation)

router.route('/:id')
	.get(getOverallInformation)
	.put(updateOverallInformation)
	.delete(deleteOverallInformation)
module.exports = router;