
const okBtn=document.querySelector('#ok-button')
okBtn.addEventListener('click',()=>{
    deleteGrid()
    const size=document.querySelector("#grid-size").value
    drawGrid(size)
})
function deleteGrid(){
     let toDelete = document.querySelectorAll(".cell")
     toDelete.forEach(element=>{
        BOX.removeChild(element)
     })
}

const BOX = document.querySelector("#drawing-space")
const BOXsize = BOX.clientWidth

function drawGrid(size){
    
    const cell = document.createElement('div')
    cell.classList.add('cell')

   // let borderSize=BOX.style.borderWidth
    

    var cellSize=(BOXsize-(2*2*size))/(size)
    console.log('BOX SIZE:',BOXsize)
    console.log('CELL SIZE:',cellSize)
    cell.style.width=`${cellSize}px`
    cell.style.height=`${cellSize}px`
    
    for(let i=0;i<size*size;i++){
        let clonedCell=cell.cloneNode(false)
        BOX.appendChild(clonedCell)
       // console.dir('border size:',borderSize)
    }
        
        

}


 