import { useState } from "react";
function Ter() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    function handleLogin() {
        setIsLoggedIn(true);
    }
    function handleLogout() {
        setIsLoggedIn(false);
    }
    return (
        <div>
            <hr/>
            <h2>Ternary Operator Demo</h2>
            <form>
                <button type="button" onClick={handleLogin}>Login</button>
                <button type="button" onDoubleClick={handleLogout}>Logout</button>
            </form>
            {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
        </div>
    );
}
export default Ter;
