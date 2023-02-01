import { questionHandler } from "../../js/questions.js";

const questionForm = document.getElementById("question-form");

questionForm.addEventListener("submit", questionHandler);
