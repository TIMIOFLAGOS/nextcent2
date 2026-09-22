import styles from "./achievement.module.css";

const Achievement = () => {
  return (
    <div className={styles.C}>
      <section className={styles.acheivmentSection}>
        <div className={styles.acheivmentSectionContent}>
          
          {/* Left Text Block */}
          <div className={styles.acheivmentSectionLeft}>
            <h3>
              Helping a local <br />
              <span>business reinvent itself</span>
            </h3>
            <p className={styles.leftDescription}>
              We reached here with our hard work and dedication
            </p>
          </div>

          {/* Right Metrics Grid */}
          <div className={styles.acheivmentSectionRight}>
            
            {/* Column 1 */}
            <div className={styles.acheivmentSectionRight1}>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div className={styles.iconWrapper}>
                  <img src="/src/assets/acheiv-img-1.png" alt="Members icon" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>

              <div className={styles.acheivmentSectionRight1Contents1}>
                <div className={styles.iconWrapper}>
                  <img src="/src/assets/acheiv-img-2.png" alt="Clubs icon" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>46,328</h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>

            {/* Column 2 */}
            <div className={styles.acheivmentSectionRight2}>
              <div className={styles.acheivmentSectionRight1Contents1}>
                <div className={styles.iconWrapper}>
                  <img src="/src/assets/acheiv-img-3.png" alt="Bookings icon" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>828,867</h4>
                  <p>Event Bookings</p>
                </div>
              </div>

              <div className={styles.acheivmentSectionRight1Contents1}>
                <div className={styles.iconWrapper}>
                  <img src="/src/assets/acheiv-img-4.png" alt="Payments icon" />
                </div>
                <div className={styles.acheivmentSectionRight1Contents}>
                  <h4>1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievement;