
const okBtn=document.querySelector('#ok-button')
const BOX = document.querySelector("#drawing-space")
const BOXsize = BOX.clientWidth



okBtn.addEventListener('click',()=>{
    deleteGrid()
    const size=document.querySelector("#grid-size").value
    drawGrid(size)
})


/* DELETING GRID */
function deleteGrid(){
     let toDelete = document.querySelectorAll(".cell")
     toDelete.forEach(element=>{
        BOX.removeChild(element)
     })
}




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



 