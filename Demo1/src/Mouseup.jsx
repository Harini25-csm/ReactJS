function Up(){
    return(
        <div>
            <hr/>
            <button onMouseUp={()=>alert("This is mouse up!")}>mouseup</button>
        </div>
    );
}
export default Up