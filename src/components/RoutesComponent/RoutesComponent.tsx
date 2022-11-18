import { Routes, Route, useLocation } from "react-router-dom";
import Angular from "../../pages/Angular";
import Contact from "../../pages/Contact";
import ErrorPage404 from "../../pages/ErrorPage404";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Tincoffee from "../../pages/Tincoffee";

import { AnimatePresence } from "framer-motion";

function RoutesComponent() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/tincoffee" element={<Tincoffee />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/angular" element={<Angular />} />

        {/* SHOULD STAY THE LAST ROUTE */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </AnimatePresence>
  );
}

export default RoutesComponent;
