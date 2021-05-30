// 9. Here you will add logic for opening tool options for both pencil and eraser !
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

let pencilSizeInput = document.querySelector("#pencil-size");
let eraserSizeInput = document.querySelector("#eraser-size");
let pencilColors = document.querySelectorAll(".pencil-colors div");

let activeTool = "pencil"; //by default active tool is pencil

pencil.addEventListener("click", function () {
  if (activeTool == "pencil") {
    // open pencil options
    // pencil options toggle
    if (pencilOptions.classList.contains("hide")) {
      // pencil options are hidden
      pencilOptions.classList.remove("hide");
    } else {
      // pencil options active hain
      pencilOptions.classList.add("hide");
    }
  } else {
    // make pencil active
    activeTool = "pencil";
    pencil.classList.add("active-tool");
    eraser.classList.remove("active-tool");
    eraserOptions.classList.add("hide");
    ctx.strokeStyle = "black";
  }
});

eraser.addEventListener("click", function () {
  if (activeTool == "eraser") {
    // open eraser options
    // eraser options toggle
    if (eraserOptions.classList.contains("hide")) {
      eraserOptions.classList.remove("hide");
    } else {
      eraserOptions.classList.add("hide");
    }
  } else {
    // make eraser active
    activeTool = "eraser";
    pencil.classList.remove("active-tool");
    pencilOptions.classList.add("hide");
    eraser.classList.add("active-tool");
    ctx.strokeStyle = "white";
  }
});
