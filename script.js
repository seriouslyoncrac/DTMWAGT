// Sample JavaScript code for showcasing or toggling content
document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      // Toggle or display content based on button click
      alert('Showcasing content for ' + button.parentElement.id);
    });
  });
});
