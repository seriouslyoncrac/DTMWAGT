// JavaScript for toggling section visibility
function toggleSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section.style.display === "none" || section.style.display === "") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      // Toggle content visibility for the respective segment
      const content = button.nextElementSibling; // Get the next sibling element (content div)
      
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block'; // Show content
      } else {
        content.style.display = 'none'; // Hide content
      }
    });
  });
});
