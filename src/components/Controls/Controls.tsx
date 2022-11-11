import style from "./controls.module.scss"

import React from "react"
import Range from "packages/Range"

const SIZE_MIN = 3
const SIZE_MAX = 9
const STEP = 1

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
                label="X"
                min={SIZE_MIN}
                max={SIZE_MAX}
                step={STEP}
                value={xSize}
                onChange={onXSizeChange}
            />
            <Range
                label="Y"
                value={ySize}
                onChange={onYSizeChange}
                min={SIZE_MIN}
                max={SIZE_MAX}
                step={STEP}
            />
            <Range
                label="Goal"
                min={SIZE_MIN}
                max={SIZE_MAX}
                step={STEP}
                value={goal}
                onChange={onGoalChange}
            />
        </div>
    )
}

export default React.memo(Controls)
