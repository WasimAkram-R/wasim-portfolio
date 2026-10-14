/**
 * Wasim Akram R - Developer Portfolio Data
 * Based on verified professional resume details.
 */

export const personalInfo = {
  name: "Wasim Akram R",
  role: "Junior Software Developer",
  roleSpecialization: "React.js Developer",
  mernRole: "MERN Developer",
  fullTitle: "Junior Software Developer | React.js Developer | MERN Developer",
  headline: "Building Modern Web Experiences Through Code and Creativity.",
  location: "Madurai, India",
  experienceYears: "1+ Year",
  experienceSummary: "1+ year of software development experience",
  email: "wasim90422@gmail.com",
  phone: "+91 9042242984",
  phoneFormatted: "+91 90422 42984",
  bio: "Passionate Junior Software Developer with hands-on experience developing modular frontend modules, responsive user interfaces, and robust web applications. Experienced in React.js, modern JavaScript, Tailwind CSS, and REST API integration with a strong commitment to clean code, testing, debugging, and continuous learning.",
  shortIntro: "Specializing in React.js, modern JavaScript, responsive UI development, reusable components, testing, debugging, and collaborative software engineering.",
  
  // External profile URLs
  links: {
    github: "https://github.com/WasimAkram-R",
    linkedin: "https://www.linkedin.com/in/wasim-akram-b6b74822a",
    email: "mailto:wasim90422@gmail.com",
    phone: "tel:+919042242984",
  },
  
  // Highlight statistics
  stats: [
    { label: "Software Experience", value: "1+ Year" },
    { label: "Completed Projects", value: "4+" },
    { label: "Technologies Mastered", value: "16+" },
    { label: "Education Score", value: "77.8%" },
  ]
};

export const experienceData = [
  {
    id: "exp-1",
    role: "Junior Software Developer",
    company: "TechSmew Innovations Pvt Ltd",
    period: "September 2025 – July 2026",
    type: "Full-time",
    location: "India",
    current: true,
    highlights: [
      "Engineered responsive user interface modules, interactive dashboards, and scalable application forms using React.js and modern CSS.",
      "Built and maintained reusable UI component libraries to enhance frontend consistency and reduce development turnaround times.",
      "Integrated client applications with RESTful APIs, handling data fetching, mutation, and client-side error states.",
      "Collaborated actively with cross-functional development teams, participating in code reviews, bug fixes, testing, and sprint milestones.",
      "Investigated and resolved layout inconsistencies and performance bottlenecks across diverse viewports and modern web browsers."
    ],
    technologies: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "REST APIs", "Git", "Component Architecture"]
  },
  {
    id: "exp-2",
    role: "React.js Developer Intern",
    company: "TechSmew Innovations Pvt Ltd",
    period: "June 2025 – September 2025",
    type: "Internship",
    location: "India",
    current: false,
    highlights: [
      "Assisted in developing single-page application interfaces using React functional components and hooks.",
      "Worked on responsive UI design implementations utilizing Tailwind CSS and CSS3 transitions.",
      "Conducted debugging, component testing, and validation of user input forms across multiple devices.",
      "Gained hands-on experience in agile team workflows, Git version control, and collaborative code reviews."
    ],
    technologies: ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"]
  }
];

export const educationData = [
  {
    id: "edu-1",
    degree: "B.Tech in Information Technology",
    institution: "Anna University – BIT Campus",
    location: "Tiruchirappalli, Tamil Nadu, India",
    period: "2020 – 2024",
    grade: "77.8%",
    highlights: [
      "Graduated with a strong academic score of 77.8% in Information Technology.",
      "Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Web Technologies, Software Engineering, and Computer Networks."
    ]
  }
];

export const skillsCategories = [
  {
    id: "frontend",
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", description: "Hooks, Router, Modular Components, State" },
      { name: "JavaScript (ES6+)", description: "Async/Await, Closures, DOM, Fetch API" },
      { name: "Tailwind CSS", description: "Utility-first, Responsive Layouts, Custom Themes" },
      { name: "HTML5", description: "Semantic markup, Accessibility, Forms, Audio/Video" },
      { name: "CSS3", description: "Flexbox, Grid, Keyframes, Transitions, Glassmorphism" },
      { name: "Bootstrap", description: "Rapid Prototyping, Responsive Grid, UI Kits" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", description: "Event Loop, NPM, Server-side Logic, Express Server" },
      { name: "Express.js", description: "RESTful Endpoints, Routing, Middleware, CORS" }
    ]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "MongoDB", description: "NoSQL Schemas, Mongoose ODM, Aggregations, Atlas" },
      { name: "MySQL", description: "Relational Queries, Joins, Indexing, Schema Design" }
    ]
  },
  {
    id: "devtools",
    title: "Developer Tools & DevOps",
    iconName: "Wrench",
    skills: [
      { name: "Git", description: "Branching, Merging, Rebase, Version History" },
      { name: "GitHub", description: "Pull Requests, Code Reviews, Collaboration, Actions" },
      { name: "Linux", description: "CLI Navigation, Shell Scripting, Permissions, Environment" },
      { name: "Docker", description: "Containerization, Dockerfile, Container Management" },
      { name: "Kubernetes", description: "Pods, Deployments, Cluster Orchestration basics" },
      { name: "Jenkins", description: "CI/CD Pipeline concepts, Automation builds" }
    ]
  },
  {
    id: "additional",
    title: "Additional Tools & Platforms",
    iconName: "Cpu",
    skills: [
      { name: "Figma", description: "UI wireframing, Design inspection, Component specs" },
      { name: "Canva", description: "Visual assets, Graphics preparation, Presentations" },
      { name: "Power Apps", description: "Low-code app forms, Business logic integration" },
      { name: "Power Automate", description: "Workflow triggers, Automated notifications" },
      { name: "SharePoint", description: "Document libraries, Team collaboration sites" },
      { name: "Dataverse", description: "Relational business tables, Common data models" }
    ]
  }
];

export const projectsData = [
  {
    id: "crm-application",
    title: "CRM Application",
    subtitle: "Enterprise Customer Relationship Management Platform",
    category: "Full Stack",
    categories: ["All Projects", "Full Stack"],
    badge: "Enterprise Architecture",
    description: "A comprehensive CRM application featuring React.js dashboards and user interface components for customer, lead, and workflow management with secure Keycloak access control.",
    longDescription: "Engineered an enterprise-grade Customer Relationship Management (CRM) application that equips teams to streamline client interactions, track sales pipelines, and manage customer life cycles. Built dynamic React.js dashboards with responsive analytical widgets, robust REST API integration for rapid CRUD operations, and integrated Keycloak authentication for enterprise role-based security.",
    keyHighlights: [
      "Built dynamic, responsive React.js dashboards providing real-time visibility into customer records and workflow statuses.",
      "Integrated secure REST APIs facilitating full CRUD lifecycle operations with robust error handling and loading feedback.",
      "Implemented Keycloak authentication and granular role-based access control (RBAC) ensuring secure data isolation between departments.",
      "Structured reusable modular UI components to ensure consistency across complex data tables, modal dialogs, and filter bars."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Keycloak",
      "Tailwind CSS"
    ],
    mockupType: "crm",
    accentColor: "from-blue-500 to-cyan-500",
    links: {
      github: null,
      liveDemo: null
    }
  },
  {
    id: "jewellery-platform",
    title: "Jewellery Platform",
    subtitle: "Modern Luxury E-Commerce Experience",
    category: "Frontend",
    categories: ["All Projects", "Frontend"],
    badge: "E-Commerce Experience",
    description: "A responsive jewellery platform featuring product listings, application screens, interactive components, forms, and user-friendly interfaces tailored for luxury retail.",
    longDescription: "Crafted a visually elegant, high-performance web platform for a luxury jewellery showcase. Developed responsive product catalog grids, interactive filter drawers, high-resolution visual viewers, and accessible quotation/enquiry forms. Focused heavily on smooth animations, micro-interactions, and mobile-first responsiveness to deliver a high-converting customer journey.",
    keyHighlights: [
      "Designed and coded a fluid, mobile-first responsive layout utilizing Tailwind CSS and CSS3 transitions.",
      "Built interactive product filter matrices enabling customers to filter collections by category, metal, and price point.",
      "Integrated client-side REST API bindings for seamless product data loading, pagination, and stock status representation.",
      "Engineered comprehensive validation on enquiry and reservation forms, improving user feedback and preventing submission errors."
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "REST APIs",
      "CSS3 Animations",
      "HTML5"
    ],
    mockupType: "jewellery",
    accentColor: "from-amber-400 to-rose-500",
    links: {
      github: null,
      liveDemo: null
    }
  },
  {
    id: "twitter-clone",
    title: "Twitter Clone",
    subtitle: "Full-Featured Social Networking Platform",
    category: "Full Stack",
    categories: ["All Projects", "Full Stack"],
    badge: "MERN + React Query",
    description: "A social networking application with JWT-based authentication, post creation and management, profile editing, role-based functionality, and real-time notifications.",
    longDescription: "Constructed a full-featured social media platform modeled after modern microblogging networks. Architected with the MERN stack, incorporating JSON Web Tokens (JWT) for secure session handling and protected routing. Implemented TanStack React Query for advanced server-state caching, automatic refetching, and instantaneous optimistic UI updates upon posting and liking.",
    keyHighlights: [
      "Engineered JWT authentication flow with secure HTTP-only token management and protected navigation routes.",
      "Implemented TanStack React Query for declarative server-state synchronization, optimistic timeline updates, and zero-flicker caching.",
      "Integrated Cloudinary API for optimized image uploads, responsive avatar transformations, and media CDN delivery.",
      "Built dynamic engagement capabilities including post creation, thread comments, profile editing, and notification feeds."
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT",
      "React Query",
      "Cloudinary",
      "Tailwind CSS"
    ],
    mockupType: "twitter",
    accentColor: "from-sky-400 to-blue-600",
    links: {
      github: null,
      liveDemo: "https://x-clone-lh3a.onrender.com/"
    }
  },
  {
    id: "chatify-app",
    title: "Chatify — Real-Time Chat App",
    subtitle: "Bi-Directional Messaging & Presence Platform",
    category: "Real-Time Applications",
    categories: ["All Projects", "Real-Time Applications", "Full Stack"],
    badge: "Socket.io & Zustand",
    description: "A real-time messaging application featuring instant communication, online user status tracking, and centralized state management powered by Socket.io and Zustand.",
    longDescription: "Engineered a high-performance, real-time messaging web application facilitating zero-latency peer communication. Leveraged WebSockets via Socket.io for bi-directional event dispatching, paired with Zustand for streamlined, minimal-overhead state management. Built real-time online presence indicators, instant read status, and robust reconnection fallback logic.",
    keyHighlights: [
      "Integrated Socket.io WebSockets for millisecond-latency live message delivery and bi-directional communication channels.",
      "Implemented centralized global state management using Zustand, drastically reducing boilerplate and unnecessary component re-renders.",
      "Built live presence tracking displaying active user statuses, typing notifications, and instant unread badge counts.",
      "Handled client-server network drops gracefully with auto-reconnection flows, optimistic message queues, and toast alerts."
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "Express.js",
      "MongoDB",
      "Zustand",
      "Tailwind CSS"
    ],
    mockupType: "chat",
    accentColor: "from-emerald-400 to-teal-600",
    links: {
      github: null,
      liveDemo: "https://chat-app-jls6.onrender.com/"
    }
  }
];

export const filterCategories = [
  "All Projects",
  "Frontend",
  "Full Stack",
  "Real-Time Applications"
];
