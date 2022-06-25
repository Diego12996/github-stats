import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

function UnauthenticatedApp() {
  return (
    <Routes>
      <Route index path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  ); 
};

export default UnauthenticatedApp;