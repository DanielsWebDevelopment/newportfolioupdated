const projects = [
    {   
        id: 1,
        projectImage0: '/assets/projectimage2.png',
        projectImage1: '/assets/userflow.jpg',
        name: 'Smoothie Savor',
        desc: 'Smoothie Savor is a dynamic web application tailored for smoothie lovers. It features a diverse collection of unique smoothie recipes and enables users to craft their own personalized smoothie creations.',
        githubLink: 'https://github.com/DanielsWebDevelopment/SmoothieSavor',
        liveLink: 'https://smoothiesavor.com/home.html',
    },
    {
        id: 2,
        projectImage0: '/assets/projectimage1.png',
        name: 'Diamondhead Construction',
        desc: 'Diamondhead Construction is a company specializing in carpentry and home renovation services.',
        githubLink: 'https://github.com/DanielsWebDevelopment/Diamondhead-Construction',
        liveLink: 'https://diamondheadconstruction.netlify.app/',
    },
    {
        id: 3,
        projectImage0: '/assets/projectimage3.png',
        name: 'SprintSphere',
        desc: 'Welcome to Sprintsphere! This is a mock e-commerce site designed with a focus on building a functional shopping cart. Sprintsphere offers a range of products aimed at enhancing your running capabilities. Whether your a seasoned marathon runner or just getting started with jogging, Sprintsphere has something for everyone.',
        githubLink: 'https://github.com/DanielsWebDevelopment/SprintSphere-Shop-landing-page',
        liveLink: 'https://sprintsphere.netlify.app/',
    },
    {
        id: 4,
        projectImage0: '/assets/projectimage4.png',
        name: 'Tresbien Food Delivery',
        desc: 'Welcome to TresBien, your go-to restaurant web app for exploring menus, making reservations, and experiencing culinary delight!',
        githubLink: 'https://github.com/DanielsWebDevelopment/Restaurant-landing-page---TresBien',
        liveLink: 'https://tresbien.netlify.app/',
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('projects__container');

    const projectCards = projects.map(project => `
        <div class="project__cards">
            <div class="project_card">
                <div class="project-top">
                    <img src=${project.projectImage0}>
                </div>
                <div class="project-bottom">
                    <small>${project.name}</small>
                    <p>${project.desc}</p>

                    <div class="project-links">
                        <a href=${project.githubLink}>Github</a>
                        <a href=${project.liveLink}>View live</a>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    projectContainer.innerHTML = projectCards;
});