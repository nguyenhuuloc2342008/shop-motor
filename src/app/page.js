// src/app/page.js
import Header from "./components/header/header";
import ProductList from "./components/productlist/productlist";
import Promotion from "./components/promotion/promotion";
import Address from "./components/address/address";
import Footer from "./components/footer/footer";
import SupportBox from "./components/supportbox/supportbox";
import styles from "./page.module.css";
import Link from 'next/link';


export default function Home() {
  const productNames = [
    "BMW", "KAWASAKI Z1000", "DUCATI MONSTER 795", "APRILLIA RSV4", 
    "CBR 650R", "BENELLI TRK502", "KAWASAKI", "KAWASAKI NINJA H2R", "BMW MOTORRAD"
  ];

  const productPrices = [
    "500.000.000 VND", "450.000.000 VND", "400.000.000 VND", "650.000.000 VND",
    "300.000.000 VND", "220.000.000 VND", "480.000.000 VND", "1.000.000.000 VND", "750.000.000 VND"
  ];

  const productDescriptions = [
    "BMW - Một chiếc xe thể thao đẳng cấp với hiệu suất mạnh mẽ và thiết kế tinh tế.",
    "KAWASAKI Z1000 - Xe phân khối lớn với sức mạnh vượt trội và khả năng vận hành xuất sắc.",
    "DUCATI MONSTER 795 - Sự kết hợp hoàn hảo giữa hiệu suất và phong cách mạnh mẽ.",
    "APRILLIA RSV4 - Xe đua đường phố với công nghệ tiên tiến và thiết kế độc đáo.",
    "CBR 650R - Một chiếc xe thể thao dễ điều khiển với khả năng vận hành tuyệt vời.",
    "BENELLI TRK502 - Xe đa dụng, thích hợp cho cả những chuyến đi xa và địa hình khó khăn.",
    "KAWASAKI - Một thương hiệu xe nổi tiếng với sự mạnh mẽ và độ bền cao.",
    "KAWASAKI NINJA H2R - Xe siêu mô tô mạnh mẽ với công nghệ tiên tiến và khả năng vận hành xuất sắc.",
    "BMW MOTORRAD - Xe phân khối lớn của BMW, thiết kế sang trọng và mạnh mẽ."
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.mainContent}>
        <section className={styles.content}>
          <h1>Xe Phân Khối Lớn Cực Chất</h1>
          <p>Nhìn là mê, chạy là ghiền</p>
        </section>
        <ProductList
          productNames={productNames}
          productPrices={productPrices}
          productDescriptions={productDescriptions}
        />
      </main>
      <Promotion />
      <Address />
      <Footer />
      {<SupportBox /> }
    </div>
  );
}
