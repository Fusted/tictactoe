type Figures = "O" | "X"

type Direction =
    | "horizontal"
    | "vertical"
    | "l-diagonal"
    | "r-diagonal"
    | "none"

type Field = {
    [k in string]: Figures
}

type WinCells = {
    [k in string]: boolean
}

type WinPosition = {
    cells: WinCells
    diraction: Direction
}

type Position = {
    x: number
    y: number
}

export {
    type Figures,
    type Field,
    type WinCells,
    type Position,
    type Direction,
    type WinPosition,
}
