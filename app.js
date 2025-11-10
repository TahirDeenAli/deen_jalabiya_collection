// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Scroll animation using Intersection Observer
const fadeElements = document.querySelectorAll('.feature, .product, .testimonials');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => observer.observe(el));

// 🌙 Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// 📱 Toggle Mobile Menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Optional: Close menu after clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// 🛍️ Show/Hide Floating Shop Now Button
const floatingBtn = document.getElementById('floating-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    floatingBtn.classList.remove('hide');
  } else {
    floatingBtn.classList.add('hide');
  }
});

// 🌿 Fade In WhatsApp Button on Scroll
const whatsappButton = document.querySelector('.whatsapp-float');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    whatsappButton.classList.add('visible');
  } else {
    whatsappButton.classList.remove('visible');
  }
});
// 🌿 Product Popup Modal Functionality with Size Support
document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll(".product .btn");
  const modal = document.getElementById("product-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalWhatsApp = document.getElementById("modal-whatsapp");
  const modalSize = document.getElementById("modal-size");
  const closeModal = document.getElementById("close-modal");

  // ✅ Your Ghana WhatsApp number (no leading 0)
  const phoneNumber = "233241949756";

  buyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      const product = button.closest(".product");
      const imgSrc = product.querySelector("img").src;
      const title = product.querySelector("p").innerText;

      modalImage.src = imgSrc;
      modalTitle.innerText = title;
      modalDescription.innerText =
        "Premium quality Jalabiya — elegant, modest, and stylish.";

      // Reset selected size to default (S)
      modalSize.value = "S";

      // Show the modal
      modal.style.display = "flex";
    });
  });

  // 🟢 Update WhatsApp link when "Order via WhatsApp" is clicked
  modalWhatsApp.addEventListener("click", function (e) {
    e.preventDefault();
    const title = modalTitle.innerText;
    const selectedSize = modalSize.value;

    const message = `Salam! I’m interested in the ${title} (Size: ${selectedSize}) from Deen Jalabiya Collection.`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Open WhatsApp in new tab
    window.open(whatsappLink, "_blank", "noopener,noreferrer");
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


// 🌿 Smooth Scroll Active Menu
const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// 🌿 Navbar Background Change on Scroll
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


// 🖼️ Hero Image Slider
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const next = document.querySelector(".next");
  const prev = document.querySelector(".prev");
  let index = 0;

  function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
  }

  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    showSlide(index);
  });

  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  });

  // Auto slide every 5 seconds
  setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 5000);
});

// 🌟 Hero Slider Functionality
const slides = document.querySelectorAll(".slide");
const prevArrow = document.querySelector(".arrow.prev");
const nextArrow = document.querySelector(".arrow.next");
let currentSlide = 0;

// Show current slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Next and previous functions
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlideFunc() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto play
let slideInterval = setInterval(nextSlide, 5000);

// Arrow click events
nextArrow.addEventListener("click", () => {
  nextSlide();
  clearInterval(slideInterval);
});

prevArrow.addEventListener("click", () => {
  prevSlideFunc();
  clearInterval(slideInterval);
});

// 🌟 Hero Slider with Dots
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  // Auto-slide every 6s
  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 6000);

  // Dot click event
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      current = parseInt(dot.getAttribute("data-index"));
      showSlide(current);
    });
  });
});

// 🔝 Back to Top Button
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🌿 Fade-in animation for floating buttons
window.addEventListener('scroll', () => {
  const floatBtns = document.querySelectorAll('.whatsapp-float, #backToTop');
  floatBtns.forEach(btn => {
    if (window.scrollY > 150) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });
});
