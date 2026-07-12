import laptop from "../assets/Laptop.jpg";
import bracelet from "../assets/bracelet.jpg";
import kurti from "../assets/kurti.jpg";
import ProductCard from "./ProductCard"
function ProductList({addToCart}){
    const products=[
        {id:1,name:"Laptop",price:70000,image:laptop},
        {id:2,name:"Bracelet",price:500,image:bracelet},
        {id:3,name:"Kurti",price:1200,image:kurti}
    ];
    return(
        <div>
            <h2>Products</h2>
            <div className="product-list-row">
            {products.map((product) => (
            <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
            ))}
            </div>
        </div>
    );
}
export default ProductList