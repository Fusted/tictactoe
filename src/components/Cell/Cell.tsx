import style from "./cell.module.scss"

import React from "react"
import cn from "classnames"
import { type Position, type Targets } from "types/types"

interface Props {
    position: Position
    isWin: boolean
    target?: Targets
    onCellClick: (position: Position, value?: Targets) => void
}

const Cell = ({ position, target, onCellClick, isWin }: Props) => {
    return (
        <div
            onClick={() =>
                onCellClick({ x: position.x, y: position.y }, target)
            }
            className={cn(style.cell, isWin && style.win)}
        >
            {target}
        </div>
    )
}

export default Cell
