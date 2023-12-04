
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Home</h1>
        <p>This is the home page</p>

        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Forward</button>
        </div>
    );
}

export default Home;