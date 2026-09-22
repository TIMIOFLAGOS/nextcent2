
import style from "./communityupdate.module.css";
import Cucard from "../cucard/cucard.jsx";
import { communityData } from "../../component/data.js";


const Communityupdate = () => {
  return (
    <div className={style.communityupdateSection}>
      <div>
        <h2 className={style.communityupdateTitle}>
          Caring is the new markerting
        </h2>
        <p className={style.communityupdateDesc}>
          {" "}
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.{" "}
        </p>
      </div>

      <div className={style.card}>
        {communityData.map((item) => (
          <Cucard
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

export default (Communityupdate);
