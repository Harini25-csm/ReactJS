import Text from './Class.jsx'
function Child(){
    return(
        <div>
            <hr/>
            <h2>Child component</h2>
            <p>I am a child component</p>
        </div>
    );
}
function Parent(){
    return(
        <div><hr/>
            <h2>Parent component</h2>
            <p>I am a parent component</p>
            <Text/>
            <Child/>
        </div>
    );
}
export default Parent;