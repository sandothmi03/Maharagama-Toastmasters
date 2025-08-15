// Import Lucide icons library
import lucide from "lucide"

// Main JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  lucide.createIcons()

  // Mobile menu functionality
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileNav = document.getElementById("mobileNav")
  const navbar = document.getElementById("navbar")

  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("active")
    const icon = mobileMenuBtn.querySelector("i")
    if (mobileNav.classList.contains("active")) {
      icon.setAttribute("data-lucide", "x")
    } else {
      icon.setAttribute("data-lucide", "menu")
    }
    lucide.createIcons()
  })

  // Close mobile menu when clicking on links
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active")
      const icon = mobileMenuBtn.querySelector("i")
      icon.setAttribute("data-lucide", "menu")
      lucide.createIcons()
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll(".nav-link, .footer-links a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetId = href.substring(1)
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Contact form functionality
  const contactForm = document.getElementById("contactForm")
  const successMessage = document.getElementById("successMessage")
  const errorMessage = document.getElementById("errorMessage")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.innerHTML
      submitBtn.innerHTML = '<i data-lucide="loader-2"></i><span>Sending...</span>'
      submitBtn.disabled = true
      lucide.createIcons()

      // Simulate form submission (replace with actual API call)
      setTimeout(() => {
        // Hide form and show success message
        contactForm.style.display = "none"
        successMessage.style.display = "block"
        lucide.createIcons()

        // Reset form after 3 seconds
        setTimeout(() => {
          contactForm.style.display = "block"
          successMessage.style.display = "none"
          contactForm.reset()
          submitBtn.innerHTML = originalText
          submitBtn.disabled = false
          lucide.createIcons()
        }, 3000)
      }, 1000)
    })
  }

  // Set current year in footer
  const currentYearElements = document.querySelectorAll("#currentYear")
  const currentYear = new Date().getFullYear()
  currentYearElements.forEach((element) => {
    element.textContent = currentYear
  })

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animatedElements = document.querySelectorAll(".about-card, .stat-card, .activity-item, .contact-card")
  animatedElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(30px)"
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(element)
  })
})

// Global scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}

// Email functionality (if you want to integrate with EmailJS)
function sendEmail(data) {
  // Example using EmailJS (you'll need to include EmailJS library and configure it)
  /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'maharagama.toastmasters@example.com'
    }).then(function(response) {
        console.log('Email sent successfully:', response);
        return true;
    }).catch(function(error) {
        console.error('Email send failed:', error);
        return false;
    });
    */
}
