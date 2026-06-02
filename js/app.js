import { llms } from "./llms.js";
import { shuffle } from "./shuffle.js";
import { renderCards } from "./render.js";

const shuffled = shuffle(llms);

renderCards(
  document.getElementById("llm-container"),
  shuffled
);