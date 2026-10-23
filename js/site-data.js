/* ==========================================================================
   site-data.js
   All content for the portfolio lives in this one file.
   To update the site, edit the text here. No other file needs to change.
   Version 3.0: same trusted data, cleaned up and reordered.
   Lead titles: Principal Engineer and Team Lead.
   ========================================================================== */

const siteData = {
  profile: {
    name: "Hamza Shabbir",
    fullName: "Muhammad Hamza Shabbir",
    firstName: "Hamza",
    email: "mhamzasulehri143@gmail.com",
    location: "Zafarwal, Punjab, Pakistan",
    profileImage: "images/profile.webp",
    profileImageFallback: "images/profile.jpg",
    availability: "Available for projects",
    greeting: "Hi, I am Hamza Shabbir",
    tagline:
      "I build scalable digital products that solve real business problems.",
    typedStrings: [
      "Principal Engineer",
      "Team Lead",
      "Full-Stack Developer",
      "I build scalable software solutions",
      "I turn ideas into working products",
    ],
    resumeFile: "resume.pdf",
    /* Rotating pairs for the hero badge: no single stack is "the core",
       the badge cycles through the stacks he actually works in. */
    stackRotations: [
      "Laravel · React",
      "Vue · Node.js",
      "Python · REST APIs",
      "WordPress · Shopify",
      "MySQL · Docker · AWS",
    ],
  },

  socialLinks: [
    {
      platform: "linkedin",
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/mhamzase",
    },
    {
      platform: "github",
      title: "GitHub",
      url: "https://www.github.com/mhamzase",
    },
    {
      platform: "facebook",
      title: "Facebook",
      url: "https://www.facebook.com/mhamzase",
    },
    {
      platform: "instagram",
      title: "Instagram",
      url: "https://instagram.com/haimiraj",
    },
    {
      platform: "whatsapp",
      title: "WhatsApp",
      url: "https://wa.me/923042445911",
    },
  ],

  about: {
    heading:
      'I am <span class="text-gradient">Hamza Shabbir</span>, a Principal Engineer and Team Lead.',
    paragraphs: [
      "I have 7+ years of hands-on experience in full-stack development. I turn business problems into clean, scalable digital solutions, and I stay involved through the whole journey: understanding the requirements, designing the system, building it, launching it, and improving it over time.",
      "I work across the full stack and pick the right tools for each project. Along the way I have led development teams, mentored junior developers, and delivered more than 72 projects for clients in different industries, from startups to established businesses.",
      "My way of working is simple: write clean code, keep the user at the centre, and care about performance. Whether it is a small MVP to test an idea or a full-scale application, I bring both the technical depth and the practical thinking to get it done.",
    ],
  },

  stats: [
    { label: "Years of Experience", value: 7, suffix: "+" },
    { label: "Projects Delivered", value: 72, suffix: "+" },
    { label: "Happy Clients", value: 26, suffix: "+" },
    { label: "Industry Awards", value: 4, suffix: "" },
  ],

  services: [
    {
      icon: "layers",
      title: "SaaS Product Development",
      featured: true,
      description:
        "Have an idea for a software product that businesses will pay for? I plan and build complete SaaS products, the way I built the AK Tailor App: every customer gets their own separate workspace, subscriptions run themselves, and the unglamorous parts, like backups, roles, and security, are done properly from day one.",
      bullets: [
        "Multi-tenant architecture: every customer's data fully separate",
        "Subscription plans, free trials, and billing",
        "Admin panel and customer dashboards",
        "Roles and permissions for teams",
        "Automated backups and restore",
        "Built on Laravel, ready to grow with your customers",
      ],
    },
    {
      icon: "code",
      title: "Full-Stack Development",
      description:
        "Complete web applications, built end to end. From database design to the final polish on the frontend, you get a product that is secure, fast, and easy to maintain.",
      bullets: [
        "React.js, Vue.js and Next.js frontends",
        "Laravel, Node.js and Python backends",
        "REST API design and integration",
        "MySQL, PostgreSQL and MongoDB databases",
        "Payments, maps, messaging and other third-party APIs",
      ],
    },
    {
      icon: "layout",
      title: "Frontend Engineering",
      description:
        "Clean, responsive interfaces that look right on every screen and are pleasant to use. I care about performance, accessibility, and consistency across browsers.",
      bullets: [
        "HTML5, CSS3 and SCSS, Tailwind CSS, Bootstrap",
        "JavaScript (ES6+) and TypeScript",
        "React.js, Vue.js and Next.js",
        "Redux, Pinia and Context API state management",
        "Progressive Web Apps (PWA)",
      ],
    },
    {
      icon: "server",
      title: "Backend and API Development",
      description:
        "Solid server-side systems and APIs that power web, mobile, and desktop apps. Clean, documented code that other developers can pick up without a struggle.",
      bullets: [
        "Laravel, Node.js (Express, NestJS), Python (Django, Flask)",
        "REST and GraphQL API design",
        "JWT, OAuth2 and Sanctum authentication",
        "Queues and background jobs",
        "Microservices architecture",
      ],
    },
    {
      icon: "cart",
      title: "CMS and E-Commerce",
      description:
        "WordPress and online store solutions that are easy to manage and built to sell. SEO friendly, fast loading, and set up so you can update content yourself.",
      bullets: [
        "Custom WordPress themes and plugins",
        "WooCommerce and Shopify development",
        "Elementor Pro and page builders",
        "Speed and performance optimisation",
        "On-page SEO best practices",
      ],
    },
    {
      icon: "plug",
      title: "API Integration and Automation",
      description:
        "I connect the tools your business already uses and automate the repetitive work, including AI features where they genuinely help, like chatbots that answer customers and systems that sort inquiries on their own. Your team spends time on the work that matters.",
      bullets: [
        "AI chatbots and AI powered automation (OpenAI, Google APIs)",
        "Third-party API integration",
        "Webhooks and scheduled jobs",
        "Payment gateway integration",
        "CRM and ERP integrations",
      ],
    },
    {
      icon: "pen",
      title: "UI/UX and Prototyping",
      description:
        "Designs that start from the user, not from decoration. Clear flows and tidy interfaces that look good and are easy to understand.",
      bullets: [
        "Figma and Adobe XD wireframes and prototypes",
        "User flows and journey mapping",
        "Design systems and style guides",
        "Responsive, mobile-first design",
        "Usability testing and iteration",
      ],
    },
  ],

  education: [
    {
      date: "Mar 2017 to Feb 2021",
      title: "Bachelor of Science in Software Engineering",
      institution: "Virtual University of Pakistan",
      detail:
        "CGPA: 3.4/4.0. Focused on web development, database systems, and software architecture.",
      achievements: [
        "Graduated with distinction in Software Architecture and Web Technologies",
        "Final year project: a real-time collaboration platform built with WebSockets",
      ],
    },
    {
      date: "Aug 2016 to Feb 2017",
      title: "Diploma in Computer Science",
      institution:
        "Technical Education and Vocational Training Authority (TEVTA)",
      detail:
        "Practical training in programming, networking, and IT fundamentals.",
      achievements: [
        "Top performer in the batch",
        "Hands-on training in C++, Java, and web fundamentals",
      ],
    },
  ],

  experience: [
    {
      date: "Nov 2025 to Present",
      title: "Senior Software Engineer & Tech Lead",
      company: "Self Employed · Lahore, Hybrid",
      detail:
        "Working as a Senior Software Engineer and Tech Lead, leading engineering teams and delivering scalable digital solutions for clients across various industries.",
      highlights: [
        "Focus on full-stack development, AI-driven automation, and system architecture",
        "Helping businesses modernize their workflows and reduce operational costs",
        "Building products that grow with the business",
      ],
      techStack: [
        "Full-Stack Development",
        "AI Automation",
        "System Architecture",
        "Team Leadership",
      ],
    },
    {
      date: "Jun 2023 to Oct 2025",
      title: "Senior Software Engineer",
      company: "ByteCrew · Full-time · Lahore, On-site",
      detail:
        "Experienced in RESTful APIs and full-stack development with Laravel, Vue.js, and Python.",
      highlights: [
        "RESTful API and full-stack development with Laravel, Vue.js, and Python",
        "Integrated third-party services to enhance functionality, scalability, and performance",
      ],
      techStack: ["Laravel", "Vue.js", "Python", "REST APIs"],
    },
    {
      date: "May 2021 to Apr 2022",
      title: "Software Engineer",
      company: "University of South Asia",
      detail:
        "Developed and maintained university management systems and student-facing portals serving 10,000+ students.",
      highlights: [
        "Built a student management system handling 10,000+ records with real-time updates",
        "Created REST APIs used by the mobile app and the web platform",
        "Optimised database queries and reduced page load time by 35%",
        "Worked with cross-functional teams to deliver features on tight deadlines",
      ],
      techStack: ["Laravel", "Vue.js", "MySQL", "Git", "REST APIs"],
    },
    {
      date: "Mar 2020 to Apr 2021",
      title: "Full-Stack Developer",
      company: "VU Software House",
      detail:
        "Built web applications from scratch for different clients, working through the full development lifecycle.",
      highlights: [
        "Developed 10+ client websites and web applications, from concept to launch",
        "Built responsive designs that work properly across devices",
        "Integrated Stripe and JazzCash payment gateways for e-commerce platforms",
        "Turned Figma and XD designs into pixel-perfect working pages",
      ],
      techStack: ["PHP", "Laravel", "JavaScript", "Bootstrap", "MySQL", "Git"],
    },
  ],

  skills: {
    frontend: [
      { name: "HTML5 and CSS3", percent: 95 },
      { name: "JavaScript (ES6+)", percent: 90 },
      { name: "React.js / Next.js", percent: 85 },
      { name: "Vue.js", percent: 75 },
      { name: "Tailwind CSS / Bootstrap", percent: 85 },
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
      { name: "SEO Optimisation", percent: 65 },
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
    "Tailwind CSS",
    "Bootstrap",
    "WordPress",
    "Figma",
    "Adobe XD",
    "Postman",
    "Jira",
  ],

  /* category is used by the portfolio filter:
     "platform" = SaaS and platforms, "website" = websites */
  portfolio: [
    {
      name: "AK Tailor App: Tailor Shop Management SaaS",
      shortName: "AK Tailor App",
      category: "platform",
      categoryLabel: "SaaS Product",
      hue: 38,
      role: "Lead Developer",
      description:
        "A multi-tenant SaaS that helps tailor shops run their whole business online instead of on paper registers: orders, measurements, payments, and udhaar, all in one place.",
      features: [
        "Multi-tenant: every shop gets its own separate, private workspace",
        "Orders, customer measurements, payments, and udhaar tracking",
        "Subscription plans with a free trial",
        "Per-shop backup and restore, including automatic weekly backups",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Spatie RBAC"],
      url: "https://tailor.aktechsol.pk",
      urlText: "tailor.aktechsol.pk",
      image: "images/projects/tailor-app.webp",
      caseStudy: {
        problem:
          "Tailor shops run on paper: orders in one register, measurements in another, and udhaar (credit) remembered, not recorded. Delivery dates get missed, old measurements get lost, and the owner never really knows who owes what or which shop work is pending.",
        built: [
          "A multi-tenant SaaS: every shop gets its own private workspace, staff accounts, and roles, while I run the whole platform from one admin panel",
          "Orders tied to each customer's saved measurements, with delivery dates and status tracking",
          "An udhaar ledger that shows, per customer, how much is owed and since when",
          "Subscription plans with a free trial, so shops pay monthly like any modern software",
          "Per-shop backup and restore with automatic weekly backups, so a shop's data is never lost",
        ],
        outcome:
          "The product is live and shops run their daily work on it: orders, measurements, payments, and credit, all in one place instead of scattered registers. It is the product that taught me how to build software other businesses depend on every day.",
      },
    },
    {
      name: "AK Designer Art: Online Learning Platform",
      shortName: "AK Designer Art",
      category: "platform",
      categoryLabel: "LMS Platform",
      hue: 210,
      role: "Lead Developer",
      description:
        "A complete online learning platform for creative and professional courses, with enrollments, installment plans, and separate panels for admins, students, instructors, and referral partners.",
      features: [
        "Course enrollment with full payment or installments (2 to 6 months)",
        "Four panels: CMS admin, student LMS, instructor, and referral",
        "Demo class booking with a payment approval flow",
        "WhatsApp group access unlocked after enrollment approval",
      ],
      technologies: ["Laravel", "MySQL", "Spatie Media Library", "JavaScript"],
      url: "https://akdesignerart.com",
      urlText: "akdesignerart.com",
      caseStudy: {
        problem:
          "The institute sold its courses through chats and phone calls. Enrollment requests, fee receipts, and installment tracking lived in notebooks and inboxes, so approvals were slow and staff could not quickly answer a simple question: who has paid, and who still owes?",
        built: [
          "A full course catalog with enrollment requests and a payment proof approval flow",
          "Installment plans of 2 to 6 months, tracked per student",
          "Four separate panels: CMS for admins, an LMS for students, an instructor panel, and a referral panel",
          "Demo class booking for schools, with session confirmations by email",
          "Each course's WhatsApp group link is sent automatically in the approval email",
        ],
        outcome:
          "The platform is live at akdesignerart.com with 18 courses, 2,700+ students, and 20 instructors on it. Enrollments, installments, and class coordination that used to run through calls and notebooks now run through the system.",
      },
    },
    {
      name: "University of South Asia: Official Website",
      shortName: "USA",
      category: "platform",
      categoryLabel: "Web Platform",
      hue: 222,
      image: "images/projects/usa.webp",
      role: "Full-Stack Developer",
      description:
        "The official platform for a university serving more than 10,000 students, with course management, faculty profiles, news, events, and an admissions portal.",
      features: [
        "Responsive design with cross-browser support",
        "A CMS so university staff can manage content themselves",
        "SEO work that improved organic search ranking",
        "Contact forms with email notifications",
      ],
      technologies: ["Laravel", "HTML5", "CSS3", "JavaScript", "Git", "GitHub"],
      url: "https://www.usa.edu.pk/",
      urlText: "usa.edu.pk",
    },
    {
      name: "Inviggr: Social Media Management Platform",
      shortName: "Inviggr",
      category: "platform",
      categoryLabel: "SaaS Platform",
      hue: 265,
      role: "Lead Developer",
      description:
        "A SaaS platform for social media scheduling, analytics, and team collaboration. Businesses manage all their social accounts from one dashboard.",
      features: [
        "Multi-tenant SaaS architecture",
        "OAuth2 integration with Facebook, Twitter, and LinkedIn",
        "Real-time analytics dashboard with charts",
        "Team collaboration with role-based permissions",
      ],
      technologies: ["Laravel", "React.js", "MySQL", "Redis", "REST APIs", "GitHub"],
      url: "https://inviggr-app.herokuapp.com/",
      urlText: "inviggr-app.herokuapp.com",
    },
    {
      name: "Propreitors: Property Marketplace MVP",
      shortName: "Propreitors",
      category: "platform",
      categoryLabel: "Marketplace",
      hue: 160,
      role: "Full-Stack Developer",
      description:
        "An MVP for buying, renting, and selling property. Users list properties with images, search by location, and connect with agents.",
      features: [
        "Advanced search with location, price, and type filters",
        "Image uploads with lazy loading",
        "User accounts and a property management dashboard",
        "Responsive, mobile-first design",
      ],
      technologies: ["Laravel (Lumen)", "React.js", "Next.js", "JavaScript", "GitHub"],
      url: "https://www.propreitors.com/",
      urlText: "propreitors.com",
    },
    {
      name: "We Are They: Community Platform",
      shortName: "We Are They",
      category: "platform",
      categoryLabel: "Community Platform",
      hue: 20,
      image: "images/projects/we-are-they.webp",
      role: "Full-Stack Developer",
      description:
        "A membership platform for a men's community movement, with programs, events, resources, and community engagement tools.",
      features: [
        "Membership management with subscription billing",
        "Event scheduling and RSVP system",
        "Resource library with gated content",
        "Community forum with moderation tools",
      ],
      technologies: ["Laravel", "React.js", "MySQL", "REST APIs", "GitHub"],
      url: "https://wearethetheymovement.com/",
      urlText: "wearethetheymovement.com",
    },
    {
      name: "AK Tech Sol: Agency Website and Business System",
      shortName: "AK Tech Sol",
      category: "website",
      categoryLabel: "Agency Website",
      hue: 210,
      role: "Full-Stack Developer",
      description:
        "The website and internal system of a full-service digital agency. Clients send inquiries and request quotations, and the team manages the whole flow in one admin panel, from proposal to project to invoice.",
      features: [
        "Inquiry to proposal to project to invoice workflow",
        "Admin panel for services, projects, blog, jobs, and site settings",
        "Multi-currency proposals and invoices",
        "Fully responsive, with a built-in website chatbot",
      ],
      technologies: ["Laravel", "Tailwind CSS", "JavaScript", "MySQL", "GitHub"],
      url: "https://aktechsol.pk",
      urlText: "aktechsol.pk",
      image: "images/projects/ak-tech-sol.webp",
      caseStudy: {
        problem:
          "My own agency's work arrived as scattered inquiries in chats and email. Proposals were written from scratch each time, invoices lived in separate files, and when a project finished, working out each team member's share of the revenue was a manual, error-prone job.",
        built: [
          "One pipeline in a single admin panel: inquiry to proposal to project to invoice, nothing tracked outside the system",
          "Proposals and invoices in multiple currencies, because clients are not all in Pakistan",
          "Revenue distribution: each project's income is split among the team with payment proof recorded",
          "A public website with services, portfolio, blog, and an AI chatbot that answers visitors",
          "The whole team works in it: roles, task assignment, and activity history",
        ],
        outcome:
          "The system runs the agency's daily work at aktechsol.pk. It started as a website and became the tool the business operates on, which is exactly the kind of software I now build for clients.",
      },
    },
    {
      name: "Social Aviation: Digital Agency Website",
      shortName: "Social Aviation",
      category: "website",
      categoryLabel: "Agency Website",
      hue: 190,
      role: "Frontend Developer",
      description:
        "A marketing website for a digital agency, built to convert. It includes a portfolio showcase, case studies, and a lead generation funnel.",
      features: [
        "Pixel-perfect responsive design",
        "Smooth animations and scroll effects",
        "SEO-optimised structure",
        "Contact form with email integration",
      ],
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "GitHub"],
      url: "http://socialaviation.uk/",
      urlText: "socialaviation.uk",
    },
  ],

  /* How I work: the same flow he runs for clients at his agency */
  process: [
    {
      title: "We talk first",
      text: "You explain the problem on a call or WhatsApp. I ask questions until I understand your business, not just the feature list, because the right system depends on how you actually work.",
    },
    {
      title: "A clear proposal",
      text: "You get the scope, the price, and the timeline in writing before any work starts. What is agreed is what gets built, and there are no surprises later.",
    },
    {
      title: "Built in stages",
      text: "I build in stages and show you progress as it happens, so you can give feedback while changes are still cheap, not only at the very end.",
    },
    {
      title: "Launch and support",
      text: "Your product goes live properly: deployed, tested, and handed over with everything documented. After that I stay available for fixes, changes, and the next phase.",
    },
  ],

  /* Real client reviews only, never invented. The section stays hidden
     while this list is empty. Entry format:
     { name: "Client Name", role: "Role, Company", rating: 5,
       text: "What the client said, in their own words." } */
  testimonials: [],

  contact: {
    addressLines: ["Sulehri Town, Ward #5 Zafarwal"],
    phone: "+92 304 2445911",
    whatsapp: "+92 304 2445911",
    email: "mhamzasulehri143@gmail.com",
    responseTime: "Average response time: under 2 hours",
  },

  footer: {
    company: "Hamza Shabbir",
  },
};
