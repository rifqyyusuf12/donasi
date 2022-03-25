import "./App.css";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import "react-toastify/dist/react-toastify.cjs.development";

import Home from "./Pages/Home";
import Header from "./Components/Header";
import Signup from "./Pages/signUp";
import Login from "./Pages/login";
import LandingPage from "./Pages/landingPage";
import NotFound from "./Pages/notFound";
import ProtectRoutes from "./Routes/protectRoute";

function App() {
  return (
    <>
      <Routes>
        {/* protect route */}
        <Route
          path="/admin"
          element={
            <ProtectRoutes>
              <Home />
            </ProtectRoutes>
          }
        />

        {/* public route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
