import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import './App.css'

export default function App() {
  const [page, setPage] = useState("login");

  const isLoggedIn = !!localStorage.getItem("token");

  if (isLoggedIn) {
    return (
      <div>
        <button className="logout-btn"
          style={{ margin: 10 }}
          onClick={() => {
            localStorage.removeItem("token");
            setPage("login");
          }}
        >
          Logout
        </button>

        <Dashboard />
      </div>
    );
  }

  return (
    <div>
      {page === "login" && <Login onLogin={() => setPage("dashboard")} />}
      {page === "register" && <Register onRegister={() => setPage("login")} />}

      <div style={{ textAlign: "center", marginTop: 10 }}>
        {page === "login" ? (
          <span>
            No account?{" "}
            <button onClick={() => setPage("register")}>Register</button>
          </span>
        ) : (
          <span>
            Already have an account?{" "}
            <button onClick={() => setPage("login")}>Login</button>
          </span>
        )}
      </div>
    </div>
  );
}
