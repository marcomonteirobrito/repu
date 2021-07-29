import React from "react";

import Loading from "./Loading";

import styles from "../styles/components/Button.module.scss";

export default function Button({ label, isLoading, onClick, isDisable }) {
  return (
    <div
      className={isDisable ? styles.containerDisable : styles.container}
      onClick={onClick}
    >
      {isLoading ? <Loading /> : <strong>{label}</strong>}
    </div>
  );
}
