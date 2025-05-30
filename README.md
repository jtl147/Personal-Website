# Jedi Lee – Personal Portfolio

Welcome to my portfolio!
This single-page, mobile-first website showcases my work as a web developer and designer. Built with HTML5, CSS3 (Flexbox & Grid), and modern JavaScript (ES6+), it features:

A parallax hero powered by Rellax.js

GSAP-driven entrance & scroll animations

ScrollReveal.js for cascading section reveals

Animated skill bars with bounce effects

A 3-column, 3D-tilt project gallery

A sleek page loader and downloadable résumé

Everything is fully responsive, accessible, and optimized for a smooth, interactive experience.

---

## Table of Contents

- [Demo](#demo)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Installation](#installation)  
- [Usage & Customization](#usage--customization)  
- [Project Structure](#project-structure)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Demo

🔗 **Live site**: https://jtl147.github.io/Personal-Website/

---

## Features

- **Parallax Hero**  
  Smooth, multi-layer parallax on the homepage using [Rellax.js](https://dixonandmoe.com/rellax/).

- **GSAP Animations**  
  — Navbar fade-in & slide  
  — Hero text & scroll indicator reveal  
  — Cascading skill-bar fills with bounce effect  
  — Section content reveal with [ScrollReveal.js](https://scrollrevealjs.org/)  
  — 3-column project grid with scroll-triggered slide-in  

- **Responsive Layout**  
  Fluid grid for projects (3-column → 2-column → 1-column) and mobile-friendly sections.

- **Skills Section**  
  Animated horizontal bars showing proficiency levels.

- **Resume Download**  
  Clickable thumbnail that downloads a PDF résumé.

- **Contact Section**  
  Cleanly styled email, GitHub, and LinkedIn links with hover effects via BoxIcons.

- **Page Loader**  
  Full-screen spinner that fades out when the site is ready.

---

## Tech Stack

- **HTML5**  
- **CSS3** (Flexbox, Grid, Custom Properties)  
- **JavaScript (ES6)**  
  - [Rellax.js](https://dixonandmoe.com/rellax/) for parallax  
  - [GSAP](https://greensock.com/gsap/) for timeline animations  
  - [ScrollReveal.js](https://scrollrevealjs.org/) for section reveals  
- **BoxIcons** for SVG icon fonts  
- **GitHub Pages** for hosting  

---

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/jtl147/Personal-Website.git
   cd Personal-Website
   
## Open locally
Since this is a purely static site, you can simply open index.html in your browser, or run a lightweight server for proper routing:

```bash
# using Python 3.x
python -m http.server 8000

# then visit
http://localhost:8000
```

## Usage & Customization
- **Global Colors & Fonts**  
  Defined in `styles.css` under `:root`. Change `--first-color`, `--dark-color`, and `font-size` variables to re-theme.

- **Parallax Layers**  
  Swap out the `background-image` URLs in `.home__parallax-img1`…`4`.

- **Skills**  
  Edit the `.skill__fill[data-level="…"]` attributes in the Resume section to adjust percentages.

## Projects

- **Update `index.html`**  
  Modify the `#projects-section`.

- **Swap Thumbnail Images**  
  Replace images in `assets/img/`.

- **Adjust Links and Titles**  
  Update project links and titles as needed.

- **Contact Info**  
  Edit the `<a>` tags in `#contact-section` with your email, GitHub, and LinkedIn URLs.

- **Loader**  
  Customize the spinner color and fade timing in CSS (`#loader`, `@keyframes spin`).


## Project Structure

```text
Personal-Website/
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── main.js
│   │   └── rellax.min.js
│   ├── img/
│   │   ├── hero-layer1.png
│   │   ├── resume-thumb.png
│   │   └── project1-thumb.png
│   └── files/
│       └── JediLee_Resume.pdf
├── index.html
└── README.md
```
## Deployment

This site is set up for **GitHub Pages**. Simply push to `main` and GitHub Pages will rebuild:

1. Ensure you’ve committed all changes:

   ```bash
   git add .
   git commit -m "Deploy update"
   git push

## Contributing

1. Fork this repository  
2. Create a feature branch: `git checkout -b feature/my-feature`  
3. Commit your changes: `git commit -m "Add my feature"`  
4. Push to your fork: `git push origin feature/my-feature`  
5. Open a Pull Request

## License

This project is released under the [MIT License](LICENSE).


