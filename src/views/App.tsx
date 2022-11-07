import style from "./App.module.scss"

import React, { useCallback, useState } from "react"
import Board from "components/Board"
import { Field, WinCells } from "types/types"
import Controls from "components/Controls"
import Button from "packages/Button"

const X_SIZE = 3
const Y_SIZE = 3
const GOAL = 3

function App() {
    const [winCells, setWinCells] = useState({} as WinCells)
    const [field, setField] = useState({} as Field)
    const [xSize, setXSize] = useState(X_SIZE)
    const [ySize, setYSize] = useState(Y_SIZE)
    const [goal, setGoal] = useState(GOAL)

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
                <Board
                    xSize={xSize}
                    ySize={ySize}
                    goal={goal}
                    field={field}
                    setWinCells={setWinCells}
                    setField={setField}
                    winCells={winCells}
                />
                <Button onClick={onReset} text={"Reset"} />
            </div>
        </div>
    )
}

export default App
