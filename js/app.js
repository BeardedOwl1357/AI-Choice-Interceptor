import { llms } from "./llms.js";
import { shuffle } from "./shuffle.js";
import { renderCards } from "./render.js";
import { version } from "./version.js";

const shuffled = shuffle(llms);

renderCards(
  document.getElementById("llm-container"),
  shuffled
);

const versionElement = document.getElementById("site-version");

if (versionElement) {
  versionElement.textContent = `Version: ${version}`;
}
