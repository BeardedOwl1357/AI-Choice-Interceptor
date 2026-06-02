export function renderCards(container, llms) {
  container.innerHTML = "";

  llms.forEach(llm => {
    container.classList.add("card-container");
    const card = document.createElement("a");

    card.href = llm.url;
    card.className = "card";

    card.innerHTML = `
      <img class="llm-logo-img" src="${llm.logo}" />
      <h2>${llm.name}</h2>
      <p>${llm.description}</p>
    `;

    container.appendChild(card);
  });
}