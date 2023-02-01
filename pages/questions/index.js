import { ANSWERS_KEY } from "../../js/constants.js";
import { getValues } from "../../js/forms.js";
import { questions } from "../../js/questions.js";

function createElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

function createAnswer(answer, value) {
  return `
          <div class="flex m-b-10">
            <input 
              id="answer-${value + 1}" 
              type="radio"
              name="answer" 
              value="${value + 1}" 
            />
            <label for="answer-${value + 1}">${answer}</label>
          </div>
  `;
}

function getStoredAnswers() {
  const existingAnswers = localStorage.getItem(ANSWERS_KEY) || "";

  return existingAnswers.split(",").filter(Boolean);
}

function renderQuestion(index) {
  const questionObject = questions[index];
  const answersHtml = questionObject.answers.map(createAnswer).join("");
  const html = `
          <h1>${index + 1}. pitanje</h1>
          <p>${questionObject.question}</p>
          ${answersHtml}
          <button class="button" type="submit">Sljedece pitanje</button>
  `;

  const questionElement = createElement(html);
  // Get form ref
  const questionForm = document.getElementById("question-form");

  // Clear existing HTML inside question-form element
  questionForm.innerHTML = "";
  // Add question to the question-form element
  questionForm.append(questionElement);
}

function questionHandler(event) {
  event.preventDefault();

  const { answer } = getValues(event.target);

  if (!answer) {
    alert("Unesi odgovor prije nego nastavis!");

    return;
  }

  const data = getStoredAnswers();

  data.push(answer);

  localStorage.setItem(ANSWERS_KEY, data);
  renderQuestion(data.length);
}

const questionForm = document.getElementById("question-form");
const data = getStoredAnswers();

questionForm.addEventListener("submit", questionHandler);
renderQuestion(data.length);
