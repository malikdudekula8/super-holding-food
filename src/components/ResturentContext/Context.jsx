import Home from "../Header/Home";
import Menu from "../Header/Menu";
import Contact from "../Header/Contact";
import About from "../Header/About";
import Blog from "../Header/Blog";
import { createContext, useContext } from "react";

const HomeContext = createContext();

export const navItems = [
  { name: "Home", path: "/", element: <Home /> },
  { name: "Menu", path: "/menu", element: <Menu /> },
  { name: "Contact us", path: "/contact", element: <Contact /> },
  { name: "About", path: "/about", element: <About /> },
  { name: "Blog", path: "/blog", element: <Blog /> },
];

export const HomeProvider = ({ children }) => {
  const homeContent = {
    subTitle: "The Power of Healthy Food",
    titleDescription:
      "A restaurant is an establishment that prepares and serves food and drinks to customers, typically for consumption on the premises, but also offering take-out or delivery.",
  };
  return (
    <HomeContext.Provider value={homeContent}>{children}</HomeContext.Provider>
  );
};

export const useHook = () => {
  const context = useContext(HomeContext);
  if (!context) {
    throw new Error("useHome must be used within HomeProvider");
  }
  return context;
};

export const AboutTitle =
  "Bringing people together through delicious food, warm hospitality, and a passion for great service.";
export const AboutDescription =
  "Platea nisi aliquet ipsum faucibus tincidunt mattis pellentesque pulvinar. Aliquam urna lorem venenatis amet ipsum. Duis nec volutpat sagittis enim non vitae aenean fringilla lacinia. Egestas tempor sit facilisi neque mattisquis.";
export const AboutHappyCustomer = "Happy Customer";
export const GustSatisfactions = "Gust Satisfactions";
export const GustExperience = "Gust Experience";
const columnDefs = [
  { headerName: "User ID", field: "userId" },
  { headerName: "ID", field: "id" },
  { headerName: "Title", field: "title", flex: 1 },
  { headerName: "Body", field: "body", flex: 2 },
];
