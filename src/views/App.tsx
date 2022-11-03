import style from "./App.module.scss"

import React from "react"
import Board from "components/Board"

function App() {
    return (
        <div>
            <div className={style.wrapper}>
                <Board />
            </div>
        </div>
    )
}

export default App
