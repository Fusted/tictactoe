import style from "./board.module.scss"

import React, { useCallback, useState } from "react"
import Cell from "components/Cell"
import { Field, Position, Targets, WinCells } from "types/types"
import { getSum } from "./utils"

const X_SIZE = 3
const Y_SIZE = 3
const GOAL = 3

const Board = () => {
    const [currentValue, setCurrentValue] = useState<Targets>("X")
    const [winCells, setWinCells] = useState({} as WinCells)
    const [field, setField] = useState({} as Field)

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

            const win = getSum(position, currentValue, newField, GOAL)

            if (win) {
                setWinCells(win)
            }
        },
        [currentValue, field, winCells]
    )

    const onResetClick = useCallback(() => {
        setField({})
        setWinCells({})
    }, [])

    const renderRows = () => {
        const rows = []
        for (let y = 0; y < Y_SIZE; y++) {
            const row = []
            for (let x = 0; x < X_SIZE; x++) {
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

    return (
        <div className={style.board}>
            {renderRows()}
            <button onClick={onResetClick}>RESET</button>
        </div>
    )
}

export default Board
