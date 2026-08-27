/* ==========================================================================
   site-render.js
   Reads siteData (see site-data.js) and injects it into the placeholder
   containers in index.html. This file must run AFTER site-data.js and
   BEFORE the theme scripts (jquery.countTo, jquery.appear, typed.js,
   theme.js) so that counters / typed text / etc. pick up real content.
   ========================================================================== */

(function () {

  function socialListHTML(links, extraClasses) {
    return links.map(function (s) {
      return (
        '<li class="social-icons-' + s.platform + (extraClasses ? ' ' + extraClasses : '') + '">' +
          '<a data-bs-toggle="tooltip" title="' + s.title + '" data-bs-placement="top" href="' + s.url + '" target="_blank">' +
            '<i class="' + s.icon + '"></i>' +
          '</a>' +
        '</li>'
      );
    }).join('');
  }

  function renderHeader() {
    var profileImg = document.getElementById('header-profile-img');
    if (profileImg) {
      profileImg.src = siteData.profile.profileImage;
      profileImg.title = "I'm " + siteData.profile.name;
      profileImg.alt = 'Profile Picture';
    }

    var nameEl = document.getElementById('header-name');
    if (nameEl) nameEl.textContent = siteData.profile.name;

    var headerSocial = document.getElementById('header-social-icons');
    if (headerSocial) headerSocial.innerHTML = socialListHTML(siteData.socialLinks, '');
  }

  function renderHero() {
    var typedStrings = document.getElementById('typed-strings');
    if (typedStrings) {
      typedStrings.innerHTML = siteData.profile.typedStrings.map(function (s) {
        return '<p>' + s + '</p>';
      }).join('');
    }

    var greeting = document.getElementById('hero-greeting');
    if (greeting) greeting.textContent = siteData.profile.greeting;

    var tagline = document.getElementById('hero-tagline');
    if (tagline) tagline.textContent = siteData.profile.tagline;
  }

  function renderAbout() {
    var heading = document.getElementById('about-heading');
    if (heading) heading.innerHTML = siteData.about.heading;

    var paragraphs = document.getElementById('about-paragraphs');
    if (paragraphs) {
      paragraphs.innerHTML = siteData.about.paragraphs.map(function (p) {
        return '<p class="text-white-50">' + p + '</p>';
      }).join('');
    }

    var infoList = document.getElementById('about-info-list');
    if (infoList) {
      infoList.innerHTML =
        '<li><span class="fw-600 me-2">Name:</span>' + siteData.profile.fullName + '</li>' +
        '<li><span class="fw-600 me-2">Email:</span><a href="mailto:' + siteData.profile.email + '">' + siteData.profile.email + '</a></li>' +
        '<li class="border-0"><span class="fw-600 me-2">Location:</span>' + siteData.profile.location + '</li>';
    }

    var resumeButtons = document.querySelectorAll('.js-download-cv');
    resumeButtons.forEach(function (btn) {
      btn.setAttribute('onclick', "window.open('" + siteData.profile.resumeFile + "')");
    });

    var statsContainer = document.getElementById('stats-container');
    if (statsContainer) {
      statsContainer.innerHTML = siteData.stats.map(function (stat) {
        return (
          '<div class="col-6 col-md-3">' +
            '<div class="featured-box text-center">' +
              '<h4 class="text-12 text-white-50 mb-0"><span class="counter" data-from="' + stat.from + '" data-to="' + stat.to + '">' + stat.from + '</span>' + stat.suffix + '</h4>' +
              '<p class="text-light mb-0">' + stat.label + '</p>' +
            '</div>' +
          '</div>'
        );
      }).join('');
    }
  }

  function renderServices() {
    var container = document.getElementById('services-container');
    if (!container) return;
    container.innerHTML = siteData.services.map(function (service) {
      return (
        '<div class="col-md-6">' +
          '<div class="featured-box style-3 mb-5">' +
            '<div class="featured-box-icon text-primary bg-dark-1 shadow-sm rounded"><i class="' + service.icon + '"></i></div>' +
            '<h3 class="text-white">' + service.title + '</h3>' +
            '<p class="text-white-50 mb-0 text-justify">' + service.description + '</p>' +
          '</div>' +
        '</div>'
      );
    }).join('');
  }

  function renderEducation() {
    var container = document.getElementById('education-container');
    if (!container) return;
    container.innerHTML = siteData.education.map(function (item) {
      return (
        '<div class="bg-dark rounded p-4 mb-4">' +
          '<p class="badge bg-danger text-2 fw-400">' + item.date + '</p>' +
          '<h3 class="text-5 text-white">' + item.title + '</h3>' +
          '<p class="text-primary">' + item.institution + '</p>' +
        '</div>'
      );
    }).join('');
  }

  function renderExperience() {
    var container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = siteData.experience.map(function (item) {
      return (
        '<div class="bg-dark rounded p-4 mb-4">' +
          '<p class="badge bg-danger text-2 fw-400">' + item.date + '</p>' +
          '<h3 class="text-5 text-white">' + item.title + '</h3>' +
          '<p class="text-primary">' + item.company + '</p>' +
        '</div>'
      );
    }).join('');
  }

  function skillRowHTML(skill) {
    return (
      '<p class="text-light fw-500 text-start mb-2">' + skill.name + ' <span class="float-end">' + skill.percent + '%</span></p>' +
      '<div class="progress progress-sm bg-dark mb-4">' +
        '<div class="progress-bar" role="progressbar" style="width: ' + skill.percent + '%" aria-valuenow="' + skill.percent + '" aria-valuemin="0" aria-valuemax="100"></div>' +
      '</div>'
    );
  }

  function renderSkills() {
    var col1 = document.getElementById('skills-column-1');
    var col2 = document.getElementById('skills-column-2');
    if (!col1 || !col2) return;

    var mid = Math.ceil(siteData.skills.length / 2);
    var firstHalf = siteData.skills.slice(0, mid);
    var secondHalf = siteData.skills.slice(mid);

    col1.innerHTML = firstHalf.map(skillRowHTML).join('');
    col2.innerHTML = secondHalf.map(skillRowHTML).join('');
  }

  function portfolioItemHTML(item) {
    return (
      '<div class="bg-dark rounded p-4 mb-4">' +
        '<h3 class="text-5 text-white badge bg-success">Project Info</h3>' +
        '<p class="text-white-50 mb-0 text-justify">' + item.description + '</p>' +
        '<ul class="list-style-2 list-style-light text-white-50">' +
          '<li><span class="text-light font-weight-600"></span></li>' +
          '<li><span class="text-light font-weight-600 me-2">Technologies:</span>' + item.technologies + '</li>' +
          '<li><span class="text-light font-weight-600 me-2">URL:</span><a href="' + item.url + '" target="_blank">' + item.urlText + '</a></li>' +
        '</ul>' +
      '</div>'
    );
  }

  function renderPortfolio() {
    var col1 = document.getElementById('portfolio-column-1');
    var col2 = document.getElementById('portfolio-column-2');
    if (!col1 || !col2) return;

    var splitIndex = 3; // matches original markup: 3 items in column one, rest in column two
    var firstHalf = siteData.portfolio.slice(0, splitIndex);
    var secondHalf = siteData.portfolio.slice(splitIndex);

    col1.innerHTML = firstHalf.map(portfolioItemHTML).join('');
    col2.innerHTML = secondHalf.map(portfolioItemHTML).join('');
  }

  function renderContact() {
    var address = document.getElementById('contact-address');
    if (address) address.innerHTML = siteData.contact.addressLines.join('<br>\n');

    var phone = document.getElementById('contact-phone');
    if (phone) phone.innerHTML = '<span class="text-primary text-4 me-2"><i class="fas fa-phone"></i></span>' + siteData.contact.phone;

    var whatsapp = document.getElementById('contact-whatsapp');
    if (whatsapp) whatsapp.innerHTML = '<span class="text-primary text-4 me-2"><i class="fa fa-whatsapp"></i></span>' + siteData.contact.whatsapp;

    var email = document.getElementById('contact-email');
    if (email) email.innerHTML = '<span class="text-primary text-4 me-2"><i class="fas fa-envelope"></i></span>' + siteData.contact.email;

    var contactSocial = document.getElementById('contact-social-icons');
    if (contactSocial) {
      var linksWithoutWhatsapp = siteData.socialLinks.filter(function (s) { return s.platform !== 'whatsapp'; });
      contactSocial.innerHTML = socialListHTML(linksWithoutWhatsapp, '');
    }
  }

  function renderFooter() {
    var footerText = document.getElementById('footer-copyright');
    if (footerText) {
      footerText.innerHTML = 'Copyright &copy; ' + siteData.footer.year + ' <a href="#" class="fw-500">' + siteData.footer.company + '</a>. All Rights Reserved.';
    }
  }

  renderHeader();
  renderHero();
  renderAbout();
  renderServices();
  renderEducation();
  renderExperience();
  renderSkills();
  renderPortfolio();
  renderContact();
  renderFooter();

})();