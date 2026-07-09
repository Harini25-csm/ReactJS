import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    return(
        <div
            style={{
                border:"4px solid black",
                borderRadius:"10px",
                padding:"15px",
                margin:"15px",
                width:"300px"
            }}>

            <h2>Count:{count}</h2>
            <button onClick={()=>setCount(count+1)}>Increment</button><br/><hr/>
            <button onClick={()=>setCount(count-1)}>Decrement</button><br /><hr/>
            <button onClick={()=>setCount(0)}>Reset</button>
        </div>
    );
}
export default Counter