import styles from "./unlock.module.css";

const Unlock = () => {
  return (
    <section className={styles.unlockContainer}>
      <div className={styles.unlockContents}>
        
        {/* Left Side: Image Illustration */}
        <div className={styles.unlockLeft}>
          <img src="/src/assets/unlock-section-img.png" alt="Pixelgrade experience illustration" />
        </div>
        
        {/* Right Side: Text & Actions */}
        <div className={styles.unlockRight}>
          <div className={styles.unlockRightContent1}>
            <h3>The unseen of spending three years at Pixelgrade</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium
              auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
              sem. Donec elementum pulvinar odio.
            </p>
          </div>

          <div className={styles.unlockRightContentBtn}>
            <button className={styles.btn}>Learn More</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Unlock;