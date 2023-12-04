import React,{useState} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Navbar from "./Pages/Navbar";
import "./App.css";
import {Routes, Route} from "react-router-dom";

// pages2 import: 
import Products from "./Pages2/Products";
import Samsung from "./Pages2/Samsung";
import Apple from "./Pages2/Apple";
import Nokia from "./Pages2/Nokia";

function App() {
    const [count, setCount] = useState(0);



  return (
    <div>
          <Routes>
              <Route path="/products" element={ <Products />}> 
                  <Route path="" element={ <Apple />}/>
                  <Route path="samsung" element={ <Samsung />}/>  
                  <Route path="nokia" element={ <Nokia />}/>
              </Route>
              <Route path="/apple" element={ <Apple />}/>
          </Routes>
       
    </div>
  );
}

export default App;
















{/* <Navbar />

<Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/about" element={ <About />}/>
      <Route path="/blog" element={ <Blog count={count} setCount={setCount}/>}/>
      <Route path="/contact" element={ <Contact count={count}/>}/>
</Routes> */}