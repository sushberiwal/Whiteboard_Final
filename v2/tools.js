// 6. Now here attach event listeners to pencil and eraser so that we can draw as well as erase
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");

let activeTool = "pencil"; //by default active tool is pencil


pencil.addEventListener("click" , function(){
    if(activeTool == "pencil"){
        // open pencil options
    }
    else{
        // make pencil active
        activeTool = "pencil";
        pencil.classList.add("active-tool");
        eraser.classList.remove("active-tool");
        ctx.strokeStyle = "black"; 
    }
})

eraser.addEventListener("click" , function(){
    if(activeTool == "eraser"){
        // open eraser options
    }
    else{
        // make eraser active
        activeTool = "eraser";
        pencil.classList.remove("active-tool");
        eraser.classList.add("active-tool");
        ctx.strokeStyle = "white";
    }
})

