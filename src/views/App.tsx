import style from "./App.module.scss"

import React, { useCallback, useState } from "react"
import { Field, WinCells, Direction, Figures } from "types/types"
import Button from "packages/Button"
import Board from "components/Board"
import CurrentFigure from "components/CurrentFigure"
import Controls from "components/Controls"

const DEFAULT_SIZE = 3

function App() {
    const [winCells, setWinCells] = useState({} as WinCells)
    const [direction, setDirection] = useState<Direction>("none")
    const [figure, setFigure] = useState<Figures>("X")
    const [field, setField] = useState({} as Field)
    const [xSize, setXSize] = useState(DEFAULT_SIZE)
    const [ySize, setYSize] = useState(DEFAULT_SIZE)
    const [goal, setGoal] = useState(DEFAULT_SIZE)

    const onXSizeChange = (value: number) => {
        setXSize(value)
        onReset()
    }

    const onYSizeChange = (value: number) => {
        setYSize(value)
        onReset()
    }

    const onGoalChange = (value: number) => {
        setGoal(value)
        onReset()
    }

    const onReset = useCallback(() => {
        setField({})
        setWinCells({})
        setFigure("X")
        setDirection("none")
    }, [])

    return (
        <div>
            <div className={style.wrapper}>
                <Controls
                    xSize={xSize}
                    ySize={ySize}
                    goal={goal}
                    onXSizeChange={onXSizeChange}
                    onYSizeChange={onYSizeChange}
                    onGoalChange={onGoalChange}
                />
                <CurrentFigure figure={figure} />
                <Board
                    xSize={xSize}
                    ySize={ySize}
                    goal={goal}
                    field={field}
                    figure={figure}
                    winCells={winCells}
                    direction={direction}
                    onReset={onReset}
                    setFigure={setFigure}
                    setDirection={setDirection}
                    setWinCells={setWinCells}
                    setField={setField}
                />
                <Button onClick={onReset} text={"Reset"} />
            </div>
        </div>
    )
}

export default App
