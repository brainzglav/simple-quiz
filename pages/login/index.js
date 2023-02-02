import { getValues, redirect, validate } from "../../js/forms.js";
import { SECURITY_CODE, USER_LOGIN_INFO_KEY } from "../../js/constants.js";

function validateElement(elementName) {
  const element = document.getElementsByName(elementName)[0];
  const errorElement = element.nextElementSibling;
  const error = validate(element.value, formValidators[elementName]);

  errorElement.innerHTML = error;

  if (error) {
    element.classList.add("invalid");
  } else {
    element.classList.remove("invalid");
  }
}

function loginHandler(event) {
  event.preventDefault();

  Object.keys(formValidators).forEach(validateElement);

  const hasErrors = !!document.getElementsByClassName("invalid").length;

  if (!hasErrors) {
    const formData = getValues(event.target);

    localStorage.setItem(USER_LOGIN_INFO_KEY, JSON.stringify(formData));
    redirect("/pages/questions/index.html");
  }
}

function guard() {
  const data = localStorage.getItem(USER_LOGIN_INFO_KEY);

  if (data) {
    redirect("/pages/questions/index.html");
  }
}

/* Initialize validators */

const formValidators = {
  name: {
    required: true,
    maxLength: 12,
  },
  surname: {
    required: true,
    maxLength: 14,
  },
  sex: {
    required: true,
  },
  code: {
    required: true,
    match: SECURITY_CODE,
    /* This is called a magic number, avoid doing this */
    // match: "1234",
  },
};

const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", loginHandler);
guard();
