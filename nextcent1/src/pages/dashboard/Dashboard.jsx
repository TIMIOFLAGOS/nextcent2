import { useContext } from "react";
import { Auth } from "../../context/Auth.jsx";
import styles from "../dashboard/dash.module.css"

const Dashboard = () => {
  const profile = useContext(Auth);

  return (
    <div>
    
      <h2> {profile.name}</h2>
      <p>{profile.role}</p>
      
<div className={styles.parent}>
    <div className={styles.div1}>1</div>
    <div className={styles.div2}>2</div>
    <div className={styles.div3}>3</div>
    <div className={styles.div4}>4</div>
    <div className={styles.div5}>5</div>
    <div className={styles.div6}>6</div>
    <div className={styles.div7}>7</div>
    <div className={styles.div8}>8</div>
    <div className={styles.div9}>9</div>
    <div className={styles.div10}>10</div>
</div>
    
    </div>
  );
};

export default Dashboard;
