import { Navbar, Footer } from "../../component/index.jsx";
import { useLocation } from "react-router";

const Layout = ({ children }) => {
  const location = useLocation();
  
  const dashboardRoutes = [
    "/dashboard",
    "/tesla/dashboard", // Added your specific Tesla dashboard route
    "/reports",
    "/library",
    "/people",     // Added missing leading slash
    "/activites",  // Added missing leading slash
    "/getstarted", // Added missing leading slash
    "/settings",   // Added missing leading slash
  ];

  // This checks for an exact match in your array
  const hidePath = dashboardRoutes.includes(location.pathname);

  return (
    <div>
      {!hidePath && <Navbar />}
      <main>{children}</main>
      {!hidePath && <Footer />}
    </div>
  );
};

export default Layout;




