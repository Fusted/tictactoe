import style from "./board.module.scss"

import React, { useCallback } from "react"
import Cell from "components/Cell"
import { Field, Position, Figures, WinCells, Direction } from "types/types"
import { getWinPosition } from "./utils"

interface Props {
    xSize: number
    ySize: number
    goal: number
    figure: Figures
    direction: Direction
    winCells: WinCells
    field: Field
    onReset: VoidFunction
    setFigure(figure: Figures): void
    setDirection(direction: Direction): void
    setWinCells(winCells: WinCells): void
    setField(field: Field): void
}

const Board = ({
    xSize,
    ySize,
    goal,
    figure,
    winCells,
    direction,
    field,
    onReset,
    setFigure,
    setWinCells,
    setField,
    setDirection,
}: Props) => {
    const onCellClick = useCallback(
        (position: Position, value?: Figures) => {
            if (value || Object.values(winCells).length) {
                onReset()
                return
            }
            const newFigure = figure === "X" ? "O" : "X"
            const newField = {
                ...field,
                [`${position.x},${position.y}`]: figure,
            }
            setField(newField)
            setFigure(newFigure)

            const { cells, diraction } = getWinPosition(
                position,
                figure,
                newField,
                goal
            )

            if (cells) {
                setWinCells(cells)
                setDirection(diraction)
            }
        },
        [
            winCells,
            figure,
            field,
            setField,
            setFigure,
            goal,
            onReset,
            setWinCells,
            setDirection,
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
                        figure={field[position]}
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
