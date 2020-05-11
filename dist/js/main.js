const mainForm = document.getElementById("main-form");
const email = document.getElementById("email");

function emailValidation(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const getValue = email.value;

  if (!emailValidation(getValue)) {
    mainForm.classList.add("active-error");
  } else {
    mainForm.classList.remove("active-error");
  }
});
