import React from "react";
import styles from "../styles/ProductCard.module.css";
import { GoShare } from "react-icons/go";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  brand: string;
  title: string;
  price: number; 
  discount: number; 
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  brand,
  title,
  price,
  discount,
}) => {
  const discountedPrice = price - discount;
  const discountPercentage = ((discount / price) * 100).toFixed(2);

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
      <Image width={100} height={100} src={image} alt={title} className={styles.productImage} />
        <div className={styles.shareIcon}>
          <GoShare />
        </div>
      </div>

      <div className={styles.productInfo}>
        <h2 className={styles.productBrand}>{brand}</h2>
        <h3 className={styles.productTitle}>{title}</h3>
        <p className={styles.productPrice}>
          <span>Rs.{discountedPrice.toFixed(2)}</span>&nbsp;
          <span className={styles.strikethrough}>Rs.{price.toFixed(2)}</span>&nbsp;
          <span className={styles.discountPrice}>{discountPercentage}%</span>&nbsp;
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
