import React from "react";

import styles from "../styles/pages/Home.module.scss";

import SEO from "../components/SEO";
import Login from "../components/Login";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO
        title="Repu, organize as contas da sua republica"
        shouldExcludeTitleSuffix
      />

      <main>
        <strong>Faça seu login</strong>
        <Login />
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
