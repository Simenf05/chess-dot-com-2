function pawnMove(startCoord, endCoord) {
    if (startCoord[0] === endCoord[0]) {return false}
    if (startCoord[1] === "2" && endCoord[1] == "4") {return true}
    return Number(startCoord[1]) + 1 === endCoord[1]
}

function rookMove(startCoord, endCoord) {

}