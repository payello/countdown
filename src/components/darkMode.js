import React from "react";
import styles from "../components/styles/toggle.module.css";

const Darkmode = () => {
  return (
    <div>
      <label class={styles.switch}>
        <input type="checkbox" />
        <span class={`${styles.slider} ${styles.round} `}></span>
      </label>
    </div>
  );
};

export default Darkmode;
