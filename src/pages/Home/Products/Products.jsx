import { useEffect, useState } from "react";
import SingleProducts from "../SingleProducts/SingleProducts";


const Products = () => {

    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <>
            <div className="text-center mt-8 mb-6">
               <h4 className="text-orange-500 text-xl ">Popular Products</h4> 
               <h2 className="text-3xl">Browse Our Products</h2> 
               <p className="text-slate-400"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laborum quaerat beatae eos tempore! Sit debitis labore id quia optio.</p>   
           </div>  
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {
                    products.map(product=><SingleProducts
                    key={product._id}
                    product = {product}
                    ></SingleProducts>)
                }
           </div>
           <div className="text-center mt-6 mb-6">
           <button className="btn btn-primary">Show More Products</button>
           </div>
        </>
    );
};

export default Products;