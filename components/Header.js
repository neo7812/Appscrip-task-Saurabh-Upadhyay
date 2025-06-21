import React from 'react';
import styles from '../styles/Header.module.css';
import LogoIcon from '../components/LogoIcon';
import Element4Icon from '../components/Element4Icon';
import SearchNormalIcon from '../components/SearchNormalIcon';
import HeartIcon from '../components/HeartIcon';
import ShoppingBagIcon from '../components/ShoppingBagIcon';
import ProfileIcon from '../components/ProfileIcon';
import EngIcon from '../components/EngIcon';
import ArrowLeftIcon from '../components/ArrowLeftIcon';

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <div className={styles.greyStrip}>
          <div className={styles.frame34}>
            <Element4Icon />
            <span className={styles.loremIpsum}>Lorem ipsum dolor</span>
          </div>
          <div className={styles.frame33}>
            <Element4Icon />
            <span className={styles.loremIpsum}>Lorem ipsum dolor</span>
          </div>
          <div className={styles.frame32}>
            <Element4Icon />
            <span className={styles.loremIpsum}>Lorem ipsum dolor</span>
          </div>
        </div>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <LogoIcon />
          </div>
          <div className={styles.logoTextContainer}>
            <span className={styles.logoText}>LOGO</span>
          </div>
          <nav className={styles.tabs}>
            <a href="#" className={styles.tab}>SHOP</a>
            <a href="#" className={styles.tab}>SKILLS</a>
            <a href="#" className={styles.tab}>STORIES</a>
            <a href="#" className={styles.tab}>ABOUT</a>
            <a href="#" className={styles.tab}>CONTACT US</a>
          </nav>
          <div className={styles.icons}>
            <SearchNormalIcon className={styles.searchNormal} />
            <HeartIcon className={styles.heart} />
            <ShoppingBagIcon className={styles.shoppingBag} />
            <ProfileIcon className={styles.profile} />
            <div className={styles.language}>
              <EngIcon className={styles.eng} />
              <ArrowLeftIcon className={styles.arrowLeft} />
            </div>
          </div>
        </div>
      </header>
      <section className={styles.productSection}>
        <h1 className={styles.discoverText}>DISCOVER OUR PRODUCTS</h1>
        <p className={styles.productDescription}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </section>
    </div>
  );
};

export default Header;