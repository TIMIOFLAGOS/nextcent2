// import { useState } from "react";
// import { NavLink, Outlet } from "react-router";
// import styles from "../dashboard/Dashboard.module.css";
// import { navLinks } from "../data.js"; 
// import { FiMenu } from "react-icons/fi";
// import { FaXmark } from "react-icons/fa6";

// const DashboardLayout = () => {
//    const [isOpen, setIsOpen] = useState(false);
//   return (
//     <>
// <div className={styles.all}>
//         <div className={styles.dashboardContainer}>
//        <div className={styles.side1}>
//  <div className={styles.dashboardHeader}>
//           <h1>Tesla</h1>
//         </div>

//         <div className={styles.dashboardNav}>
//           {navLinks.map((link) => {
          
   
//               <NavLink key={link.id} to={link.path}>
//               {link.icon}, {link.title}
//               </NavLink>
     
//           })}
//         </div>

//         <div className={styles.dashboardinfo}>
     
//           <NavLink to="/login">Logout</NavLink>
//         </div>


//        </div>
       
// <div className={styles.side2}>
//         <Outlet />
// </div>

//   {isOpen ? (
//           <FaXmark
//             onClick={() => setIsOpen((prev) => !prev)}
//             className={styles.menu}
//           />
//         ) : (
//           <FiMenu
//             onClick={() => setIsOpen((prev) => !prev)}
//             className={styles.menu}
//           />
//         )}


//       </div>
//       {isOpen && (


//        <div className={styles.side1}>
//  <div className={styles.dashboardHeader}>
//           <h1>Tesla</h1>
//         </div>

//         <div className={styles.dashboardNav}>
//           {navLinks.map((link) => {
          
        
//               <NavLink key={link.id} to={link.path}>
//               {link.icon}, {link.title}
//               </NavLink>
         
//           })}
//         </div>

//         <div className={styles.dashboardinfo}>
     
//           <NavLink to="/login">Logout</NavLink>
//         </div>


//        </div>


//       )}



// </div>
//     </>
//   );
// };

// export default DashboardLayout;
import { useState } from "react";
import { NavLink, Outlet } from "react-router";
import styles from "../dashboard/Dashboard.module.css";
import { navLinks } from "../data.js"; 
import { FiMenu } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import profile from "./Dashboard.jsx"

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

 
  const mainLinks = navLinks.filter(link => link.id <= 4);
  const supportLinks = navLinks.filter(link => link.id > 4);

  return (
    <div className={styles.dashboardContainer}>
      
   
      <header className={styles.mobileHeader}>
        <h1 className={styles.logoTitle}>TESLA</h1>
        <button onClick={toggleMenu} className={styles.menuButton}>
          {isOpen ? <FaXmark /> : <FiMenu />}
        </button>
      </header>

  
      {isOpen && <div className={styles.backdrop} onClick={closeMenu} />}


      <aside className={`${styles.side1} ${isOpen ? styles.side1Open : ""}`}>
        <div className={styles.dashboardHeader}>
          <h1 className={styles.logoTitle}>TESLA</h1>
        </div>

        <nav className={styles.dashboardNav}>
          {/* Main Section */}
          <div className={styles.navGroup}>
            {mainLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink 
                  key={link.id} 
                  to={link.path} 
                  className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                  onClick={closeMenu}
                >
                  <Icon className={styles.icon} />
                  <span>{link.title}</span>
                </NavLink>
              );
            })}
          </div>

    
          <div className={styles.navGroup}>
            <p className={styles.groupLabel}>Support</p>
            {supportLinks.map((link) => {
              const Icon = link.icon;
              return (
                <NavLink 
                  key={link.id} 
                  to={link.path} 
                  className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeLink}` : styles.navLink}
                  onClick={closeMenu}
                >
                  <Icon className={styles.icon} />
                  <span>{link.title}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

    
        <div className={styles.dashboardinfo}>
          <div className={styles.userProfile}>
            <img 
              src="../../assets/carlender-section-img.png" 
              alt="Avatar" 
              className={styles.avatar} 
            />
            <div className={styles.userInfo}>
              <span className={styles.userName}>{profile.name}</span>
              <span className={styles.userEmail}>{profile.role}</span>
            </div>
          </div>
          <NavLink to="/login" className={styles.logoutBtn} onClick={closeMenu}>Logout</NavLink>
        </div>
      </aside>

    

   
        <main className={styles.side2}>
        <Outlet />
      </main>

 


       
     
    </div>




  );
};

export default DashboardLayout;