/* ==========================================================================
   main.js: Portfolio v3 interactions
   1. Preloader            5. Light 3D tilt (desktop, pointer only)
   2. Header and mobile nav 6. Counters and skill bars
   3. Rotating hero roles   7. Portfolio filter
   4. GSAP reveals          8. Contact form (Web3Forms delivery, mailto fallback)
   Everything degrades gracefully: with no GSAP or reduced motion the
   page is fully visible and usable.
   ========================================================================== */

(function () {
  "use strict";

  var reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* 1. Preloader ------------------------------------------------------------ */
  var preloader = document.getElementById("preloader");
  function hidePreloader() {
    if (preloader) preloader.classList.add("done");
  }
  window.addEventListener("load", function () {
    setTimeout(hidePreloader, 250);
  });
  setTimeout(hidePreloader, 2600); /* safety net, never trap the visitor */

  /* 2. Header, scroll progress, mobile nav ----------------------------------- */
  var header = document.getElementById("site-header");
  var progressBar = document.getElementById("scroll-progress-bar");
  var backToTop = document.getElementById("back-to-top");
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  /* Theme toggle: dark is the default, the choice is remembered */
  var themeToggle = document.getElementById("theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function syncThemeUI() {
    var light = document.documentElement.dataset.theme === "light";
    themeToggle.setAttribute(
      "aria-label",
      light ? "Switch to dark mode" : "Switch to light mode"
    );
    if (themeMeta) {
      themeMeta.setAttribute("content", light ? "#f6f5f1" : "#07090f");
    }
  }
  if (themeToggle) {
    syncThemeUI();
    themeToggle.addEventListener("click", function () {
      var next =
        document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem("hamza-portfolio-theme", next);
      } catch (e) {
        /* private mode etc: theme still applies for this visit */
      }
      syncThemeUI();
    });
  }

  function onScroll() {
    var y = window.scrollY || 0;
    header.classList.toggle("scrolled", y > 24);
    backToTop.classList.toggle("show", y > 600);
    var height =
      document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar && height > 0) {
      progressBar.style.width = (y / height) * 100 + "%";
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  function closeNav() {
    mainNav.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");
  }
  navToggle.addEventListener("click", function () {
    var open = mainNav.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  mainNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeNav);
  });

  /* Active nav link follows the section in view */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-link")
  );
  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);
  var navObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + entry.target.id
          );
        });
      });
    },
    { rootMargin: "-38% 0px -55% 0px" }
  );
  sections.forEach(function (section) {
    navObserver.observe(section);
  });

  /* 3. Rotating hero roles ------------------------------------------------------ */
  var typedEl = document.getElementById("typed-text");
  var words =
    typeof siteData !== "undefined" ? siteData.profile.typedStrings : [];
  if (typedEl && words.length) {
    if (reducedMotion) {
      typedEl.textContent = words[0];
    } else {
      var wordIndex = 0;
      var charIndex = 0;
      var deleting = false;
      function typeStep() {
        var word = words[wordIndex];
        charIndex += deleting ? -1 : 1;
        typedEl.textContent = word.slice(0, charIndex);
        var delay = deleting ? 38 : 74;
        if (!deleting && charIndex === word.length) {
          delay = 1700;
          deleting = true;
        } else if (deleting && charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          delay = 320;
        }
        setTimeout(typeStep, delay);
      }
      typeStep();
    }
  }

  /* 3b. Rotating stack badge: cycles through his stacks so no single
         stack reads as his only "core" */
  var stackEl = document.getElementById("stack-rotator");
  var stacks =
    typeof siteData !== "undefined" && siteData.profile.stackRotations
      ? siteData.profile.stackRotations
      : [];
  if (stackEl && stacks.length > 1 && !reducedMotion) {
    var stackIndex = 0;
    setInterval(function () {
      stackEl.classList.add("swap-out");
      setTimeout(function () {
        stackIndex = (stackIndex + 1) % stacks.length;
        stackEl.textContent = stacks[stackIndex];
        stackEl.classList.remove("swap-out");
      }, 360);
    }, 2600);
  }

  /* 4. GSAP reveals --------------------------------------------------------------- */
  var hasGsap = typeof window.gsap !== "undefined";
  if (hasGsap && !reducedMotion) {
    /* Only now is it safe to hide reveal elements; CSS keeps them
       visible whenever this class is absent. */
    document.documentElement.classList.add("gsap-on");
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".reveal").forEach(function (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 34 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        }
      );
    });

    /* Gentle float on the hero badges and a slow parallax on the orbs */
    gsap.utils.toArray(".float-badge").forEach(function (badge, i) {
      gsap.to(badge, {
        y: i % 2 ? 12 : -12,
        duration: 2.6 + i * 0.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    });
    gsap.to(".orb-a", {
      y: 120,
      scrollTrigger: { trigger: "body", start: "top top", end: "max", scrub: 1.2 },
    });
    gsap.to(".orb-b", {
      y: -90,
      scrollTrigger: { trigger: "body", start: "top top", end: "max", scrub: 1.2 },
    });
  }

  /* 5. Light 3D tilt ------------------------------------------------------------------ */
  if (finePointer && !reducedMotion) {
    document.querySelectorAll(".tilt-scene").forEach(function (scene) {
      var card = scene.querySelector(".tilt");
      if (!card) return;
      var rafId = null;
      scene.addEventListener("mousemove", function (event) {
        var rect = scene.getBoundingClientRect();
        var px = (event.clientX - rect.left) / rect.width;
        var py = (event.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", px * 100 + "%");
        card.style.setProperty("--my", py * 100 + "%");
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(function () {
          card.style.transform =
            "rotateY(" +
            (px - 0.5) * 13 +
            "deg) rotateX(" +
            (0.5 - py) * 11 +
            "deg)";
        });
      });
      scene.addEventListener("mouseleave", function () {
        if (rafId) cancelAnimationFrame(rafId);
        card.style.transition = "transform 0.6s cubic-bezier(0.22, 0.8, 0.3, 1)";
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
        setTimeout(function () {
          card.style.transition = "";
        }, 620);
      });
    });

    /* Magnetic pull on the hero buttons */
    document.querySelectorAll(".btn-magnetic").forEach(function (button) {
      button.addEventListener("mousemove", function (event) {
        var rect = button.getBoundingClientRect();
        var x = (event.clientX - rect.left - rect.width / 2) * 0.22;
        var y = (event.clientY - rect.top - rect.height / 2) * 0.32;
        button.style.transform = "translate(" + x + "px, " + y + "px)";
      });
      button.addEventListener("mouseleave", function () {
        button.style.transform = "";
      });
    });
  }

  /* 6. Counters and skill bars ----------------------------------------------------------- */
  function animateCount(element) {
    var target = parseInt(element.getAttribute("data-count"), 10) || 0;
    if (reducedMotion) {
      element.textContent = target;
      return;
    }
    var start = null;
    var duration = 1500;
    function frame(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      element.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  var countObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          countObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll(".count").forEach(function (element) {
    countObserver.observe(element);
  });

  var barObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.width =
            entry.target.getAttribute("data-width") + "%";
          barObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );
  document.querySelectorAll(".skill-bar-fill").forEach(function (bar) {
    if (reducedMotion) {
      bar.style.width = bar.getAttribute("data-width") + "%";
    } else {
      barObserver.observe(bar);
    }
  });

  /* 7. Portfolio filter --------------------------------------------------------------------- */
  var filterBar = document.getElementById("portfolio-filters");
  if (filterBar) {
    filterBar.addEventListener("click", function (event) {
      var button = event.target.closest(".filter-btn");
      if (!button) return;
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b === button);
      });
      var filter = button.getAttribute("data-filter");
      clearTechFilter();
      document.querySelectorAll(".work-card").forEach(function (card) {
        var show =
          filter === "all" || card.getAttribute("data-category") === filter;
        card.classList.toggle("hide", !show);
      });
      if (hasGsap && !reducedMotion && typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
      }
    });
  }

  /* 7b. Tech chips filter the Work grid, and case study modal ---------------- */
  var techFilterBar = document.getElementById("work-tech-filter");
  function clearTechFilter() {
    if (techFilterBar) {
      techFilterBar.hidden = true;
      techFilterBar.innerHTML = "";
    }
    document.querySelectorAll("#tech-stack-container .chip.chip-active").forEach(function (c) {
      c.classList.remove("chip-active");
    });
  }
  function cardHasTech(card, tech) {
    return (card.getAttribute("data-tech") || "").split("|").indexOf(tech) !== -1;
  }
  function applyTechFilter(chip) {
    var tech = chip.textContent.trim().toLowerCase();
    clearTechFilter();
    chip.classList.add("chip-active");
    document.querySelectorAll(".work-card").forEach(function (card) {
      card.classList.toggle("hide", !cardHasTech(card, tech));
    });
    if (filterBar) {
      filterBar.querySelectorAll(".filter-btn").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-filter") === "all");
      });
    }
    if (techFilterBar) {
      techFilterBar.innerHTML =
        "Showing projects built with <strong>" +
        chip.textContent.trim() +
        '</strong> <button type="button" class="tech-filter-clear" aria-label="Clear technology filter">&times; Show all</button>';
      techFilterBar.hidden = false;
      techFilterBar
        .querySelector(".tech-filter-clear")
        .addEventListener("click", function () {
          clearTechFilter();
          document.querySelectorAll(".work-card").forEach(function (card) {
            card.classList.remove("hide");
          });
        });
    }
    var workSection = document.getElementById("work");
    if (workSection) workSection.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth" });
    if (hasGsap && !reducedMotion && typeof ScrollTrigger !== "undefined") {
      ScrollTrigger.refresh();
    }
  }
  /* Only chips that match at least one project become clickable */
  document.querySelectorAll("#tech-stack-container .chip").forEach(function (chip) {
    var tech = chip.textContent.trim().toLowerCase();
    var matches = 0;
    document.querySelectorAll(".work-card").forEach(function (card) {
      if (cardHasTech(card, tech)) matches++;
    });
    if (!matches) return;
    chip.classList.add("chip-link");
    chip.setAttribute("role", "button");
    chip.setAttribute("tabindex", "0");
    chip.setAttribute("title", "See projects built with " + chip.textContent.trim());
    chip.addEventListener("click", function () {
      applyTechFilter(chip);
    });
    chip.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        applyTechFilter(chip);
      }
    });
  });

  /* Case study modal */
  var caseModal = document.getElementById("case-modal");
  var caseContent = document.getElementById("case-content");
  function closeCase() {
    if (!caseModal) return;
    caseModal.hidden = true;
    caseModal.classList.remove("open");
    document.body.style.overflow = "";
  }
  function openCase(index) {
    var project = siteData.portfolio[index];
    if (!project || !project.caseStudy || !caseModal || !caseContent) return;
    var cs = project.caseStudy;
    var built = cs.built
      .map(function (item) {
        return "<li>" + item + "</li>";
      })
      .join("");
    var tags = project.technologies
      .map(function (t) {
        return '<span class="chip">' + t + "</span>";
      })
      .join("");
    caseContent.innerHTML =
      '<p class="modal-eyebrow">' +
      project.categoryLabel +
      " · Case Study</p>" +
      '<h3 class="modal-title" id="case-title">' +
      project.name +
      "</h3>" +
      '<h4 class="case-h">The problem</h4><p class="case-p">' +
      cs.problem +
      "</p>" +
      '<h4 class="case-h">What I built</h4><ul class="case-list">' +
      built +
      "</ul>" +
      '<h4 class="case-h">The result</h4><p class="case-p">' +
      cs.outcome +
      "</p>" +
      '<div class="work-tags">' +
      tags +
      "</div>" +
      '<a class="btn btn-primary modal-visit" href="' +
      project.url +
      '" target="_blank" rel="noopener noreferrer">Visit the live product</a>';
    caseModal.hidden = false;
    requestAnimationFrame(function () {
      caseModal.classList.add("open");
    });
    document.body.style.overflow = "hidden";
    var closeBtn = document.getElementById("case-close");
    if (closeBtn) closeBtn.focus();
  }
  document.addEventListener("click", function (event) {
    var btn = event.target.closest(".case-btn");
    if (btn) openCase(parseInt(btn.getAttribute("data-case-index"), 10));
  });
  if (caseModal) {
    caseModal.addEventListener("click", function (event) {
      if (event.target === caseModal) closeCase();
    });
    var caseCloseBtn = document.getElementById("case-close");
    if (caseCloseBtn) caseCloseBtn.addEventListener("click", closeCase);
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !caseModal.hidden) closeCase();
    });
  }

  /* 8. Contact form: validates, delivers via Web3Forms, mailto fallback ------ */
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  function setStatus(message, kind) {
    status.textContent = message;
    status.className = "form-status" + (kind ? " " + kind : "");
  }
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var name = form.elements.name.value.trim();
      var email = form.elements.email.value.trim();
      var subject = form.elements.subject.value.trim();
      var message = form.elements.message.value.trim();

      form.querySelectorAll(".form-field").forEach(function (field) {
        field.classList.remove("invalid");
      });

      var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      if (!name || !emailOk || !message) {
        if (!name)
          form.elements.name.closest(".form-field").classList.add("invalid");
        if (!emailOk)
          form.elements.email.closest(".form-field").classList.add("invalid");
        if (!message)
          form.elements.message
            .closest(".form-field")
            .classList.add("invalid");
        setStatus(
          "Please fill in your name, a valid email, and a short message.",
          "error"
        );
        return;
      }

      var finalSubject = subject || "New project inquiry from " + name;
      var submitBtn = document.getElementById("submit-btn");
      var originalLabel = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";
      setStatus("", "");

      function restoreButton() {
        submitBtn.disabled = false;
        submitBtn.textContent = originalLabel;
      }

      /* Delivery goes to Web3Forms once its (public) access key is pasted
         below. Until then FormSubmit is used. Either way the request is
         aborted after 12 seconds (AbortController) and the mailto
         fallback takes over: the form can never sit on "Sending..."
         forever and a message is never lost. */
      var WEB3FORMS_ACCESS_KEY = "63ec2907-35e4-474c-bca0-b1abde1e0f26";
      var useWeb3 = WEB3FORMS_ACCESS_KEY.length > 0;
      var endpoint = useWeb3
        ? "https://api.web3forms.com/submit"
        : "https://formsubmit.co/ajax/mhamzasulehri143@gmail.com";
      var payload = useWeb3
        ? {
            access_key: WEB3FORMS_ACCESS_KEY,
            from_name: "Portfolio Website",
            name: name,
            email: email,
            subject: finalSubject,
            message: message,
            botcheck: "",
          }
        : {
            name: name,
            email: email,
            _subject: finalSubject,
            message: message,
            _template: "table",
            _captcha: "false",
          };
      var controller =
        "AbortController" in window ? new AbortController() : null;
      var abortTimer = controller
        ? setTimeout(function () {
            controller.abort();
          }, 12000)
        : null;
      fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller ? controller.signal : undefined,
        body: JSON.stringify(payload),
      })
        .then(function (response) {
          if (abortTimer) clearTimeout(abortTimer);
          if (!response.ok) throw new Error("delivery failed");
          return response.json();
        })
        .then(function (data) {
          /* FormSubmit answers 200 with success:"false" when the form is
             not activated yet. That is not a delivery: use the fallback. */
          if (!data || String(data.success) !== "true") {
            throw new Error("not delivered");
          }
          restoreButton();
          form.reset();
          setStatus(
            "Message sent. Thank you, I will get back to you very soon.",
            "ok"
          );
        })
        .catch(function () {
          if (abortTimer) clearTimeout(abortTimer);
          restoreButton();
          var body =
            "Name: " + name + "\nEmail: " + email + "\n\n" + message;
          window.location.href =
            "mailto:mhamzasulehri143@gmail.com?subject=" +
            encodeURIComponent(finalSubject) +
            "&body=" +
            encodeURIComponent(body);
          setStatus(
            "Direct delivery is slow right now, so your email app is opening with the message ready instead. Just press send there.",
            "ok"
          );
        });
    });
  }
})();
