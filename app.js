// const bigSlide = function () {
//   const slides = document.querySelectorAll(".slide");
//   const btnR = document.querySelector(".btn-right");
//   const btnL = document.querySelector(".btn-left");
//   let curslide = 0;
//   let maxSlide = slides.length - 1;
//   const slider = document.querySelector(".slider");
//   const dotContainer = document.querySelector(".dots");
//   slider.style.transform = "scale(.4)";
//   const createDot = function () {
//     slides.forEach((_, i) =>
//       dotContainer.insertAdjacentHTML(
//         "beforeend",
//         `<button class="dots__dot" data-slide="${i}"></button>`
//       )
//     );
//   };
//   //
//   const activateDot = function (slide) {
//     document
//       .querySelectorAll(".dots__dot")
//       .forEach((dot) => dot.classList.remove("dots__dot--active"));
//     //install active
//     document
//       .querySelector(`.dots__dot[data-slide="${slide}"]`)
//       .classList.add("dots__dot--active");
//   };
//   //
//   const goToSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };
//   //
//   const nextSlide = function () {
//     if (curslide === maxSlide) {
//       curslide = 0;
//     } else {
//       curslide++;
//     }
//     goToSlide(curslide);
//     activateDot(curslide);
//   };
//   const prevSlide = function () {
//     if (curslide === 0) {
//       curslide = maxSlide;
//     } else {
//       curslide--;
//     }
//     goToSlide(curslide);
//     activateDot(curslide);
//   };
//   const init = function () {
//     goToSlide(0);
//     createDot();
//     activateDot(0);
//   };
//   init();
//   // handlers
//   btnR.addEventListener("click", nextSlide);
//   btnL.addEventListener("click", prevSlide);
//   document.addEventListener("keydown", function (e) {
//     e.key === "ArrowLeft" && prevSlide();
//     e.key === "ArrowRight" && nextSlide();
//   });
//   dotContainer.addEventListener("click", function (e) {
//     if (e.target.classList.contains("dots__dot")) {
//       const { slide } = e.target.dataset;
//       goToSlide(slide);
//       activateDot(slide);
//     }
//   });
// };
// bigSlide();
