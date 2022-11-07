import style from "./App.module.scss"

import React, { ChangeEvent, useCallback, useState } from "react"
import Board from "components/Board"
import { Field, WinCells } from "types/types"
import Controls from "components/Controls"

const X_SIZE = 3
const Y_SIZE = 3
const GOAL = 3

const filterNumbers = (str: string): number => {
    return parseInt(str.split(/ /)[0].replace(/[^\d]/g, ""))
}

function App() {
    const [winCells, setWinCells] = useState({} as WinCells)
    const [field, setField] = useState({} as Field)
    const [xSize, setXSize] = useState(X_SIZE)
    const [ySize, setYSize] = useState(Y_SIZE)
    const [goal, setGoal] = useState(GOAL)

    const onXSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = filterNumbers(event.target.value)

        setXSize(value)
        onReset()
    }

    const onYSizeChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = filterNumbers(event.target.value)

        setYSize(value)
        onReset()
    }

    const onGoalChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        if (value < GOAL) return
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
                    onReset={onReset}
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
            </div>
        </div>
    )
}

export default App
