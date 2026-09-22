import styles from "./community.module.css";
import { cardData } from "../data.js";
import Card from "../cardm/Card.jsx";
const Community = () => {
  return (
    <div className={styles.community}>
      <section className={styles.communitySection}>
        <div className={styles.communityContents}>
          <div className={styles.communityTitle}>
            <h2>Manage your entire community in a single system</h2>
            <p>Who is Nextcent suitable for?</p>
          </div>
        </div>
      </section>

      <div className={styles.communityCardsAll}>
        {cardData.map((item) => (
          <Card
            key={item.id}
            imgSrc={item.imgSrc}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
