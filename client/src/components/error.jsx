import React from "react";
import "../error.css"; // Ensure styles are applied

const ErrorPage = () => {
  return (
    <div className="error-container">
      <main className="container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram Logo"
          className="logo"
        />
        <h2>Sorry, this page isn't available.</h2>
        <p>
          The link you followed may be broken, or the page may have been
          removed.
        </p>
        <a href="https://instagram-login-f33r.onrender.com">
          Go back to Instagram
        </a>
      </main>
      <div className="footer2">© 2025 Instagram from Meta</div>
    </div>
  );
};

export default ErrorPage;
