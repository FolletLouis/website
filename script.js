// Content data - embedded to avoid CORS issues with localhost
let contentData = {
    "personal": {
        "name": "Louis Follet",
        "title": "PhD Student in Quantum Photonics & AI at MIT",
        "email": "louisf13@mit.edu",
        "office": "EECS Department, MIT",
        "bio": [
            "I am a PhD student in the Department of Electrical Engineering and Computer Science at MIT, working in the <a href='https://www.rle.mit.edu/qp/' target='_blank'>Quantum Photonics & AI Group</a> under Professor Dirk Englund. My research specializes in AI for Science, quantum optics, and photonics, with a strong focus on leveraging machine learning to tackle complex scientific and engineering challenges.",
            "At the intersection of machine learning and physics, I work on two fronts: creating new learning frameworks that capture the structure of physical laws, and applying them to real-world problems in photonics and quantum technologies. Underlying both is a focus on building models that are reliable, generalizable, and useful to scientists and engineers.",
            "Before MIT, I completed dual degrees at <a href='https://www.ens-paris-saclay.fr/en' target='_blank'>École Normale Supérieure Paris-Saclay</a> (<em>= BSc+MSc in Physics</em>) and <a href='https://www.institutoptique.fr/' target='_blank'>Institut d'Optique Graduate School</a> (<em>= BSc+MSc in Engineering</em>), with a specialization in <a href='https://ens-paris-saclay.fr/en/education/other-diplomas/arteq-diploma-quantum-technologies' target='_blank'>Quantum Technologies (ARTeQ)</a>. I also collaborated with teams at the <a href='https://www.phy.cam.ac.uk/' target='_blank'>University of Cambridge (Cavendish Laboratory)</a>, <a href='https://www.lkb.fr/en/' target='_blank'>Laboratoire Kastler Brossel (LKB)</a> – <a href='https://www.college-de-france.fr/en' target='_blank'>Collège de France</a>, and <a href='https://ntt-research.com/our-research/' target='_blank'>NTT Research</a>."
        ],
        "links": {
            "google_scholar": "https://scholar.google.com/citations?user=louis",
            "github": "https://github.com/FolletLouis",
            "linkedin": "https://linkedin.com/in/louisfollet",
            "orcid": "https://orcid.org/0000-0000-0000-0000"
        }
    },
    "news": [
        {
            "date": "2025-09",
            "title": "Preprint: Programmable Quantum Matter",
            "description": "New preprint on heralding large cluster states in driven inhomogeneous spin ensembles",
            "type": "publication",
            "links": [
                { "text": "arXiv", "url": "https://arxiv.org/abs/2509.02992" }
            ]
        },
        {
            "date": "2025-05",
            "title": "CLEO Talk: Photonic Crystal Bolometer",
            "description": "Presented research on thermal infrared detection with optically-probed photonic crystal bolometer",
            "type": "conference",
            "links": [
                { "text": "CLEO 2025", "url": "https://opg.optica.org/abstract.cfm?uri=CLEO_AT-2025-AA121_8" }
            ]
        },
        {
            "date": "2024-10",
            "title": "Nature Materials: hBN Spin Defects",
            "description": "Our paper on quantum coherent spin in hexagonal boron nitride at ambient conditions was published in Nature Materials",
            "type": "publication",
            "links": [
                { "text": "Nature Materials", "url": "https://www.nature.com/articles/s41563-024-01887-z" }
            ]
        }
    ],
    "aiResearch": [
        {
            "title": "AI-Driven Semiconductor Modeling",
            "description": "Developing AI-driven approaches for modeling and interpreting semiconductor fabrication processes of photonic devices, with emphasis on physics-informed ML and inverse design.",
            "date": "Ongoing",
            "institution": "MIT",
            "links": []
        },
        {
            "title": "Physics-Constrained Surrogate Modeling",
            "description": "Building physics-informed surrogate models that integrate domain knowledge with machine learning for accurate prediction of complex systems, with a focus on open quantum systems.",
            "date": "Ongoing",
            "institution": "MIT",
            "links": []
        },
        {
            "title": "Deep Learning for PDEs",
            "description": "Class project <em>(6.7960 Deep Learning)</em> on applying machine learning to partial differential equations, with a focus on KAN-ODE and FNO architectures. Implementations and blog posts are available on GitHub.",
            "date": "2024",
            "institution": "MIT",
            "links": [
                { "text": "GitHub", "url": "https://github.com/panand2257/Benchmarking_PDEs" }
            ]
        }
    ],
    "quantumResearch": [
        {
            "title": "Programmable Quantum Matter",
            "description": "Research on heralding large cluster states in driven inhomogeneous solid-state spin ensembles, contributing to scalable quantum computing architectures.",
            "date": "2025",
            "institution": "MIT",
            "links": [
                { "text": "Preprint", "url": "https://arxiv.org/abs/2509.02992" }
            ]
        },
        {
            "title": "Spin Defects in 2D Materials",
            "description": "Worked on spin-defect characterization in hBN thin films, combining software development with optical spectroscopy, published in Nature Materials.",
            "date": "2024",
            "institution": "University of Cambridge",
            "links": [
                { "text": "Paper", "url": "https://www.nature.com/articles/s41563-024-01887-z" },
                { "text": "Preprint", "url": "https://arxiv.org/abs/2403.12345" },
                { "text": "Lab website", "url": "https://www.quantum.cam.ac.uk/mete-atature" }
            ]
        },
        {
            "title": "Transport in Quantum Gases",
            "description": "Internship on ultracold dysprosium atoms, improving atom transport with optical dipole traps and acousto-optic modulation, combining theory and experiment.",
            "date": "2023",
            "institution": "LKB - Collège de France",
            "links": [
                { "text": "Report", "url": "documents/Internship_report_Louis_FOLLET___LKB.pdf" },
                { "text": "Lab website", "url": "https://quantumgases-pariscdf.fr/" }
            ]
        }
    ],
    "photonicsResearch": [
        {
            "title": "Photonic Crystal Bolometer",
            "description": "Developing an all-optical bolometer based on photonic crystal cavities for infrared detection, focusing on speed, sensitivity, and optical readout.",
            "date": "Ongoing",
            "institution": "MIT",
            "links": [
                { "text": "Conference", "url": "https://opg.optica.org/abstract.cfm?uri=CLEO_AT-2025-AA121_8" }
            ]
        },
        {
            "title": "Microresonator Nonlinear Dynamics",
            "description": "Studied nonlinear dynamics in optical microresonators, modeling soliton microcombs with the Lugiato–Lefever equation and advanced numerical solvers.",
            "date": "2022",
            "institution": "NTT Research",
            "links": [
                { "text": "Lab website", "url": "https://ntt-research.com/phi-lab/" }
            ]
        }
    ],
    "publications": [
        {
            "title": "Programmable Quantum Matter: Heralding Large Cluster States in Driven Inhomogeneous Spin Ensembles",
            "authors": "P. Anand*, <strong>L. Follet*</strong>, O. Hooybergs*, D. R. Englund (*Equal contribution)",
            "venue": "arXiv preprint, 2025",
            "year": 2025,
            "type": "preprint",
            "firstAuthor": true,
            "links": [
                { "text": "arXiv", "url": "https://arxiv.org/abs/2509.02992" }
            ]
        },
        {
            "title": "A quantum coherent spin in hexagonal boron nitride at ambient conditions",
            "authors": "H. Stern, C. Gilardoni, Q. Gu, S. Eizagirre Barker, O. Powell, X. Deng, <strong>L. Follet</strong>, C. Li, A. Ramsay, H. Tan, I. Aharonovich, M. Atatüre",
            "venue": "Nature Materials, 2024",
            "year": 2024,
            "type": "journal",
            "firstAuthor": false,
            "links": [
                { "text": "Nature Materials", "url": "https://www.nature.com/articles/s41563-024-01887-z" }
            ]
        }
    ],
    "interests": [
        {
            "title": "Science Communication",
            "description": "I believe in sharing scientific knowledge widely, not only to inspire curiosity but also to strengthen critical thinking across society. Scientific outreach is crucial for building an informed and engaged public.",
            "icon": "🔬"
        },
        {
            "title": "Access to Education",
            "description": "I care about expanding and improving access to high-quality education, with the goal of offering equal opportunities and reducing social inequalities in the long term.",
            "icon": "🎓"
        },
        {
            "title": "Entrepreneurship",
            "description": "I am interested in entrepreneurship more broadly, whether in deep tech or other domains, as a way to bring new ideas and technologies into the world.",
            "icon": "🚀"
        }
    ]
};

// DOM elements
let researchContainer, publicationsContainer, lastUpdatedElement, aboutContainer, interestsContainer, newsContainer, aiResearchContainer, quantumResearchContainer, photonicsResearchContainer;

// Initialize the website
document.addEventListener('DOMContentLoaded', async function() {
    researchContainer = document.getElementById('research-projects');
    publicationsContainer = document.getElementById('selected-pubs');
    lastUpdatedElement = document.getElementById('last-updated');
    aboutContainer = document.getElementById('about-content');
    interestsContainer = document.getElementById('interests-content');
    newsContainer = document.getElementById('news-content');
    aiResearchContainer = document.getElementById('ai-research');
    quantumResearchContainer = document.getElementById('quantum-research');
    photonicsResearchContainer = document.getElementById('photonics-research');
    
    // Content is now embedded, no need to load from JSON
    loadBioContent();
    loadNews();
    loadAIResearch();
    loadQuantumResearch();
    loadPhotonicsResearch();
    loadSelectedPublications();
    
    // Load interests only on the interests page
    if (interestsContainer) {
        loadInterests();
    }
    updateLastUpdated();
    setupSmoothScrolling();
    setupImageFallback();
});

// Content data is now embedded above, no loading needed

// Load bio content
function loadBioContent() {
    console.log('Loading bio content...', contentData.personal);
    if (!aboutContainer) {
        console.error('About container not found');
        return;
    }
    if (!contentData.personal.bio) {
        console.error('No bio data found');
        return;
    }
    
    const bioHtml = contentData.personal.bio.map(paragraph => `<p>${paragraph}</p>`).join('');
    const cvLink = aboutContainer.querySelector('.cv-link');
    
    if (cvLink) {
        // Insert bio content before the CV link
        cvLink.insertAdjacentHTML('beforebegin', bioHtml);
        console.log('Bio content loaded successfully');
    } else {
        console.error('CV link not found');
    }
}

// Load research projects
function loadResearchProjects() {
    if (!researchContainer) return;
    
    researchContainer.innerHTML = contentData.research.map(project => `
        <div class="research-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="research-links">
                ${project.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load news timeline
function loadNews() {
    if (!newsContainer || !contentData.news) return;
    
    newsContainer.innerHTML = contentData.news.map(item => `
        <div class="news-item">
            <div class="news-date">${item.date}</div>
            <div class="news-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                ${item.venue ? `<div class="news-venue">${item.venue}</div>` : ''}
                ${item.links ? `<div class="news-links">${item.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}</div>` : ''}
            </div>
        </div>
    `).join('');
}

// Load AI research
function loadAIResearch() {
    if (!aiResearchContainer || !contentData.aiResearch) return;
    
    aiResearchContainer.innerHTML = contentData.aiResearch.map(project => `
        <div class="research-card">
            <h3>${project.title}</h3>
            <div class="research-meta">
                <span class="research-date">${project.date}</span>
                <span class="research-institution">${project.institution}</span>
            </div>
            <p>${project.description}</p>
            <div class="research-links">
                ${project.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load quantum research
function loadQuantumResearch() {
    if (!quantumResearchContainer || !contentData.quantumResearch) return;
    
    quantumResearchContainer.innerHTML = contentData.quantumResearch.map(project => `
        <div class="research-card">
            <h3>${project.title}</h3>
            <div class="research-meta">
                <span class="research-date">${project.date}</span>
                <span class="research-institution">${project.institution}</span>
            </div>
            <p>${project.description}</p>
            <div class="research-links">
                ${project.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load photonics research
function loadPhotonicsResearch() {
    if (!photonicsResearchContainer || !contentData.photonicsResearch) return;
    
    photonicsResearchContainer.innerHTML = contentData.photonicsResearch.map(project => `
        <div class="research-card">
            <h3>${project.title}</h3>
            <div class="research-meta">
                <span class="research-date">${project.date}</span>
                <span class="research-institution">${project.institution}</span>
            </div>
            <p>${project.description}</p>
            <div class="research-links">
                ${project.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load selected publications
function loadSelectedPublications() {
    if (!publicationsContainer) return;
    
    publicationsContainer.innerHTML = contentData.publications.map(pub => `
        <div class="publication-item">
            <div class="publication-title">${pub.title}</div>
            <div class="publication-authors">${pub.authors}</div>
            <div class="publication-venue">${pub.venue}</div>
            <div class="publication-links">
                ${pub.links.map(link => `<a href="${link.url}">${link.text}</a>`).join('')}
            </div>
        </div>
    `).join('');
}

// Load interests
function loadInterests() {
    if (!interestsContainer || !contentData.interests) return;
    
    interestsContainer.innerHTML = contentData.interests.map(interest => `
        <div class="interest-card">
            <div class="interest-icon">${interest.icon}</div>
            <h3>${interest.title}</h3>
            <p>${interest.description}</p>
        </div>
    `).join('');
}

// Update last updated date
function updateLastUpdated() {
    if (!lastUpdatedElement) return;
    
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    lastUpdatedElement.textContent = now.toLocaleDateString('en-US', options);
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup image fallback for hero photo
function setupImageFallback() {
    const heroPhoto = document.getElementById('hero-photo');
    if (heroPhoto) {
        heroPhoto.addEventListener('error', function() {
            // Create a placeholder if image fails to load
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.style.cssText = `
                width: 250px;
                height: 250px;
                border-radius: 50%;
                background: linear-gradient(135deg, #2c3e50, #34495e);
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 4rem;
                font-weight: bold;
                margin: 0 auto;
            `;
            placeholder.textContent = 'LF';
            this.parentNode.appendChild(placeholder);
        });
    }
}

// Utility function to load external content (for future use)
async function loadExternalContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error loading external content:', error);
        return null;
    }
}

// Function to update content (for easy maintenance)
function updateContent(newData) {
    if (newData.research) {
        contentData.research = newData.research;
        loadResearchProjects();
    }
    if (newData.publications) {
        contentData.publications = newData.publications;
        loadSelectedPublications();
    }
}

// Export functions for potential external use
window.LouisWebsite = {
    updateContent,
    loadExternalContent
};
