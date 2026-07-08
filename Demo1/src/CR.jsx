function LogIn(){
    const admin=true;
    const admin1=false;
    const admin2=" ";
    const admin3="Harini";
    return(
        <div>
            <hr/>
            {admin&&<h1>Hello</h1>}
            {admin1||<h1>Hii</h1>}
            <h2>{admin2||"Hii1"}</h2>
            <h2>{admin2&&"Hi2"}</h2>
            <h2>{admin3||"Hi3"}</h2>
            <h2>{admin3&&"Hi4"}</h2>
        </div>
    );
}
export default LogIn