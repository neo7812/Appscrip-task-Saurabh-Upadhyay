import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import styles from "../styles/index.module.css";
import axios from "axios";

export default function Home({ products }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Recommended");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  const sortOptions = [
    "Recommended",
    "Newest First",
    "Popular",
    "Price: High to Low",
    "Price: Low to High",
  ];

  return (
    <div>
      <Head>
        <title>Store - New Arrivals</title>
        <meta
          name="description"
          content="Explore the latest products from mettà muse. Discover unique items and offers."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Discover Our Products",
            description: "Explore the latest products from mettà muse.",
          })}
        </script>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.line12}></div>

        <div className={styles.topBar}>
          <div className={styles.itemsCount}>3425 ITEMS</div>
          <div
            className={styles.hideFilterFrame}
            onClick={() => alert("Filter toggled")}
          >
            <span className={styles.hideFilterArrow}></span>
            <span className={styles.arrowLeft}></span>
            <span className={styles.hideFilterText}>HIDE FILTER</span>
          </div>
          <div className={styles.recommendedFrame} onClick={toggleDropdown}>
            <span className={styles.recommendedText}>{selectedOption}</span>
            <span className={styles.recommendedArrow}></span>
            <span className={styles.recommendedarrowDown}></span>
            {isDropdownOpen && (
              <div className={styles.dropdown}>
                {sortOptions.map((option) => (
                  <div
                    key={option}
                    className={`${styles.dropdownItem} ${
                      selectedOption === option ? styles.selected : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div
            className={styles.sortFrame}
            style={{ visibility: "hidden" }}
          ></div>
          <div className={styles.sortDropdown}></div>
          <span className={styles.sortText}></span>
          <span className={styles.sortLine}></span>
          <span className={styles.newestFirst}></span>
          <span className={styles.priceHighToLow}></span>
          <span className={styles.popular}></span>
          <span className={styles.priceLowToHigh}></span>
        </div>
        <div className={styles.line13}></div>
        <div className={styles.container}>
          <Filter />
          <div className={styles.productGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await axios.get("https://fakestoreapi.com/products?limit=9");
    const products = res.data.map((prod) => ({
      ...prod,
      isNew: Math.random() > 0.7,
      inStock: Math.random() > 0.2,
    }));
    return { props: { products } };
  } catch (error) {
    console.error("Error fetching products:", error);
    return { props: { products: [] } };
  }
}
