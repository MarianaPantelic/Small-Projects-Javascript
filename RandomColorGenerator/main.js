let number = document.getElementById("number");
let add = document.getElementById("add");
let colors = document.getElementById("colors");

function colorGenerator() {
  let color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
}

function addColor(func) {
  let newColor = document.createElement("div");
  let colorName = document.createElement("div");
  let close = document.createElement("div");
  let color = func();
  newColor.classList.add("newColor");
  colorName.classList.add("colorName");
  close.classList.add("close");
  colors.appendChild(newColor);
  newColor.appendChild(colorName);
  newColor.appendChild(close);
  colorName.innerHTML = color;
  close.innerHTML = "X";
  newColor.style.backgroundColor = color;
  close.addEventListener("click", function () {
    newColor.remove();
  });
}

function init() {
  let colorNumber = number.value;
  number.value = "";
  for (let i = 0; i < colorNumber - 1; i++) {
    addColor(colorGenerator);
  }
}
