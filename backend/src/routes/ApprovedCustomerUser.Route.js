const { Router } =  require('express');
const router = Router();

const { getApprovedCustomersUsers,
	createApprovedCustomerUser,
	getApprovedCustomerUser,
	updateApprovedCustomerUser,
	deleteApprovedCustomerUser
} =  require('../controllers/ApprovedCustomerUser.Controller.js')

router.route('/')
	.get(getApprovedCustomersUsers)
	.post(createApprovedCustomerUser)

router.route('/:id')
	.get(getApprovedCustomerUser)
	.put(updateApprovedCustomerUser)
	.delete(deleteApprovedCustomerUser)
module.exports = router;