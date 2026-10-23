/* ==========================================================================
   main.js: Portfolio v3 interactions
   1. Preloader            5. Light 3D tilt (desktop, pointer only)
   2. Header and mobile nav 6. Counters and skill bars
   3. Rotating hero roles   7. Portfolio filter
   4. GSAP reveals          8. Contact form (FormSubmit delivery, mailto fallback)
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

  /* 8. Contact form: validates, then opens the visitor's email app ----------------------------- */
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

      /* Primary delivery: FormSubmit AJAX sends the message straight to
         Hamza's inbox. If that fails (service down, not yet activated),
         fall back to opening the visitor's email app with the message
         ready, so a message is never lost. */
      fetch("https://formsubmit.co/ajax/mhamzasulehri143@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          _subject: finalSubject,
          message: message,
          _template: "table",
        }),
      })
        .then(function (response) {
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
          restoreButton();
          var body =
            "Name: " + name + "\nEmail: " + email + "\n\n" + message;
          window.location.href =
            "mailto:mhamzasulehri143@gmail.com?subject=" +
            encodeURIComponent(finalSubject) +
            "&body=" +
            encodeURIComponent(body);
          setStatus(
            "Your email app should open now with the message ready. Just press send there.",
            "ok"
          );
        });
    });
  }
})();
