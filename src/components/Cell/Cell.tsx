import style from "./cell.module.scss"

import React from "react"
import cn from "classnames"
import { Direction, type Position, type Figures } from "types/types"

interface Props {
    position: Position
    isWin: boolean
    figure?: Figures
    diraction: Direction
    onCellClick: (position: Position, value?: Figures) => void
}

const Cell = ({ position, figure, onCellClick, isWin, diraction }: Props) => {
    return (
        <div
            onClick={() =>
                onCellClick({ x: position.x, y: position.y }, figure)
            }
            className={cn(
                style.cell,
                figure === "O" ? style.red : style.green,
                isWin && style[diraction]
            )}
        >
            {figure}
        </div>
    )
}

export default Cell
