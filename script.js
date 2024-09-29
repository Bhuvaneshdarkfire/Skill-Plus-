document.addEventListener('DOMContentLoaded', function() {
    // Nav toggle
    document.querySelector('.nav-toggle').addEventListener('click', () => {
        document.querySelector('nav ul').classList.toggle('active');
    });

    // Hero section animation
    window.addEventListener('scroll', () => {
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const scrollPosition = window.scrollY;
        if (scrollPosition > heroHeight / 2) {
            document.querySelector('.hero h1').classList.add('animate');
            document.querySelector('.hero p').classList.add('animate');
            document.querySelector('.hero button').classList.add('animate');
        } else {
            document.querySelector('.hero h1').classList.remove('animate');
            document.querySelector('.hero p').classList.remove('animate');
            document.querySelector('.hero button').classList.remove('animate');
        }
    });

    // Skills by sector accordion
    document.querySelectorAll('.sector').forEach((sector) => {
        sector.addEventListener('click', () => {
            sector.classList.toggle('active');
        });
    });

    // Mentor profiles carousel
    const mentorProfiles = document.querySelectorAll('.mentor-profile');
    let currentMentor = 0;

    document.querySelector('.prev').addEventListener('click', () => {
        currentMentor--;
        if (currentMentor < 0) {
            currentMentor = mentorProfiles.length - 1;
        }
        updateMentorProfile();
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentMentor++;
        if (currentMentor >= mentorProfiles.length) {
            currentMentor = 0;
        }
        updateMentorProfile();
    });

    function updateMentorProfile() {
        mentorProfiles.forEach((profile) => {
            profile.classList.remove('active');
        });
        mentorProfiles[currentMentor].classList.add('active');
    }

    // Success stories carousel
    const successStories = document.querySelectorAll('.success-story');
    let currentStory = 0;

    document.querySelector('.prev-story').addEventListener('click', () => {
        currentStory--;
        if (currentStory < 0) {
            currentStory = successStories.length - 1;
        }
        updateSuccessStory();
    });

    document.querySelector('.next-story').addEventListener('click', () => {
        currentStory++;
        if (currentStory >= successStories.length) {
            currentStory = 0;
        }
        updateSuccessStory();
    });

    function updateSuccessStory() {
        successStories.forEach((story) => {
            story.classList.remove('active');
        });
        successStories[currentStory].classList.add('active');
    }

    // Get involved form submission
    document.querySelector('.get-involved form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const mentorshipType = formData.get('mentorship-type');
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Add your form submission logic here
        console.log(`Mentorship type: ${mentorshipType}`);
        console.log(`Name: ${name}`);
        console.log(`Email: ${email}`);
        console.log(`Message: ${message}`);
    });

    // Newsletter form submission
    document.querySelector('.newsletter form').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.querySelector('.newsletter input[type="email"]').value;

        // Add your newsletter form submission logic here
        console.log(`Email: ${email}`);
    });

    // Discover your path button click event
    document.getElementById('discover-button').addEventListener('click', function() {
        document.getElementById('search-bar').style.display = 'block';
        document.getElementById('search-bar').style.top = '50%';
        document.getElementById('search-bar').style.left = '50%';
        document.getElementById('search-bar').style.transform = 'translate(-50%, -50%)';
    });

    document.getElementById('close-button').addEventListener('click', function() {
        document.getElementById('search-bar').style.display = 'none';
    });
    document.getElementById('search-button').addEventListener('click', function() {
        var searchInput = document.getElementById('search-input').value;
        var courseList = document.getElementById('course-list');
        courseList.innerHTML = '';

        // simulate API call to get course list
        var courses = [
            { title: 'Course 1', description: 'This is course 1' },
            { title: 'Course 2', description: 'This is course 2' },
            { title: 'Course 3', description: 'This is course 3' },
        ];

        courses.forEach(function(course) {
            var courseHTML = `
                                                               <div class="course">
                                    <h3>${course.title}</h3>
                                    <p>${course.description}</p>
                                </div>
                            `;
            courseList.innerHTML += courseHTML;
        });
    });

    // Navigation menu links
    const skillsBySectorLink = document.querySelector('#skills-by-sector-link');
    const mentorshipLink = document.querySelector('#mentorship-link');
    const resourcesLink = document.querySelector('#resources-link');
    const contactUsLink = document.querySelector('#contact-us-link');

    skillsBySectorLink.addEventListener('click', (e) => {
        e.preventDefault();
        const skillsBySectorSection = document.querySelector('.skills');
        const offset = skillsBySectorSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });

    mentorshipLink.addEventListener('click', (e) => {
        e.preventDefault();
        const mentorshipSection = document.querySelector('.mentors');
        const offset = mentorshipSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });

    resourcesLink.addEventListener('click', (e) => {
        e.preventDefault();
        const resourcesSection = document.querySelector('.resources');
        const offset = resourcesSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });

    contactUsLink.addEventListener('click', (e) => {
        e.preventDefault();
        const contactUsSection = document.querySelector('.get-involved');
        const offset = contactUsSection.offsetTop;
        window.scrollTo({ top: offset, behavior: 'smooth' });
    });

    // Login form
    const loginLink = document.getElementById('login-link');
    const loginForm = document.getElementById('login-form');
    const signInForm = document.getElementById('signIn');

    loginForm.style.display = 'none'; // Hide the login form by default

    loginLink.addEventListener('click', () => {
        loginForm.style.display = 'block'; // Show the login form when the user clicks on the "Login" button
        signInForm.style.display = 'block'; // Show the sign in form by default
    });

    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signUpForm = document.getElementById('signup');

    signUpButton.addEventListener('click', () => {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    });

    signInButton.addEventListener('click', () => {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    });
});
document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'block';
});

document.querySelector('.popup-content .close').addEventListener('click', function() {
    document.getElementById('login-popup').style.display = 'none';
});
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    const closeButton = document.querySelectorAll('.close');

    closeButton.forEach((button) => {
        button.addEventListener('click', () => {
            const loginForm = document.getElementById('login-form');
            const signUpForm = document.getElementById('signup');
            const signInForm = document.getElementById('signIn');
            loginForm.style.display = 'none';
            signUpForm.style.display = 'none';
            signInForm.style.display = 'block';
        });
    });
});