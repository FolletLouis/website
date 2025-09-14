# Louis Follet - Academic Website

A professional academic website for Louis Follet, PhD student at MIT in Quantum Photonics & AI.

## Features

- **Responsive Design**: Mobile-friendly and fast-loading
- **Clean & Professional**: Minimal design optimized for academic visibility
- **Easy Content Management**: Update content by editing JSON files
- **GitHub Pages Ready**: Automatic deployment via GitHub Actions
- **SEO Optimized**: Proper meta tags and semantic HTML

## Structure

```
louis-follet-website/
├── index.html              # Main homepage
├── interests.html          # Personal interests page
├── publications.html       # Full publications list
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── data/
│   └── content.json       # Content management file
├── images/                # Images directory
│   └── louis-follet.jpg   # Professional photo (add your own)
├── documents/             # Documents directory
│   └── cv.pdf            # CV file (add your own)
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Pages deployment
```

## Quick Start

1. **Clone this repository**
   ```bash
   git clone https://github.com/yourusername/louis-follet-website.git
   cd louis-follet-website
   ```

2. **Add your content**
   - Replace `images/louis-follet.jpg` with your professional photo
   - Replace `documents/cv.pdf` with your CV
   - Edit `data/content.json` with your information

3. **Deploy to GitHub Pages**
   - Push to the `main` branch
   - Enable GitHub Pages in repository settings
   - Select "GitHub Actions" as the source

## Content Management

### Updating Personal Information

Edit `data/content.json` to update:
- Personal details (name, title, contact info)
- Bio text
- Research projects
- Publications
- Personal interests

### Adding New Publications

Add new entries to the `publications` array in `data/content.json`:

```json
{
  "title": "Your Paper Title",
  "authors": "L. Follet, Co-Author, et al.",
  "venue": "Journal Name, Year",
  "year": 2024,
  "type": "journal",
  "firstAuthor": true,
  "citations": 0,
  "links": [
    { "text": "PDF", "url": "link-to-pdf" },
    { "text": "DOI", "url": "link-to-doi" }
  ]
}
```

### Adding New Research Projects

Add new entries to the `research` array in `data/content.json`:

```json
{
  "title": "Project Title",
  "description": "Brief description of the project...",
  "links": [
    { "text": "Paper", "url": "link-to-paper" },
    { "text": "Code", "url": "link-to-code" }
  ]
}
```

## Customization

### Styling
- Edit `styles.css` to modify colors, fonts, and layout
- The design uses CSS Grid and Flexbox for responsive layouts
- Color scheme is defined in CSS custom properties

### Adding New Pages
1. Create new HTML file (e.g., `newpage.html`)
2. Add navigation link in `index.html` and other pages
3. Follow the existing structure and styling patterns

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized for fast loading
- Minimal external dependencies
- Compressed images recommended
- CSS and JS are minified in production

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions about this website template, please open an issue on GitHub.

---

**Last updated**: September 2024
