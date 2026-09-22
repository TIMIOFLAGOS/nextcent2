
import { servicesData } from '../../component/data.js'; 
import styles from './service.module.css';

export default function ServicesPage() {
  return (
    <div className={styles.servicesContainer}>
      

      <div className={styles.servicesHeader}>
        <h2>Our Services</h2>
        <p>We provide enterprise-grade digital solutions to help you build, scale, and secure your platforms.</p>
      </div>

      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <div key={service.id} className={styles.serviceCard}>

            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <a href={`/services/${service.id}`} className={styles.serviceLink}>
              Learn more <span>&rarr;</span>
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}