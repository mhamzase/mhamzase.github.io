/* ==========================================================================
   site-data.js
   All static content for the resume site lives here instead of being
   hard-coded inside index.html. site-render.js reads this object and
   injects the markup into the page at load time.
   ========================================================================== */

const siteData = {

  profile: {
    name: "Hamza Shabbir",
    fullName: "Muhammad Hamza Shabbir",
    email: "mhamzasulehri143@gmail.com",
    location: "Zafarwal, Punjab, Pakistan",
    profileImage: "images/profile.jpg",
    greeting: "Hi Dev's \uD83D\uDC4B",
    tagline: "\"Change Your Work Way. Every Problem Has A Solution\"",
    typedStrings: [
      "I'm Hamza Shabbir",
      "I'm a Senior Software Engineer"
    ],
    resumeFile: "mhamza-resume.pdf"
  },

  socialLinks: [
    { platform: "facebook",  icon: "fab fa-facebook-f", title: "Facebook",  url: "http://www.facebook.com/mhamzase" },
    { platform: "linkedin",  icon: "fab fa-linkedin",   title: "LinkedIn",  url: "http://www.linkedin.com/in/mhamzase" },
    { platform: "github",    icon: "fab fa-github",     title: "GitHub",    url: "http://www.github.com/mhamzase" },
    { platform: "whatsapp",  icon: "fab fa-whatsapp",   title: "WhatsApp",  url: "https://wa.me/+923042445911" },
    { platform: "instagram", icon: "fab fa-instagram",  title: "Instagram", url: "https://instagram.com/haimiraj" },
    { platform: "youtube",   icon: "fab fa-youtube",    title: "Youtube",   url: "https://youtube.com" }
  ],

  about: {
    heading: "I'm <span class=\"text-primary\">Hamza Shabbir,</span> a Senior Software Engineer.",
    paragraphs: [
      "Senior Software Engineer & Tech Lead with 6+ years of experience turning business challenges into scalable digital solutions. I specialize in full-stack development, AI-driven automation, system architecture, and technical team leadership helping businesses improve efficiency, reduce costs, and build products that scale."
    ]
  },

  stats: [
    { label: "Years Experience", from: 0, to: 6,  suffix: "+" },
    { label: "Happy Clients",    from: 0, to: 26,  suffix: "+" },
    { label: "Projects Done",    from: 0, to: 72, suffix: "+" },
    { label: "Get Awards",       from: 0, to: 4,  suffix: "" }
  ],

  services: [
    {
      icon: "fas fa-palette",
      title: "Front End Development",
      description: "Experts in front-end languages such as HTML, CSS/SCSS, Bootstrap,TailwindCSS, JavaScript, Vue.js and React.js. I'm focus on using technologies that not only make your solutions attractive, but also enhance its performance. I'm make sure that your websites, applications and products have a user-friendly UI/UX."
    },
    {
      icon: "fas fa-layer-group",
      title: "Back End Development",
      description: "I'm proficient in handling applications that run on servers like applications and APIs. I build websites that function seamlessly and fulfill the expectations of your customers. I use use programming languages and frameworks like Python, PHP, SQL and Laravel."
    },
    {
      icon: "fa fa-wordpress",
      title: "CMS Development",
      description: "WordPress Administration and Custom development, including HTML, PHP, CSS & mySQL, WordPress Elementor Pro, Theme & Plugins installation and setup, WordPress SEO and Performance/Speed Optomization, Domain & Hosting Configuration. I have extensive experience and knowledge with PHP, Javascript, and of course, HTML and CSS. I'm very comfortable working with MySQL databases, both large and small, for any database maintenance needs within WordPress."
    },
    {
      icon: "fas fa-paint-brush",
      title: "Adobe XD Prototype Designs",
      description: "I always thought, that design is not just about nice pics, but it's about a powerful tool for achieving any goal. I want to reach only amazing positives goals and what I could do for you:<br />- Clear design of any web/mob product;<br />- Create something new<br />- Or follow your instructions as well;<br />- Design everything in little time.<br />"
    },
    {
      icon: "fas fa-paint-brush",
      title: "API Development &amp; Integration",
      description: "I'm a developer who can create RESTful APIs and integrate them with existing systems. I'm also able to integrate APIs with third-party services. I'm able to create API's that can be consumed by any application."
    }
  ],

  education: [
    { date: "Aug 2016 - Feb 2017", title: "Computer Science (Diploma)",                 institution: "Technical Education &amp; Vocational Training Authority (TEVTA)" },
    { date: "Mar 2017 - Feb 2021", title: "Bachelor Degree (BS Software Engineeing)",   institution: "Virtual University of Pakistan" }
  ],

  experience: [
    { date: "Mar 2020 - April 2021", title: "Full Stack Developer", company: "VU Software House" },
    { date: "May 2021 - April 2022", title: "Software Engineer",    company: "University of South Aisa" },
    { date: "June 2022 - Present",   title: "Full Stack Engineer",  company: "Karigar Web Solutions" }
  ],

  // Rendered as two columns of six, in this order (matches original markup).
  skills: [
    { name: "Web Design",                    percent: 65 },
    { name: "HTML/CSS",                      percent: 95 },
    { name: "JavaScript ES6",                percent: 80 },
    { name: "Git (Version Control System)",  percent: 90 },
    { name: "APIs",                          percent: 70 },
    { name: "Adobe XD",                      percent: 70 },
    { name: "React JS",                      percent: 70 },
    { name: "Laravel",                       percent: 60 },
    { name: "Bootstrap, TailwindCSS",        percent: 70 },
    { name: "GitHub,Bitbucket",              percent: 80 },
    { name: "WordPress",                     percent: 60 },
    { name: "API Creating & Integration",    percent: 70 }
  ],

  // Rendered as two columns (first 3 in column one, last 2 in column two),
  // matching the original markup.
  portfolio: [
    {
      description: "This is an Educational Website based.",
      technologies: "Laravel, HTML5, CSS3, JavaScript, Git, GitHub and other libraries",
      url: "https://www.usa.edu.pk/",
      urlText: "usa.edu.pk"
    },
    {
      description: "This is a Social Media Management Project.",
      technologies: "Laravel, HTML5, CSS3, JavaScript, Git, GitHub and other libraries",
      url: "https://inviggr-app.herokuapp.com//",
      urlText: "invigger-app"
    },
    {
      description: "We\u2019re a Top Digital Agency. We transform brands using ideas. We are a full stack agency, offering everything from stunning websites to ROI on adspend! Social Brand are on your side of the table, we want want to understand your business, goals and what you need to get you there!",
      technologies: "HTML, CSS, Bootstrap, JavaScript, Git, GitHub and other libraries",
      url: "http://socialaviation.uk/",
      urlText: "socialaviation.uk"
    },
    {
      description: "This is a MVP(Minimum Viable Project) based on Buying, Renting and Selling of Properties.",
      technologies: "Laravel(Luman), React.js, Next.js HTML5, CSS3, JavaScript, Git, GitHub and other libraries",
      url: "https://www.propreitors.com//",
      urlText: "Propreitors.com"
    },
    {
      description: "We are the they is a movement, full of a group of men that are working together to achieve greatness in this life... In the program, you will be immersed into a community of like-minded men that have committed to each other to show up in integrity and only as their true selves. Change is hard... and you need the tools and network inside we are the they to ensure that the proper changes are happening to help you level up in life.",
      technologies: "Laravel, React.js, Git, GitHub and other libraries",
      url: "https://wearethetheymovement.com/",
      urlText: "wearethetheymovement.com"
    }
  ],

  contact: {
    addressLines: ["Sulehri Town Ward # 5", "Tehsil &amp; P/O Zafarwal", "District Narowal Punjab"],
    phone: "+92 304 2445911",
    whatsapp: "+92 304 2445911",
    email: "mhamzasulehri143@"
  },

  footer: {
    year: 2021,
    company: "ByteCode"
  }
};