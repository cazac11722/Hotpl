import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/auth/SignUpPage";
import LoginPage from "./pages/auth/loginPage";
import { PopupProvider } from "./contexts/hooks/usePopup";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./contexts/ProtectedRoute";
import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import GameView from "./pages/game/GameView";
import GameBracket from "./pages/game/GameBracket";
import BracketEdit from "./pages/bracket/BracketEdit";

function App() {
  return (
    <AuthProvider>
      <PopupProvider>
        <Router>

          <Routes>
            <Route path="/Hotpl" element={<HomePage />} />
            <Route path="/Hotpl/game" element={<GamePage />} />
            <Route path="/Hotpl/game/:eventId/view" element={<GameView />} />
            <Route path="/Hotpl/game/:eventId/bracket" element={<GameBracket />} />
            <Route path="/Hotpl/bracket/edit" element={<BracketEdit />} />

            <Route path="/Hotpl/login" element={<LoginPage />} />
            <Route path="/Hotpl/sign-up" element={<SignUpPage />} />

            <Route element={<ProtectedRoute />}>
            </Route>

          </Routes>


        </Router>
      </PopupProvider>
    </AuthProvider>
  );
}

export default App;
