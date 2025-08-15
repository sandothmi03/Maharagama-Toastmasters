// Memories page functionality
document.addEventListener("DOMContentLoaded", () => {
  // Import Lucide icons library
  const lucide = window.lucide

  // Initialize Lucide icons
  lucide.createIcons()

  // Scroll to top when page loads
  window.scrollTo(0, 0)

  // Memory data
  const memories = [
    {
      id: 1,
      src: "assets/images/memories/toastmasters-group-photo.jpg",
      alt: "Club meeting in progress",
      category: "meetings",
      date: "2024-12-15",
      caption: "Weekly club meeting with inspiring speeches",
    },
    {
      id: 2,
      src: "assets/images/memories/toastmasters-trophy.jpg",
      alt: "Contest winner holding trophy",
      category: "contests",
      date: "2024-11-20",
      caption: "Area contest champion from our club",
    },
    {
      id: 3,
      src: "assets/images/memories/toastmasters-workshop.jpg",
      alt: "Leadership workshop session",
      category: "workshops",
      date: "2024-10-10",
      caption: "Leadership excellence workshop",
    },
    {
      id: 4,
      src: "assets/images/memories/toastmasters-dinner.jpg",
      alt: "Club social gathering",
      category: "socials",
      date: "2024-09-25",
      caption: "Annual club dinner and fellowship",
    },
    {
      id: 5,
      src: "assets/images/memories/toastmasters-award-ceremony.jpg",
      alt: "Award ceremony",
      category: "awards",
      date: "2024-08-15",
      caption: "Recognizing outstanding members",
    },
    {
      id: 6,
      src: "assets/images/memories/toastmasters-table-topics.jpg",
      alt: "Table topics session",
      category: "meetings",
      date: "2024-07-30",
      caption: "Impromptu speaking excellence",
    },
  ]

  let currentFilter = "all"
  const memoriesGrid = document.getElementById("memoriesGrid")
  const filterTabs = document.querySelectorAll(".filter-tab")
  const noResults = document.getElementById("noResults")
  const lightbox = document.getElementById("lightbox")
  const lightboxImage = document.getElementById("lightboxImage")
  const lightboxCategory = document.getElementById("lightboxCategory")
  const lightboxDate = document.getElementById("lightboxDate")
  const lightboxCaption = document.getElementById("lightboxCaption")
  const lightboxClose = document.getElementById("lightboxClose")

  // Filter functionality
  filterTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")
      setActiveFilter(filter)
      filterMemories(filter)
    })
  })

  function setActiveFilter(filter) {
    currentFilter = filter
    filterTabs.forEach((tab) => {
      tab.classList.remove("active")
    })
    document.querySelector(`[data-filter="${filter}"]`).classList.add("active")
  }

  function filterMemories(filter) {
    let filteredMemories

    if (filter === "all") {
      filteredMemories = memories
    } else if (["2024", "2025", "2026"].includes(filter)) {
      filteredMemories = memories.filter((memory) => memory.date.includes(filter))
    } else {
      filteredMemories = memories.filter((memory) => memory.category === filter)
    }

    renderMemories(filteredMemories)
  }

  function renderMemories(memoriesToRender) {
    memoriesGrid.innerHTML = ""

    if (memoriesToRender.length === 0) {
      noResults.style.display = "block"
      return
    }

    noResults.style.display = "none"

    memoriesToRender.forEach((memory, index) => {
      const memoryElement = createMemoryElement(memory, index)
      memoriesGrid.appendChild(memoryElement)
    })

    // Re-initialize Lucide icons
    lucide.createIcons()
  }

  function createMemoryElement(memory, index) {
    const memoryDiv = document.createElement("div")
    memoryDiv.className = "memory-item"
    memoryDiv.style.animationDelay = `${index * 0.1}s`

    memoryDiv.innerHTML = `
            <div class="memory-image-container">
                <img src="${memory.src}" alt="${memory.alt}" class="memory-image" loading="lazy">
                <div class="memory-overlay"></div>
                <div class="memory-hover-content">
                    <span class="memory-badge">${capitalizeFirst(memory.category)}</span>
                    <p class="memory-hover-caption">${memory.caption}</p>
                </div>
            </div>
            <div class="memory-info">
                <div class="memory-date">
                    <i data-lucide="calendar"></i>
                    <span>${formatDate(memory.date)}</span>
                </div>
            </div>
        `

    memoryDiv.addEventListener("click", () => {
      openLightbox(memory)
    })

    return memoryDiv
  }

  function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  function formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  // Lightbox functionality
  function openLightbox(memory) {
    lightboxImage.src = memory.src
    lightboxImage.alt = memory.alt
    lightboxCategory.textContent = capitalizeFirst(memory.category)
    lightboxDate.textContent = formatDate(memory.date)
    lightboxCaption.textContent = memory.caption

    lightbox.classList.add("active")
    document.body.style.overflow = "hidden"

    // Re-initialize Lucide icons
    lucide.createIcons()
  }

  function closeLightbox() {
    lightbox.classList.remove("active")
    document.body.style.overflow = "auto"
  }

  // Lightbox event listeners
  lightboxClose.addEventListener("click", closeLightbox)

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  // Keyboard navigation for lightbox
  document.addEventListener("keydown", (e) => {
    if (lightbox.classList.contains("active") && e.key === "Escape") {
      closeLightbox()
    }
  })

  // Initialize page
  renderMemories(memories)

  // Lazy loading for images
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("loading")
        observer.unobserve(img)
      }
    })
  })

  // Observe all memory images for lazy loading
  document.querySelectorAll(".memory-image").forEach((img) => {
    imageObserver.observe(img)
  })
})
