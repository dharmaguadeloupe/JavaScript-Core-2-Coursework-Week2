function listOfColours(colours) {
  const content = document.getElementById("content");

  const dropdownSelect = document.createElement("select");
  content.appendChild(dropdownSelect);

  const paragraphText = document.createElement("p");
  content.appendChild(paragraphText);

  for(const color of colours) {
    const colourOption = dropdownSelect.appendChild(document.createElement("option"));
    colourOption.innerText = color;
  }

  function chooseColour(event) {
    paragraphText.innerText = `Your Selection is: ${event.target.value}`;
    paragraphText.style.color = event.target.value;
    }
    dropdownSelect.addEventListener("click", chooseColour);
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
