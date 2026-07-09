import { useState } from "react"
function RH() {
    const [mode, setMode] = useState("Day")
    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "Day" ? "Night" : "Day"))
    }
    return (
        <div>
            <hr/>
            <h2>Current mode: {mode}</h2>
            <button onClick={toggleMode}>
                Switch to {mode === "Day" ? "Night" : "Day"}
            </button>
        </div>
    )
}
export default RH