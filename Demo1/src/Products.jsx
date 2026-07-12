function Product(props){
    return(
        <div
            style={{
                border:"4px solid black",
                borderRadius:"10px",
                padding:"15px",
                margin:"15px",
                width:"300px"
            }}>
            <h2>Props</h2>
            <p><strong>Name:</strong>{props.name}</p>
            <p><strong>Brand:</strong>{props.brand}</p>
            <p><strong>Price:</strong>{props.price}</p>
            <p><strong>Rating:</strong>{props.rating}</p>
            <button onClick={()=>alert("product added to cart")}>Add to cart</button>
        </div>
    );
}
function App1(){
    return(
        <div>
            <hr/>
            <h1>Online shopping store</h1>
            <Product 
            name="laptop"
            brand="dell"
            price="50000"
            rating="4.5"
            button="Add to cart"
            />
        </div>
    );
}
export default App1