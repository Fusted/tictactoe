import styles from "./currentFigure.module.scss"

import React from "react"
import { Figures } from "types/types"

interface Props {
    figure: Figures
}

const CurrentFigure = ({ figure }: Props) => {
    return <div className={styles.figure}>CurrentFigure: {figure}</div>
}

export { CurrentFigure }
