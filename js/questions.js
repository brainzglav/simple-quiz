import { ANSWERS_KEY } from "./constants.js";

export const questions = [
  {
    id: 0,
    question: "Hoisting je:",
    answers: [
      "Princip po kojem varijable isplivaju na pocetak filea",
      "Princip po kojem funkcije isplivaju na pocetak filea",
      "Princip po kojem se deklaracije varijabli ucitavaju prve u memoriju",
      "Princip po kojem se deklaracije varijabli i funkcija ucitavaju prve u memoriju",
    ],
    correctAnswer: 4,
  },
  {
    id: 1,
    question: "Closure je princip po kojem:",
    answers: [
      "Child funkcija sprema referencu na svoju parent funkciju",
      "Parent funkcija sprema referencu na svoju child funkciju",
      "Parent funkcija sprema referencu na scope svoje child funkcije",
      "Child funkcija sprema referencu na scope svoje parent funkcije",
    ],
    correctAnswer: 4,
  },
  {
    id: 2,
    question: "Function scope je:",
    answers: [
      "Memorijski prostor dodijeljen varijabli",
      "Memorijski prostor dodijeljen funkciji",
      "Memorijski prostor dodijeljen programu",
      "Memorijski prostor dodijeljen varijabli i funkciji",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "Coercion je:",
    answers: [
      "Eksplicitna pretvordba tipova od strane JS enginea",
      "Eksplicitna pretvordba tipova od strane usera",
      "Implicitna pretvordba tipova od strane JS enginea",
      "Eksplicitna pretvordba tipova od strane usera",
    ],
    correctAnswer: 3,
  },
];

export const correctAnswers = questions.map(
  ({ correctAnswer }) => correctAnswer
);

export function getStoredAnswers() {
  const existingAnswers = localStorage.getItem(ANSWERS_KEY) || "";

  return existingAnswers
    .split(",")
    .filter(Boolean)
    .map((item) => +item);
}

export function createElement(html) {
  const template = document.createElement("template");

  template.innerHTML = html;

  return template.content.cloneNode(true);
}

export default {
  questions,
  correctAnswers,
  getStoredAnswers,
  createElement,
};
