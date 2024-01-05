document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      alert('Showcasing content for ' + button.parentElement.id);
    });
  });
});
