import style from "./App.module.scss"

import React, { useCallback, useState } from "react"
import Board from "components/Board"
import { Field, WinCells } from "types/types"
import Controls from "components/Controls"
import Button from "packages/Button"

const DEFAULT_SIZE = 3

function App() {
    const [winCells, setWinCells] = useState({} as WinCells)
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
