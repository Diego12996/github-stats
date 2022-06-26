import { Route, Routes } from "react-router-dom";
import Spinner from "./components/Spinner/spinner";
import { useAuth } from "./context/auth-context";
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";

function UnauthenticatedApp() {
  const { isLoading } = useAuth();

  return (
    isLoading 
    ? 
    <Spinner />
    :
    <Routes>
      <Route index path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  ); 
};

export default UnauthenticatedApp;