import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";

function Hamburger({ isOpen, toggleMenu }) {
  return (
    <button className={addStyle["hamburger"]} onClick={toggleMenu}>
      <div
        className={`${addStyle["line"]} 
        ${
          isOpen
            ? loadAnimation["hamburger-close"]
            : loadAnimation["hamburger-open"]
        }`}
      ></div>
      <div
        className={`${addStyle["line"]} 
        ${
          isOpen
            ? loadAnimation["hamburger-close"]
            : loadAnimation["hamburger-open"]
        }`}
      ></div>
    </button>
  );
}

export default Hamburger;
