const doctors = [
    {
        id: 1,
        firstName: 'Curtis',
        lastName: 'Fred'
    },
    {
        id: 2,
        firstName: 'Joann',
        lastName: 'Mabel'
    }
]

const appointments = [
    {
        id: 1,
        doctorId: 1,
        firstName: 'Melly',
        lastName: 'Jake',
        date: new Date(2022, 11, 31),
        time: '8:15',
        kind: 'New Patient'
    },
    {
        id: 2,
        doctorId: 2,
        firstName: 'Mia',
        lastName: 'Freddy',
        date: new Date(2022, 11, 31),
        time: '8:15',
        kind: 'Follow-up'
    }
]

module.exports = {
    doctors,
    appointments
}