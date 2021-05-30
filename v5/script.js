let canvas = document.querySelector("#canvas");

let ctx = canvas.getContext("2d");
let { top: canvasTop } = canvas.getBoundingClientRect();
canvas.height = window.innerHeight - canvasTop;
canvas.width = window.innerWidth;

let db = []; // this is main db which contains all line which are currently on the canvas
let redoDB = []; // we also need a redoDB

window.addEventListener("resize", function () {
  canvas.height = window.innerHeight - canvasTop;
  canvas.width = window.innerWidth;
  redrawLines();
});


let isMouseDown = false;
let line=[];

canvas.addEventListener("mousedown", function (e) {
  // This is done so as to empty redoDB when a user undo some line and then start drawing again in this case redo should not work
  if(redoDB.length > 0){
    redoDB = [];
  }
  isMouseDown = true;
  let x = e.clientX;
  let y = e.clientY - canvasTop; // minus the height of tools-container
  ctx.beginPath();
  ctx.moveTo(x, y);
  // this is the starting point of a line so add lineWidth and strokeStyle info also it will help us in redo functionality
  let pointObject = {
    id: "md",
    x,
    y,
    lineWidth: ctx.lineWidth,
    strokeStyle: ctx.strokeStyle,
  };
  line.push(pointObject);
});

canvas.addEventListener("mousemove", function (e) {
  if (isMouseDown) {
    let x = e.clientX;
    let y = e.clientY - canvasTop; // minus the height of tools-container

    ctx.lineTo(x, y);
    ctx.stroke();
    // keep pushing objects in line array till mouse move event is firing
    let pointObject = {
      id: "mm",
      x,
      y
    };
    line.push(pointObject);
  }
});

canvas.addEventListener("mouseup", function (e) {
  isMouseDown = false;
  // add line to db and make line new
  db.push(line);
  line = [];
});



