const form = document.querySelector(".login-form");

form.addEventListener("submit", handBtnSubmit);

function handBtnSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Всі поля повинні бути заповнені!");
  }
  const formElements = event.currentTarget.elements;

  const userMail = formElements.email.value;
  const userPassword = formElements.password.value;
  const formData = {
    userMail,
    userPassword,
  };
  console.log(formData);
  event.target.reset();
}
