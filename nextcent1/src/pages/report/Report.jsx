import { memo } from 'react';
import styles from './report.module.css';
const Report = () => {
  return (
    <div className={styles.reportContainer}>
      
<div className={styles.parent}>
    <div className={styles.div1}>
      
<div className={styles.parent1}>
    <div className={styles.div11}>1</div>
    <div className={styles.div21}>2</div>
    <div className={styles.div31}>3</div>
    <div className={styles.div41}>4</div>
    <div className={styles.div51}>5</div>
    <div className={styles.div61}>6</div>
</div>
    
    </div>
    <div className={styles.div2}>2</div>
    <div className={styles.div3}>3</div>
    <div className={styles.div4}>4</div>
    <div className={styles.div5}>5</div>
    <div className={styles.div6}>6</div>
</div>
    
    </div>
  );
};

export default memo(Report);