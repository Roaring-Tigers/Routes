
import React from "react";
import { useNavigate } from "react-router-dom";

const Blog = ({count,setCount}) => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>Blog</h1>
        <p>This is the Blog page</p>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Forward</button>
        </div>
    );
}

export default Blog;