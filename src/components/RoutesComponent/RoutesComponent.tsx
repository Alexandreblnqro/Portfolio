import { Routes, Route } from "react-router-dom";
import Angular from "../../pages/Angular";
import Contact from "../../pages/Contact";
import ErrorPage404 from "../../pages/ErrorPage404";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Tincoffee from "../../pages/Tincoffee";

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tincoffee" element={<Tincoffee />} />
      <Route path="/projets" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/angular" element={<Angular />} />

      {/* SHOULD STAY THE LAST ROUTE */}
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
  );
}

export default RoutesComponent;
