const { doctors, appointments } = require('./db')

const getDoctors = async () => doctors

/** Day must be supplied as "YYYY-MM-DD" where MM is an integer 0-11 */
const getDoctorAppointmentsByDay = async (doctorId, day) => appointments.filter(el =>
    (el.doctorId === Number(doctorId)) && (el.date.toString() === new Date(...day.split('-')).toString()))

const deleteAppointmentById = async (appointmentId) => appointments.filter(el => el.id !== Number(appointmentId))

/**
 * New appointments can only start at 15 minute intervals
 * (ie, 8:15AM is a valid time but 8:20AM is not)
 *
 * A doctor can have multiple appointments with the same time, but no more than
 * 3 appointments can be added with the same time for a given doctor
 *
 * @param {*} doctorId
 *
 * date and time must be supplied as "YYYY-MM-DD-HH-mm" where MM is an integer 0-11
 */
const addAppointmentByDoctorId = async (doctorId, { name, time, kind }) => {
    const [year, month, day, hours, minutes] = time.split('-')
    const err = { err: 'Meeting not within 15 min interval' }
    if (Number(minutes) % 15 !== 0) return err
    const totalAppts = appointments.reduce((prev, curr) => curr.doctorId === Number(doctorId) ? prev + 1 : prev, 0)
    if (totalAppts >= 3) return err
    else {
        const [firstName, lastName] = name.split(' ')
        const appointment = {
            id: appointments.length + 1,
            doctorId: doctorId,
            firstName: firstName,
            lastName: lastName,
            date: new Date(year, month, day),
            time: [hours, minutes].join(':'),
            kind: kind
        }
        appointments.push(appointment)
        return { succ: 'Meeting successfully created', appts: appointments }
    }
}

module.exports = {
    getDoctors,
    getDoctorAppointmentsByDay,
    deleteAppointmentById,
    addAppointmentByDoctorId
}
