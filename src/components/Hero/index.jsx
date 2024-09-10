import addStyle from "./index.module.scss";
import Heading from "./components/Heading";
import Article from "./components/Article";
import Divider from "./components/Divider";
import Portrait from "./components/Portrait";

function Hero() {
  return (
    <div className={addStyle["hero"]}>
      <Heading />
      <Divider />
      <div className="flex flex-col md:flex-row gap-4">
          <Portrait />
          <Article />
      </div>
    </div>
  );
}

export default Hero;
