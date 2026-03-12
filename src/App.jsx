import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CheckOut from "./pages/CheckOut";
import Auth from "./pages/Auth";
import NavBar from "./components/NavBar";
import { AuthContext } from "./context/AuthContext.jsx";

function App() {
  return (
    <div className="app">
      <AuthContext.Provider value={null}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/*" element={<p>404 Not Found</p>} />
      </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
