import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";

function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
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

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth/signup`,
                formData
            );

            setMessage(res.data.message);

            navigate("/login");

        } catch (error) {
            setMessage(error.response?.data?.message || "Signup failed");
        }
    };

    return (
        <div className="auth-container">
            <form onSubmit={handleSignup}>
                <h2>Create Account</h2>

                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

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

                <button type="submit">Signup</button>

                <p>{message}</p>

                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
            </form>
        </div>
    );
}

export default Signup;