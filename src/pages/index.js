import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

// 定义文档列表数据
const docsList = [
  {
    title: 'ES',
    link: '/my-website/docs/ES/函数的扩展'
  },
  {
    title: 'npm&node',
    link: '/my-website/docs/npm&node/NPM账号管理'
  },
  {
    title: 'Git',
    link: '/my-website/docs/GIT/基础'
  },
  {
    title: 'html&css',
    link: '/my-website/docs/CSS&HTML/CSS'
  },
  {
    title: 'React',
    link: '/my-website/docs/react/api汇总'
  },
  {
    title: 'TypeScript',
    link: '/my-website/docs/TS/ts基础'
  },
  {
    title: '数据结构与算法',
    link: '/my-website/docs/算法/基本概念'
  },
  {
    title: '设计模式',
    link: '/my-website/docs/设计模式/简介'
  },

];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={styles.pageBackground}>
        <div className={styles.docsListContainer}>
          <ul className={styles.docsList}>
            {docsList.map((doc, index) => (
              <li key={index} className={styles.docsItem}>
                <Link
                  to={doc.link}
                  className={styles.docsLink}
                >
                  {doc.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
