import { useState,useEffect } from "react";
function Ef(){
    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    useEffect(()=>{
        document.title=`Count:${count}`;
        console.log(`Count Updsted to: ${count}`);
        document.title=`Count1:${count1}`;
        console.log(`Count Updsted to: ${count1}`);
    },[count,count1]);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Count1:{count1}</h1>
            <button onClick={()=>setCount1(count1-1)}>Decrement</button>
        </div>
    );
}
export default Ef