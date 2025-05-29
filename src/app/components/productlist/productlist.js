// src/components/products/ProductList.js
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./productlist.module.css"; // sửa lại đường dẫn nếu cần

const ProductList = ({ productNames, productPrices, productDescriptions }) => {
  return (
    <section className={styles.products}>
      <h2>Các loại xe của chúng tôi</h2>
      <div className={styles.productGrid}>
        {productNames.map((name, index) => (
          <div key={index} className={styles.productItem}>
            <Image
              src={`/images/anh${index + 1}.jpg`}
              alt={`Sản phẩm ${index + 1}`}
              width={300}
              height={300}
            />
            <p className={styles.productName}>{name}</p>
            <p className={styles.productPrice}>{productPrices[index]}</p>
            <p className={styles.productDescription}>{productDescriptions[index]}</p>

            {/* Nút Mua Ngay dẫn đến trang chi tiết */}
            <Link href={`/chitietsanpham/${index}`}>
            <button className={styles.buyButton}>Xem chi tiết</button>
            </Link>

          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;
