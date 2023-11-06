import React from 'react'
import "./styles.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
 <header>
<div class="container">
<div class="container aaa">
<div class="logo"><Link to={"/"}><img src="./IMAGES/logo.png" alt="Logo" /></Link></div>
<nav>
<ul>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">Home <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">Digital agency</Link></li>
<li><Link to={"/"}>Marketing agency </Link></li>
<li><Link to="javascript:void(0)">Strategic agency </Link></li>
<li><Link to="javascript:void(0)">Creative agency </Link></li>
<li><Link to="javascript:void(0)">IT startup </Link></li>
<li><Link to="javascript:void(0)">SEO agency </Link></li>
<li><Link to="javascript:void(0)">SaaS Agency </Link></li>
<li><Link to="javascript:void(0)">AI & Machine Learning </Link></li>
<li><Link to="javascript:void(0)">Portfolio Agency </Link></li>
<li><Link to="javascript:void(0)">Cryptocurrency </Link></li>
<li><Link to="javascript:void(0)">Cyber security </Link></li>
<li><Link to="javascript:void(0)">Big Data solution </Link></li>
</ul>
</li>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">About Us <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">About Us Style One</Link></li>
<li><Link to={"/about_us_2"}>About Us Style Two</Link></li>
</ul>
</li>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">Services <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">Services Style One</Link></li>
<li><Link to="javascript:void(0)">Services Style Two </Link></li>
<li><Link to="javascript:void(0)">Services Style Three </Link></li>
<li><Link to={"/servicedetails"}>Services Details </Link></li>
</ul>
</li>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">Projects <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">Projects Style One</Link></li>
<li><Link to="project_projectstyletwo.html">Projects Style Two </Link></li>
<li><Link to="javascript:void(0)">Projects Style Three </Link></li>
<li><Link to="javascript:void(0)">Projects Style Four </Link></li>
<li><Link to="/projectdetail">Projects Details </Link></li>
</ul>
</li>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">Blog <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">Blog Grid</Link></li>
<li><Link to={"/blogright"}>Blog Right Sidebar </Link></li>
<li><Link to="javascript:void(0)">Blog Details </Link></li>
</ul>
</li>
<li class="dropdown">
<Link class="dropdownanchor" href="javascript:void(0)">Pages <i
class="fa-solid fa-chevron-down dropdownanchor"></i> </Link>
<ul class="submenu">
<li><Link to="javascript:void(0)">Features</Link></li>
<li><Link to="javascript:void(0)">Team </Link></li>
<li><Link to="javascript:void(0)">Pricing </Link></li>
<li><Link to="javascript:void(0)">Partner </Link></li>
<li><Link to="javascript:void(0)">Login </Link></li>
<li><Link to="javascript:void(0)">Register </Link></li>
<li><Link to="javascript:void(0)">404 Error Page </Link></li>
<li><Link to={"/faq"}>FAQ</Link></li>
</ul>
</li>
<li class="dropdown"> <Link class="dropdownanchor" to={"/contact"}>Contact</Link> </li>
<li class="dropdown"><i class="fa-solid fa-magnifying-glass dropdownanchor"></i> </li>
<li class="dropdown"><i class="fa-solid fa-bars dropdownanchor"></i> </li>
</ul>
</nav>
</div>
</div>
</header>
    </>
  )
}

export default Navbar