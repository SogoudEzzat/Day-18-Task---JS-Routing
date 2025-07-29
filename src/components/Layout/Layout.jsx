import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/gallery">Gallery</Link> | 
        <Link to="/hero">Hero</Link>
      </nav>

      <hr />

     <Navbar/>
      <Outlet />
    </>
  );
}
