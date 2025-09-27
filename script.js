// Main JavaScript functionality

document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn")
  const mobileMenu = document.getElementById("mobile-menu")
  const mobileMenuIcon = document.getElementById("mobile-menu-icon")
  let isMenuOpen = false

  mobileMenuBtn.addEventListener("click", () => {
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

  document.querySelectorAll(".mobile-menu-link").forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      mobileMenu.classList.remove("mobile-menu-enter")
      mobileMenuIcon.classList.remove("fa-times")
      mobileMenuIcon.classList.add("fa-bars")
    })
  })

  // Navbar scroll effect
  const navbar = document.getElementById("navbar")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("nav-scrolled")
    } else {
      navbar.classList.remove("nav-scrolled")
    }
  })

  // Smooth scrolling for anchor links
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

  // Counter animation
  function animateCounters() {
    const counters = document.querySelectorAll("[data-count]:not([data-animated])")

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.getAttribute("data-count"))
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60fps
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target
          counter.setAttribute("data-animated", "true")
        }
      }

      updateCounter()
    })
  }

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("animate-counter")) {
          entry.target.classList.add("visible")
          // Animate counters when they come into view
          if (!entry.target.hasAttribute("data-animated")) {
            entry.target.setAttribute("data-animated", "true")
            setTimeout(() => animateCounters(), 200)
          }
        }

        if (entry.target.classList.contains("scroll-reveal")) {
          entry.target.classList.add("revealed")
        }
      }
    })
  }, observerOptions)

  // Observe elements for animation
  document.querySelectorAll(".animate-counter, .scroll-reveal").forEach((el) => {
    observer.observe(el)
  })

  // Add scroll reveal class to elements that should animate on scroll
  document.querySelectorAll(".card-hover").forEach((card) => {
    card.classList.add("scroll-reveal")
  })

  // Parallax effect for floating elements
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".floating-element")

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px)`
    })
  })

  // Add loading animation to images
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("load", function () {
      this.style.opacity = "1"
    })

    // Add loading placeholder
    if (!img.complete) {
      img.style.opacity = "0"
      img.style.transition = "opacity 0.3s ease"
    }
  })

  // Add hover effects to buttons
  document.querySelectorAll(".btn-primary, .btn-secondary").forEach((btn) => {
    btn.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-2px)"
    })

    btn.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Add ripple effect to buttons
  document.querySelectorAll("button, .btn-primary, .btn-secondary").forEach((button) => {
    // Ensure button has relative positioning for ripple effect
    if (getComputedStyle(button).position === "static") {
      button.style.position = "relative"
    }
    button.style.overflow = "hidden"

    button.addEventListener("click", function (e) {
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

  console.log("OSIS POSMAR website loaded successfully!")
})

// Add ripple CSS dynamically
const style = document.createElement("style")
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
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
