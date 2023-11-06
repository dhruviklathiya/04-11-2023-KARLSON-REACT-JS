import React from "react"
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import About_us_2 from "./About_us_2";
import Blog_right from "./Blog_right";
import Contact from "./Contact";
import Faq from "./Faq";
import Projectdetails from "./Projectdetails";
import Service_datails from "./Service_datails";
import Home from "./Home";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/about_us_2" exact element={<About_us_2/>}/>
      <Route path="/blogright" exact element={<Blog_right/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/faq" exact element={<Faq/>}/>
      <Route path="/projectdetail" exact element={<Projectdetails/>}/>
      <Route path="/servicedetails" exact element={<Service_datails/>}/>
      {/* Change every component header to header of index */}
      <Route />
    </Routes>
    </>
    );
}

export default App;