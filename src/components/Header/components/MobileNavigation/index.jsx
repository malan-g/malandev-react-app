import { Fragment, useState } from "react";
import Dropdown from "../Dropdown";
import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";
import { menu, socials } from "../../data";

function MobileNavigation({ isOpen }) {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isActive, setIsActive] = useState("");

  if (isOpen && !isRendered) {
    setIsRendered(true);
  }

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsRendered(false);
    }
  };

  const toggleDropdown = (key) => {
    setIsActive((prevActive) => (prevActive === key ? "" : key));
  };

  if (!isRendered) return null;

  return (
    <nav
      className={`
        ${addStyle["mobile-nav"]}
        ${isOpen ? loadAnimation["show-menu"] : loadAnimation["hide-menu"]}
      `}
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      {menu.map((item) => (
        <Fragment key={item.label}>
          {
            item.children
            ? (
                <Dropdown
                    key={item.label}
                    isActive={item.label === isActive}
                    toggleDropdown={() => toggleDropdown(item.label)}
                    label={item.label}
                    list={item.children}
                />
            )
            : (
              <a href="" className={addStyle["no-dropdown"]}>{item.label}</a>
            )
          }
          <div className={addStyle["divider"]}></div>
        </Fragment>
      ))}
      <menu className={addStyle["socials"]}>
        {
          socials.map((social, index) => (
            <a href={social.link} key={index} target="_blank">
              {social.label}
            </a>
          ))
        }
      </menu>
    </nav>
  );
}

export default MobileNavigation;
