import { useNavigate } from "react-router";

function Dashboard({ user, setUser }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        setUser(null);
        navigate("/login");
    };

    return (
        <div className="dashboard">
            <h1>Welcome, {user.name}!</h1>

            <h3>Email: {user.email}</h3>

            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

export default Dashboard;