import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.newsletterSection}>
          <h2>BE THE FIRST TO KNOW</h2>
          <p>Sign up for updates from mettā muse.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your e-mail..." />
            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

        <div className={styles.contactSection}>
          <h2>CONTACT US</h2>
          <div className={styles.contactInfo}>
            <p>+44 221 133 5360</p>
            <p>customercare@mettamuse.com</p>
          </div>

          <div className={styles.currencySection}>
            <h3>CURRENCY</h3>
            <div className={styles.currencyInfo}>
              <div className={styles.currencyFlag}></div>
              <span>• USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.footerDivider}></div>

      <div className={styles.footerBottom}>
        <div className={styles.footerColumn}>
          <h3>mettā muse</h3>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#artisans">Artisans</a>
            </li>
            <li>
              <a href="#boutiques">Boutiques</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#compliance">EU Compliances Docs</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>QUICK LINKS</h3>
          <ul>
            <li>
              <a href="#orders">Orders & Shipping</a>
            </li>
            <li>
              <a href="#seller">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#payment">Payment & Pricing</a>
            </li>
            <li>
              <a href="#returns">Return & Refunds</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className={styles.footerColumn}>
          <h3>FOLLOW US</h3>
          <div className={styles.socialIcons}>
            <a href="#instagram" className={styles.socialIcon}>
              📷
            </a>
            <a href="#linkedin" className={styles.socialIcon}>
              in
            </a>
          </div>

          <div className={styles.paymentMethods}>
            <h4>mettā muse ACCEPTS</h4>
            <div className={styles.paymentIcons}>
              <div className={`${styles.paymentIcon} ${styles.googlePay}`}>
                G Pay
              </div>
              <div className={`${styles.paymentIcon} ${styles.mastercard}`}>
                MC
              </div>
              <div className={`${styles.paymentIcon} ${styles.paypal}`}>
                PayPal
              </div>
              <div className={`${styles.paymentIcon} ${styles.amex}`}>AMEX</div>
              <div className={`${styles.paymentIcon} ${styles.applePay}`}>
                🍎 Pay
              </div>
              <div className={`${styles.paymentIcon} ${styles.shopPay}`}>
                S Pay
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
