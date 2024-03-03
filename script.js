let students = [
    {
        id: 1,
        details: {
            name: "Ali",
            age: 25,
            city: "Karachi",
            country: "Pakistan",
            gender: "Male",
            subject: "Computer Science",
        }
    },
    {
        id: 2,
        details: {
            name: "Sara",
            age: 23,
            city: "Lahore",
            country: "Pakistan",
            gender: "Female",
            subject: "Biology",
        }
    },
    {
        id: 3,
        details: {
            name: "Ahmed",
            age: 22,
            city: "Islamabad",
            country: "Pakistan",
            gender: "Male",
            subject: "Physics",
        }
    },
    {
        id: 4,
        details: {
            name: "Fatima",
            age: 24,
            city: "Rawalpindi",
            country: "Pakistan",
            gender: "Female",
            subject: "Chemistry",
        }
    },
    {
        id: 5,
        details: {
            name: "Mohammad",
            age: 26,
            city: "Peshawar",
            country: "Pakistan",
            gender: "Male",
            subject: "Mathematics",
        }
    },
    {
        id: 6,
        details: {
            name: "Ayesha",
            age: 21,
            city: "Quetta",
            country: "Pakistan",
            gender: "Female",
            subject: "English Literature",
        }
    },
    {
        id: 7,
        details: {
            name: "Imran",
            age: 27,
            city: "Multan",
            country: "Pakistan",
            gender: "Male",
            subject: "History",
        }
    },
    {
        id: 8,
        details: {
            name: "Zara",
            age: 22,
            city: "Faisalabad",
            country: "Pakistan",
            gender: "Female",
            subject: "Economics",
        }
    },
    {
        id: 9,
        details: {
            name: "Khalid",
            age: 23,
            city: "Hyderabad",
            country: "Pakistan",
            gender: "Male",
            subject: "Geography",
        }
    },
    {
        id: 10,
        details: {
            name: "Hina",
            age: 20,
            city: "Sialkot",
            country: "Pakistan",
            gender: "Female",
            subject: "Political Science",
        }
    },
    {
        id: 11,
        details: {
            name: "Asad",
            age: 24,
            city: "Gujranwala",
            country: "Pakistan",
            gender: "Male",
            subject: "Sociology",
        }
    },
    {
        id: 12,
        details: {
            name: "Nida",
            age: 25,
            city: "Sukkur",
            country: "Pakistan",
            gender: "Female",
            subject: "Psychology",
        }
    },
    {
        id: 13,
        details: {
            name: "Farhan",
            age: 21,
            city: "Mirpurkhas",
            country: "Pakistan",
            gender: "Male",
            subject: "Philosophy",
        }
    },
    {
        id: 14,
        details: {
            name: "Amna",
            age: 26,
            city: "Larkana",
            country: "Pakistan",
            gender: "Female",
            subject: "Anthropology",
        }
    },
    {
        id: 15,
        details: {
            name: "Usman",
            age: 22,
            city: "Bahawalpur",
            country: "Pakistan",
            gender: "Male",
            subject: "Arts",
        }
    }
];


let main = document.querySelector(".main");
students.forEach(function (student){
    document.querySelector('#roll-number').innerHTML += `<option class="option" value="${student.id}">${student.id}</option>`;
    document.querySelector('#city').innerHTML += `<option class="option" value="${student.details.city}">${student.details.city}</option>`;
    main.innerHTML += `<div class="data">
        <h3>ID Number: <span>${student.id}</span></h3>
        <h3>Name: <span>${student.details.name.toUpperCase()}</span></h3>
        <h3>Age: <span>${student.details.age}</span></h3>
        <h3>City: <span>${student.details.city.toUpperCase()}</span></h3>
        <h3>Country: <span>${student.details.country.toUpperCase()}</span></h3>
        <h3>Gender: <span>${student.details.gender.toUpperCase()}</span></h3>
        <h3>Subject: <span>${student.details.subject.toUpperCase()}</span></h3>
    </div>`;
})

let idNumber = document.querySelector('#roll-number');
let btn = document.querySelector('.nav>button');

btn.addEventListener('click', function () {
    let rollNumber = idNumber.value;
    let selectedCity = document.getElementById('city').value;
    let selectedGender = document.querySelector('.nav>form input[name="gender"]:checked').value;

    let htmlContent = "";

    students.forEach(function (person) {
        if ((rollNumber === "Select ID" || person.id == rollNumber) &&
            (selectedCity === "Select City" || person.details.city === selectedCity) &&
            (person.details.gender === selectedGender)) {
            htmlContent += `<div class="data">
                <h3>ID Number: <span>${person.id}</span></h3>
                <h3>Name: <span>${person.details.name.toUpperCase()}</span></h3>
                <h3>Age: <span>${person.details.age}</span></h3>
                <h3>City: <span>${person.details.city.toUpperCase()}</span></h3>
                <h3>Country: <span>${person.details.country.toUpperCase()}</span></h3>
                <h3>Gender: <span>${person.details.gender.toUpperCase()}</span></h3>
                <h3>Subject: <span>${person.details.subject.toUpperCase()}</span></h3>
            </div>`;
        }
    });

    main.innerHTML = htmlContent;
});