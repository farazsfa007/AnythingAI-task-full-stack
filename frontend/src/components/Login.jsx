import { useState } from "react";
import { request } from "./services/api";
import "./Login.css";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = async () => {
        const res = await request("/auth/login", "POST", { email, password });
        if (res.token) {
        localStorage.setItem("token", res.token);
        onLogin();
        } else {
        alert(res.message);
        }
    };
    return (
        <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <button className="login-btn" onClick={submit}>
            Login
        </button>
        </div>
        );
}

export default Login