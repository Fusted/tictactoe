import style from "./controls.module.scss"

import React from "react"
import Range from "packages/Range"

interface Props {
    xSize: number
    ySize: number
    goal: number
    onXSizeChange(value: number): void
    onYSizeChange(value: number): void
    onGoalChange(value: number): void
}

const Controls = ({
    xSize,
    ySize,
    goal,
    onXSizeChange,
    onYSizeChange,
    onGoalChange,
}: Props) => {
    return (
        <div className={style.controls}>
            <Range
                label="x"
                min={3}
                max={9}
                step={1}
                value={xSize}
                onChange={onXSizeChange}
            />
            <Range
                label="Y"
                value={ySize}
                onChange={onYSizeChange}
                step={1}
                max={9}
                min={3}
            />
            <Range
                label="Goal"
                min={3}
                max={9}
                step={1}
                value={goal}
                onChange={onGoalChange}
            />
        </div>
    )
}

export default Controls
