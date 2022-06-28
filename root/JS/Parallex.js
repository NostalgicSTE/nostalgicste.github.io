//parallex effect
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountb = document.getElementById("mountb");
let txt = document.getElementById("intro");
let mountf = document.getElementById("mountf");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let i = window.scrollY;
  stars.style.left = -i * 7 + "px";
  moon.style.top = -i * 1.05 + "px";
  mountb.style.top = i * 0.5 + "px";
  mountf.style.top = i * 0.0 + "px";
  txt.style.marginRight = i * 3 + "px";
  txt.style.marginTop = i * 1.15 + "px";
  header.style.top = i * 0.5 + "px";
});
