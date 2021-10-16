import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "努力",
    src: "../../static/img/HomepageFeatures/1.png",
  },
  {
    title: "自律",
    src: "../../static/img/HomepageFeatures/2.png",
  },
  {
    title: "自强",
    src: "../../static/img/HomepageFeatures/3.png",
  },
];

function Feature({ src, title }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div>
      <div className={styles.div1}>
        <h1>Min - wys</h1>
      </div>
      <div className={styles.div2}></div>
      <div className={styles.div3}>
        <h1>欢 迎 来 到 龙 猫 世 界</h1>
      </div>
      <div className={styles.div4}></div>
      <div className={styles.div5}></div>
      {/* <img
        className={styles.outer1}
        src={
          "https://raw.githubusercontent.com/Min-wys/my-website/master/static/img/docusaurus.png"
        }
        width="100%"
        height="80%"
      /> */}
      {/* <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
