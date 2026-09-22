import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth, userProfile } from "./context/Auth.jsx";
import { BrowserRouter } from "react-router";
import Layout from "./component/layout/Layout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <Auth value={userProfile}>
          <App />
        </Auth>
      </Layout>
    </BrowserRouter>
  </StrictMode>,
);
