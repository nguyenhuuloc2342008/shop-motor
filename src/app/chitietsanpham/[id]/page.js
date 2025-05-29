'use client';

import { useParams } from 'next/navigation';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';
import Image from 'next/image';
import styles from './productDetail.module.css';
import { useState } from 'react';


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

const productCodes = [
  "BMW001", "KAWA1000", "DUCA795", "APRILRSV4",
  "CBR650R", "BENEL502", "KAWA000", "KAWAH2R", "BMWMOTO"
];

const productStock = [
  5, 3, 2, 1,
  10, 8, 6, 1, 4
];

const productConditions = [
  "Mới", "Mới", "Cũ", "Mới",
  "Mới", "Mới", "Cũ", "Mới", "Mới"
];

const productBrands = [
  "BMW", "Kawasaki", "Ducati", "Aprilia",
  "Honda", "Benelli", "Kawasaki", "Kawasaki", "BMW"
];

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id);
  const [liked, setLiked] = useState(false);

  if (isNaN(id) || id < 0 || id >= productNames.length) {
    return <div>Sản phẩm không tồn tại.</div>;
  }

  const handleBuy = () => {
    alert(`Bạn đã chọn mua: ${productNames[id]} với giá ${productPrices[id]}`);
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Header />
      <div className={styles.detailContainer}>
        <div className={styles.imageSection}>
          <Image 
            src={`/images/anh${id + 1}.jpg`} 
            alt={productNames[id]} 
            width={500} 
            height={400} 
          />
        </div>
        <div className={styles.infoSection}>
          <h1>{productNames[id]}</h1>
          <p><strong>Giá:</strong> {productPrices[id]}</p>
          <p>{productDescriptions[id]}</p>
          <div className={styles.buttons}>
            <button className={styles.buyButton} onClick={handleBuy}>🛒 Mua ngay</button>
            <button className={styles.likeButton} onClick={toggleLike}>
              {liked ? '❤️ Đã thích' : '🤍 Yêu thích'}
            </button>
          </div>

          <div className={styles.extraInfo}>
            <p><strong>Mã sản phẩm:</strong> {productCodes[id]}</p>
            <p><strong>Số lượng còn lại:</strong> {productStock[id]}</p>
            <p><strong>Tình trạng:</strong> {productConditions[id]}</p>
            <p><strong>Hãng sản xuất:</strong> {productBrands[id]}</p>
          </div>
        </div>
      </div>
      <div className={styles.relatedSection}>
  <h2 className={styles.relatedTitle}>🛵 Sản phẩm khác</h2>
  <div className={styles.relatedList}>
    {
      productNames
        .map((name, index) => ({ index, name })) // giữ lại index để tạo link đúng
        .filter(product => product.index !== id) // bỏ sản phẩm hiện tại
        .sort(() => 0.5 - Math.random())         // xáo trộn
        .slice(0, 3)                              // lấy 3 sản phẩm
        .map(product => (
          <div key={product.index} className={styles.relatedItem}>
            <Image
              src={`/images/anh${product.index + 1}.jpg`}
              alt={productNames[product.index]}
              width={200}
              height={150}
            />
            <h3>{productNames[product.index]}</h3>
            <p>{productPrices[product.index]}</p>
            <a href={`/product/${product.index}`} className={styles.detailLink}>Xem chi tiết</a>
          </div>
        ))
    }
  </div>
</div>

      <Footer />
    </>
  );
}
