import { useState } from "react";
import { request } from "./services/api";
import "./Register.css";

function Register({ onRegister }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("user");

    const submit = async () => {
        if (!email || !password) {
        alert("Please fill all fields");
        return;
        }

        const res = await request("/auth/register", "POST", {
        email,
        password,
        role
        });

        if (res.message) {
        alert(res.message);
        onRegister && onRegister();
        }
    };

    return (
        <div className="auth-card">
        <h2 className="auth-title">Create Account</h2>

        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            </select>
        </div>

        <button className="auth-btn" onClick={submit}>
            Create Account
        </button>
    </div>
    );
}

export default Register