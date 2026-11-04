import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

function Login({ setUser }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/login`,
                formData
            );

            setUser(res.data.user);
            navigate("/dashboard");

        } catch (error) {
            setMessage(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleLogin}>
                <h2>Login Account</h2>

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

                <p>{message}</p>

                <p>
                    Don't have an account? <Link to="/signup">Signup</Link>
                </p>
            </form>
        </div>
    );
}

export default Login;