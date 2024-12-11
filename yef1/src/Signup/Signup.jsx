import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import "./Signup.css";
import { doCreateUserWithEmailAndPassword } from "../firebase/auth";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null); // State for error messages
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    try {
      // Attempt to create a new user
      await doCreateUserWithEmailAndPassword(email, password);
      // On success, redirect to the login page
      navigate("/login");
    } catch (error) {
      // Handle errors during signup (e.g., email already in use)
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="signup-container">
      <div className="welcome-container">
        <h1>Welcome to Signup</h1>
        <p>Already have an account?</p>
        <a href="/login" className="sign-in-btn">
          Sign In
        </a>
      </div>
      <div className="signup-form-container">
        <h2>Create an Account</h2>
        {/* Display error message if there is one */}
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              ref={emailRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={passwordRef}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              ref={confirmPasswordRef}
              required
            />
          </div>
          <button type="submit" className="sign-up-btn">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
