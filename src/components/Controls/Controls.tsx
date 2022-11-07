import style from "./controls.module.scss"

import React, { ChangeEvent } from "react"

interface Props {
    xSize: number
    ySize: number
    goal: number
    onReset: VoidFunction
    onXSizeChange(event: ChangeEvent<HTMLInputElement>): void
    onYSizeChange(event: ChangeEvent<HTMLInputElement>): void
    onGoalChange(event: ChangeEvent<HTMLInputElement>): void
}

const Controls = ({
    xSize,
    ySize,
    goal,
    onReset,
    onXSizeChange,
    onYSizeChange,
    onGoalChange,
}: Props) => {
    return (
        <div className={style.controls}>
            <button onClick={onReset}>RESET</button>
            <div>
                X:{xSize}
                <input
                    type="range"
                    min="3"
                    max="9"
                    step="1"
                    value={xSize}
                    className={style.input}
                    onChange={onXSizeChange}
                />
            </div>
            <div>
                Y:{ySize}
                <input
                    type="range"
                    min="3"
                    max="9"
                    step="1"
                    value={ySize}
                    className={style.input}
                    onChange={onYSizeChange}
                />
            </div>
            <div>
                Goal: {goal}
                <input
                    type="range"
                    min="3"
                    max="9"
                    step="1"
                    value={goal}
                    className={style.input}
                    onChange={onGoalChange}
                />
            </div>
        </div>
    )
}

export default Controls
