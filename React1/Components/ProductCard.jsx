function ProductCard({product,addToCart}){
    return(
        <div className="product">
            <img
                src={product.image}
                alt={product.name}
                width="200"
            />
            <h3>{product.name}</h3>
            <p>Price:{product.price}</p>
            <button onClick={()=>addToCart(product)}>Add to cart</button>
        </div>
    );
}
export default ProductCard