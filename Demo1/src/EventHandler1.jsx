function App3() {
    function handleCopy(event){
        event.preventDefault();
        alert("Content copied");
    }
    function handleCut(event){
        event.preventDefault();
        alert("Cutted content");
    }
    function handlePaste(event){
        event.preventDefault();
        alert("content pasted");
    }
    return(
        <div>
            <hr/>
            <input type="text" onCopy={handleCopy} onCut={handleCut} onPaste={handlePaste}/>
        </div>
    );
}
export default App3