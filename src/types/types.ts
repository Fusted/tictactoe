type Targets = "O" | "X"

type Direction =
    | "horizontal"
    | "vertical"
    | "l-diagonal"
    | "r-diagonal"
    | "none"

type Field = {
    [k in string]: Targets
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
    type Targets,
    type Field,
    type WinCells,
    type Position,
    type Direction,
    type WinPosition,
}
