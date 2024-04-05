document.addEventListener("DOMContentLoaded", function() {
    // Function to toggle active class on navigation links
    function setActiveNavLink() {
      const navLinks = document.querySelectorAll("nav ul li a");
      navLinks.forEach(link => {
        link.addEventListener("click", function() {
          navLinks.forEach(item => item.classList.remove("active"));
          this.classList.add("active");
        });
      });
    }
  
    // Function to display current date and time in the footer
    function displayDateTime() {
      const footerDateTime = document.querySelector("#footer-datetime");
      if (footerDateTime) {
        const currentDate = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        footerDateTime.textContent = currentDate.toLocaleDateString('en-US', options);
      }
    }
  
    // Call functions on page load
    setActiveNavLink();
    displayDateTime();
  });
  