import { useRef, useEffect } from "react";
import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";

function Dropdown({ list, isActive, toggleDropdown, label }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    // set dropdown height to button height + list height
    if (isActive) {
        dropdownRef.current.style.maxHeight = `${
        dropdownRef.current.children[1].children[0].scrollHeight +
        dropdownRef.current.children[0].scrollHeight
      }px`;
    } else {
    // set dropdown height to button height 
      dropdownRef.current.style.maxHeight = `${dropdownRef.current.children[0].scrollHeight}px`;
    }
  }, [isActive]);

  return (
    <div
      ref={dropdownRef}
      className={`${addStyle["dropdown"]} ${loadAnimation["dropdown"]}`}
    >
      <button onClick={toggleDropdown} className={addStyle["dropdown-button"]}>
        <span>{label}</span>
        <div>
          <div
            className={`
                ${addStyle["plus-minus-line"]}
                ${
                  isActive
                    ? loadAnimation["plus-minus-open"]
                    : loadAnimation["plus-minus-close"]
                }    
            `}
          ></div>
          <div
            className={`
                ${addStyle["plus-minus-line"]}
                ${
                  isActive
                    ? loadAnimation["plus-minus-open"]
                    : loadAnimation["plus-minus-close"]
                }    
            `}
          ></div>
        </div>
      </button>
      <div className="relative">
        <ul
          className={`${addStyle["dropdown-list"]} 
        ${
          isActive
            ? loadAnimation["dropdown-expand"]
            : loadAnimation["dropdown-collapse"]
        }`}
        >
          {list.map((item) => (
            <li key={item.label}>
              <a href={item.link} className="text-[20px]">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
