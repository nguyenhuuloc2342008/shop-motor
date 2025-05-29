// src/components/address/Address.js
import React from "react";
import styles from "./address.module.css";

const Address = () => {
  return (
    <section className={styles.address}>
      <h3>Địa Chỉ Cửa Hàng</h3>
      <p>123 Đường ABC, Phường XYZ, Quận 1, TP.HCM, Việt Nam</p>
      <p>SĐT:000.999.1234</p>

      <div className={styles.addressInfo}>
        <div className={styles.addressLeft}>
          <h3>Vận Chuyển</h3>
          <p>Vận chuyển toàn quốc</p>
          <p>Nhanh chóng</p>
        </div>
        <div className={styles.addressRight}>
          <h3>Thời gian mở cửa</h3>
          <p>Tất cả mọi ngày trong tuần</p>
          <p>Từ 8 giờ sáng đến 10 giờ tối</p>
        </div>
        <div className={styles.addressRight}>
          <h3>Khuyến mãi</h3>
          <p>Từ thứ 2 đến thứ 7 giảm 20%</p>
          <p>Riêng ngày chủ nhật cũng có thêm những khuyến mãi đặc biệt khác</p>
        </div>
      </div>
    </section>
  );
};

export default Address;
