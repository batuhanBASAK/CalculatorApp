const screen = document.getElementById("screen");

document.getElementById("button-AC").addEventListener("click", () => {
  screen.innerHTML = "";
});

document.getElementById("button-DE").addEventListener("click", () => {
  screen.innerHTML = screen.innerHTML.slice(0, -1);
});

document.getElementById("button-=").addEventListener("click", () => {
  screen.innerHTML = eval(screen.innerHTML);
});

document.getElementById("button--").addEventListener("click", () => {
  screen.innerHTML += "-"
});

document.getElementById("button-/").addEventListener("click", () => {
  screen.innerHTML += "/"
});

document.getElementById("button-7").addEventListener("click", () => {
  screen.innerHTML += "7"
});

document.getElementById("button-8").addEventListener("click", () => {
  screen.innerHTML += "8"
});

document.getElementById("button-9").addEventListener("click", () => {
  screen.innerHTML += "9"
});

document.getElementById("button-*").addEventListener("click", () => {
  screen.innerHTML += "*"
});

document.getElementById("button-4").addEventListener("click", () => {
  screen.innerHTML += "4"
});

document.getElementById("button-5").addEventListener("click", () => {
  screen.innerHTML += "5"
});


document.getElementById("button-6").addEventListener("click", () => {
  screen.innerHTML += "6"
});

document.getElementById("button-1").addEventListener("click", () => {
  screen.innerHTML += "1"
});

document.getElementById("button-2").addEventListener("click", () => {
  screen.innerHTML += "2"
});

document.getElementById("button-3").addEventListener("click", () => {
  screen.innerHTML += "3"
});

document.getElementById("button-+").addEventListener("click", () => {
  screen.innerHTML += "+"
});


document.getElementById("button-00").addEventListener("click", () => {
  screen.innerHTML += "00"
});

document.getElementById("button-0").addEventListener("click", () => {
  screen.innerHTML += "0"
});

document.getElementById("button-.").addEventListener("click", () => {
  screen.innerHTML += "."
});

