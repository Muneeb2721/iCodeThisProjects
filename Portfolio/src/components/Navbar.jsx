import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";


function Navbar() {

  const menuIcon = false; 

  return (
    <>
    <nav className="bg-gray-900 text-white p-4
      flex items-baseline">
      <h1 className="text-xl font-bold">Muneeb Nadeem</h1>

      <div id="menu-bar" className="menu
        md:flex md:flex-row md:gap-4 md:absolute md:right-0 md:mr-8 md:font-semibold"
        >
        <button className="absolute right-8 top-5 md:hidden" onClick={()=>{
          const menu = document.getElementById('menu-bar');
          const overlay = document.getElementById('overlay');
          menu.style.visibility = 'hidden';
          overlay.className = '';
        }}>
          <CloseIcon />
        </button>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">About</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Services</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Featured</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Activity</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Experience</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Projects</a>
        <a href="" className="border-b-2 border-b-transparent hover:border-b-2 hover:border-b-white w-fit">Skills</a>
      </div>

      <div className="btn-menu md:hidden absolute right-0 mr-8">
        <button className="" onClick={()=>{
          const menu = document.getElementById('menu-bar');
          const overlay = document.getElementById('overlay');
          menu.style.visibility = 'visible';
          overlay.className = "fixed inset-0 bg-[#7e68682e] bg-opacity-50"

        }}>
          <MenuIcon />
        </button> 
      </div>
    </nav>

    <div id="overlay" className="" 
    onClick={(event)=>{
      const menu = document.getElementById('menu-bar');
      const overlay = document.getElementById('overlay');
      menu.style.visibility = 'hidden';
      overlay.className =""
      }}>

      </div>
    </>
  )
}

export default Navbar