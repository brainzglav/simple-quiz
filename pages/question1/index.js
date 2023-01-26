import { ANSWERS_KEY, USER_LOGIN_INFO_KEY } from "../../js/constants.js";
import { getValues, redirect } from "../../js/forms.js";

function questionHandler(event) {
  event.preventDefault();

  const { answer } = getValues(event.target);

  if (!answer) {
    alert("Unesi odgovor prije nego nastavis!");

    return;
  }

  localStorage.setItem(ANSWERS_KEY, [answer]);
  redirect("/pages/question2/index.html");
}

const userInfo = localStorage.getItem(USER_LOGIN_INFO_KEY);

console.log({ userInfo: JSON.parse(userInfo) });

const questionForm = document.getElementById("question-form");

questionForm.addEventListener("submit", questionHandler);
