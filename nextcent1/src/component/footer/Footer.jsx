import style from "./footer.module.css";
import fimg from "../../assets/logom.png";
import { FaInstagram } from "react-icons/fa";
import { FaBasketballBall } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
// j
const Fotter = () => {
  return (
    <div className={style.footerSection}>
      <div className={style.footerUps}>
        <div className={style.footerup}>
        <h1>Pellentesque suscipit fringilla libero eu.</h1>
        <button>
          <a href="">Get a Demo →</a>
        </button>
      </div>
      </div>

      <div className={style.footerdown}>
        {/* <div className={style.footerright}> */}

        <div className={style.footerRight}>
          <div className={style.footerLogo}>
            <img src={fimg} alt="" />
            <p className={style.footerLogoText}>Nextcent</p>
          </div>
          <div>
            <p p className={style.footerCopyright}>
              copyright © 2023 Nextcent ltd. <br />
              All rights reserved{" "}
            </p>
          </div>

          <div className={style.footerSocial}>
            <a className={style.footerSocialIcon} href="">
              <FaInstagram />
            </a>
            <a className={style.footerSocialIcon} href="">
              <FaBasketballBall />
            </a>
            <a className={style.footerSocialIcon} href="">
              <FaTwitter />
            </a>
            <a className={style.footerSocialIcon} href="">
              <FaYoutube />
            </a>
          </div>

          <div></div>
        </div>

        <div className={style.footerLeft}>
          <div className={style.footerLeft1}>
            <h3>Company</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>Contact us</p>
            <p>Pricing</p>
            <p>Testimonial</p>
          </div>
          <div className={style.footerLeft2}>
            <h3>Support</h3>
            <p>Help Center</p>
            <p>Terms of Service</p>
            <p>Legal</p>
            <p>Privacy Policy</p>
            <p>Status</p>
          </div>
          <div className={style.footerLeft3}>
            <h3>Stay up to date</h3>
            <input
              className={style.footerEmailInput}
              type="Email"
              placeholder="Enter your email"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default (Fotter);
