import "./App.css";
import {
  Home,
  Services,
  Contact,
  Feature,
  Testimonial,
  Product,
  Register,
  Login,
  Forgotpassword,
  Getstarted,
  Dashboard,
  Dashboardlayout, 
  People,
  Activities,
  Report,
  Settings,
  Library,
} from "./pages/index.jsx";
import { Routes, Route } from "react-router";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/product" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        
     
        <Route path="dashboard" element={<Dashboardlayout />}> 
          <Route index element={<Dashboard />} />
          <Route path="getstarted" element={<Getstarted />} /> 
          <Route path="library" element={<Library />} />
          <Route path="Report" element={<Report />} />
          <Route path="people" element={<People />} />
          <Route path="activities" element={<Activities />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;