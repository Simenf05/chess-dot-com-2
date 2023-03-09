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

const setImg = (name, coord) => document.getElementById(coord).innerHTML = `<img src="bilder/${name}.png">`





function setUpPieces(start_grid) {

    start_grid.forEach((row, i) => {
        

        row.forEach((value, j) => {
            
            value ? setImg(value, `${alphabet[j]}${i + 1}`) : ""

        });
    });
}


function clickBox(e) {
    console.log(e.target);
}

function movePiece(e) {

}



makeGrid(dims)
setUpPieces(start_grid)
