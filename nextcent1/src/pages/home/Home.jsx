
import {  Achievement, Calender, Client, Community, Communityupdate, Customers, Hero, Unlock } from "../../component/index.jsx";

const Home = () => {
  return (
    <div>
      
{/*          
               <Navbar /> */}
      <Hero />
      <Client />
      <Community />
      <Unlock />
      <Achievement />
      <Calender />
      <Customers />

      <Communityupdate />
      {/* <Footer /> */}


    
    </div>
    
  );
};

export default (Home);