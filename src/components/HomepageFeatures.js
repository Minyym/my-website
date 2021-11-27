import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "少吃饭多运动",
    description: (
      <>
        所有的成功，都来自于不倦的努力和奔跑，所有的幸福，都来自平凡的奋斗和坚持，你无法找到捷径
      </>
    ),
  },
  {
    title: "少熬夜多睡觉",
    description: (
      <>
        世界上没有白费的努力，更没有碰巧的成功，不要急于求成，只要一点一点去做，成功不过是水到渠成
      </>
    ),
  },
  {
    title: "少刷视频多读书",
    description: (
      <>
        生活并不完美，与其让生活带来更多的的沮丧与抱怨，不如坚持着一份信念，相信通过努力可以让生活变得更美好
      </>
    ),
  },
  {
    title: "少吃饭多运动",
    description: (
      <>
        所有的成功，都来自于不倦的努力和奔跑，所有的幸福，都来自平凡的奋斗和坚持，你无法找到捷径
      </>
    ),
  },
  {
    title: "少熬夜多睡觉",
    description: (
      <>
        世界上没有白费的努力，更没有碰巧的成功，不要急于求成，只要一点一点去做，成功不过是水到渠成
      </>
    ),
  },
  {
    title: "少刷视频多读书",
    description: (
      <>
        生活并不完美，与其让生活带来更多的的沮丧与抱怨，不如坚持着一份信念，相信通过努力可以让生活变得更美好
      </>
    ),
  },
  {
    title: "少吃饭多运动",
    description: (
      <>
        所有的成功，都来自于不倦的努力和奔跑，所有的幸福，都来自平凡的奋斗和坚持，你无法找到捷径
      </>
    ),
  },
  {
    title: "少熬夜多睡觉",
    description: (
      <>
        世界上没有白费的努力，更没有碰巧的成功，不要急于求成，只要一点一点去做，成功不过是水到渠成
      </>
    ),
  },
  {
    title: "少刷视频多读书",
    description: (
      <>
        生活并不完美，与其让生活带来更多的的沮丧与抱怨，不如坚持着一份信念，相信通过努力可以让生活变得更美好
      </>
    ),
  },
  {
    title: "少吃饭多运动",
    description: (
      <>
        所有的成功，都来自于不倦的努力和奔跑，所有的幸福，都来自平凡的奋斗和坚持，你无法找到捷径
      </>
    ),
  },
  {
    title: "少熬夜多睡觉",
    description: (
      <>
        世界上没有白费的努力，更没有碰巧的成功，不要急于求成，只要一点一点去做，成功不过是水到渠成
      </>
    ),
  },
  {
    title: "少刷视频多读书",
    description: (
      <>
        生活并不完美，与其让生活带来更多的的沮丧与抱怨，不如坚持着一份信念，相信通过努力可以让生活变得更美好
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center"></div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
