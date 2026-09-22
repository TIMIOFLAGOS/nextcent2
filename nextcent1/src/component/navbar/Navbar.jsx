import styles from "./navbar.module.css";
import { useState } from "react";
import {  NavLink } from "react-router";
import logom from "../../assets/logom.png";
import { navBardata } from "../data.js";
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <section className={styles.container}>
        <div className={`${styles.headerContents} container`}>
          <div className={styles.logom}>
            <img src={logom} alt="Client 7" />
            <h2 className={styles.companyname}>Nexcent</h2>
          </div>

          <nav>
            {navBardata.map((item) => (
              <NavLink
                to={item.pathUrl}
                key={item.id}
                className={({ isActive }) =>
                  isActive ? `${styles.nav} ${styles.activeLink}` : styles.nav
                }
              >
                {item.pathName}
              </NavLink>
            ))}
          </nav>

          <div className={styles.loginReg}>
            <NavLink to="/login" className={styles.login}>
              Login
            </NavLink>
            <div className={styles.reg}>
              <NavLink to="/register" className={styles.regBtn}>
                Register Now
              </NavLink>
            </div>
          </div>
        </div>
        

        {isOpen ? (
          <FaXmark
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.menu}
          />
        ) : (
          <FiMenu
            onClick={() => setIsOpen((prev) => !prev)}
            className={styles.menu}
          />
        )}
      </section>

      {isOpen && (
        <ul className={styles.navListsMobile}>
          {navBardata.map((item) => (
            <li className={styles.navListMobile} key={item.id}>
              <NavLink to={item.pathUrl} onClick={() => setIsOpen(false)}>
                {item.pathName}
              </NavLink>
            </li>
          ))}
      
          <li className={styles.navListMobile}>
            <NavLink to="/login" onClick={() => setIsOpen(false)}>Login</NavLink>
          </li>
          <li className={styles.navListMobile}>
            <NavLink to="/register" onClick={() => setIsOpen(false)}>Sign Up</NavLink>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;