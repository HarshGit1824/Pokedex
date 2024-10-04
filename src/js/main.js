// === Dom Selection ===
// First target the input
const inputE1 = document.querySelector('input');
// Log the input element
document.addEventListener('keypress', function (event) {
  if (event.key === '/') {
    event.preventDefault();
    inputE1.focus();
  }
});
