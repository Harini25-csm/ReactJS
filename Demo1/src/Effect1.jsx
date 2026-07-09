import { useEffect, useState } from "react"
function Effect1() {
    const [text, setText] = useState("Hello")
    const [inputValue, setInputValue] = useState("")
    const [keyUpText, setKeyUpText] = useState("")
    const [keyDownText, setKeyDownText] = useState("")
    useEffect(() => {
        document.title = `Text: ${text}`
        console.log(`Text updated to: ${text}`)
        console.log(`KeyUp event text: ${keyUpText}`)
        console.log(`KeyDown event text: ${keyDownText}`)
    }, [text, keyUpText, keyDownText])
    return (
        <div>
            <hr />
            <h2>Text: {text}</h2>
            <button onClick={() => setText("Hi! I'm Harini")}>Update Text</button>
            <button onClick={() => setText("Hello")}>Reset Text</button>
            <div>
                <input 
                    type="text" placeholder="Type and release a key" onChange={(e) => setInputValue(e.target.value)} 
                    onKeyUp={(e) => setKeyUpText(e.target.value)} value={inputValue} />
                <p>Last KeyUp Value: {keyUpText}</p>
            </div>
            <div>
                <input  type="text"  placeholder="Type and press a key"  onKeyDown={(e) => setKeyDownText(e.key)} value={keyDownText} readOnly/>
                <p>Last KeyDown Key: {keyDownText}</p>
            </div>
        </div>
    )
}
export default Effect1


