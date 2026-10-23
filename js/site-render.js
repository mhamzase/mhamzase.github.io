/* ==========================================================================
   site-render.js: Portfolio v3
   Reads siteData (js/site-data.js) and renders every section into the
   matching containers in index.html. Icons are inline SVG, no icon font
   and no CDN, so nothing external can break the page.
   ========================================================================== */

(function () {
  "use strict";

  /* Inline SVG icon set (24x24, stroke style unless noted) */
  var ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 6-6 6 6 6M16 6l6 6-6 6"/></svg>',
    layers:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 2 9 4.9-9 4.9-9-4.9L12 2Z"/><path d="m3 11.9 9 4.9 9-4.9"/><path d="m3 16.9 9 4.9 9-4.9"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.95 5.98 6.6.96-4.78 4.66 1.13 6.58L12 17.57l-5.9 3.1 1.13-6.57L2.45 9.44l6.6-.96L12 2.5z"/></svg>',
    quote:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 8c-3 .6-5 3-5 6.3 0 2 1.4 3.7 3.4 3.7S12 16.4 12 14.3c0-2-1.3-3.4-3.1-3.4-.3 0-.7 0-.9.1.3-1.2 1.2-2.1 2.4-2.5L10 8zm9 0c-3 .6-5 3-5 6.3 0 2 1.4 3.7 3.4 3.7S21 16.4 21 14.3c0-2-1.3-3.4-3.1-3.4-.3 0-.7 0-.9.1.3-1.2 1.2-2.1 2.4-2.5L19 8z" transform="translate(-2 0)"/></svg>',
    layout:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
    server:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="7" rx="2"/><rect x="2" y="14" width="20" height="7" rx="2"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    plug: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 2v6M15 2v6M5 8h14v3a7 7 0 0 1-14 0V8ZM12 18v4"/></svg>',
    pen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
    check:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
    arrow:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    award:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    phone:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    clock:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
    whatsapp:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2a9.9 9.9 0 0 0-8.4 15.2L2 22l4.9-1.6A9.9 9.9 0 1 0 12.04 2Zm0 1.8a8.1 8.1 0 1 1-4.1 15.1l-.3-.18-3 .97 1-2.9-.19-.3A8.1 8.1 0 0 1 12.04 3.8Zm-3.1 3.9c-.16 0-.42.06-.64.31-.22.26-.86.84-.86 1.83 0 .99.72 1.94.82 2.08.1.13 1.4 2.3 3.5 3.13 1.75.69 2.1.55 2.49.46.39-.09 1.27-.52 1.45-1.02.18-.5.18-.93.13-1.02-.06-.08-.21-.14-.44-.25-.23-.12-.51-.26-.79-.4-.27-.13-.36-.22-.27-.45.09-.23.4-.53.54-.72.14-.19.19-.33.1-.55-.09-.22-.46-1.13-.62-1.47-.16-.34-.31-.35-.47-.35Z"/></svg>',
    linkedin:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"/></svg>',
    github:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .3a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .1-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 1.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z"/></svg>',
    facebook:
      '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.49h-2.8V24C19.62 23.1 24 18.1 24 12.07Z"/></svg>',
    instagram:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || "";
  }

  function el(id) {
    return document.getElementById(id);
  }

  function socialButtonsHTML() {
    return siteData.socialLinks
      .map(function (s) {
        return (
          '<a class="social-btn" href="' +
          s.url +
          '" target="_blank" rel="noopener noreferrer" aria-label="' +
          s.title +
          '" title="' +
          s.title +
          '">' +
          icon(s.platform) +
          "</a>"
        );
      })
      .join("");
  }

  /* Hero ------------------------------------------------------------------ */
  function renderHero() {
    el("hero-availability").textContent = siteData.profile.availability;
    el("hero-greeting").textContent = siteData.profile.greeting;
    el("hero-tagline").textContent = siteData.profile.tagline;
    el("profile-card-name").textContent = siteData.profile.fullName;

    el("stats-container").innerHTML = siteData.stats
      .map(function (stat) {
        return (
          '<div class="stat"><p class="stat-value"><span class="count" data-count="' +
          stat.value +
          '">0</span><span class="suffix">' +
          stat.suffix +
          '</span></p><p class="stat-label">' +
          stat.label +
          "</p></div>"
        );
      })
      .join("");
  }

  /* Marquee (tech names, duplicated once for a seamless loop) ------------ */
  function renderMarquee() {
    var items = siteData.techStack
      .map(function (t) {
        return '<span class="marquee-item">' + t + "</span>";
      })
      .join("");
    el("marquee-track").innerHTML = items + items;
  }

  /* About ------------------------------------------------------------------ */
  function renderAbout() {
    el("about-heading").innerHTML = siteData.about.heading;
    el("about-paragraphs").innerHTML = siteData.about.paragraphs
      .map(function (p) {
        return "<p>" + p + "</p>";
      })
      .join("");

    el("about-info-list").innerHTML =
      '<li><span class="info-label">Name</span><span>' +
      siteData.profile.fullName +
      "</span></li>" +
      '<li><span class="info-label">Email</span><a href="mailto:' +
      siteData.profile.email +
      '">' +
      siteData.profile.email +
      "</a></li>" +
      '<li><span class="info-label">Location</span><span>' +
      siteData.profile.location +
      "</span></li>" +
      '<li><span class="info-label">Status</span><span class="status-yes">' +
      siteData.profile.availability +
      "</span></li>";

    el("about-social-icons").innerHTML = socialButtonsHTML();
  }

  /* Services ---------------------------------------------------------------- */
  function renderServices() {
    el("services-container").innerHTML = siteData.services
      .map(function (service) {
        var bullets = service.bullets
          .map(function (b) {
            return "<li>" + icon("check") + "<span>" + b + "</span></li>";
          })
          .join("");
        return (
          '<article class="service-card reveal' +
          (service.featured ? " featured" : "") +
          '">' +
          (service.featured
            ? '<span class="service-flag">My specialty</span>'
            : "") +
          '<div class="service-icon">' +
          icon(service.icon) +
          "</div>" +
          "<h3>" +
          service.title +
          "</h3>" +
          "<p>" +
          service.description +
          "</p>" +
          '<ul class="service-list">' +
          bullets +
          "</ul>" +
          "</article>"
        );
      })
      .join("");
  }

  /* Resume: experience and education timelines ------------------------------ */
  function timelineItemHTML(item, pointsKey, points) {
    var pointsHTML = points
      ? '<ul class="timeline-points">' +
        points
          .map(function (p) {
            return "<li>" + icon("check") + "<span>" + p + "</span></li>";
          })
          .join("") +
        "</ul>"
      : "";
    var tagsHTML = item.techStack
      ? '<div class="timeline-tags">' +
        item.techStack
          .map(function (t) {
            return '<span class="chip">' + t + "</span>";
          })
          .join("") +
        "</div>"
      : "";
    return (
      '<div class="timeline-item reveal"><div class="timeline-card">' +
      '<span class="timeline-date">' +
      item.date +
      "</span>" +
      "<h4>" +
      item.title +
      "</h4>" +
      '<p class="timeline-org">' +
      (item.company || item.institution) +
      "</p>" +
      '<p class="timeline-detail">' +
      item.detail +
      "</p>" +
      pointsHTML +
      tagsHTML +
      "</div></div>"
    );
  }

  function renderResume() {
    el("experience-container").innerHTML = siteData.experience
      .map(function (item) {
        return timelineItemHTML(item, "highlights", item.highlights);
      })
      .join("");
    el("education-container").innerHTML = siteData.education
      .map(function (item) {
        return timelineItemHTML(item, "achievements", item.achievements);
      })
      .join("");
  }

  /* Skills -------------------------------------------------------------------- */
  function renderSkills() {
    var groups = [
      { label: "Frontend Development", skills: siteData.skills.frontend },
      { label: "Backend Development", skills: siteData.skills.backend },
      { label: "Database and DevOps", skills: siteData.skills.databaseDevOps },
      { label: "Design and Tools", skills: siteData.skills.designTools },
    ];
    el("skills-container").innerHTML = groups
      .map(function (group) {
        var rows = group.skills
          .map(function (skill) {
            return (
              '<div class="skill-row"><div class="skill-row-head">' +
              '<span class="skill-name">' +
              skill.name +
              '</span><span class="skill-pct">' +
              skill.percent +
              '%</span></div><div class="skill-bar">' +
              '<div class="skill-bar-fill" data-width="' +
              skill.percent +
              '"></div></div></div>'
            );
          })
          .join("");
        return (
          '<div class="skill-card reveal"><h4><span class="dot"></span>' +
          group.label +
          "</h4>" +
          rows +
          "</div>"
        );
      })
      .join("");
  }

  /* Certifications -------------------------------------------------------------- */
  function renderCertifications() {
    el("certifications-container").innerHTML = siteData.certifications
      .map(function (cert) {
        return (
          '<div class="cert-card reveal"><div class="cert-icon">' +
          icon("award") +
          "</div><h4>" +
          cert.name +
          "</h4><p>" +
          cert.issuer +
          '</p><p class="cert-year">' +
          cert.year +
          "</p></div>"
        );
      })
      .join("");
  }

  /* Tech stack --------------------------------------------------------------------- */
  function renderTechStack() {
    el("tech-stack-container").innerHTML = siteData.techStack
      .map(function (t) {
        return '<span class="chip">' + t + "</span>";
      })
      .join("");
  }

  /* Portfolio ------------------------------------------------------------------------ */
  function monogram(name) {
    return name
      .replace(/[^A-Za-z ]/g, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map(function (w) {
        return w.charAt(0).toUpperCase();
      })
      .join("");
  }

  /* How I work: numbered process steps */
  function renderProcess() {
    if (!el("process-container") || !siteData.process) return;
    el("process-container").innerHTML = siteData.process
      .map(function (step, i) {
        return (
          '<article class="process-card reveal">' +
          '<span class="process-num" aria-hidden="true">' +
          (i + 1) +
          "</span>" +
          "<h3>" +
          step.title +
          "</h3><p>" +
          step.text +
          "</p></article>"
        );
      })
      .join("");
  }

  function renderPortfolio() {
    el("portfolio-container").innerHTML = siteData.portfolio
      .map(function (project, projectIndex) {
        /* Compact card: at most 4 tech tags, the rest collapse into +N.
           Full features and description live in the details modal. */
        var tags = project.technologies
          .slice(0, 4)
          .map(function (t) {
            return '<span class="chip">' + t + "</span>";
          })
          .join("");
        if (project.technologies.length > 4) {
          tags +=
            '<span class="chip chip-more">+' +
            (project.technologies.length - 4) +
            " more</span>";
        }
        var visual = project.image
          ? '<div class="work-visual has-shot" style="--hue:' +
            project.hue +
            '">' +
            '<img class="work-shot" src="' +
            project.image +
            '" alt="Screenshot of ' +
            project.name +
            '" loading="lazy" width="1080" height="608">' +
            '<span class="work-cat">' +
            project.categoryLabel +
            "</span></div>"
          : '<div class="work-visual" style="--hue:' +
            project.hue +
            '">' +
            '<span class="work-cat">' +
            project.categoryLabel +
            "</span>" +
            '<span class="work-mono" aria-hidden="true">' +
            monogram(project.shortName) +
            "</span></div>";
        var caseBtn =
          '<button type="button" class="details-btn" data-project-index="' +
          projectIndex +
          '">View details ' +
          icon("arrow") +
          "</button>";
        var techAttr = project.technologies
          .map(function (t) {
            return t.toLowerCase();
          })
          .join("|");
        return (
          '<article class="work-card reveal" data-category="' +
          project.category +
          '" data-tech="' +
          techAttr +
          '">' +
          visual +
          '<div class="work-body"><h3>' +
          project.name +
          '</h3><p class="work-role">' +
          project.role +
          '</p><p class="work-desc">' +
          project.description +
          '</p><div class="work-tags">' +
          tags +
          "</div>" +
          '<div class="work-actions"><a class="work-link" href="' +
          project.url +
          '" target="_blank" rel="noopener noreferrer">Visit live site ' +
          icon("arrow") +
          "</a>" +
          caseBtn +
          "</div></div></article>"
        );
      })
      .join("");
  }

  /* Testimonials: the whole section is removed when there are no real reviews */
  function renderTestimonials() {
    var section = el("testimonials");
    var list = siteData.testimonials || [];
    if (!section) return;
    if (!list.length) {
      section.remove();
      return;
    }
    el("testimonials-container").innerHTML = list
      .map(function (item) {
        var stars = "";
        for (var i = 0; i < (item.rating || 5); i++) stars += icon("star");
        var initials = item.name
          .split(" ")
          .filter(Boolean)
          .slice(0, 2)
          .map(function (w) {
            return w.charAt(0).toUpperCase();
          })
          .join("");
        return (
          '<figure class="testimonial-card reveal">' +
          '<span class="testimonial-quote">' +
          icon("quote") +
          "</span>" +
          '<span class="testimonial-stars" aria-label="' +
          (item.rating || 5) +
          ' out of 5 stars">' +
          stars +
          "</span>" +
          "<blockquote>" +
          item.text +
          "</blockquote>" +
          "<figcaption>" +
          '<span class="testimonial-avatar" aria-hidden="true">' +
          initials +
          "</span>" +
          "<span>" +
          '<span class="testimonial-name">' +
          item.name +
          "</span>" +
          '<span class="testimonial-role">' +
          item.role +
          "</span>" +
          "</span>" +
          "</figcaption>" +
          "</figure>"
        );
      })
      .join("");
  }

  /* Contact and footer ------------------------------------------------------------------ */
  function contactRow(iconName, innerHTML) {
    return (
      '<span class="c-icon">' + icon(iconName) + "</span><span>" + innerHTML + "</span>"
    );
  }

  function renderContact() {
    el("contact-address").innerHTML = contactRow(
      "pin",
      siteData.contact.addressLines.join("<br>")
    );
    var phoneClean = siteData.contact.phone.replace(/\s+/g, "");
    el("contact-phone").innerHTML = contactRow(
      "phone",
      '<a href="tel:' + phoneClean + '">' + siteData.contact.phone + "</a>"
    );
    var waClean = siteData.contact.whatsapp.replace(/[\s+]/g, "");
    el("contact-whatsapp").innerHTML = contactRow(
      "whatsapp",
      '<a href="https://wa.me/' +
        waClean +
        '" target="_blank" rel="noopener noreferrer">WhatsApp: ' +
        siteData.contact.whatsapp +
        "</a>"
    );
    el("contact-email").innerHTML = contactRow(
      "mail",
      '<a href="mailto:' +
        siteData.contact.email +
        '">' +
        siteData.contact.email +
        "</a>"
    );
    el("contact-response-time").innerHTML = contactRow(
      "clock",
      siteData.contact.responseTime
    );
    el("contact-social-icons").innerHTML = socialButtonsHTML();
    el("footer-social-icons").innerHTML = socialButtonsHTML();
  }

  function renderFooterAndCv() {
    var year = new Date().getFullYear();
    el("footer-copyright").innerHTML =
      "Copyright © " +
      year +
      ' <a href="#home">' +
      siteData.footer.company +
      "</a>. All rights reserved.";
    document.querySelectorAll(".js-download-cv").forEach(function (link) {
      link.setAttribute("href", siteData.profile.resumeFile);
      link.setAttribute("download", "");
    });
  }

  renderHero();
  renderMarquee();
  renderAbout();
  renderServices();
  renderResume();
  renderSkills();
  renderCertifications();
  renderTechStack();
  renderProcess();
  renderPortfolio();
  renderTestimonials();
  renderContact();
  renderFooterAndCv();
})();
