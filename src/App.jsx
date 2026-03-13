import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop";
import { navItems } from "./components/ResturentContext/Context";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        {navItems.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
