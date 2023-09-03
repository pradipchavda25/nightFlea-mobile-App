import React from 'react';
import styles from './ShareModal.module.css';

const ShareModal: React.FC = () => {
  const handleShare = () => {
    alert('Share button clicked'); 
  };

  return (
    <div className={styles.modal}>
      <h2>Share This Product</h2>
      <button onClick={handleShare} className={styles.shareButton}>
        Share
      </button>
    </div>
  );
};

export default ShareModal;

