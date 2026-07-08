function Student(props){
    return(
        <div>
            <h2>Child Component</h2>
            <p>Name:{props.name}</p>
            <p>Parent:{props.place}</p>
        </div>
    );
}
function App(){
    return(
        <div>
            <h2>Parent Component</h2>
            <Student name="Tom" place="mpl"/>
        </div>
    );
}
export default App