# Manish Sahu - Flutter Developer Portfolio 🚀

A modern, high-performance, attractive developer portfolio website tailored for **Manish Sahu** (Flutter & Mobile Application Engineer). Built with pure modern HTML5, CSS3 (Glassmorphism & Cyber Neon theme), and Vanilla JavaScript — zero build step required, works out-of-the-box on **GitHub Pages**.

Inspired by modern developer portfolios with sleek dark mode, glowing accents, smooth micro-interactions, and high responsiveness.

---

## 🌟 Key Highlights

- **Aesthetic Cyber Glow Design**: Deep dark tech theme with neon cyan & purple accents, subtle ambient glows, and glassmorphic cards.
- **Dark / Light Mode**: Seamless theme switcher that remembers user preference via `localStorage`.
- **Dynamic Typing Animation**: Engaging headline typing effect showcasing key roles and engineering specialties.
- **Filterable Technical Skills**: Filter between *Mobile & Frameworks*, *State Management*, *Backend & Cloud*, *Architecture & DB*, and *DevOps*.
- **Interactive Career Timeline**: Visual journey detailing work at **FixingDots** (*FixHR Employee Management App*) and **RiverHouse Technology** (*Collegiate Backer*).
- **Featured Projects Showcase**: Presentation of **FixHR**, **Collegiate Backer**, and **Appixo (Play Store & GitHub)** with device frames, tech stack pills, and action links.
- **Resume Viewer & Printable Resume**: Includes an in-app glassmorphic modal viewer and a dedicated print/save-to-PDF page ([resume.html](resume.html)).
- **1-Click Copy**: Quick-copy buttons for email and phone number with toast alerts.
- **Fast & SEO Optimized**: Zero npm dependencies, 100% lighthouse performance friendly, semantic HTML5, and Open Graph tags.

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

Deploying takes less than 2 minutes!

### Step 1: Initialize Git and Push to GitHub

Open your terminal in this `d:\portfoli` folder:

```bash
# 1. Initialize git repository
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "Initial commit: Manish Sahu Flutter Portfolio"

# 4. Rename default branch to main
git branch -M main

# 5. Link to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 6. Push code
git push -u origin main
```

### Step 2: Enable GitHub Pages in Repository Settings

1. Go to your repository on **GitHub.com**.
2. Click on the **Settings** tab (gear icon at the top).
3. On the left sidebar, click on **Pages** (under "Code and automation").
4. Under **"Build and deployment"**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` and folder `/ (root)`
   - Click **Save**.

### Step 3: Your Site is Live! 🎉

After 1-2 minutes, GitHub will publish your site at:
`https://<your-username>.github.io/<your-repo-name>/`

---

## 📂 Project Structure

```text
portfoli/
│
├── index.html         # Main portfolio page (Single Page Application)
├── style.css          # Glassmorphic, modern CSS & responsive design system
├── script.js          # Interactive JavaScript (theme toggle, typing, filters, modal)
├── resume.html        # Print-ready clean resume with A4 print styling
├── README.md          # Deployment & setup documentation
└── assets/
    ├── avatar.jpg     # 3D developer avatar with neon ambient lighting
    └── Manish_Sahu_Resume.pdf  # (Optional: drop your physical PDF here if desired)
```

---

## ✏️ How to Customize

- **Social Links**: Search for `https://linkedin.com`, `https://github.com`, etc., in `index.html` and replace them with your exact profile URLs.
- **Avatar Photo**: Replace `assets/avatar.jpg` with your own personal photograph if preferred.
- **Projects**: Add or update cards inside `<section id="projects">` in `index.html`.

---

© 2026 Manish Sahu. Crafted with passion for mobile engineering.
