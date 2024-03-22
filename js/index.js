var navContent = document.querySelector("#navContentId");
var openBtn = document.querySelector("#openId");
var closeBtn = document.querySelector("#closeId");

openBtn.addEventListener("click", function () {
  navContent.classList.add("nav__content--show");
  openBtn.classList.toggle("none");
  closeBtn.classList.toggle("none");
});

closeBtn.addEventListener("click", function () {
  navContent.classList.remove("nav__content--show");
  openBtn.classList.toggle("none");
  closeBtn.classList.toggle("none");
});
