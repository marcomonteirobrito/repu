import React from "react";
import Link from "next/link";

import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

import styles from "../styles/components/Footer.module.scss";

export default function Footer() {
  return (
    <div className={styles.container}>
      <span>Developed by @Marco Monteiro</span>

      <div className={styles.links}>
        <div className={styles.content}>
          <IoLogoInstagram />
          <Link href="https://www.instagram.com/marcomonteiro_/">
            <a target="_blank">Instagram</a>
          </Link>
        </div>

        <div className={styles.content}>
          <IoLogoGithub />
          <Link href="https://github.com/marcomonteirobrito">
            <a target="_blank">Github</a>
          </Link>
        </div>

        <div className={styles.content}>
          <IoLogoLinkedin />
          <Link href="https://www.linkedin.com/in/marco-antonio-monteiro-de-brito-541ba0144/">
            <a target="_blank">Linkedin</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
