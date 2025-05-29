// src/components/promotion/Promotion.js
import React from "react";
import styles from "./promotion.module.css";

const Promotion = () => {
  return (
    <section className={styles.promotion}>
      <div className={styles.promotionContent}>
        <h3>Khuyến Mãi Đặc Biệt!</h3>
        <p>Giảm giá 20% cho tất cả các dòng xe! Chỉ áp dụng trong tháng này!</p>
        <button className={styles.promotionButton}>Xem chi tiết</button>
      </div>
      <div className={styles.emailSignup}>
        <h4>Nhập email để được tư vấn</h4>
        <form className={styles.emailForm}>
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className={styles.emailInput}
            required
          />
          <button type="submit" className={styles.emailButton}>Gửi</button>
        </form>
      </div>
    </section>
  );
};

export default Promotion;
