let img = document.querySelector(".img");
let container = document.querySelector("body");
let boot = document.querySelectorAll("a");
let kol = document.querySelector("h2")
let p = document.querySelector("p")
let button = document.querySelector("button")
function change(phone) {
  img.src = phone;
}
function background(color) {
  container.style.background = color;
}
function text(colors) {
  boot[0].style.color = colors;
  boot[1].style.color = colors;
  boot[2].style.color = colors;
  boot[3].style.color = colors;
  boot[4].style.color = colors;
  kol.style.color = colors;
 p.style.color = colors;

}

