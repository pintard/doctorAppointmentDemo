if (process.env.NODE_ENV !== 'production')
    require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

const {
    getDoctors,
    getDoctorAppointmentsByDay,
    deleteAppointmentById,
    addAppointmentByDoctorId
} = require('./repository/doctorRepository')

app.set('json spaces', 2)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.route('/api/doctors')
    .get(async (req, res) => res.send(await getDoctors()))

app.route('/api/doctors/:doctorId/:day')
    .get(async (req, res) => res.send(await getDoctorAppointmentsByDay(req.params['doctorId'], req.params['day'])))

app.route('/api/doctors/:appointmentId')
    .delete(async (req, res) => res.send(await deleteAppointmentById(req.params['appointmentId'])))

app.route('/api/doctors/:doctorId')
    .post(async (req, res) => res.send(await addAppointmentByDoctorId(req.params['doctorId'], req.body)))

app.listen(port, error => error ?
    console.log("\x1b[31mERROR:\x1b[0m", error) :
    console.log(`\x1b[35mConnected to \x1b[36mport: ${port}\x1b[0m`))