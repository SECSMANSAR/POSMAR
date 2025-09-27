document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuIcon = document.getElementById("mobile-menu-icon")
  let isMenuOpen = false

  mobileMenuBtn?.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden")
      mobileMenu.classList.add("mobile-menu-enter")
      mobileMenuIcon.classList.remove("fa-bars")
      mobileMenuIcon.classList.add("fa-times")
    } else {
      mobileMenu.classList.add("hidden")
      mobileMenu.classList.remove("mobile-menu-enter")
      mobileMenuIcon.classList.remove("fa-times")
      mobileMenuIcon.classList.add("fa-bars")
    }
  })

  // Close mobile menu when clicking links
  document.querySelectorAll(".mobile-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      mobileMenu.classList.remove("mobile-menu-enter")
      mobileMenuIcon.classList.remove("fa-times")
      mobileMenuIcon.classList.add("fa-bars")
    })
  })

  const navbar = document.getElementById("navbar")
  let ticking = false

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled")
    } else {
      navbar.classList.remove("nav-scrolled")
    }
    ticking = false
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateNavbar)
      ticking = true
    }
  })

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]:not([data-animated])")

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-count"))
      const duration = 2500
      const startTime = performance.now()

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const current = Math.floor(target * easeOutQuart)

        counter.textContent = current

        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
          counter.setAttribute("data-animated", "true")
        }
      }

      requestAnimationFrame(updateCounter)
    })
  }

  const observerOptions = {
    threshold: [0.1, 0.3, 0.5],
    rootMargin: "0px 0px -100px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Counter animation
        if (entry.target.classList.contains("animate-counter")) {
          entry.target.classList.add("visible")
          if (!entry.target.hasAttribute("data-animated")) {
            setTimeout(() => animateCounters(), 300)
          }
        }

        // Scroll reveal animation
        if (entry.target.classList.contains("scroll-reveal")) {
          entry.target.classList.add("revealed")
        }

        // Unobserve after animation to improve performance
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".animate-counter, .scroll-reveal").forEach((el) => {
    observer.observe(el)
  })

  let parallaxTicking = false

  function updateParallax() {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".floating-element, .floating-3d")

    parallaxElements.forEach((element, index) => {
      const speed = 0.3 + index * 0.1
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })

    parallaxTicking = false
  }

  window.addEventListener("scroll", () => {
    if (!parallaxTicking) {
      requestAnimationFrame(updateParallax)
      parallaxTicking = true
    }
  })

  document.querySelectorAll(".btn-primary, .btn-secondary, button").forEach((btn) => {
    // Hover effects
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.02)"
    })

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })

    // Ripple effect
    btn.style.position = "relative"
    btn.style.overflow = "hidden"

    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span")
      const rect = this.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      ripple.style.width = ripple.style.height = size + "px"
      ripple.style.left = x + "px"
      ripple.style.top = y + "px"
      ripple.classList.add("ripple")

      this.appendChild(ripple)

      setTimeout(() => {
        if (ripple.parentNode) {
          ripple.remove()
        }
      }, 600)
    })
  })

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "1"
        imageObserver.unobserve(img)
      }
    })
  })

  document.querySelectorAll("img").forEach((img) => {
    img.style.opacity = "0"
    img.style.transition = "opacity 0.5s ease"

    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    if (!img.complete) {
      imageObserver.observe(img)
    }
  })

  if ("performance" in window) {
    window.addEventListener("load", () => {
      const loadTime = performance.now()
      console.log(`🚀 POSMAR OSIS website loaded in ${Math.round(loadTime)}ms`)
    })
  }

  window.addEventListener("error", (e) => {
    console.error("Website error:", e.error)
  })

  console.log("✨ POSMAR OSIS - Modern website initialized successfully!")
})

const style = document.createElement("style")
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)
