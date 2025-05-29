// src/components/header/Header.js
import React from "react";
import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">Trang chủ</a></li>
          <li><a href="#about">Giới thiệu</a></li>
          <li><a href="#services">Dịch vụ</a></li>
          <li><a href="#contact">Liên hệ</a></li>
        </ul>
      </nav>
      <div className={styles.logo}>
        <Image
          src="/images/logo.jpg"
          alt="Logo"
          width={100}
          height={50}
        />
      </div>
      <div className={styles.loginContainer}>
        <a href="/login" className={styles.loginButton}>Đăng nhập</a>
        <a href="/register" className={styles.registerButton}>Đăng ký</a>
      </div>
    </header>
  );
};

export default Header;
