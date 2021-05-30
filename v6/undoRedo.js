// We need to implement undo and redo functionality in our whiteboard
// So maintain a db which is Array of Arrays
// db= [ [] , [] , [] , []  ]
// db contains line Array this line array has all the mouse events which occured in a line from mousedown till mouseup
// line db contains object which have { id:"mousedown or mouseup or mousemove" , x : "" , y:"" , lineWidth:"" , strokeStyle:"" };

// define this db in script.js file and keep adding lines array in the mouse events

let undo = document.querySelector("#undo");
let redo = document.querySelector("#redo");


undo.addEventListener("click" , function(){
    undoLine();
})

redo.addEventListener("click" , function(){
    redoLines();
})

function redoLines(){
    if(redoDB.length){
        let line = redoDB.pop();
        for(let j=0 ; j<line.length ; j++){
            let pointObject = line[j];
            if(pointObject.id == "md"){
                ctx.strokeStyle = pointObject.strokeStyle;
                ctx.lineWidth = pointObject.lineWidth;
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
        db.push(line);
    }
}

function undoLine(){
    // pop latest line from the db
    // clear Canvas
    // redraw lines();
    if(db.length){
        let latestLine = db.pop();
        redoDB.push(latestLine);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        redrawLines();
        console.log(db);
    }
}


// Function redrawLines can be invoked on the window resize event also so that the canvas dont get clear everytime a window resizes
function redrawLines(){
    for(let i=0 ; i<db.length ; i++){
        let line = db[i];

        for(let j=0 ; j<line.length ; j++){
            let pointObject = line[j];
            if(pointObject.id == "md"){
                ctx.strokeStyle = pointObject.strokeStyle;
                ctx.lineWidth = pointObject.lineWidth;
                ctx.beginPath();
                ctx.moveTo(pointObject.x , pointObject.y);
            }
            else{
                ctx.lineTo(pointObject.x , pointObject.y);
                ctx.stroke();
            }
        }
    }
}