// 3a. Set canvas height and width and on resize event of window add a function
//     which will set height width of canvas everytime the window resizes !
// 3b. Get canvas rendering context 2d
// 3c. Attach MouseDown MouseMove and MouseUp event on canvas and write logics for them

let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

let { top: canvasTop } = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight - canvasTop;
  canvas.width = window.innerWidth;
});

let isMouseDown = false;

canvas.addEventListener("mousedown", function (e) {
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - canvasTop; // minus the height of tools-container
  ctx.beginPath();
  ctx.moveTo(x, y);
});

canvas.addEventListener("mousemove", function (e) {
  if (isMouseDown) {
    let x = e.clientX;
    let y = e.clientY - canvasTop; // minus the height of tools-container

    ctx.lineTo(x, y);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
});
