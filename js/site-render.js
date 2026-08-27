/* ==========================================================================
   site-render.js – Version 2.0
   Reads siteData and injects enhanced markup with richer layouts.
   ========================================================================== */

(function () {
  function socialListHTML(links, extraClasses) {
    return links
      .map(function (s) {
        return (
          '<li class="social-icons-' +
          s.platform +
          (extraClasses ? " " + extraClasses : "") +
          '">' +
          '<a data-bs-toggle="tooltip" title="' +
          s.title +
          '" data-bs-placement="top" href="' +
          s.url +
          '" target="_blank" rel="noopener noreferrer">' +
          '<i class="' +
          s.icon +
          '"></i>' +
          "</a>" +
          "</li>"
        );
      })
      .join("");
  }

  function renderHeader() {
    var profileImg = document.getElementById("header-profile-img");
    if (profileImg) {
      profileImg.src = siteData.profile.profileImage;
      profileImg.title = "I'm " + siteData.profile.name;
      profileImg.alt = "Profile Picture of " + siteData.profile.name;
    }

    var nameEl = document.getElementById("header-name");
    if (nameEl) nameEl.textContent = siteData.profile.name;

    var headerSocial = document.getElementById("header-social-icons");
    if (headerSocial)
      headerSocial.innerHTML = socialListHTML(siteData.socialLinks, "");

    // Add availability badge under name in sidebar
    if (nameEl && siteData.profile.availability) {
      var availabilityBadge = document.createElement("p");
      availabilityBadge.className =
        "text-success text-1 mt-1 mb-0 fw-500 text-center w-100";
      availabilityBadge.innerHTML =
        '<i class="fas fa-circle me-1" style="font-size: 0.4rem; vertical-align: middle;"></i>' +
        siteData.profile.availability;
      nameEl.insertAdjacentElement("afterend", availabilityBadge);
    }
  }

  function renderHero() {
    var typedStrings = document.getElementById("typed-strings");
    if (typedStrings) {
      typedStrings.innerHTML = siteData.profile.typedStrings
        .map(function (s) {
          return "<p>" + s + "</p>";
        })
        .join("");
    }

    var greeting = document.getElementById("hero-greeting");
    if (greeting) greeting.textContent = siteData.profile.greeting;

    var tagline = document.getElementById("hero-tagline");
    if (tagline) tagline.textContent = siteData.profile.tagline;

    // Add scroll-down CTA text
    var heroContent = document.querySelector(".hero-content .container");
    if (heroContent) {
      var ctaText = document.createElement("p");
      ctaText.className = "text-white-50 text-3 mt-4 mb-0";
      ctaText.innerHTML =
        '<i class="fas fa-arrow-down me-2"></i>Scroll to explore my work';
      heroContent.querySelector(".col-12").appendChild(ctaText);
    }
  }

  function renderAbout() {
    var heading = document.getElementById("about-heading");
    if (heading) heading.innerHTML = siteData.about.heading;

    var paragraphs = document.getElementById("about-paragraphs");
    if (paragraphs) {
      paragraphs.innerHTML = siteData.about.paragraphs
        .map(function (p) {
          if (p.startsWith("<span")) {
            return p; // Already HTML
          }
          return '<p class="text-white-50">' + p + "</p>";
        })
        .join("");
    }

    var infoList = document.getElementById("about-info-list");
    if (infoList) {
      infoList.innerHTML =
        '<li><span class="fw-600 me-2">Name:</span>' +
        siteData.profile.fullName +
        "</li>" +
        '<li><span class="fw-600 me-2">Email:</span><a href="mailto:' +
        siteData.profile.email +
        '">' +
        siteData.profile.email +
        "</a></li>" +
        '<li><span class="fw-600 me-2">Location:</span>' +
        siteData.profile.location +
        "</li>" +
        '<li class="border-0"><span class="fw-600 me-2">Status:</span><span class="text-success">' +
        siteData.profile.availability +
        "</span></li>";
    }

    var resumeButtons = document.querySelectorAll(".js-download-cv");
    resumeButtons.forEach(function (btn) {
      btn.setAttribute("href", siteData.profile.resumeFile);
      btn.setAttribute("download", "");
      btn.removeAttribute("onclick");
    });

    var statsContainer = document.getElementById("stats-container");
    if (statsContainer) {
      statsContainer.innerHTML = siteData.stats
        .map(function (stat) {
          return (
            '<div class="col-6 col-md-3">' +
            '<div class="featured-box text-center">' +
            '<h4 class="text-12 text-white-50 mb-0"><span class="counter" data-from="' +
            stat.from +
            '" data-to="' +
            stat.to +
            '">' +
            stat.from +
            "</span>" +
            stat.suffix +
            "</h4>" +
            '<p class="text-light mb-0 text-1 text-uppercase fw-500">' +
            stat.label +
            "</p>" +
            "</div>" +
            "</div>"
          );
        })
        .join("");
    }
  }

  function renderServices() {
    var container = document.getElementById("services-container");
    if (!container) return;
    container.innerHTML = siteData.services
      .map(function (service) {
        var bulletsHTML = service.bullets
          ? '<ul class="text-white-50 mt-3 mb-0" style="list-style: none; padding-left: 0;">' +
            service.bullets
              .map(function (b) {
                return (
                  '<li class="mb-1"><i class="fas fa-check-circle text-primary me-2"></i>' +
                  b +
                  "</li>"
                );
              })
              .join("") +
            "</ul>"
          : "";
        return (
          '<div class="col-md-6">' +
          '<div class="featured-box style-3 mb-5">' +
          '<div class="featured-box-icon text-primary bg-dark-1 shadow-sm rounded"><i class="' +
          service.icon +
          '"></i></div>' +
          '<h3 class="text-white">' +
          service.title +
          "</h3>" +
          '<p class="text-white-50 mb-0 text-justify">' +
          service.description +
          "</p>" +
          bulletsHTML +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderEducation() {
    var container = document.getElementById("education-container");
    if (!container) return;

    container.innerHTML = siteData.education
      .map(function (item, index) {
        var collapseId = "edu-collapse-" + index;
        var achievementsHTML = item.achievements
          ? '<ul class="text-white-50 mt-2 mb-0" style="list-style: none; padding-left: 0;">' +
            item.achievements
              .map(function (a) {
                return (
                  '<li class="mb-1"><i class="fas fa-star text-warning me-2" style="font-size: 0.7rem;"></i>' +
                  a +
                  "</li>"
                );
              })
              .join("") +
            "</ul>"
          : "";

        return (
          '<div class="bg-dark rounded p-4 mb-4">' +
          '<button class="btn btn-link text-decoration-none p-0 w-100 text-start d-flex justify-content-between align-items-start" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          collapseId +
          '" aria-expanded="false" aria-controls="' +
          collapseId +
          '">' +
          "<div>" +
          '<p class="badge bg-danger text-2 fw-400 mb-2">' +
          item.date +
          "</p>" +
          '<h3 class="text-5 text-white mb-1">' +
          item.title +
          "</h3>" +
          '<p class="text-primary fw-500 mb-0">' +
          item.institution +
          "</p>" +
          "</div>" +
          '<i class="fas fa-chevron-down text-white ms-3 mt-2"></i>' +
          "</button>" +
          '<div id="' +
          collapseId +
          '" class="collapse">' +
          (item.detail
            ? '<p class="text-white-50 text-2 mt-3 mb-2">' +
              item.detail +
              "</p>"
            : "") +
          achievementsHTML +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderExperience() {
    var container = document.getElementById("experience-container");
    if (!container) return;

    container.innerHTML = siteData.experience
      .map(function (item, index) {
        var collapseId = "exp-collapse-" + index;
        var highlightsHTML = item.highlights
          ? '<ul class="text-white-50 mt-2 mb-2" style="list-style: none; padding-left: 0;">' +
            item.highlights
              .map(function (h) {
                return (
                  '<li class="mb-1"><i class="fas fa-arrow-right text-primary me-2" style="font-size: 0.7rem;"></i>' +
                  h +
                  "</li>"
                );
              })
              .join("") +
            "</ul>"
          : "";
        var techHTML = item.techStack
          ? '<div class="mt-2">' +
            item.techStack
              .map(function (t) {
                return (
                  '<span class="badge bg-dark-2 text-white-50 me-1 mb-1 px-2 py-1" style="font-size: 0.7rem;">' +
                  t +
                  "</span>"
                );
              })
              .join("") +
            "</div>"
          : "";

        return (
          '<div class="bg-dark rounded p-4 mb-4">' +
          '<button class="btn btn-link text-decoration-none p-0 w-100 text-start d-flex justify-content-between align-items-start" type="button" data-bs-toggle="collapse" data-bs-target="#' +
          collapseId +
          '" aria-expanded="false" aria-controls="' +
          collapseId +
          '">' +
          "<div>" +
          '<p class="badge bg-danger text-2 fw-400 mb-2">' +
          item.date +
          "</p>" +
          '<h3 class="text-5 text-white mb-1">' +
          item.title +
          "</h3>" +
          '<p class="text-primary fw-500 mb-0">' +
          item.company +
          "</p>" +
          "</div>" +
          '<i class="fas fa-chevron-down text-white ms-3 mt-2"></i>' +
          "</button>" +
          '<div id="' +
          collapseId +
          '" class="collapse">' +
          (item.detail
            ? '<p class="text-white-50 text-2 mt-3 mb-2">' +
              item.detail +
              "</p>"
            : "") +
          highlightsHTML +
          techHTML +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function skillRowHTML(skill) {
    return (
      '<p class="text-light fw-500 text-start mb-2">' +
      skill.name +
      ' <span class="float-end">' +
      skill.percent +
      "%</span></p>" +
      '<div class="progress progress-sm bg-dark mb-3">' +
      '<div class="progress-bar" role="progressbar" style="width: ' +
      skill.percent +
      '%" aria-valuenow="' +
      skill.percent +
      '" aria-valuemin="0" aria-valuemax="100"></div>' +
      "</div>"
    );
  }

  function renderSkills() {
    var col1 = document.getElementById("skills-column-1");
    var col2 = document.getElementById("skills-column-2");
    if (!col1 || !col2) return;

    // Categorized skills
    var categories = [
      {
        label: "Frontend Development",
        skills: siteData.skills.frontend,
        color: "text-primary",
      },
      {
        label: "Backend Development",
        skills: siteData.skills.backend,
        color: "text-success",
      },
      {
        label: "Database & DevOps",
        skills: siteData.skills.databaseDevOps,
        color: "text-warning",
      },
      {
        label: "Design & Tools",
        skills: siteData.skills.designTools,
        color: "text-info",
      },
    ];

    var mid = Math.ceil(categories.length / 2);
    var col1Categories = categories.slice(0, mid);
    var col2Categories = categories.slice(mid);

    function categoryHTML(category) {
      return (
        '<h3 class="text-4 ' +
        category.color +
        ' fw-600 mt-3 mb-3"><i class="fas fa-code me-2"></i>' +
        category.label +
        "</h3>" +
        category.skills.map(skillRowHTML).join("")
      );
    }

    col1.innerHTML = col1Categories.map(categoryHTML).join("");
    col2.innerHTML = col2Categories.map(categoryHTML).join("");
  }

  function portfolioItemHTML(item, index) {
    var collapseId = "portfolio-collapse-" + index;
    var featuresHTML = item.features
      ? '<ul class="text-white-50 mt-2 mb-2" style="list-style: none; padding-left: 0;">' +
        item.features
          .map(function (f) {
            return (
              '<li class="mb-1"><i class="fas fa-check text-success me-2" style="font-size: 0.7rem;"></i>' +
              f +
              "</li>"
            );
          })
          .join("") +
        "</ul>"
      : "";

    return (
      '<div class="bg-dark rounded p-4 mb-4">' +
      '<button class="btn btn-link text-decoration-none p-0 w-100 text-start d-flex justify-content-between align-items-start" type="button" data-bs-toggle="collapse" data-bs-target="#' +
      collapseId +
      '" aria-expanded="false" aria-controls="' +
      collapseId +
      '">' +
      "<div>" +
      '<span class="badge bg-primary text-1 fw-500 mb-2">Project ' +
      (index + 1) +
      "</span>" +
      '<h3 class="text-5 text-white fw-600 mb-1">' +
      item.name +
      "</h3>" +
      '<p class="text-primary text-2 fw-500 mb-0"><i class="fas fa-user-tie me-2"></i>' +
      item.role +
      "</p>" +
      "</div>" +
      '<i class="fas fa-chevron-down text-white ms-3 mt-2"></i>' +
      "</button>" +
      '<div id="' +
      collapseId +
      '" class="collapse">' +
      '<p class="text-white-50 mt-3 mb-2 text-justify">' +
      item.description +
      "</p>" +
      featuresHTML +
      '<ul class="list-style-2 list-style-light text-white-50 mt-3 mb-2">' +
      '<li><span class="text-light fw-600 me-2">Technologies:</span>' +
      item.technologies +
      "</li>" +
      '<li><span class="text-light fw-600 me-2">Live URL:</span><a href="' +
      item.url +
      '" target="_blank" rel="noopener noreferrer">' +
      item.urlText +
      "</a></li>" +
      "</ul>" +
      "</div>" +
      "</div>"
    );
  }

  function renderPortfolio() {
    var col1 = document.getElementById("portfolio-column-1");
    var col2 = document.getElementById("portfolio-column-2");
    if (!col1 || !col2) return;

    var splitIndex = Math.ceil(siteData.portfolio.length / 2);
    var firstHalf = siteData.portfolio.slice(0, splitIndex);
    var secondHalf = siteData.portfolio.slice(splitIndex);

    col1.innerHTML = firstHalf
      .map(function (item, i) {
        return portfolioItemHTML(item, i);
      })
      .join("");
    col2.innerHTML = secondHalf
      .map(function (item, i) {
        return portfolioItemHTML(item, i + splitIndex);
      })
      .join("");
  }

  function renderCertifications() {
    var container = document.getElementById("certifications-container");
    if (!container) return;
    container.innerHTML = siteData.certifications
      .map(function (cert) {
        return (
          '<div class="col-md-6 col-lg-3 mb-4">' +
          '<div class="bg-dark rounded p-3 text-center h-100">' +
          '<i class="fas fa-certificate text-warning text-5 mb-2"></i>' +
          '<h4 class="text-white text-3 fw-600 mb-1">' +
          cert.name +
          "</h4>" +
          '<p class="text-white-50 text-2 mb-0">' +
          cert.issuer +
          "</p>" +
          '<p class="text-muted text-1 mb-0">' +
          cert.year +
          "</p>" +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderTechStack() {
    var container = document.getElementById("tech-stack-container");
    if (!container) return;
    container.innerHTML = siteData.techStack
      .map(function (tech) {
        return (
          '<span class="badge bg-dark-2 text-white-50 me-2 mb-2 px-3 py-2" style="font-size: 0.8rem;">' +
          tech +
          "</span>"
        );
      })
      .join("");
  }

  function renderContact() {
    var address = document.getElementById("contact-address");
    if (address)
      address.innerHTML = siteData.contact.addressLines.join("<br>\n");

    var phone = document.getElementById("contact-phone");
    if (phone)
      phone.innerHTML =
        '<span class="text-primary text-4 me-2"><i class="fas fa-phone"></i></span>' +
        siteData.contact.phone;

    var whatsapp = document.getElementById("contact-whatsapp");
    if (whatsapp)
      whatsapp.innerHTML =
        '<span class="text-primary text-4 me-2"><i class="fab fa-whatsapp"></i></span>' +
        siteData.contact.whatsapp;

    var email = document.getElementById("contact-email");
    if (email)
      email.innerHTML =
        '<span class="text-primary text-4 me-2"><i class="fas fa-envelope"></i></span>' +
        siteData.contact.email;

    var workingHours = document.getElementById("contact-working-hours");
    if (workingHours)
      workingHours.innerHTML =
        '<span class="text-primary text-4 me-2"><i class="fas fa-clock"></i></span>' +
        siteData.contact.workingHours;

    var responseTime = document.getElementById("contact-response-time");
    if (responseTime)
      responseTime.innerHTML =
        '<span class="text-primary text-4 me-2"><i class="fas fa-bolt"></i></span>' +
        siteData.contact.responseTime;

    var contactSocial = document.getElementById("contact-social-icons");
    if (contactSocial) {
      var linksWithoutWhatsapp = siteData.socialLinks.filter(function (s) {
        return s.platform !== "whatsapp";
      });
      contactSocial.innerHTML = socialListHTML(linksWithoutWhatsapp, "");
    }
  }

  function renderFooter() {
    var footerText = document.getElementById("footer-copyright");
    if (footerText) {
      footerText.innerHTML =
        "Copyright &copy; " +
        siteData.footer.year +
        ' <a href="#" class="fw-500">' +
        siteData.footer.company +
        "</a>. All Rights Reserved.";
    }
  }

  // Initialize all sections
  renderHeader();
  renderHero();
  renderAbout();
  renderServices();
  renderEducation();
  renderExperience();
  renderSkills();
  renderPortfolio();
  renderCertifications();
  renderTechStack();
  renderContact();
  renderFooter();
})();
