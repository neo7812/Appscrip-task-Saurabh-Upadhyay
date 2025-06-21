import React from "react";
import Image from "next/image";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        style={{ objectFit: "cover" }}
      />
      {product.isNew && <span className={styles.new}>NEW PRODUCT</span>}
      {product.inStock === false && (
        <div className={styles.outOfStockGroup}>
          <span className={styles.outOfStockText}>out of stock</span>
        </div>
      )}
      <span
        className={`${styles.heart} ${
          product.isFavorite ? styles.heartActive : ""
        }`}
      >
        {product.isFavorite ? "♥" : "♡"}
      </span>
      <div
        className={styles.frame}
        style={{
          left: product.frameLeft ? `${product.frameLeft}px` : "0",
          top: product.frameTop ? `${product.frameTop}px` : "415px",
        }}
      >
        <h3 className={styles.productName}>{product.title}</h3>
        <p className={styles.explore} style={{ display: "none" }}>
          Explore this skill
        </p>
        <p className={styles.pricing}>
          Sign in or Create an account to see pricing
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
