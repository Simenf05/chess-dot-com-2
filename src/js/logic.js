function checkMove(piece, startCoord, endCoord) {
    
    

    if (piece[1] === "p") {
        return piece[0] === "b" ? blackPawnMove(startCoord, endCoord) : whitePawnMove(startCoord, endCoord)
    }
    else if (piece[1] === "r") {
        return 
    }

}

function blackPawnMove(startCoord, endCoord) {
    if (!(startCoord[0] === endCoord[0])) {return false}
    if (startCoord[1] === "7" && endCoord[1] == "5") {return true}
    return Number(startCoord[1]) - 1 === Number(endCoord[1])
}

function whitePawnMove(startCoord, endCoord) {
    if (!(startCoord[0] === endCoord[0])) {return false}
    if (startCoord[1] === "2" && endCoord[1] == "4") {return true}
    return Number(startCoord[1]) + 1 === Number(endCoord[1])
}

function rookMove(startCoord, endCoord) {

}