// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(this);
    const formValues = Object.fromEntries(formData);
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formValues);
    
    // Clear form
    this.reset();
    alert('Thank you for your message! I will get back to you soon.');
});

// Add scroll animation for elements
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop - window.innerHeight + sectionHeight / 3) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialize sections with initial state
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.5s ease-out';
});

// Define your projects data structure
const projectsData = [
    {
        id: 1,
        title: "E-commerce",
        description: "A full-featured e-commerce website built with React",
        image: "E-com img.jpg",
        githubUrl: "https://shop-afreed.netlify.app/",
        liveUrl: "https://shop-afreed.netlify.app/"
    },
    {
        id: 2,
        title: "Burger-shop",
        description: "Online burger ordering system",
        image: "burger-img.jpg",
        githubUrl: "https://afreed-burger-shop.netlify.app/",
        liveUrl: "https://afreed-burger-shop.netlify.app/"
    },
    {
        id: 3,
        title: "Restaurant-web",
        description: "Restaurant website with booking system",
        image: "resturent-img.jpg",
        githubUrl: "https://lazeez-afreed.netlify.app/",
        liveUrl: "https://lazeez-afreed.netlify.app/"
    }
    
];

// Function to fetch and display projects
async function fetchAndDisplayProjects() {
    try {
        // In a real application, you would fetch from an API like this:
        // const response = await fetch('https://api.your-backend.com/projects');
        // const projects = await response.json();
        
        // For now, we'll use the mock data
        const projects = projectsData;
        
        const projectGrid = document.querySelector('.project-grid');
        projectGrid.innerHTML = ''; // Clear existing content
        
        projects.forEach(project => {
            const projectCard = `
                <div class="card" style="background-image: url('${project.image}'); background-size: cover; background-position: center;">
                    <div class="card-details">
                        <p class="text-title">${project.title}</p>
                        <p class="text-body">${project.description}</p>
                    </div>
                    <div class="btn">
                        <button class="button" onclick="window.open('${project.githubUrl}', '_blank')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="white"></path>
                            </svg>
                            <p class="text">View site</p>
                        </button>
                    </div>
                </div>
            `;
            projectGrid.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Error fetching projects:', error);
        document.querySelector('.project-grid').innerHTML = 
            '<p class="error">Error loading projects. Please try again later.</p>';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayProjects); 