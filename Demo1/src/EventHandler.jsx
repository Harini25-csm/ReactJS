function App2() {
    function handleSubmit(event){
        event.preventDefault();
        alert("Form submitted!");
    }
    return(
        <form onSubmit={handleSubmit}><hr/>
            <input type="text"/>
            <button type="submit">Submit</button>
        </form>
    );
}
export default App2