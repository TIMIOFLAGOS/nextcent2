

import style from "./cucard.module.css";


const Cucard = ({ imgSrc, title, desc }) => {
  return (
    <div className={style.cardContainer}>
      <img src={imgSrc} alt="post avatar" className={style.cardImage} />

      <div className={style.textFloatingCard}>
        <h3 className={style.title}>{title}</h3>
        <button className={style.readMoreBtn}>
          {desc} <span className={style.arrow}> →</span>
        </button>
      </div>
    </div>
  );
};

export default Cucard;
