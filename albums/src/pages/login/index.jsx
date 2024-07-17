import React from "react";
import LoginForm from "../../components/LoginForm/index";
import "./Login.css";

const LoginPage = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-auto"
      style={{ backgroundImage: "url('/bg-01.jpg')" }}
    >
      <div
        className="mt-10 p-8 bg-blend-hue rounded-lg shadow-md"
        style={{
          width: "500px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "2px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
