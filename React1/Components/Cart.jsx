function Cart({cart = []}){
    let total=0;
    cart.forEach((item)=>{total+=item.price;});
    return(
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length==0?(
            <p>No items added.</p>
            ):(
                cart.map((item,index)=>(
                    <p key={index}>
                        {item.name}-{item.price}
                    </p>
            ))
            )}
            
            <h3>Total:{total}</h3>
        </div>
    );
}
export default Cart