import classes from "./OurLatestArticle.module.css";
import React from "react";

interface IArticleItem {
  title: string;
  subtitle: string;
  img: string;
}

interface IOurLatestArticle {
  arr: IArticleItem[];
}

const OurLatestArticle: React.FC<IOurLatestArticle> = ({ arr }) => {
  return (
    <div className={classes.article_block}>
      <h1 className={classes.title_text}>Check out our latest article</h1>
      <div className={classes.divider}></div>
      <div className={classes.row}>
        {arr.map((item, index) => (
          <div key={index} className={classes.cardMaterial}>
            <img className={classes.promo} src={arr[index].img} />
            <h1 className={classes.title_article}>{arr[index].title}</h1>
            <h2 className={classes.subtitle_article}>{arr[index].subtitle}</h2>
            <button className={classes.moreButton}>Read more ➜</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLatestArticle;
