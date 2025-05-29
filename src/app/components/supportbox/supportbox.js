// src/components/support/SupportBox.js
import React from "react";
import styles from "./supportbox.module.css";

const SupportBox = () => {
  return (
    <div className={styles.supportBox}>
      <p>Hỗ trợ trực tuyến</p>
      <button className={styles.supportButton}>Chat ngay</button>
    </div>
  );
};

export default SupportBox;
