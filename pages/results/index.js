import { redirect } from "../../js/forms.js";
import { loginGuard } from "../../js/guards.js";
import {
  correctAnswers,
  createElement,
  getStoredAnswers,
} from "../../js/questions.js";

function createListElement(userAnswer, correctAnswer) {
  return `<li> Korisnikov odgovor: ${userAnswer} | Tocan odgovor: ${correctAnswer}</li>`;
}

function renderList() {
  const html = userAnswers
    .map((answer, index) => createListElement(answer, correctAnswers[index]))
    .join("");
  const element = createElement(html);
  const listElement = document.getElementById("answer-list");

  listElement.innerHTML = "";
  listElement.append(element);
}

function guard() {
  loginGuard();

  if (userAnswers.length !== correctAnswers.length) {
    redirect("/pages/questions/index.html");
  }
}

const userAnswers = getStoredAnswers();
const userScore = userAnswers.filter(
  (answer, index) => answer === correctAnswers[index]
).length;
const fullScore = correctAnswers.length;
const percentage = Math.round((userScore / fullScore) * 100);
const totalScoreElement = document.getElementById("total-score");

totalScoreElement.innerHTML = `${userScore}/${fullScore} - ${percentage}%`;

guard();
renderList();
