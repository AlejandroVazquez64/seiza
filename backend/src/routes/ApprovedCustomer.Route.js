const { Router } =  require('express');
const router = Router();

const { getApprovedCustomers,
	createApprovedCustomer,
	getApprovedCustomer,
	updateApprovedCustomer,
	deleteApprovedCustomer
} =  require('../controllers/ApprovedCustomer.Controller.js')

router.route('/')
	.get(getApprovedCustomers)
	.post(createApprovedCustomer)

router.route('/:id')
	.get(getApprovedCustomer)
	.put(updateApprovedCustomer)
	.delete(deleteApprovedCustomer)
module.exports = router;