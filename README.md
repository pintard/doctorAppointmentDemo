# **Doctor Appointment Demo**

This is a demo application of a doctor appointment node API

## **Usage**

To start, clone the git repository

```zsh
git clone https://github.com/pintard/doctorAppointmentDemo.git
```

Then `cd` to the **doctorAppointmentDemo** directory and download the project dependencies. Using npm,

```zsh
npm install
```

Then run it using,

```zsh
npm run dev
```

Interact with API endpoints using an HTTP tool like Postman

```txt
GET /api/doctors

GET /api/doctors/:doctorId/:day

DELETE /api/doctors/:appointmentId

POST /api/doctors/:doctorId
```
