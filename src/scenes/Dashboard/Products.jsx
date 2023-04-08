import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch("https://bootstrap-dashboard-server.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[])
  return (
    <div className="custom-bg-primary-dark text-white dashboard-outlet-item">
      <div className="mb-2">
        <h3 className="fs-3 m-0 p-0">PRODUCTS</h3>
        <small className="">See your list of products.</small>
      </div>
      <div className="row g-3">
        {
          products?.map(product=><ProductCard key={product._id} product={product}></ProductCard>)
        }
      </div>
    </div>
  );
}

export default Products;
