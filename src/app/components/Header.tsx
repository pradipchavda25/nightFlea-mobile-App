import React from 'react';
import styles from '../styles/Header.module.css';
import Link from 'next/link';
import { HiOutlineBookmark, HiOutlineShoppingBag } from 'react-icons/hi';

const Header: React.FC = () => {
  return (
    <header className={styles.mobileHeader}>
      <div className={styles.companyName}>Furrl</div>
      <div className={styles.headerIcons}>
        <div className={styles.icon}>
          <Link href="https://web.furrl.in/wishlist">
              <HiOutlineBookmark size={24} strokeWidth={1} />
          </Link>
        </div>
        <div className={styles.icon}>
          <Link href="https://web.furrl.in/cart">
              <HiOutlineShoppingBag size={24} strokeWidth={1} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
