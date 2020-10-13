const { Router } =  require('express');
const router = Router();

const { getTSNUs,
	createTSNU,
	getTSNU,
	updateTSNU,
	deleteTSNU
} =  require('../controllers/TSNU.Controller.js')

router.route('/')
	.get(getTSNUs)
	.post(createTSNU)

router.route('/:id')
	.get(getTSNU)
	.put(updateTSNU)
	.delete(deleteTSNU)
module.exports = router;