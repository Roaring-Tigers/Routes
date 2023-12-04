
import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div>
        <h1>About</h1>
        <p>This is the About page</p>

        <button onClick={()=>navigate(-1)}>Back</button>
        <button onClick={()=>navigate(1)}>Forward</button>
        </div>
    );
}

export default About;