import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { IconButton, AppBar, Toolbar, Box } from "@mui/material";
import { navItems } from "../ResturentContext/Context";

function Header() {
  const location = useLocation();

  return (
    <div className="header-container flex items-center gap-12 px-8 pt-[26px] pb-6 bg-white shadow-md">
      <Link to="/">
        <div className="header-image flex-shrink-0">
          <img src="/Capa_1-2.png" alt="Header" className="h-20 w-auto" />
        </div>
      </Link>
      <div className="header-nav flex gap-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`nav-link text-decoration-none ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="header-icons flex">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <ShoppingBagIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;
