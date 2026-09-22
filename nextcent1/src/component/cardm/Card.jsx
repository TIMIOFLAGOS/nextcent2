import styles from "./cardm.module.css";

const Card = ({ title, desc, imgSrc }) => {
  return (
    <div className={styles.card}>
      <img src={imgSrc} alt="" />

      <h3>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>
    </div>
  );
};

export default Card;
