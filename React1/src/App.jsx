import Cart from "../Components/Cart";
import ProductList from "../Components/ProductList";
import "./App.css"
import { useState } from "react";
function App(){
  const [cart,setCart]=useState([]);
  function addToCart(product){
    setCart([...cart,product]);
  }
  return(
    <div className="app">
      <h1>Shopping Cart Application</h1>
      <ProductList addToCart={addToCart}/>
      <Cart cart={cart}/>
    </div>
  );
}
export default App