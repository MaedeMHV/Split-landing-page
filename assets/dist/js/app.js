let first = document.querySelector(".first");
let second = document.querySelector(".second");
// let split = document.querySelectorAll(".split");
// let split = document.querySelectorAll(".split");

// split.forEach((section) => {
//   function removeActiveClasses() {
//     section.classList.remove("active");
//   }
//   section.addEventListener("click", (e) => {
//     removeActiveClasses();
//     section.classList.add("active");
//   });
// });

// split.forEach((section) => {

//     function removeActiveClasses() {
//     section.classList.remove("active");
//   }
// });
first.addEventListener("mouseenter", (e) => {
  first.classList.add("active");
  second.classList.remove("active");
});
first.addEventListener("mouseleave", (e) => {
  first.classList.remove("active");
  second.classList.remove("active");
});
second.addEventListener("mouseenter", (e) => {
  first.classList.remove("active");
  second.classList.add("active");
});
second.addEventListener("mouseleave", (e) => {
  first.classList.remove("active");
  second.classList.remove("active");
});
