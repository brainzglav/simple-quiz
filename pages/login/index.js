import { getValues, getEntries, redirect } from "../../js/forms.js";
import { LOGGED_IN_KEY } from "../../js/constants.js";

function loginHandler(event) {
  event.preventDefault();

  const values = getValues(event.target);
  const entries = getEntries(event.target);

  console.log({ event, loginForm });

  /* for ([name, value] of values.entries()) {
    console.log({ name, value });
  } */

  localStorage.setItem(LOGGED_IN_KEY, true);

  redirect("/pages/question1/index.html");
}

const loginForm = document.getElementById("login-form");

document.addEventListener("submit", loginHandler);
