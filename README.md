# Wasim Akram R — Premium Animated Developer Portfolio

A responsive, high-performance, animation-rich personal portfolio web application built for **Wasim Akram R** (Junior Software Developer | React.js Developer).

Built strictly according to the architecture specifications in `# MASTER PROMPT Build a Premium Ani.md`.

---

## 🚀 Live Development Server & Build Commands

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The server will start at `http://localhost:3000` (or the next available port).

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🛠️ Technology Stack

- **Framework**: React.js 18 (Functional components, Hooks, Modular architecture)
- **Styling**: Tailwind CSS (Utility-first, Custom dark theme, Glassmorphism)
- **Icons**: Lucide React
- **Build Tool**: Vite 6
- **Typography**: Inter (Body text) + Space Grotesk (Headings)

---

## 📂 Project Structure

```
c:\Portfolio\
├── public\
│   └── favicon.svg                  # Modern custom SVG monogram favicon
├── src\
│   ├── components\
│   │   ├── About.jsx                # Professional narrative, philosophy & pillars
│   │   ├── BackgroundGlow.jsx       # Subtle ambient grid, lighting & cursor follower
│   │   ├── BackToTop.jsx            # Scroll-triggered floating return button
│   │   ├── Contact.jsx              # Verified contact cards, form validation & mailto dispatch
│   │   ├── ExperienceTimeline.jsx   # Interactive career & education timeline
│   │   ├── Footer.jsx               # Navigation links, dynamic year & copyright
│   │   ├── Hero.jsx                 # Value proposition, actions, developer code card & stack
│   │   ├── Navbar.jsx               # Sticky glassmorphic navbar with mobile drawer
│   │   ├── ProjectCard.jsx          # Interactive card with mockup & actions
│   │   ├── ProjectDetailsModal.jsx  # Deep-dive architecture view & tech stack
│   │   ├── ProjectGallery.jsx       # Category filtering & grid showcase
│   │   ├── ProjectMockup.jsx        # Custom CSS/SVG mockups for all 4 projects
│   │   └── ResumeModal.jsx          # Printable & downloadable resume modal
│   ├── data\
│   │   └── portfolioData.js         # Verified resume content, projects & skills
│   ├── App.jsx                      # Root application layout & state
│   ├── index.css                    # Tailwind setup, glassmorphism & print rules
│   └── main.jsx                     # React root mount
├── index.html                       # SEO meta tags, OpenGraph, font imports
├── package.json                     # Project manifest and scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Theme colors, keyframes, and custom utilities
└── vite.config.js                   # Vite configuration
```

---

## 📋 Verified Candidate & Career Data

- **Name**: Wasim Akram R
- **Professional Title**: Junior Software Developer | React.js Developer
- **Location**: Madurai, India
- **Experience**: 1+ Year Software Development Experience
- **Email**: `wasim90422@gmail.com`
- **Phone**: `+91 9042242984`
- **Experience**:
  - *Junior Software Developer* at TechSmew Innovations Pvt Ltd (Sept 2025 – July 2026)
  - *React.js Developer Intern* at TechSmew Innovations Pvt Ltd (June 2025 – Sept 2025)
- **Education**:
  - *B.Tech in Information Technology*, Anna University – BIT Campus, Tiruchirappalli (2020–2024), **77.8%**

---

## 💼 Featured Projects Showcase

1. **CRM Application** (Full Stack)
   - Enterprise CRM dashboard with React.js, Node.js, Express.js, MongoDB, REST APIs, and Keycloak RBAC.
2. **Jewellery Platform** (Frontend)
   - Luxury e-commerce interface with responsive catalog grids, interactive filters, quotation forms, and REST API bindings.
3. **Twitter Clone** (Full Stack)
   - Social media platform with JWT authentication, React Query caching, and Cloudinary CDN image uploads.
4. **Chatify — Real-Time Chat App** (Real-Time Applications)
   - Bi-directional instant messaging application built with Socket.io, Zustand state management, and live user presence.

---

## ⚙️ Configuration & Custom Links Checklist

To customize external profile links, update `src/data/portfolioData.js`:
- `personalInfo.links.github`: Set to your personal GitHub profile URL.
- `personalInfo.links.linkedin`: Set to your personal LinkedIn profile URL.
- `projectsData[i].links.github`: Set repository URLs for each project if public.
- `projectsData[i].links.liveDemo`: Set live demo URLs for each project if deployed.
