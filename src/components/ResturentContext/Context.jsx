import Home from "../Header/Home";
import Menu from "../Header/Menu";
import Contact from "../Header/Contact";
import About from "../Header/About";
import Blog from "../Header/Blog";

export const navItems = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Menu", path: "/menu", element: <Menu /> },
  { name: "Contact us", path: "/contact", element: <Contact /> },
  { name: "About", path: "/about", element: <About /> },
  { name: "Blog", path: "/blog", element: <Blog /> },
];
