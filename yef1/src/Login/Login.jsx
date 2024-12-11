import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Login.css";
import { doSignInWithEmailAndPassword } from "../firebase/auth";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false, // Add rememberMe state
  });
  const navigate = useNavigate(); // Create navigate instance
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in
      await doSignInWithEmailAndPassword(formData.email, formData.password);
      console.log("Form submitted:", formData);
      // Redirect to the home page after successful login
      navigate("/home");
    } catch (error) {
      // Handle error (e.g., wrong credentials)
      console.error("Error during login:", error.message);
      setError("Invalid email or password");
    }
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="login-container">
      <div className="welcome-container">
        <h1>Welcome to Login</h1>
        <p>Don't have an account?</p>
        {/* Replace the button with an anchor tag for Sign up */}
        <a href="/signup" className="sign-in-btn">
          Sign up
        </a>
      </div>
      <div className="login-form-container">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}{" "}
        {/* Display error message */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              Remember Me
            </label>
            <div className="forgot-password-container">
              <a href="/forgot-password" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
