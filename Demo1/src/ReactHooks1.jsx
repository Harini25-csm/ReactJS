import { useState } from "react"
function Navbar({ cartCount }) {
    return (
        <div>
            <h2>Cart items: {cartCount}</h2>
            <hr />
        </div>
    )
}
function Product({ addToCart }) {
    return (
        <div>
            <h2>Laptop</h2>
            <p>Price: 50,000 RS</p>
            <hr />
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}
function Cart({ cartCount }) {
    return (
        <div>
            <h3>Shopping Cart</h3>
            {cartCount===0?(
                <p>you cart is empty.</p>
            ):(
                <p>You have {cartCount} Laptop(s) in your cart.</p>
            )}
            <hr/>
        </div>
    );
}
function Checkout({ cartCount }) {
    return (
        <div>
            <h3>Checkout total items: {cartCount}</h3>
        </div>
    )
}
function ReactHooks1() {
    const [cartCount, setCartCount] = useState(0)
    const addToCart = () => {
        setCartCount((prevCount) => prevCount + 1)
    }
    return (
        <div>
            <Navbar cartCount={cartCount} />
            <Product addToCart={addToCart} />
            <Cart cartCount={cartCount} />
            <Checkout cartCount={cartCount} />
        </div>
    )
}
export default ReactHooks1