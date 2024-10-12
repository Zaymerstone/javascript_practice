const {Hospital} = require("./db/models");
const {Booking} = require("./db/models");
const {Doctor} = require("./db/models");
const {Patient} = require("./db/models");
//const {} = require("./db/models");

// create hospitals using bulkCreate which takes array of objects [{}]

async function createHospitals() {
    await Hospital.bulkCreate([{
        name: "Hospital 1",
        address: "Address for hospital 1",
        number: 1111
    },
    {
        name: "Hospital 2",
        address: "Address for hospital 2",
        number: 2222
    },
    {
        name: "hosp3",
        address: "sifdjijdskof",
        number: 3333,
    }
])
    
}

// get pk from hospital

async function createDoctors() {

    const hospital1 = await Hospital.findByPk(1);
    const hospital2 = await Hospital.findByPk(2);

    await Doctor.bulkCreate([{
        name: "John Doe",
        age: 30,
        experience: 7 ,
        hospital: hospital2.id // должен быть 2
    },
    {
        name: "Jane Doe",
        age: 43,
        experience: 15 ,
        hospital: hospital2.id // должен быть 2
    },
    {
        name: "Brian Doe",
        age: 25,
        experience: 4,
        hospital: hospital1.id // должен быть 1
    }
])
    
}


async function createPatients() {
    await Patient.bulkCreate(
        [
            {
                name: "Steve Brown",
                age: 33,
                gender: "male"

            },
            {
                name: "Chris Smith",
                age: 24,
                gender: "male"

            },
            {
                name: "Lynda Harris",
                age: 45,
                gender: "female"

            },
            {
                name: "Angela Hopkins",
                age: 29,
                gender: "female"

            }
        ]
    )
    
}


async function createBookings() {
    await Booking.bulkCreate(
        [
            {
                booking_date: new Date(),
                patient: 1,
                doctor: 2 
            },
            {
                booking_date: new Date(2024, 10, 14, 10, 0, 0, 0),
                patient: 3,
                doctor: 1
            },
            {
                booking_date: new Date(2024, 10, 8, 15, 30, 0, 0),
                patient: 2,
                doctor: 3 
            }
        ],
        {
        include: [Patient, Doctor],
        }
    );
    
}





// createHospitals();
// createDoctors();
// createPatients();
// createBookings();