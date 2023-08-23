import React from "react";
import LoginForm from "../components/func/LoginForm";

function LoginPage() {
  return (
    <div style={{height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <LoginForm onSubmit/>
    </div>
  );
}

export default LoginPage;
