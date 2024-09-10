import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";

function Divider() {
    return (
    <div
        className={`${addStyle["divider"]} ${loadAnimation["divider"]}`}
      ></div>
    )
}

export default Divider;