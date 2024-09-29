document.addEventListener('DOMContentLoaded', function() {

    const myCoursesLink = document.getElementById('my-courses-link');
    if (myCoursesLink) {
        myCoursesLink.addEventListener('click', () => {
            window.location.href = 'my-courses.html';
        });
    }

    const calendarLink = document.getElementById('calendar-link');
    if (calendarLink) {
        calendarLink.addEventListener('click', () => {
            const calendarContainer = document.getElementById('calendar-container');
            if (calendarContainer) {
                calendarContainer.style.display = 'block';
            }
        });
    }

    const skillsBySectorLink = document.getElementById('skills-by-sector-link');
    if (skillsBySectorLink) {
        skillsBySectorLink.addEventListener('click', (e) => {
            e.preventDefault();
            const skillsBySectorSection = document.querySelector('.skills');
            if (skillsBySectorSection) {
                const offset = skillsBySectorSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    }

    const mentorshipLink = document.getElementById('mentorship-link');
    if (mentorshipLink) {
        mentorshipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mentorshipSection = document.querySelector('.mentors');
            if (mentorshipSection) {
                const offset = mentorshipSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    }

    const resourcesLink = document.getElementById('resources-link');
    if (resourcesLink) {
        resourcesLink.addEventListener('click', (e) => {
            e.preventDefault();
            const resourcesSection = document.querySelector('.resources');
            if (resourcesSection) {
                const offset = resourcesSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    }

    const contactUsLink = document.getElementById('contact-us-link');
    if (contactUsLink) {
        contactUsLink.addEventListener('click', (e) => {
            e.preventDefault();
            const contactUsSection = document.querySelector('.get-involved');
            if (contactUsSection) {
                const offset = contactUsSection.offsetTop;
                window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        });
    }

    const discoverButton = document.getElementById('discover-button');
    if (discoverButton) {
        discoverButton.addEventListener('click', () => {
            const searchBar = document.getElementById('search-bar');
            if (searchBar) {
                searchBar.style.display = 'block';
            }
        });
    }

    const closeButton = document.getElementById('close-button');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const searchBar = document.getElementById('search-bar');
            if (searchBar) {
                searchBar.style.display = 'none';
            }
        });
    }

    const searchButton = document.getElementById('search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchInput = document.getElementById('search-input');
            if (searchInput) {
                const searchValue = searchInput.value;
                const courseList = document.getElementById('course-list');
                if (courseList) {
                    courseList.innerHTML = '';
                    // simulate API call to get course list
                    const courses = [
                        { title: 'Course 1', description: 'This is course 1' },
                        { title: 'Course 2', description: 'This is course 2' },
                        { title: 'Course 3', description: 'This is course 3' },
                    ];
                    courses.forEach(function(course) {
                        const courseHTML = `
                            <div class="course">
                                <h3>${course.title}</h3>
                                <p>${course.description}</p>
                            </div>
                        `;
                        courseList.innerHTML += courseHTML;
                    });
                }
            }
        });
    }

    // Make sure the fullcalendar.min.js file is loaded
    if (typeof $ !== 'undefined' && typeof $.fn.fullCalendar !== 'undefined') {
        const calendarEl = document.getElementById('calendar-container');
        if (calendarEl) {
            $(calendarEl).fullCalendar({
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                defaultDate: '2023-03-12',
                navLinks: true, // can click day/week names to navigate views
                editable: true,
                dayClick: function(date, jsEvent, view) {
                    alert('Clicked on: ' + date.format());
                },
                events: [{
                        title: 'Mentor Session',
                        start: '2023-03-12T10:00:00',
                        end: '2023-03-12T11:00:00',
                        backgroundColor: '#007bff',
                        borderColor: '#007bff'
                    },
                    {
                        title: 'Course Session',
                        start: '2023-03-12T11:00:00',
                        end: '2023-03-12T12:00:00',
                        backgroundColor: '#dc3545',
                        borderColor: '#dc3545'
                    }
                ]
            });
        }
    }
});
const buttons = document.querySelectorAll('.sector button');
const fields = document.querySelectorAll('.sector h3');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const sector = button.parentNode.querySelector('h3').textContent;
        window.open(`${sector.toLowerCase()}.html`, '_blank');
    });
});

fields.forEach(field => {
    field.addEventListener('click', () => {
        const sector = field.textContent;
        window.open(`${sector.toLowerCase()}.html`, '_blank');
    });
});