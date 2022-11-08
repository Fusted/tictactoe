import { Field, Position, Targets, WinCells, WinPosition } from "types/types"

const getHorizontalSum = (
    { x, y }: Position,
    target: Targets,
    field: Field
): WinPosition => {
    let tempX = x
    const winCells = { [`${x},${y}`]: true } as WinCells

    while (field[`${tempX + 1},${y}`] === target) {
        winCells[`${tempX + 1},${y}`] = true
        tempX++
    }

    tempX = x

    while (field[`${tempX - 1},${y}`] === target) {
        winCells[`${tempX - 1},${y}`] = true
        tempX--
    }

    return {
        cells: winCells,
        diraction: "horizontal",
    }
}

const getVeritcalSum = (
    { x, y }: Position,
    target: Targets,
    field: Field
): WinPosition => {
    let tempY = y
    const winCells = { [`${x},${y}`]: true } as WinCells

    while (field[`${x},${tempY + 1}`] === target) {
        winCells[`${x},${tempY + 1}`] = true
        tempY++
    }

    tempY = y

    while (field[`${x},${tempY - 1}`] === target) {
        winCells[`${x},${tempY - 1}`] = true
        tempY--
    }

    return {
        cells: winCells,
        diraction: "vertical",
    }
}

const getDiagonalSum = (
    { x, y }: Position,
    target: Targets,
    field: Field
): WinPosition => {
    let tempY = y
    let tempX = x
    const winCellsF = { [`${x},${y}`]: true } as WinCells
    const winCellsS = { [`${x},${y}`]: true } as WinCells

    while (field[`${tempX + 1},${tempY + 1}`] === target) {
        winCellsF[`${tempX + 1},${tempY + 1}`] = true
        tempX++
        tempY++
    }

    tempY = y
    tempX = x

    while (field[`${tempX - 1},${tempY - 1}`] === target) {
        winCellsF[`${tempX - 1},${tempY - 1}`] = true
        tempX--
        tempY--
    }

    tempY = y
    tempX = x

    while (field[`${tempX - 1},${tempY + 1}`] === target) {
        winCellsS[`${tempX - 1},${tempY + 1}`] = true
        tempX--
        tempY++
    }

    tempY = y
    tempX = x

    while (field[`${tempX + 1},${tempY - 1}`] === target) {
        winCellsS[`${tempX + 1},${tempY - 1}`] = true
        tempX++
        tempY--
    }

    return Object.keys(winCellsF).length > Object.keys(winCellsS).length
        ? { cells: winCellsF, diraction: "r-diagonal" }
        : { cells: winCellsS, diraction: "l-diagonal" }
}

const getWinPosition = (
    { x, y }: Position,
    target: Targets,
    field: Field,
    goal: number
): WinPosition => {
    const verticalSum = getVeritcalSum({ x, y }, target, field)
    const horizontalSum = getHorizontalSum({ x, y }, target, field)
    const diagonalSum = getDiagonalSum({ x, y }, target, field)

    if (Object.keys(verticalSum.cells).length === goal) {
        return verticalSum
    }

    if (Object.keys(horizontalSum.cells).length === goal) {
        return horizontalSum
    }

    if (Object.keys(diagonalSum.cells).length === goal) {
        return diagonalSum
    }
    return { cells: {}, diraction: "none" }
}

export { getWinPosition }
