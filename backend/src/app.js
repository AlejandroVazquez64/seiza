const express = require('express')
const cors = require('cors')
const app = express()

// settings
app.set('port', process.env.PORT || 4000)

// middleware
app.use(cors()); // Permite conectar a 2 servidores (intercambiar datos)
app.use(express.json())

// routes
app.use('/api/ApprovedCustomers', require('./routes/ApprovedCustomer.Route.js'))
app.use('/api/ApprovedCustomerUser', require('./routes/ApprovedCustomerUser.Route.js'))
app.use('/api/OverallInformation', require('./routes/OverallInformation.Route.js'))
app.use('/api/MachineByProcess', require('./routes/MachineByProcess.Route.js'))
app.use('/api/WorkingShifts', require('./routes/WorkingShifts.Route.js'))
app.use('/api/TSNU', require('./routes/TSNU.Route.js'))

module.exports = app