let currentMode = 0

const BOX = document.querySelector("#drawing-space")
const BOXsize = BOX.clientWidth
const sizeOutcome = document.querySelector("#size-display")
const slider = document.querySelector("#grid-size")
let output = document.querySelector("#size-display")
const resetBtn=document.querySelector("#reset-button")
const rainbowLetters=document.querySelectorAll('.rainbow-letter')
const rainbowWrapper=document.querySelector("#rainbow-mode")
const colorPicker = document.querySelector("#color-chooser")
rainbowWrapper.addEventListener('click',changeLetterColor)



let mouseDown=false
BOX.addEventListener('mousedown',function(e){
    e.preventDefault()
    mouseDown=true
})
BOX.addEventListener('mouseup',function(e){
    e.preventDefault()
    mouseDown=false
})

/* DISPLAYING SIZE */
output.innerHTML=slider.value
drawGrid(slider.value)
slider.oninput=function(){
    
    deleteGrid()
    output.innerHTML=this.value
    drawGrid(this.value)
}
/* DELETING GRID */
function deleteGrid(){
     let toDelete = document.querySelectorAll(".cell")
     toDelete.forEach(element=>{
        BOX.removeChild(element)
     })
}
resetBtn.addEventListener('click', ()=>{
    deleteGrid()
    drawGrid(slider.value)
})
/* DRAWING GRID */
function drawGrid(size){
    const cell = document.createElement('div')
    cell.classList.add('cell')
    BOX.style.gridTemplateColumns=`repeat(${size},1fr)`
    for(let i=0;i<size*size;i++){
        let clonedCell=cell.cloneNode(false)
        BOX.appendChild(clonedCell)
       
    }
    addListeners()
    
}

/* ----------------------------- */
/* DRAWING ON THE BOARD */
function addListeners(){
    
    let cells=document.querySelectorAll('.cell')
    cells.forEach((cell)=>{
    cell.addEventListener('mousedown',changeColor)
    cell.addEventListener('mouseover',changeColor)
    function changeColor(e){
        e.preventDefault()
        if(e.type==='mouseover' && !mouseDown){
            
            return
        } 
        if(currentMode==0) cell.style.backgroundColor=getCurrenColor()
        else if(currentMode==1) cell.style.backgroundColor=randomColor()
        
        
        
        
    }
})
}


/* RAINBOW MODE */

/*0-black  1-rainbow */



function changeLetterColor(){
    if(currentMode==0){
        console.log(currentMode)
    rainbowLetters.forEach((letter)=>{
        letter.style.color=randomColor()
        
    })
    currentMode=1
    }
else if(currentMode==1){
    
    rainbowLetters.forEach((letter)=>{
        letter.style.color='black'
        
    })
    currentMode=0
}
}
function randomColor(){
    
    
    return rgb(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256))
}

function rgb(r,g,b){
    return `rgb(${Math.floor(r)},${Math.floor(g)},${Math.floor(b)})`
}

/* COLOR */
function getCurrenColor(){
    return colorPicker.value
   
}

