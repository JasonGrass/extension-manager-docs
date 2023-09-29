import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import Logo from "../../static/img/logo.png";
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx(styles.heroBanner)}>
      <div className="container">
        <img src={Logo} alt="logo" style={{ marginBottom: 36 }} width={200} />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            查看帮助文档
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="扩展管理"
      description="浏览器扩展管理，插件管理，Chrome Extension Manager"
    >
      <HomepageHeader />
    </Layout>
  );
}
