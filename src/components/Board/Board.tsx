import style from "./board.module.scss"

import React, { useCallback, useState } from "react"
import Cell from "components/Cell"
import { Field, Position, Targets, WinCells, Direction } from "types/types"
import { getWinPosition } from "./utils"

interface Props {
    xSize: number
    ySize: number
    goal: number
    direction: Direction
    winCells: WinCells
    field: Field
    setDirection(direction: Direction): void
    setWinCells(winCells: WinCells): void
    setField(field: Field): void
}

const Board = ({
    xSize,
    ySize,
    goal,
    winCells,
    direction,
    setDirection,
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

            const { cells, diraction } = getWinPosition(
                position,
                currentValue,
                newField,
                goal
            )
            console.log(cells)
            if (cells) {
                setWinCells(cells)
                setDirection(diraction)
            }
        },
        [
            currentValue,
            field,
            goal,
            setField,
            setWinCells,
            setDirection,
            winCells,
        ]
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
                        diraction={direction}
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
