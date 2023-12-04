
import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({count}) => {
     

    const navigate = useNavigate();


    return (
        <div>
        <h1>Contact</h1>
        <p>This is the Contact page</p>
        <p>Count: {count}</p>


        {/* <button onClick={()=>navigate("/blog")}>Go to Blog 1</button> */}
        {/* <button onClick={()=>navigate("blog")}>Go to Blog 2</button> */}
        

        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Forward</button>


        </div>

      
    );
}

export default Contact;