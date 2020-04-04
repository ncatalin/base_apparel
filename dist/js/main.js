// Get ID's
const form = document.getElementById('main-form');
const email = document.getElementById('email');
// Regex from stackoverflow
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
// Check if valid email, add/remove class
form.addEventListener('submit', e => {
  e.preventDefault();
  const emailValidation = email.value;
  if (!validateEmail(emailValidation)) {
    form.classList.add('active-error');
  } else {
    form.classList.remove('active-error');
  }
});