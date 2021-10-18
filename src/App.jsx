import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Works from "./components/works/Works";
import Socials from "./components/socials/Socials";
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false) //for the hamburger state(active or not)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <Works/>
        <Socials/>
      </div>
    </div>
  );
}

export default App;
