import style from "./board.module.scss"

import React, { useCallback, useState } from "react"
import Cell from "components/Cell"
import { Field, Position, Targets, WinCells } from "types/types"
import { getSum } from "./utils"

interface Props {
    xSize: number
    ySize: number
    goal: number
    winCells: WinCells
    field: Field
    setWinCells(winCells: WinCells): void
    setField(field: Field): void
}

const Board = ({
    xSize,
    ySize,
    goal,
    winCells,
    field,
    setWinCells,
    setField,
}: Props) => {
    const [currentValue, setCurrentValue] = useState<Targets>("X")

    const onCellClick = useCallback(
        (position: Position, value?: Targets) => {
            if (value || Object.values(winCells).length) {
                return
            }
            const newValue = currentValue === "X" ? "O" : "X"
            const newField = {
                ...field,
                [`${position.x},${position.y}`]: currentValue,
            }
            setField(newField)
            setCurrentValue(newValue)

            const win = getSum(position, currentValue, newField, goal)

            if (win) {
                setWinCells(win)
            }
        },
        [currentValue, field, goal, setField, setWinCells, winCells]
    )

    const renderRows = () => {
        const rows = []
        for (let y = 0; y < ySize; y++) {
            const row = []
            for (let x = 0; x < xSize; x++) {
                const position = `${x},${y}`
                row.push(
                    <Cell
                        key={position}
                        target={field[position]}
                        onCellClick={onCellClick}
                        position={{ y, x }}
                        isWin={!!winCells[position]}
                    />
                )
            }
            rows.push(row)
        }

        return rows.map((row, index) => {
            return (
                <div className={style.row} key={index}>
                    {row}
                </div>
            )
        })
    }

    return <div className={style.board}>{renderRows()}</div>
}

export default Board
