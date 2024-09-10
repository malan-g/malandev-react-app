import { heading, subheading } from "../../data";
import { tokenize } from "../../../../lib/tokenize";
import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";

function Heading() {
  const tokenisedSubheading = tokenize(subheading);
  return (
    <div className={addStyle["hero-group"]}>
      <h1 className={`${addStyle["hero-heading"]} ${loadAnimation["hero-heading"]}`}>
        {heading}
      </h1>
      <h2
        className={`${addStyle["hero-subheading"]} ${loadAnimation["hero-subheading"]}`}
      >
        {tokenisedSubheading.map((word, index) => (
          <span key={index}>
            <span
              className={loadAnimation["hero-token-clip"]}
              style={{ animationDelay: `${index * 0.06 + 0.5}s` }}
            >
              {word}&nbsp;
            </span>
          </span>
        ))}
      </h2>
    </div>
  );
}

export default Heading;
