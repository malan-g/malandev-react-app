// import { portraitImage, portraitAlt } from "../data"
import addStyle from "./index.module.scss"
import loadAnimation from "./animations.module.scss"

const Portrait = () => {
    return (
        <div className={`${addStyle["portrait-placeholder"]} ${loadAnimation["portrait-placeholder"]} `}></div>
    )
}
export default Portrait