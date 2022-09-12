const BOX = document.querySelector("#drawing-space")
const BOXsize = BOX.clientWidth
const sizeOutcome = document.querySelector("#size-display")
const slider = document.querySelector("#grid-size")
let output = document.querySelector("#size-display")
const resetBtn=document.querySelector("#reset-button")

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
}



 