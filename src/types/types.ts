type Targets = "O" | "X"

type Field = {
    [k in string]: Targets
}

type WinCells = {
    [k in string]: boolean
}

type Position = {
    x: number
    y: number
}


export {type Targets, type Field, type WinCells, type Position}