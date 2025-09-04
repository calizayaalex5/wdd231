// hmabuerguer button

const navButton = document.querySelector('#nav-button');

// navigation bar
const navBar = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

// Obtener el año actual
const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

// Obtener la fecha de última modificación del documento
const lastMod = document.querySelector("#lastModified");
lastMod.textContent = document.lastModified;

//obtencion de los arrays y flitros

// lista

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

displayCourses(courses);

function displayCourses(filteredCourses) {
    const container = document.querySelector('#course-cards');
    document.querySelector('#course-cards').innerHTML = '';

    filteredCourses.forEach((course) => {
        let card = document.createElement('div');
        card.classList.add('course-card');

        if(course.completed) {
            card.classList.add('completed');
        }

        let name = document.createElement('h3');
        name.textContent = `${course.subject} ${course.number}: ${course.title}`;
        card.appendChild(name);

        if(course.completed) {
        let completedTag = document.createElement('span');
        completedTag.textContent = ' | ✅ Completado | ';
        completedTag.classList.add('completed-tag');
        name.appendChild(completedTag); 
        }
        container.appendChild(card);
    });

    const totalCompletedCredits = filteredCourses
        .filter(course => course.completed)
        .reduce((total, course) => total + course.credits, 0);

    document.querySelector('#credits').textContent = `Total Completed Credits: ${totalCompletedCredits}`;
};

//filtros

const allFilter = document.querySelector('#all');

allFilter.addEventListener('click', () => {
    displayCourses(courses);

    document.querySelector('.certificated-couses h2').textContent = 'Web Certificated Courses';
});


const cseFilter = document.querySelector('#sce');

cseFilter.addEventListener('click', () => {
    let cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);

    document.querySelector('.certificated-couses h2').textContent = 'Web Certificated Courses | CSE';
});

const wddFilter = document.querySelector('#wdd');

wddFilter.addEventListener('click', () => {
    let wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);

    document.querySelector('.certificated-couses h2').textContent = ' Web Certificated Courses | WDD';
});

