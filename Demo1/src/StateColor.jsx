import { useState } from "react";
function Color(){
    const [color,setColor]=useState("red");
    return(
        <div
            style={{
                border:"4px solid black",
                borderRadius:"10px",
                padding:"15px",
                margin:"15px",
                width:"300px",
                //backgroundColor:color
            }}>
            <h1 style={{color:color}}>Hi</h1>
            <button 
                onClick={()=>setColor("orange")}
                onDoubleClick={()=>setColor("red")}
            >
                Click/DoubleClick
            </button>
        </div>
    );
}
export default Color