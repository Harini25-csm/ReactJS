import Ar from './Arrow.jsx';
function Ex(){
    const x=10;
    let student={
            name:"harini",
            age:19
        };
    const Ar1=()=>{
        return "Ar1";
    }
    return(
        <div>
            <h1>value: {x}</h1>
            <h1>name: {student.name}, age: {student.age}</h1>
            <h1>ReactJS {Ar1()}</h1>
            <h1>{Ar(10,20)}</h1>
        </div>
    );
    
}
export default Ex
