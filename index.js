  // Smooth scrolling for anchor links
  document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });


// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenuDropdown = document.getElementById('mobile-menu-dropdown');
  
  mobileMenuButton.addEventListener('click', function () {
    mobileMenuButton.classList.toggle('active');
    mobileMenuDropdown.classList.toggle('hidden'); // Toggle the "hidden" class instead
  });
});


  // Function to check scroll position and toggle the button
  function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    if (window.scrollY > 200) {
      scrollToTopButton.classList.remove('hidden');
    } else {
      scrollToTopButton.classList.add('hidden');
    }
  }

  // Function to smoothly scroll to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Attach scroll event listener
  window.addEventListener('scroll', toggleScrollToTopButton);

  // Attach click event listener to the button
  document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', scrollToTop);
  });