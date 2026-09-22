import styles from '../customers/customers.module.css';


const Customers = () => {
  return (
    <div>
      <section className={styles.customersSection}>
      <div className={styles.customersSectionContents}>
        <div className={styles.customersSectionLeft}>
          <img className={styles.imgleft} src="/src/assets/tesla.png" alt="" />
        </div>
        <div className={styles.customersSectionRight}>
          <div className={styles.customersSectionRightContent1}>
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
            <div className={styles.customersSectionRightName}>
              <h4>Tim Smith</h4>
              <p>British Dragon Boat Racing Association</p>
            </div>
          </div>
          <div className={styles.customersSectionClientsLogos}>
            <div className={styles.alllogos}>
              <img className={styles.img33} src="/src/assets/client-1.png" alt="" />
            <img src="/src/assets/client 2.png" alt="" />
            <img src="./src/assets/client-3.png" alt="" />
            <img src="/src/assets/client-4.png" alt="" />
            <img src="/src/assets/client-5.png" alt="" />
            <img src="/src/assets/client-6.png" alt="" />
            </div>
            <div className={styles.customersSectionLink}>
              <a href="">Meet All Customers</a>
              <i className={`${styles.faSolid} ${styles.faArrowRight}`}></i>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default (Customers);