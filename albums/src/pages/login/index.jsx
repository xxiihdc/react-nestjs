import React from "react";
import LoginForm from "../../components/LoginForm/index";
import "./Login.css";

const LoginPage = () => {
  return (

    <div className="flex items-start justify-center min-h-screen bg-cover"  style={{ backgroundImage: "url('/bg-01.jpg')"}}>
      <div className="w-full max-w-lg mt-10 p-8 bg-blend-hue rounded-lg shadow-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
