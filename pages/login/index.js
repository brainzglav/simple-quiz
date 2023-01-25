import { getValues, getEntries, redirect } from "../../js/forms.js";
import { LOGGED_IN_KEY } from "../../js/constants.js";

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
    match: "1234",
  },
};

function validate(value, validators) {
  for (const key in validators) {
    const validatorValue = validators[key];

    switch (key) {
      case "required":
        if (
          validatorValue &&
          (value === "" || value === null || value === undefined)
        ) {
          return "Obavezno polje";
        }
        break;
      case "maxLength":
        if (value.length > validatorValue) {
          return `Maksimalna duljina je ${validatorValue}`;
        }
        break;
      case "match":
        if (value !== validatorValue) {
          return "Pogresan unos";
        }
        break;
    }
  }

  return "";
}

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

  //const values = getValues(event.target);
  const entries = getEntries(event.target);

  console.log({ event, loginForm, entries });

  for (const [key, _value] of entries) {
    validateElement(key);
  }

  /* 
  localStorage.setItem(LOGGED_IN_KEY, true);

  redirect("/pages/question1/index.html"); 
  */
}

const loginForm = document.getElementById("login-form");

document.addEventListener("submit", loginHandler);
