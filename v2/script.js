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



