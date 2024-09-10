import { useState } from "react";
import addStyle from "./index.module.scss"
import loadAnimation from "./animations.module.scss"
import Hamburger from "./components/Hamburger";
import MobileNavigation from "./components/MobileNavigation";
import Navigation from "./components/Navigation";

function Header() {
  const [isOpen, setIsOpen] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${addStyle["header"]} ${loadAnimation["delay"]}`}>
      <a href="/" className={addStyle["logo"]}>
        Malan<span style={{ fontStyle: "italic" }}>dev</span>
      </a>
      <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
      <MobileNavigation isOpen={isOpen} />
      <Navigation/>
    </header>
  );
}

export default Header;
