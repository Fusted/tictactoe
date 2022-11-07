import style from "./range.module.scss"

import React from "react"

interface Props {
    max: number
    min: number
    value: number
    step: number
    label: string
    onChange(value: number): void
}

const CustomRange = ({ max, min, step, value, label, onChange }: Props) => {
    return (
        <div>
            {label}: {value}
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                className={style.input}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onChange(parseInt(event.target.value))
                }
            />
        </div>
    )
}

export { CustomRange as Range }
