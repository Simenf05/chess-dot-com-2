const rootEl = document.querySelector("#root")

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const dims = [8, 8]
const start_grid = [
    ["wr", "wn", "wb", "wq", "wk", "wb", "wn", "wr"],
    ["wp", "wp", "wp", "wp", "wp", "wp", "wp", "wp"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["bp", "bp", "bp", "bp", "bp", "bp", "bp", "bp"],
    ["br", "bn", "bb", "bq", "bk", "bb", "bn", "br"],
]

let lastMove = null
let selectedCoord = null

function makeGrid(dims) {

    for (let i = dims[0]; i > 0; i--) {
        const start_color = i % 2 === 0
        const box = document.createElement("div")
        box.id = "ROW" + String(i);
        box.className = "ROW"

        for (let j = 0; j < dims[1]; j++) {
            
            const color = start_color ? !(j % 2 === 0) : j % 2 === 0

            const innerbox = document.createElement("div")
            innerbox.id = `${alphabet[j]}${i}`
            innerbox.className = "BOX"
            innerbox.onclick = (e) => clickBox(e)

            innerbox.className += color ? " BLACK" : " WHITE"
            

            box.appendChild(innerbox)
        }

        rootEl.appendChild(box)
    }
}

const setPiece = (piece, coord) => {
    const box = document.getElementById(coord)
    box.innerHTML = `<img src="bilder/${piece}.png">`
    box.setAttribute("data-value", piece)
}

const clearCoord = (coord) => {
    const box = document.getElementById(coord)
    box.innerHTML = ""
    box.setAttribute("data-value", "")
}


function setUpPieces(start_grid) {

    start_grid.forEach((row, i) => {
        row.forEach((value, j) => {

            value ? setPiece(value, `${alphabet[j]}${i + 1}`) : clearCoord(`${alphabet[j]}${i + 1}`)
        
        });
    });
}


const unselect = (selectedCoord) => {
    const selected = document.getElementById(selectedCoord)
    let newClassName = ""

    selected.classList.forEach((classname, i) => {
        if (classname === "selected") {return}

        newClassName += i === 0 ? `${classname}` : ` ${classname}`
    });

    selected.className = newClassName
}



function clickBox(e) {

    if (!(e.target.getAttribute("data-value"))) {
        if (selectedCoord === null) {return}
        movePiece(e, selectedCoord)
        selectedCoord = null
        return
    }

    


    if (!(selectedCoord === null)) {
        unselect(selectedCoord)
    }   


    e.target.className += " selected"
    selectedCoord = e.target.id
}

function movePiece(e, selectedCoord) {
    
    if (pawnMove(selectedCoord, e.target.id)) {
        console.log("hei");
        return
    }
    const selectedPiece = document.getElementById(selectedCoord)
    setPiece(selectedPiece.getAttribute("data-value"), e.target.id)
    clearCoord(selectedCoord)
    unselect(selectedCoord)

}



makeGrid(dims)
setUpPieces(start_grid)
