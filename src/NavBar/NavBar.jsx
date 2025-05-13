import React from "react";
import {  NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <ul className="list-none flex  gap-20 justify-center">
        <li>
          <NavLink to="/" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
         <li>
          <NavLink to="/detail">Detail</NavLink>
        </li>
      </ul>
    </div>
  );
}
