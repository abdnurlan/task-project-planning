import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

function App() {
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const token = userData?.access_token;

  return (
    <Router>
      <Routes>
        {!token ? (
          <>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
