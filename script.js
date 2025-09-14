// Content data - loaded from JSON file for easy updates
let contentData = {
    research: [],
    publications: []
};

// DOM elements
let researchContainer, publicationsContainer, lastUpdatedElement;

// Initialize the website
document.addEventListener('DOMContentLoaded', async function() {
    researchContainer = document.getElementById('research-projects');
    publicationsContainer = document.getElementById('selected-pubs');
    lastUpdatedElement = document.getElementById('last-updated');
    
    // Load content from JSON file
    await loadContentData();
    
    loadResearchProjects();
    loadSelectedPublications();
    updateLastUpdated();
    setupSmoothScrolling();
    setupImageFallback();
});

// Load content data from JSON file
async function loadContentData() {
    try {
        const response = await fetch('data/content.json');
        if (!response.ok) throw new Error('Failed to load content data');
        const data = await response.json();
        contentData.research = data.research || [];
        contentData.publications = data.publications || [];
    } catch (error) {
        console.error('Error loading content data:', error);
        // Fallback to default content if JSON loading fails
        contentData.research = [
            {
                title: "Quantum Photonic Neural Networks",
                description: "Developing novel architectures for quantum neural networks using integrated photonic circuits.",
                links: [{ text: "Paper", url: "#" }]
            }
        ];
        contentData.publications = [
            {
                title: "Sample Publication",
                authors: "L. Follet, et al.",
                venue: "Journal Name, 2024",
                links: [{ text: "PDF", url: "#" }]
            }
        ];
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
