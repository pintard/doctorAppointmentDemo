const doctors = [
    {
        id: 1,
        firstName: "Curtis",
        lastName: "Fred"
    },
    {
        id: 2,
        firstName: "Joann",
        lastName: "Mabel"
    }
]

const appointments = [
    {
        id: 1,
        doctorId: 1,
        firstName: "Melly",
        lastName: "Jake",
        date: new Date(2022, 11, 31),
        time: "8:15"
    }
]

const getDoctors = async () => doctors

const getDoctorAppointmentsByDay = async (doctorId, day) =>
    appointments.map(el => el.doctorId === doctorId && el.day === day)

const deleteAppointmentById = async (appointmentId) =>
    appointments.filter(el => el.id !== appointmentId)

/**
 * New appointments can only start at 15 minute intervals
 * (ie, 8:15AM is a valid time but 8:20AM is not)
 *
 * A doctor can have multiple appointments with the same time, but no more than
 * 3 appointments can be added with the same time for a given doctor
 *
 * @param {*} doctorId
 */
const addAppointmentByDoctorId = async (doctorId, { name, time, kind }) => {
    const [hours, minutes] = time.split(":")
    const err = { err: "Meeting not within 15 min interval" }

    if (minutes & 15 !== 0) return err
    const totalAppts = appointments.reduce((prev, curr) => curr.doctorId === 1 ? prev + 1 : prev, 0)
    if (totalAppts >= 3) return err
    else {
        appointments.push({ name, time, kind })
        return { succ: "Meeting successfully created" }
    }
}

module.exports = {
    getDoctors,
    getDoctorAppointmentsByDay,
    deleteAppointmentById,
    addAppointmentByDoctorId
}