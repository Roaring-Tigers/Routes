import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    
  return (
    <div>

        <h1>Products</h1>
        <p>Checkout the list of products</p>
        {/* <button onClick={()=>navigate("/products/apple")}>Apple1</button>
        <button onClick={()=>navigate("/apple")}>Apple2</button>
        <button onClick={()=>navigate("apple")}>Apple3</button> */}
         <button onClick={()=>navigate("")}>Apple</button>
        <button onClick={()=>navigate("samsung")}>Samsung</button>
         <button onClick={()=>navigate("nokia")}>Nokia</button>
        <Outlet />

    </div>
  );
}

export default Products;