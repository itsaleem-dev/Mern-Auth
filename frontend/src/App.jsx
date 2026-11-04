import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { useState } from "react";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
    const [user, setUser] = useState(null);

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Navigate to={user ? "/dashboard" : "/login"} />}
                />

                <Route
                    path="/signup"
                    element={<Signup />}
                />

                <Route
                    path="/login"
                    element={
                        user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />
                    }
                />

                <Route
                    path="/dashboard"
                    element={
                        user ? (
                            <Dashboard user={user} setUser={setUser} />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;