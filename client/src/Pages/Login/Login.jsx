import React, { useContext, useState } from "react";
import { AuthLoginContext } from "./path_to/AuthContextProvider"; // Update with your actual path
import "./Login.css";

const Login = () => {
  const { loading, error, dispatch } = useContext(AuthLoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch({ type: "Login_Start" });
    // Simulate login process
    setTimeout(() => {
      if (username === "testuser" && password === "password") {
        dispatch({ type: "Login_Success", payload: { username } });
      } else {
        dispatch({ type: "Login_Fail", payload: "Invalid credentials" });
      }
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="login-input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input"
      />
      <button onClick={handleLogin} disabled={loading} className="login-button">
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p className="error-text">{error}</p>}
    </div>
  );
};

export default Login;