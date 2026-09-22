import { memo } from 'react';


import styles from "./calender.module.css";
const Calender = () => {
  return (
     <section className={styles.unlockSection}>
      <div className={styles.unlockContents}>
        <div className={styles.unlockLeft}>
          <img src="/src/assets/unlock-section-img.png" alt="" />
        </div>
        <div className={styles.unlockRight}>
          <div className={styles.unlockRightContent1}>
            <h3>How to design your site footer like we did</h3>
            <p>
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
          </div>
          <div className={styles.unlockRightContent2}>
            <button className={styles.unlockRightContentButton}>Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Calender);