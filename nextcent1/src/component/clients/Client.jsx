import styles from "./client.module.css";

const Client = () => {
  return (
     <section className={styles.clientSection}>
      <div className={styles.clientSectionContents}>
        <div className={styles.clientSectionTitle}>
          <h2>Our Clients</h2>
          <p>We have been working with some Fortune 500+ clients</p>
        </div>
        <div className={styles.clientsLogos}>
         
          <img src="/src/assets/client-1.png" alt="Client 1" />
          <img src="/src/assets/client 2.png" alt="Client 2" />
          <img src="/src/assets/client-3.png" alt="Client 3" />
          <img src="/src/assets/client-4.png" alt="Client 4" />
          <img src="/src/assets/client-5.png" alt="Client 5" />
          <img src="/src/assets/client-6.png" alt="Client 6" />
          <img src="/src/assets/client-7.png" alt="Client 7" />
        </div>
      </div>
    </section>
  );
};

export default (Client);
