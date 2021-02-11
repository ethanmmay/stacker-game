
let squareStart = 4

function createGrid() {
    let template = ""
    for (let i = 1; i < 85; i++) {
        template += `
            <div class="stacker-square" id="stackerSquare${i}">${i}</div>
        `
    }
    document.getElementById("gameGrid").innerHTML = template
    let timer = setTimeout(gameUpdate(), 1000)
}


function gameUpdate() {
    // keep falling square falling
    let i = squareStart
    document.getElementById(`stackerSquare${i}`).classList.remove("square-highlight")
    document.getElementById(`stackerSquare${i+7}`).classList.add("square-highlight")
    i+=7
}


createGrid()