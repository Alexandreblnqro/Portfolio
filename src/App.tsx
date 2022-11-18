//#region Imports
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import RoutesComponent from "./components/RoutesComponent/RoutesComponent";
//#endregion

function App() {
  return (
    <Router>
      <Navbar />
      <RoutesComponent />
    </Router>
  );
}

export default App;
