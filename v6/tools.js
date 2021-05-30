let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let pencilOptions = document.querySelector("#pencil-options");
let eraserOptions = document.querySelector("#eraser-options");

let pencilSizeInput = document.querySelector("#pencil-size");
let eraserSizeInput = document.querySelector("#eraser-size");
let pencilColors = document.querySelectorAll(".pencil-colors div");

let activeTool = "pencil"; //by default active tool is pencil

let pencilSize = 1; // set a default pencil size to 1
let eraserSize = 1; // set a default eraser size to 1

// For changing pencil color!!
for(let i=0 ; i<pencilColors.length ; i++){
  pencilColors[i].addEventListener("click" , function(e){
      console.log(e);
      // if(e.target.classList.contains("blue")
      let color = e.target.classList.value;
      ctx.strokeStyle=color;
  })
}

// For changing size of pencil and eraser
pencilSizeInput.addEventListener("change" , function(e){
  let val = e.target.value;
  ctx.lineWidth = val;
  pencilSize = val;
})
eraserSizeInput.addEventListener("change" , function(e){
  let val = e.target.value;
  ctx.lineWidth = val;
  eraserSize = val;
})



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
    ctx.lineWidth = pencilSize; // so as to set lineWidth to last Selected pencil size
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
    ctx.lineWidth = eraserSize;// so as to set lineWidth to last Selected eraser size
  }
});
