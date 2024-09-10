import { useState } from "react"
import { menu, socials } from "../../data"
import addStyle from "./index.module.scss"
import loadAnimation from "./animations.module.scss"

function Navigation() {
    const [isActive, setIsActive] = useState("")
    const [activeItem, setActiveItem] = useState("")

    const handlePointerEnter = (key) => {
        setIsActive(key)
        setActiveItem(key)
    }

    const handlePointerExit = () =>  {
        setIsActive("")
        setActiveItem("")
    }

    const handleClick = (key) =>  {
        setIsActive((prevActive) => (prevActive === key ? "" : key))
        setActiveItem((prevActive) => (prevActive === key ? "" : key))
    }

    return (
        <nav className={addStyle["navigation"]}>
            <menu className={addStyle["menu"]}> 
            {
                menu.map((menuItem) => (
                    <li key={menuItem.label} className="relative">
                        {
                            menuItem.children ? (
                                <>
                                    <button onMouseEnter={() => handlePointerEnter(menuItem.label)}
                                            onClick={() => handleClick(menuItem.label)}
                                            className={addStyle["button"]}
                                    >
                                        <span>{menuItem.label}</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                                        </svg> 
                                    </button>
                                    <ul className={`${addStyle["submenu"]}`}>
                                        {
                                            menuItem.children.map((item) => (
                                                <li key={item.label} className={`${addStyle["submenu-item"]} ${menuItem.label === activeItem ? loadAnimation["active"] : loadAnimation["inactive"]}`}
                                                    >
                                                    {item.label}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </>
                            ) : (<a href="" onMouseEnter={handlePointerExit} className="">{menuItem.label}</a>)
                        }
                    </li>
                ))
            }
            {
                socials.map((social) => (
                    <li key={social.label} onMouseEnter={handlePointerExit}>
                        <a href={social.link} className="">
                            {social.label}
                        </a>
                    </li>
                ))
            }
            </menu>
            <div className={`${addStyle["navigation-menu-bg"]} ${isActive ? loadAnimation["open-menu"] : loadAnimation["close-menu"]}`}>
                <div></div>
            </div>
            <div onMouseEnter={handlePointerExit} 
                 className={`${isActive && addStyle["navigation-menu-backdrop"]} ${isActive ? loadAnimation["place-backdrop"] : loadAnimation["remove-backdrop"]}`}
            >
            </div>
        </nav>
    )
}

export default Navigation

