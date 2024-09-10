import addStyle from "./index.module.scss";
import loadAnimation from "./animations.module.scss";
import { article } from "../../data"

const Article = () => {
  return (
    <article key={article.heading} className={`${addStyle["article"]} ${loadAnimation["article"]}`}>
        <h3>{article.heading}</h3>
        <p>{article.paragraph}</p>
    </article>
  );
};

export default Article;
