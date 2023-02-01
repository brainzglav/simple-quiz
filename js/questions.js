import { ANSWERS_KEY } from "./constants.js";
import { getValues, redirect } from "./forms.js";

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
];

export function questionHandler(event) {
  event.preventDefault();

  const { answer } = getValues(event.target);

  if (!answer) {
    alert("Unesi odgovor prije nego nastavis!");

    return;
  }

  const existingAnswers = localStorage.getItem(ANSWERS_KEY) || "";
  const data = existingAnswers.split(",").filter(Boolean);

  data.push(answer);

  console.log({ data, existingAnswers });

  localStorage.setItem(ANSWERS_KEY, data);
  redirect(`/pages/question${data.length + 1}/index.html`);
}

export default {
  questionHandler,
};
