/**
 * Toggles the display of an individual team member's bio
 * @param {string} bioId - The ID of the bio section to show or hide
 * @param {string} imgId1 - The ID of the img section to show or hide
 * @param {string} imgId2 - The ID of the img section to show or hide
 */
/*function toggleBio(bioId, imgId1, imgId2) {
    const bio = document.getElementById(bioId);
    const img1 = document.getElementById(imgId1)
    const img2 = document.getElementById(imgId2)
    // Toggle between showing and hiding the bio section
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block";
        img1.style.display = "block";
        img2.style.display = "block";
    } else {
        bio.style.display = "none";
        img1.style.display = "none";
        img2.style.display = "none";
    }
}
*/

document.addEventListener('DOMContentLoaded', () => {

  // 1. Mobile Navbar Toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // 2. Contact Section Toggle (Updated to use CSS Classes)
  const contactLink = document.getElementById('contact-link');
  const contactSection = document.getElementById('contact-section');

  if (contactLink && contactSection) {
    contactLink.addEventListener('click', function(event) {
      event.preventDefault(); // Strictly stops the anchor tag from jumping the page

      // Toggle the .show class in your CSS
      contactSection.classList.toggle('show');

      // If it is now showing, smoothly scroll to it
      if (contactSection.classList.contains('show')) {
        contactSection.scrollIntoView({ behavior: 'smooth' });

        // Closes mobile menu automatically after clicking contact
        if (navLinks && navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  }

});

function checkContactHash() {
  if (window.location.hash === '#contact-section') {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.style.display = 'block'; // Or 'flex' / your custom display rule
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// 1. Run immediately when the page loads or transfers
window.addEventListener('DOMContentLoaded', checkContactHash);

// 2. Run if the user clicks it while already standing on the index page
window.addEventListener('hashchange', checkContactHash);
