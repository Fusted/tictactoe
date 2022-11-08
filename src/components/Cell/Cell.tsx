import style from "./cell.module.scss"

import React from "react"
import cn from "classnames"
import { Direction, type Position, type Targets } from "types/types"

interface Props {
    position: Position
    isWin: boolean
    target?: Targets
    diraction: Direction
    onCellClick: (position: Position, value?: Targets) => void
}

const Cell = ({ position, target, onCellClick, isWin, diraction }: Props) => {
    return (
        <div
            onClick={() =>
                onCellClick({ x: position.x, y: position.y }, target)
            }
            className={cn(
                style.cell,
                target === "O" ? style.red : style.green,
                isWin && style[diraction]
            )}
        >
            {target}
        </div>
    )
}

export default Cell
