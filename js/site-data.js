/* ==========================================================================
   site-data.js
   All static content for the resume site lives here.
   Version 2.0 – Enhanced with richer content, categorized skills,
   project details, certifications, and professional copy.
   ========================================================================== */

const siteData = {
  profile: {
    name: "Hamza Shabbir",
    fullName: "Muhammad Hamza Shabbir",
    email: "mhamzasulehri143@gmail.com",
    location: "Zafarwal, Punjab, Pakistan",
    profileImage: "images/profile.jpg",
    availability: "Available for projects",
    greeting: "Hi there 👋",
    tagline:
      "I build scalable digital products that solve real business problems.",
    typedStrings: [
      "I'm Hamza Shabbir",
      "I'm a Senior Software Engineer",
      "I'm a Tech Lead & Mentor",
      "I build Scalable Web Applications",
      "I turn Ideas into Products",
    ],
    resumeFile: "mhamza-resume.pdf",
  },

  socialLinks: [
    {
      platform: "facebook",
      icon: "fab fa-facebook-f",
      title: "Facebook",
      url: "http://www.facebook.com/mhamzase",
    },
    {
      platform: "linkedin",
      icon: "fab fa-linkedin-in",
      title: "LinkedIn",
      url: "http://www.linkedin.com/in/mhamzase",
    },
    {
      platform: "github",
      icon: "fab fa-github",
      title: "GitHub",
      url: "http://www.github.com/mhamzase",
    },
    {
      platform: "whatsapp",
      icon: "fab fa-whatsapp",
      title: "WhatsApp",
      url: "https://wa.me/+923042445911",
    },
    {
      platform: "instagram",
      icon: "fab fa-instagram",
      title: "Instagram",
      url: "https://instagram.com/haimiraj",
    },
    {
      platform: "youtube",
      icon: "fab fa-youtube",
      title: "YouTube",
      url: "https://youtube.com",
    },
  ],

  about: {
    heading:
      'I\'m <span class="text-primary">Hamza Shabbir,</span> a Senior Software Engineer & Tech Lead.',
    paragraphs: [
      "With 6+ years of hands-on experience in full-stack development, I turn complex business challenges into clean, scalable digital solutions. My work covers the entire product journey, from understanding requirements and designing the architecture to deployment and ongoing optimization.",
      "I work across the full stack with a range of modern technologies, selecting the right tools for each project's unique needs. My experience spans frontend, backend, and cloud architecture, and I've led development teams, mentored junior developers, and delivered more than 72 successful projects for clients in a wide range of industries, from startups to established enterprises.",
      "My approach is simple: write clean code, focus on the user, and optimize for performance. Whether you need an MVP to test an idea or a full-scale enterprise app, I bring both the technical depth and the strategic thinking to make it happen.",
      '<span class="badge bg-success me-2"><i class="fas fa-circle me-1 text-success" style="font-size: 0.5rem;"></i>Available for Projects</span>',
    ],
  },

  stats: [
    { label: "Years of Experience", from: 0, to: 6, suffix: "+" },
    { label: "Projects Delivered", from: 0, to: 72, suffix: "+" },
    { label: "Happy Clients", from: 0, to: 26, suffix: "+" },
    { label: "Industry Awards", from: 0, to: 4, suffix: "" },
  ],

  services: [
    {
      icon: "fas fa-code",
      title: "Full-Stack Development",
      description:
        "End-to-end web application development using modern frameworks and best practices. From database design to frontend polish, I deliver products that are secure, fast, and easy to maintain.",
      bullets: [
        "React.js / Vue.js / Next.js frontends",
        "Laravel / Node.js / Python backends",
        "RESTful API design & integration",
        "Database architecture (MySQL, PostgreSQL, MongoDB)",
        "Third-party API integration (Stripe, Twilio, Google Maps)",
      ],
    },
    {
      icon: "fas fa-palette",
      title: "Frontend Engineering",
      description:
        "Pixel-perfect, responsive interfaces that captivate users and drive conversions. I focus on performance, accessibility, and cross-browser compatibility.",
      bullets: [
        "HTML5, CSS3/SCSS, TailwindCSS, Bootstrap",
        "JavaScript (ES6+), TypeScript",
        "React.js, Vue.js, Next.js",
        "State management (Redux, Pinia, Context API)",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: "fas fa-server",
      title: "Backend & API Development",
      description:
        "Robust, secure, and scalable server-side solutions. I architect APIs that power web, mobile, and desktop applications with clean, well-documented code.",
      bullets: [
        "Laravel, Node.js (Express/NestJS), Python (Django/Flask)",
        "RESTful & GraphQL API design",
        "Authentication (JWT, OAuth2, Sanctum)",
        "Queue systems & background jobs",
        "Microservices architecture",
      ],
    },
    {
      icon: "fab fa-wordpress",
      title: "CMS & E-Commerce Development",
      description:
        "Custom WordPress and e-commerce solutions that are easy to manage, SEO-optimized, and built to convert visitors into customers.",
      bullets: [
        "Custom WordPress themes & plugins",
        "WooCommerce / Shopify development",
        "Elementor Pro & page builders",
        "Performance & speed optimization",
        "SEO best practices implementation",
      ],
    },
    {
      icon: "fas fa-plug",
      title: "API Integration & Automation",
      description:
        "Connect your business tools and automate workflows with custom API integrations. I help businesses reduce manual work and improve efficiency.",
      bullets: [
        "Third-party API integration",
        "Webhook & cron job setup",
        "Payment gateway integration",
        "CRM & ERP integrations",
        "AI-powered automation (OpenAI, Google APIs)",
      ],
    },
    {
      icon: "fas fa-mobile-alt",
      title: "UI/UX & Prototype Design",
      description:
        "User-centered design that turns ideas into intuitive, beautiful interfaces. I create designs that are not just visually appealing but drive real user engagement.",
      bullets: [
        "Adobe XD / Figma wireframes & prototypes",
        "User flow & journey mapping",
        "Design systems & style guides",
        "Responsive & mobile-first design",
        "Usability testing & iteration",
      ],
    },
  ],

  education: [
    {
      date: "Mar 2017 to Feb 2021",
      title: "Bachelor of Science in Software Engineering",
      institution: "Virtual University of Pakistan",
      detail:
        "CGPA: 3.4/4.0. Focused on Web Development, Database Systems, and Software Architecture.",
      achievements: [
        "Graduated with distinction in Software Architecture and Web Technologies",
        "Developed final year project: a real-time collaboration platform using WebSockets",
      ],
    },
    {
      date: "Aug 2016 to Feb 2017",
      title: "Diploma in Computer Science",
      institution:
        "Technical Education & Vocational Training Authority (TEVTA)",
      detail:
        "Practical training in programming, networking, and IT fundamentals.",
      achievements: [
        "Top performer in batch",
        "Hands-on training in C++, Java, and web fundamentals",
      ],
    },
  ],

  experience: [
    {
      date: "Jun 2022 to Present",
      title: "Senior Full-Stack Engineer",
      company: "Karigar Web Solutions",
      detail:
        "Leading development of enterprise web applications, managing a team of 5 developers, and driving technical architecture decisions.",
      highlights: [
        "Led migration of legacy system to microservices architecture, improving performance by 40%",
        "Mentored 5 junior developers, conducting code reviews and knowledge-sharing sessions",
        "Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes",
        "Built 15+ client projects using Laravel, React.js, and AWS infrastructure",
      ],
      techStack: ["Laravel", "React.js", "AWS", "MySQL", "Redis", "Docker"],
    },
    {
      date: "May 2021 to Apr 2022",
      title: "Software Engineer",
      company: "University of South Asia",
      detail:
        "Developed and maintained university management systems and student-facing portals serving 10,000+ students.",
      highlights: [
        "Built student management system handling 10,000+ records with real-time updates",
        "Created RESTful APIs consumed by mobile app and web platform",
        "Optimized database queries reducing page load time by 35%",
        "Collaborated with cross-functional teams to deliver features on tight deadlines",
      ],
      techStack: ["Laravel", "Vue.js", "MySQL", "Git", "REST APIs"],
    },
    {
      date: "Mar 2020 to Apr 2021",
      title: "Full-Stack Developer",
      company: "VU Software House",
      detail:
        "Built web applications from scratch for diverse clients while gaining hands-on experience in the full development lifecycle.",
      highlights: [
        "Developed 10+ client websites and web applications from concept to deployment",
        "Implemented responsive designs ensuring cross-device compatibility",
        "Integrated payment gateways (Stripe, JazzCash) for e-commerce platforms",
        "Collaborated with design team to translate Figma/XD mockups into pixel-perfect code",
      ],
      techStack: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL", "Git"],
    },
  ],

  skills: {
    frontend: [
      { name: "HTML5 & CSS3", percent: 95 },
      { name: "JavaScript (ES6+)", percent: 90 },
      { name: "React.js / Next.js", percent: 85 },
      { name: "Vue.js", percent: 75 },
      { name: "TailwindCSS / Bootstrap", percent: 85 },
    ],
    backend: [
      { name: "Laravel / PHP", percent: 85 },
      { name: "Node.js / Express", percent: 75 },
      { name: "Python / Django", percent: 65 },
      { name: "REST API Design", percent: 90 },
      { name: "GraphQL", percent: 60 },
    ],
    databaseDevOps: [
      { name: "MySQL / PostgreSQL", percent: 85 },
      { name: "MongoDB", percent: 65 },
      { name: "Git / GitHub / Bitbucket", percent: 90 },
      { name: "Docker / CI-CD", percent: 70 },
      { name: "AWS / Heroku / Vercel", percent: 65 },
    ],
    designTools: [
      { name: "Adobe XD", percent: 80 },
      { name: "Figma", percent: 75 },
      { name: "WordPress / CMS", percent: 70 },
      { name: "SEO Optimization", percent: 65 },
    ],
  },

  certifications: [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    { name: "Laravel Certified Developer", issuer: "Laravel", year: "2022" },
    {
      name: "Vue.js Advanced Patterns",
      issuer: "Frontend Masters",
      year: "2021",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer: "Microsoft",
      year: "2024",
    },
  ],
  techStack: [
    "HTML5",
    "CSS3",
    "SCSS",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Vue.js",
    "Laravel",
    "Node.js",
    "Express",
    "Python",
    "Django",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "Git",
    "GitHub",
    "Bitbucket",
    "AWS",
    "Heroku",
    "Vercel",
    "TailwindCSS",
    "Bootstrap",
    "WordPress",
    "Figma",
    "Adobe XD",
    "Postman",
    "Jira",
  ],

  portfolio: [
    {
      name: "University of South Asia – Official Website",
      role: "Full-Stack Developer",
      description:
        "A comprehensive educational platform serving more than 10,000 students with course management, faculty profiles, news, events, and an admissions portal.",
      features: [
        "Responsive design with cross-browser support",
        "CMS for easy content management by university staff",
        "SEO optimization improving organic search ranking",
        "Integrated contact forms with email notifications",
      ],
      technologies: "Laravel, HTML5, CSS3, JavaScript, Git, GitHub",
      url: "https://www.usa.edu.pk/",
      urlText: "usa.edu.pk",
    },
    {
      name: "Inviggr – Social Media Management Platform",
      role: "Lead Developer",
      description:
        "A SaaS platform for social media scheduling, analytics, and team collaboration. Enables businesses to manage multiple social accounts from one dashboard.",
      features: [
        "Multi-tenant SaaS architecture",
        "OAuth2 integration with Facebook, Twitter, LinkedIn APIs",
        "Real-time analytics dashboard with charts",
        "Team collaboration with role-based permissions",
      ],
      technologies: "Laravel, React.js, MySQL, Redis, REST APIs, Git, GitHub",
      url: "https://inviggr-app.herokuapp.com/",
      urlText: "inviggr-app.herokuapp.com",
    },
    {
      name: "Social Aviation – Digital Agency Website",
      role: "Frontend Developer",
      description:
        "A high-converting marketing website for a digital agency. Features portfolio showcase, case studies, and a lead generation funnel.",
      features: [
        "Pixel-perfect responsive design",
        "Smooth animations and scroll effects",
        "SEO-optimized structure",
        "Contact form with email integration",
      ],
      technologies: "HTML, CSS, Bootstrap, JavaScript, Git, GitHub",
      url: "http://socialaviation.uk/",
      urlText: "socialaviation.uk",
    },
    {
      name: "Propreitors – Property Marketplace MVP",
      role: "Full-Stack Developer",
      description:
        "A minimum viable product for buying, renting, and selling properties. Users can list properties with images, search by location, and connect with agents.",
      features: [
        "Advanced search with filters (location, price, type)",
        "Image upload with lazy loading optimization",
        "User authentication and property management dashboard",
        "Responsive mobile-first design",
      ],
      technologies:
        "Laravel (Lumen), React.js, Next.js, HTML5, CSS3, JavaScript, Git, GitHub",
      url: "https://www.propreitors.com/",
      urlText: "propreitors.com",
    },
    {
      name: "We Are They – Community Movement Platform",
      role: "Full-Stack Developer",
      description:
        "A membership platform for a men's community movement featuring programs, events, resources, and community engagement tools.",
      features: [
        "Membership management with subscription billing",
        "Event scheduling and RSVP system",
        "Resource library with gated content",
        "Community forum with moderation tools",
      ],
      technologies: "Laravel, React.js, MySQL, Git, GitHub, REST APIs",
      url: "https://wearethetheymovement.com/",
      urlText: "wearethetheymovement.com",
    },
    {
      name: "Aktechsol – Technology Solutions Website",
      role: "Full-Stack Developer",
      description:
        "A corporate website for a technology solutions company. It highlights their services, showcases past projects, introduces the team, and provides clear contact options for potential clients.",
      features: [
        "Responsive design for all devices",
        "Custom CMS for easy content updates",
        "SEO optimization for better search visibility",
        "Integrated contact form with email notifications",
      ],
      technologies: "Laravel, TailwindCSS, JavaScript, MySQL, Git, GitHub",
      url: "https://aktechsol.pk",
      urlText: "aktechsol.pk",
    },
    {
      name: "Akdesignerart – Creative Design Portfolio",
      role: "Full-Stack Developer",
      description:
        "A portfolio website for a creative design and art studio. It presents their work in an engaging gallery, explains their services, and collects client inquiries through a contact form.",
      features: [
        "Image gallery with lightbox and smooth transitions",
        "Mobile-first responsive layout",
        "Smooth scrolling and subtle animations",
        "Contact form with validation and email integration",
      ],
      technologies: "Laravel, TailwindCSS, JavaScript, MySQL, Git, GitHub",
      url: "https://akdesignerart.com",
      urlText: "akdesignerart.com",
    },
  ],

  contact: {
    addressLines: [
      "Sulehri Town, Ward #5",
      "Tehsil & P/O Zafarwal",
      "District Narowal, Punjab, Pakistan",
    ],
    phone: "+92 304 2445911",
    whatsapp: "+92 304 2445911",
    email: "mhamzasulehri143@gmail.com",
    // workingHours: "Mon to Sat: 9:00 AM to 7:00 PM (PKT)",
    responseTime: "Average response time: under 2 hours",
  },

  footer: {
    year: 2025,
    company: "Hamza Shabbir",
  },
};
