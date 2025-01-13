import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/loginPage";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router>

          <Routes>
            <Route path="/Hotpl" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            <Route element={<ProtectedRoute />}>

            </Route>

          </Routes>


        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
