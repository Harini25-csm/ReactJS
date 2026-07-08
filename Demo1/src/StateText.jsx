import { useState } from "react";
function Text(){
    const [text,setText]=useState("Hello");
    return(
        <div
            style={{
                border:"4px solid black",
                borderRadius:"10px",
                padding:"15px",
                margin:"15px",
                width:"300px"
            }}>
            <h2>Text:{text}</h2>
            <button onClick={()=>setText("Hi! I'm Harini")}>Button</button><br/><hr/>
            <button onClick={()=>setText("Hello")}>Reset</button>
        </div>
    );
}
export default Text